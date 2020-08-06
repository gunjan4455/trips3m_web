require("source-map-support").install();
exports.ids = ["city-block~listing~package-detail~testimonials"];
exports.modules = {

/***/ "./app-v2/modules/shared/agentProfile/AgentRating.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/shared/agentProfile/AgentRating.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GRatingUl = _glamorous.default.ul({
  minWidth: '80px',
  '& li': {
    width: '10px',
    height: '10px',
    margin: '0 3px'
  }
});

function getStars(Component, starNum, keyType) {
  let i = 0;
  const stars = [];

  while (i < starNum) {
    stars.push(_react.default.createElement("li", {
      className: "rating-span relative iblock",
      key: keyType + i
    }, _react.default.createElement(Component, null)));
    i += 1;
  }

  return stars;
}

const AgentRating = ({
  agentRating,
  id
}) => {
  const stars = [];
  const ratingBarRange = 5;
  const truncatedRating = Math.trunc(agentRating);
  const fractionalRating = parseFloat((agentRating - truncatedRating).toFixed(1));
  let fullStarCount = 0;
  let halfStarCount = 0;

  if (fractionalRating === 0.0) {
    fullStarCount = agentRating;
  } else if (fractionalRating <= 0.5) {
    fullStarCount = truncatedRating;
    halfStarCount = 1;
  } else {
    fullStarCount = truncatedRating + 1;
  }

  const emptyStarCount = ratingBarRange - (fullStarCount + halfStarCount);
  stars.push(getStars(_Icon.StarIcon, fullStarCount, `${id}_full_star`));
  stars.push(getStars(_Icon.HalfStar, halfStarCount, `${id}_half_star`));
  stars.push(getStars(_Icon.StarIconEmpty, emptyStarCount, `${id}_empty_star`));
  return _react.default.createElement(GRatingUl, {
    className: "rating-stars iblock m0 at_ratingstars"
  }, stars);
};

AgentRating.propTypes = {
  agentRating: _propTypes.default.number,
  id: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
AgentRating.defaultProps = {
  agentRating: 4,
  id: 'unique_identifier'
};
var _default = AgentRating;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/travelerReview/TravelerReview.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/travelerReview/TravelerReview.js ***!
  \*********************************************************/
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

var _TravelerReviewNewCard = _interopRequireDefault(__webpack_require__(/*! ./TravelerReviewNewCard */ "./app-v2/modules/travelerReview/TravelerReviewNewCard.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

let TravelerReview = class TravelerReview extends _react.Component {
  constructor(props) {
    super(props);

    this.loadMore = () => {
      const {
        counter
      } = this.state;

      if (counter < 15) {
        this.setState(prevState => {
          return {
            counter: prevState.counter + 5
          };
        });
      } else {
        const {
          pagination: {
            page
          },
          packageId,
          baseUrl
        } = this.props;
        const pageNo = parseInt(page);
        const queryParams = {
          page: pageNo === 1 ? 4 : pageNo + 1,
          per_page: 5,
          base_url: baseUrl
        };
        this.props.loadMore({
          id: packageId,
          queryParams
        });
      }
    };

    this.state = {
      testimonials: this.props.testimonials,
      counter: 5
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      location,
      packageId
    } = this.props;
    const {
      testimonials
    } = this.state;

    if (testimonials.length !== nextProps.testimonials.length && location.pathname === nextProps.location.pathname && packageId === nextProps.packageId) {
      this.setState({
        testimonials: [...testimonials, ...nextProps.testimonials]
      });
    } else {
      this.setState({
        testimonials: nextProps.testimonials
      });
    }
  }

  render() {
    const {
      pagination,
      destination
    } = this.props;
    const {
      testimonials,
      counter
    } = this.state;
    const rendertestimonials = testimonials.map((testimonial, i) => {
      const checkLoadMoreTestimonial = i >= counter ? true : false;
      return _react.default.createElement(_TravelerReviewNewCard.default, {
        key: i,
        testimonial: testimonial,
        pagination: pagination,
        hideTestimonial: counter < 15 && pagination && pagination.total_count >= 15 ? checkLoadMoreTestimonial : false
      });
    });

    if (!testimonials.length) {
      return null;
    }

    const testimonialsLink = destination ? `/testimonials/${destination}` : '/testimonials';
    return _react.default.createElement("div", {
      className: "slider-overflow-buttons sbcw"
    }, _react.default.createElement("div", {
      className: "traveler-review"
    }, _react.default.createElement("div", {
      className: "pt15 pl15 pr15"
    }, _react.default.createElement("h2", {
      className: "f20 pfc3 fwb pb8"
    }, pagination && pagination.total_count ? pagination.total_count : null, " Authentic Traveler Reviews"), _react.default.createElement("p", {
      className: "f14p pfc4 pb8"
    }, "Read on to find out why our customers love us!")), rendertestimonials, _react.default.createElement("div", {
      className: "readmore-btn flex justifyCenter pt15 pb15"
    }, pagination && pagination.total_count && pagination.total_count !== testimonials.length ? _react.default.createElement("button", {
      className: "f14 sfc1 fw7 flex alignCenter at_readmorebtn",
      onClick: this.loadMore
    }, "Load More", _react.default.createElement(GDownArrowSpan, {
      className: "flex ml8 relative alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.BlueDownArrow, null))) : _react.default.createElement(_reactRouter.Link, {
      target: '_blank',
      to: testimonialsLink
    }, _react.default.createElement("button", {
      className: "f14 sfc1 fw7 flex alignCenter at_readmorebtn"
    }, "View All Reviews")))));
  }

};
TravelerReview.propTypes = {
  testimonials: _propTypes.default.array,
  pagination: _propTypes.default.object,
  packageId: _propTypes.default.number,
  loadMore: _propTypes.default.func,
  location: _propTypes.default.object,
  destination: _propTypes.default.string,
  baseUrl: _propTypes.default.string
};
TravelerReview.defaultProps = {
  testimonials: [],
  uniqueKey: 'traveler-review',
  isSeasonalCategory: false,
  showViewAll: true,
  data: {
    title: 'Traveler Reviews',
    heading: 'Read on to find out why our customers love us!'
  },
  packageId: 0,
  loadMore: () => {},
  location: {},
  destination: '',
  baseUrl: ''
};
var _default = TravelerReview;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/travelerReview/TravelerReviewNewCard.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/travelerReview/TravelerReviewNewCard.js ***!
  \****************************************************************/
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

var _AgentRating = _interopRequireDefault(__webpack_require__(/*! ../shared/agentProfile/AgentRating */ "./app-v2/modules/shared/agentProfile/AgentRating.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

const TravelerReviewNewCard = ({
  testimonial,
  hideTestimonial
}) => {
  const reviewBody = testimonial.body || testimonial.review_body;
  return _react.default.createElement("div", {
    className: `bb pb15  pt15 pl15 pr15 ${hideTestimonial ? 'hide' : 'show'}`
  }, _react.default.createElement(_AgentRating.default, {
    agentRating: testimonial.rating,
    id: testimonial.id
  }), _react.default.createElement("h3", {
    className: "f16 pfc3 fwb pb15  pt8"
  }, testimonial.title), reviewBody ? _react.default.createElement("p", {
    className: "f14p pfc3 pb8"
  }, _react.default.createElement(_ShowMore.default, {
    wrapText: reviewBody.substring(0, 150),
    moreText: reviewBody.substring(150),
    showMoreText: "Read More",
    showLessText: "Read Less"
  })) : null, _react.default.createElement("div", {
    className: "pt8"
  }, _react.default.createElement("div", {
    className: "flex alignCenter pb8"
  }, _react.default.createElement("p", {
    className: "f14 fwb pfc3"
  }, testimonial.author.author_name || testimonial.author.authorName, _react.default.createElement("span", {
    className: "f12 pfc4 fw4 pl8"
  }, "  ", testimonial.author.user_location || testimonial.author.userLocation))), testimonial.quote && _react.default.createElement("p", {
    className: "f12 fitalic pfc3"
  }, `Travelled ${(0, _utils.getTravelerReviewCities)(testimonial.quote.cities)} ${(0, _utils.getTravelerReviewDate)(testimonial.quote.start_date)}
          ${(0, _utils.getTravelerReviewTravCount)(testimonial.quote.adult, testimonial.quote.child)} ${(0, _utils.getTravelerReviewDuration)(testimonial.quote.days)}`)));
};

TravelerReviewNewCard.propTypes = {
  testimonial: _propTypes.default.object.isRequired,
  hideTestimonial: _propTypes.default.bool
};
var _default = TravelerReviewNewCard;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvYWdlbnRQcm9maWxlL0FnZW50UmF0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3L1RyYXZlbGVyUmV2aWV3LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3L1RyYXZlbGVyUmV2aWV3TmV3Q2FyZC5qcyJdLCJuYW1lcyI6WyJHUmF0aW5nVWwiLCJnbGFtb3JvdXMiLCJ1bCIsIm1pbldpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJnZXRTdGFycyIsIkNvbXBvbmVudCIsInN0YXJOdW0iLCJrZXlUeXBlIiwiaSIsInN0YXJzIiwicHVzaCIsIkFnZW50UmF0aW5nIiwiYWdlbnRSYXRpbmciLCJpZCIsInJhdGluZ0JhclJhbmdlIiwidHJ1bmNhdGVkUmF0aW5nIiwiTWF0aCIsInRydW5jIiwiZnJhY3Rpb25hbFJhdGluZyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZnVsbFN0YXJDb3VudCIsImhhbGZTdGFyQ291bnQiLCJlbXB0eVN0YXJDb3VudCIsIlN0YXJJY29uIiwiSGFsZlN0YXIiLCJTdGFySWNvbkVtcHR5IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiR0Rvd25BcnJvd1NwYW4iLCJzcGFuIiwidG9wIiwiVHJhdmVsZXJSZXZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BzIiwibG9hZE1vcmUiLCJjb3VudGVyIiwic3RhdGUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInBhZ2luYXRpb24iLCJwYWdlIiwicGFja2FnZUlkIiwiYmFzZVVybCIsInBhZ2VObyIsInBhcnNlSW50IiwicXVlcnlQYXJhbXMiLCJwZXJfcGFnZSIsImJhc2VfdXJsIiwidGVzdGltb25pYWxzIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJsb2NhdGlvbiIsImxlbmd0aCIsInBhdGhuYW1lIiwicmVuZGVyIiwiZGVzdGluYXRpb24iLCJyZW5kZXJ0ZXN0aW1vbmlhbHMiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImNoZWNrTG9hZE1vcmVUZXN0aW1vbmlhbCIsInRvdGFsX2NvdW50IiwidGVzdGltb25pYWxzTGluayIsImFycmF5Iiwib2JqZWN0IiwiZnVuYyIsInVuaXF1ZUtleSIsImlzU2Vhc29uYWxDYXRlZ29yeSIsInNob3dWaWV3QWxsIiwiZGF0YSIsInRpdGxlIiwiaGVhZGluZyIsIlRyYXZlbGVyUmV2aWV3TmV3Q2FyZCIsImhpZGVUZXN0aW1vbmlhbCIsInJldmlld0JvZHkiLCJib2R5IiwicmV2aWV3X2JvZHkiLCJyYXRpbmciLCJzdWJzdHJpbmciLCJhdXRob3IiLCJhdXRob3JfbmFtZSIsImF1dGhvck5hbWUiLCJ1c2VyX2xvY2F0aW9uIiwidXNlckxvY2F0aW9uIiwicXVvdGUiLCJjaXRpZXMiLCJzdGFydF9kYXRlIiwiYWR1bHQiLCJjaGlsZCIsImRheXMiLCJpc1JlcXVpcmVkIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBTUEsTUFBTUEsWUFBWUMsbUJBQVVDLEVBQVYsQ0FBYTtBQUM3QkMsWUFBVSxNQURtQjtBQUU3QixVQUFRO0FBQ05DLFdBQU8sTUFERDtBQUVOQyxZQUFRLE1BRkY7QUFHTkMsWUFBUTtBQUhGO0FBRnFCLENBQWIsQ0FBbEI7O0FBU0EsU0FBU0MsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkJDLE9BQTdCLEVBQXNDQyxPQUF0QyxFQUErQztBQUM3QyxNQUFJQyxJQUFJLENBQVI7QUFDQSxRQUFNQyxRQUFRLEVBQWQ7O0FBQ0EsU0FBT0QsSUFBSUYsT0FBWCxFQUFvQjtBQUNsQkcsVUFBTUMsSUFBTixDQUFXO0FBQUksaUJBQVUsNkJBQWQ7QUFBNEMsV0FBS0gsVUFBVUM7QUFBM0QsT0FBOEQs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R0FBeEIsQ0FEWjtBQUVFLGNBQVVKLFdBQVdJLFNBQVgsQ0FBcUIsR0FBckIsQ0FGWjtBQUdFLGtCQUFhLFdBSGY7QUFJRSxrQkFBYTtBQUpmLElBREYsQ0FERixHQVFTLElBWmIsRUFjRTtBQUFLLGVBQVU7QUFBZixLQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBRyxlQUFVO0FBQWIsS0FDR25CLFlBQVlvQixNQUFaLENBQW1CQyxXQUFuQixJQUFrQ3JCLFlBQVlvQixNQUFaLENBQW1CRSxVQUR4RCxFQUVFO0FBQ0UsZUFBVTtBQURaLFdBQ2tDdEIsWUFBWW9CLE1BQVosQ0FBbUJHLGFBQW5CLElBQW9DdkIsWUFBWW9CLE1BQVosQ0FBbUJJLFlBRHpGLENBRkYsQ0FERixDQURGLEVBU0l4QixZQUFZeUIsS0FBWixJQUFxQjtBQUFHLGVBQVU7QUFBYixLQUNqQixhQUFZLG9DQUF3QnpCLFlBQVl5QixLQUFaLENBQWtCQyxNQUExQyxDQUFrRCxJQUFHLGtDQUFzQjFCLFlBQVl5QixLQUFaLENBQWtCRSxVQUF4QyxDQUFvRDtZQUN2SCx1Q0FBMkIzQixZQUFZeUIsS0FBWixDQUFrQkcsS0FBN0MsRUFBb0Q1QixZQUFZeUIsS0FBWixDQUFrQkksS0FBdEUsQ0FBNkUsSUFBRyxzQ0FBMEI3QixZQUFZeUIsS0FBWixDQUFrQkssSUFBNUMsQ0FBa0QsRUFGL0csQ0FUekIsQ0FkRixDQURGO0FBZ0NELENBbENEOztBQW9DQWpCLHNCQUFzQmpELFNBQXRCLEdBQWtDO0FBQ2hDb0MsZUFBYW5DLG1CQUFVd0MsTUFBVixDQUFpQjBCLFVBREU7QUFFaENqQixtQkFBaUJqRCxtQkFBVW1FO0FBRkssQ0FBbEM7ZUFLZW5CLHFCIiwiZmlsZSI6ImNpdHktYmxvY2t+bGlzdGluZ35wYWNrYWdlLWRldGFpbH50ZXN0aW1vbmlhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHtcblN0YXJJY29uLFxuSGFsZlN0YXIsXG5TdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR1JhdGluZ1VsID0gZ2xhbW9yb3VzLnVsKHtcbiAgbWluV2lkdGg6ICc4MHB4JyxcbiAgJyYgbGknOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICBtYXJnaW46ICcwIDNweCcsXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRTdGFycyhDb21wb25lbnQsIHN0YXJOdW0sIGtleVR5cGUpIHtcbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGFycyA9IFtdO1xuICB3aGlsZSAoaSA8IHN0YXJOdW0pIHtcbiAgICBzdGFycy5wdXNoKDxsaSBjbGFzc05hbWU9XCJyYXRpbmctc3BhbiByZWxhdGl2ZSBpYmxvY2tcIiBrZXk9e2tleVR5cGUgKyBpfT48Q29tcG9uZW50IC8+PC9saT4pO1xuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gc3RhcnM7XG59XG5cbmNvbnN0IEFnZW50UmF0aW5nID0gKHsgYWdlbnRSYXRpbmcsIGlkIH0pID0+IHtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgY29uc3QgcmF0aW5nQmFyUmFuZ2UgPSA1O1xuICBjb25zdCB0cnVuY2F0ZWRSYXRpbmcgPSBNYXRoLnRydW5jKGFnZW50UmF0aW5nKTtcbiAgY29uc3QgZnJhY3Rpb25hbFJhdGluZyA9IHBhcnNlRmxvYXQoKGFnZW50UmF0aW5nIC0gdHJ1bmNhdGVkUmF0aW5nKS50b0ZpeGVkKDEpKTtcbiAgbGV0IGZ1bGxTdGFyQ291bnQgPSAwO1xuICBsZXQgaGFsZlN0YXJDb3VudCA9IDA7XG5cbiAgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPT09IDAuMCkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSBhZ2VudFJhdGluZztcbiAgfSBlbHNlIGlmIChmcmFjdGlvbmFsUmF0aW5nIDw9IDAuNSkge1xuICAgIGZ1bGxTdGFyQ291bnQgPSB0cnVuY2F0ZWRSYXRpbmc7XG4gICAgaGFsZlN0YXJDb3VudCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZyArIDE7XG4gIH1cblxuICBjb25zdCBlbXB0eVN0YXJDb3VudCA9IHJhdGluZ0JhclJhbmdlIC0gKGZ1bGxTdGFyQ291bnQgKyBoYWxmU3RhckNvdW50KTtcblxuICBzdGFycy5wdXNoKGdldFN0YXJzKFN0YXJJY29uLCBmdWxsU3RhckNvdW50LCBgJHtpZH1fZnVsbF9zdGFyYCkpO1xuICBzdGFycy5wdXNoKGdldFN0YXJzKEhhbGZTdGFyLCBoYWxmU3RhckNvdW50LCBgJHtpZH1faGFsZl9zdGFyYCkpO1xuICBzdGFycy5wdXNoKGdldFN0YXJzKFN0YXJJY29uRW1wdHksIGVtcHR5U3RhckNvdW50LCBgJHtpZH1fZW1wdHlfc3RhcmApKTtcblxuICByZXR1cm4gKFxuICAgIDxHUmF0aW5nVWwgY2xhc3NOYW1lPVwicmF0aW5nLXN0YXJzIGlibG9jayBtMCBhdF9yYXRpbmdzdGFyc1wiPlxuICAgICAge3N0YXJzfVxuICAgIDwvR1JhdGluZ1VsPlxuICApO1xufTtcblxuQWdlbnRSYXRpbmcucHJvcFR5cGVzID0ge1xuICBhZ2VudFJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKVxufTtcblxuQWdlbnRSYXRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhZ2VudFJhdGluZzogNCxcbiAgaWQ6ICd1bmlxdWVfaWRlbnRpZmllcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50UmF0aW5nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IFRyYXZlbGVyUmV2aWV3Q2FyZCBmcm9tICcuL1RyYXZlbGVyUmV2aWV3TmV3Q2FyZCc7XG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBUcmF2ZWxlclJldmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3RpbW9uaWFsczogdGhpcy5wcm9wcy50ZXN0aW1vbmlhbHMsXG4gICAgICBjb3VudGVyOiA1XG4gICAgfTtcbiAgfVxuXG4gIGxvYWRNb3JlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY291bnRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZihjb3VudGVyIDwgMTUpXG4gICAge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICByZXR1cm4geyBjb3VudGVyOiBwcmV2U3RhdGUuY291bnRlciArIDUgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IHBhZ2UgfSwgcGFja2FnZUlkLCBiYXNlVXJsIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgcGFnZU5vID0gcGFyc2VJbnQocGFnZSk7XG4gICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgcGFnZTogcGFnZU5vID09PSAxID8gNCA6IHBhZ2VObyArIDEsXG4gICAgICAgIHBlcl9wYWdlOiA1LFxuICAgICAgICBiYXNlX3VybDogYmFzZVVybFxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMubG9hZE1vcmUoeyBpZDogcGFja2FnZUlkLCBxdWVyeVBhcmFtcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbiwgcGFja2FnZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGVzdGltb25pYWxzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHRlc3RpbW9uaWFscy5sZW5ndGggIT09IG5leHRQcm9wcy50ZXN0aW1vbmlhbHMubGVuZ3RoICYmXG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9PT0gbmV4dFByb3BzLmxvY2F0aW9uLnBhdGhuYW1lICYmIHBhY2thZ2VJZCA9PT0gbmV4dFByb3BzLnBhY2thZ2VJZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRlc3RpbW9uaWFsczogWy4uLnRlc3RpbW9uaWFscywgLi4ubmV4dFByb3BzLnRlc3RpbW9uaWFsc10gfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXN0aW1vbmlhbHM6IG5leHRQcm9wcy50ZXN0aW1vbmlhbHMgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBkZXN0aW5hdGlvblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGVzdGltb25pYWxzLCBjb3VudGVyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcmVuZGVydGVzdGltb25pYWxzID0gdGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwgLCBpKSA9PlxuICAgIHtcbiAgICAgIGNvbnN0IGNoZWNrTG9hZE1vcmVUZXN0aW1vbmlhbCA9ICAoaSA+PSBjb3VudGVyKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUcmF2ZWxlclJldmlld0NhcmRcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgdGVzdGltb25pYWw9e3Rlc3RpbW9uaWFsfVxuICAgICAgICAgIHBhZ2luYXRpb249e3BhZ2luYXRpb259XG4gICAgICAgICAgaGlkZVRlc3RpbW9uaWFsPXtjb3VudGVyIDwgMTUgJiYgcGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ID49IDE1ID8gY2hlY2tMb2FkTW9yZVRlc3RpbW9uaWFsXG4gICAgICAgICAgICA6IGZhbHNlfVxuICAgICAgICAvPik7XG4gICAgfSk7XG5cblxuICAgIGlmICghdGVzdGltb25pYWxzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdGVzdGltb25pYWxzTGluayA9IGRlc3RpbmF0aW9uICA/XG4gICAgICBgL3Rlc3RpbW9uaWFscy8ke2Rlc3RpbmF0aW9ufWAgOiAnL3Rlc3RpbW9uaWFscyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItb3ZlcmZsb3ctYnV0dG9ucyBzYmN3XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhdmVsZXItcmV2aWV3XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B0MTUgcGwxNSBwcjE1Jz5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2YyMCBwZmMzIGZ3YiBwYjgnPlxuICAgICAgICAgICAgICB7cGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uLnRvdGFsX2NvdW50ID8gcGFnaW5hdGlvbi50b3RhbF9jb3VudCA6IG51bGx9IEF1dGhlbnRpYyBUcmF2ZWxlciBSZXZpZXdzXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmMTRwIHBmYzQgcGI4Jz5SZWFkIG9uIHRvIGZpbmQgb3V0IHdoeSBvdXIgY3VzdG9tZXJzIGxvdmUgdXMhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgcmVuZGVydGVzdGltb25pYWxzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkbW9yZS1idG4gZmxleCBqdXN0aWZ5Q2VudGVyIHB0MTUgcGIxNVwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYWdpbmF0aW9uICYmIHBhZ2luYXRpb24udG90YWxfY291bnQgJiYgcGFnaW5hdGlvbi50b3RhbF9jb3VudCAhPT0gdGVzdGltb25pYWxzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmMTQgc2ZjMSBmdzcgZmxleCBhbGlnbkNlbnRlciBhdF9yZWFkbW9yZWJ0blwiIG9uQ2xpY2s9e3RoaXMubG9hZE1vcmV9PlxuICAgICAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW4gY2xhc3NOYW1lPVwiZmxleCBtbDggcmVsYXRpdmUgYWxpZ25DZW50ZXIganVzdGlmeUNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+IDpcblxuICAgICAgICAgICAgICAgIDxMaW5rIHRhcmdldD17J19ibGFuayd9IHRvPXt0ZXN0aW1vbmlhbHNMaW5rfT5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZjE0IHNmYzEgZnc3IGZsZXggYWxpZ25DZW50ZXIgYXRfcmVhZG1vcmVidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgVmlldyBBbGwgUmV2aWV3c1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5UcmF2ZWxlclJldmlldy5wcm9wVHlwZXMgPSB7XG4gIHRlc3RpbW9uaWFsczogUHJvcFR5cGVzLmFycmF5LFxuICBwYWdpbmF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYWNrYWdlSWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvYWRNb3JlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYXNlVXJsOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UcmF2ZWxlclJldmlldy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRlc3RpbW9uaWFsczogW10sXG4gIHVuaXF1ZUtleTogJ3RyYXZlbGVyLXJldmlldycsXG4gIGlzU2Vhc29uYWxDYXRlZ29yeTogZmFsc2UsXG4gIHNob3dWaWV3QWxsOiB0cnVlLFxuICBkYXRhOiB7XG4gICAgdGl0bGU6ICdUcmF2ZWxlciBSZXZpZXdzJyxcbiAgICBoZWFkaW5nOiAnUmVhZCBvbiB0byBmaW5kIG91dCB3aHkgb3VyIGN1c3RvbWVycyBsb3ZlIHVzISdcbiAgfSxcbiAgcGFja2FnZUlkOiAwLFxuICBsb2FkTW9yZTogKCkgPT4ge1xuICB9LFxuICBsb2NhdGlvbjoge30sXG4gIGRlc3RpbmF0aW9uOiAnJyxcbiAgYmFzZVVybDogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyUmV2aWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBBZ2VudFJhdGluZyBmcm9tICcuLi9zaGFyZWQvYWdlbnRQcm9maWxlL0FnZW50UmF0aW5nJztcbmltcG9ydCB7XG4gIGdldFRyYXZlbGVyUmV2aWV3VHJhdkNvdW50LFxuICBnZXRUcmF2ZWxlclJldmlld0RhdGUsXG4gIGdldFRyYXZlbGVyUmV2aWV3RHVyYXRpb24sXG4gIGdldFRyYXZlbGVyUmV2aWV3Q2l0aWVzXG59IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7IFxuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICc2cHgnLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICc2cHgnLFxuICAgIHRvcDogJzFweCdcbiAgfVxufSk7XG5cbmNvbnN0IFRyYXZlbGVyUmV2aWV3TmV3Q2FyZCA9ICh7IHRlc3RpbW9uaWFsLCBoaWRlVGVzdGltb25pYWwgfSkgPT4ge1xuICBjb25zdCByZXZpZXdCb2R5ID0gdGVzdGltb25pYWwuYm9keSB8fCB0ZXN0aW1vbmlhbC5yZXZpZXdfYm9keTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJiIHBiMTUgIHB0MTUgcGwxNSBwcjE1ICR7aGlkZVRlc3RpbW9uaWFsID8gJ2hpZGUnIDogJ3Nob3cnfWB9PlxuICAgICAgPEFnZW50UmF0aW5nIGFnZW50UmF0aW5nPXt0ZXN0aW1vbmlhbC5yYXRpbmd9IGlkPXt0ZXN0aW1vbmlhbC5pZH0gLz5cbiAgICAgIDxoMyBjbGFzc05hbWU9J2YxNiBwZmMzIGZ3YiBwYjE1ICBwdDgnPnt0ZXN0aW1vbmlhbC50aXRsZX08L2gzPlxuICAgICAge1xuICAgICAgICByZXZpZXdCb2R5ID9cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2YxNHAgcGZjMyBwYjgnPlxuICAgICAgICAgICAgPFNob3dNb3JlXG4gICAgICAgICAgICAgIHdyYXBUZXh0PXtyZXZpZXdCb2R5LnN1YnN0cmluZygwLCAxNTApfVxuICAgICAgICAgICAgICBtb3JlVGV4dD17cmV2aWV3Qm9keS5zdWJzdHJpbmcoMTUwKX1cbiAgICAgICAgICAgICAgc2hvd01vcmVUZXh0PVwiUmVhZCBNb3JlXCJcbiAgICAgICAgICAgICAgc2hvd0xlc3NUZXh0PVwiUmVhZCBMZXNzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9wPiA6IG51bGxcbiAgICAgIH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdDgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBhbGlnbkNlbnRlciBwYjgnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZjE0IGZ3YiBwZmMzJz5cbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5hdXRob3IuYXV0aG9yX25hbWUgfHwgdGVzdGltb25pYWwuYXV0aG9yLmF1dGhvck5hbWV9XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2YxMiBwZmM0IGZ3NCBwbDgnPiAge3Rlc3RpbW9uaWFsLmF1dGhvci51c2VyX2xvY2F0aW9uIHx8IHRlc3RpbW9uaWFsLmF1dGhvci51c2VyTG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0ZXN0aW1vbmlhbC5xdW90ZSAmJiA8cCBjbGFzc05hbWU9J2YxMiBmaXRhbGljIHBmYzMnPlxuICAgICAgICAgICAge2BUcmF2ZWxsZWQgJHtnZXRUcmF2ZWxlclJldmlld0NpdGllcyh0ZXN0aW1vbmlhbC5xdW90ZS5jaXRpZXMpfSAke2dldFRyYXZlbGVyUmV2aWV3RGF0ZSh0ZXN0aW1vbmlhbC5xdW90ZS5zdGFydF9kYXRlKX1cbiAgICAgICAgICAke2dldFRyYXZlbGVyUmV2aWV3VHJhdkNvdW50KHRlc3RpbW9uaWFsLnF1b3RlLmFkdWx0LCB0ZXN0aW1vbmlhbC5xdW90ZS5jaGlsZCl9ICR7Z2V0VHJhdmVsZXJSZXZpZXdEdXJhdGlvbih0ZXN0aW1vbmlhbC5xdW90ZS5kYXlzKX1gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UcmF2ZWxlclJldmlld05ld0NhcmQucHJvcFR5cGVzID0ge1xuICB0ZXN0aW1vbmlhbDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoaWRlVGVzdGltb25pYWw6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlclJldmlld05ld0NhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9