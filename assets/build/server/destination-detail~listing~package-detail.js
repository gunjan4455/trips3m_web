require("source-map-support").install();
exports.ids = ["destination-detail~listing~package-detail"];
exports.modules = {

/***/ "./app-v2/modules/header/HeaderTitle.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/header/HeaderTitle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTitle = exports.TripTypeList = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _destinations = __webpack_require__(/*! reducers/destinationListing/destinations */ "./app/reducers/destinationListing/destinations.js");

var _destinationListing = __webpack_require__(/*! actions/destinationListing */ "./app/actions/destinationListing.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./Header.scss */ "./app-v2/modules/header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection,
  trackCategoryClick
}) => _react.default.createElement("div", {
  className: "row row- absolute wfull category-list"
}, _react.default.createElement("ul", null, Object.keys(selectionList).map(item => _react.default.createElement("li", {
  key: item
}, _react.default.createElement(_reactRouter.Link, {
  to: selectionList[item].url,
  className: selectedItem === item ? 'selected-category' : '',
  onClick: e => {
    toggleSelection();

    if (selectionList[item].name === 'All') {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.DESTINATION_LIST_CLICK,
        section: 'Header Section',
        object: '',
        cta: selectionList[item].name,
        category: `Destination List: ${selectionList[item].name}`,
        destination_list: selectionList[item].name,
        destination_id: selectionList[item].name,
        value: _segmentEvents.DFEAULT_VALUE,
        label: `Destination Type: ${selectionList[item].name}`
      });
    } else {
      trackCategoryClick({
        section: 'Top Dropdown',
        object: '',
        cta: e.target.text,
        category: e.target.text
      });
    }
  }
}, selectionList[item].name)))), _react.default.createElement("div", {
  className: "fix-layer-suggestion",
  onClick: toggleSelection
}));

exports.TripTypeList = TripTypeList;
TripTypeList.propTypes = {
  selectionList: _propTypes.default.object.isRequired,
  selectedItem: _propTypes.default.string.isRequired,
  toggleSelection: _propTypes.default.func.isRequired,
  trackCategoryClick: _propTypes.default.func
};
TripTypeList.defaultProps = {
  trackCategoryClick: () => {}
};
let HeaderTitle = class HeaderTitle extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleScroll = () => {
      const {
        toggleSelection,
        selectionListVisible
      } = this.props;
      const scrollTop = window.scrollY;

      if (scrollTop > 100 && selectionListVisible) {
        toggleSelection();
      }
    }, this.dropDownTitle = (title, category) => {
      if (category) {
        if (title === 'All') {
          return 'Top Places';
        }

        return `Top Places - ${title}`;
      }

      return `Weekend Getaways - ${title}`;
    }, this.renderSubHeading = (showTitleAsH1, plpHeading, title, isRatingSchemaEnabled) => {
      if (plpHeading) {
        return _react.default.createElement("h2", {
          className: "fw4 flexFull"
        }, plpHeading);
      } else if (showTitleAsH1) {
        return _react.default.createElement("h1", {
          className: "fw4 flexFull",
          property: isRatingSchemaEnabled ? "name" : null
        }, title);
      } else {
        return _react.default.createElement("p", {
          className: "fw4 flexFull"
        }, title);
      }
    }, _temp;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {
      goBackState,
      selectionList,
      selectedItem,
      toggleSelection,
      selectionListVisible,
      title,
      tripTypeListShown,
      trackCategoryClick,
      category,
      backUrl,
      showShare,
      showBlackShare,
      heading,
      url,
      showTitleAsH1,
      plpHeading,
      isRatingSchemaEnabled
    } = this.props;
    let subHeader = null;

    if (tripTypeListShown) {
      subHeader = _react.default.createElement("div", {
        className: "button-drop-category flexFull"
      }, _react.default.createElement("button", {
        onClick: toggleSelection
      }, _react.default.createElement("h1", {
        className: "fw4 iblock"
      }, this.dropDownTitle(selectionList[selectedItem].name, category)), _react.default.createElement("span", {
        className: "down-arrow-destination"
      })), _react.default.createElement("div", {
        className: selectionListVisible ? '' : 'hide'
      }, _react.default.createElement(TripTypeList, {
        selectionList: selectionList,
        selectedItem: selectedItem,
        toggleSelection: toggleSelection,
        trackCategoryClick: trackCategoryClick
      })));
    } else {
      subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title, isRatingSchemaEnabled);
    }

    return _react.default.createElement("div", {
      className: "header-title"
    }, _react.default.createElement("div", {
      className: "f16 sfcw header-title-p flex alignCenter spaceBetween"
    }, _react.default.createElement("button", {
      onClick: () => goBackState(backUrl),
      className: "back-arrow"
    }, "go back"), subHeader, showShare ? _react.default.createElement("span", {
      className: "share-logo-right fright"
    }, _react.default.createElement("a", {
      href: (0, _urlHelpers.whatsappUrl)(heading, url)
    }, showBlackShare ? _react.default.createElement(_Icon.BlackShareIcon, {
      className: "absolute-center wfull"
    }) : _react.default.createElement(_Icon.WhiteShareIcon, {
      className: "absolute-center wfull"
    }))) : null));
  }

};
exports.HeaderTitle = HeaderTitle;
HeaderTitle.propTypes = {
  goBackState: _propTypes.default.func.isRequired,
  selectionList: _propTypes.default.object,
  selectedItem: _propTypes.default.string,
  toggleSelection: _propTypes.default.func,
  selectionListVisible: _propTypes.default.bool,
  title: _propTypes.default.string,
  tripTypeListShown: _propTypes.default.bool,
  trackCategoryClick: _propTypes.default.func,
  category: _propTypes.default.string,
  backUrl: _propTypes.default.string,
  showShare: _propTypes.default.bool,
  showBlackShare: _propTypes.default.bool,
  heading: _propTypes.default.string,
  url: _propTypes.default.string,
  showTitleAsH1: _propTypes.default.bool,
  plpHeading: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
HeaderTitle.defaultProps = {
  selectionList: {
    all: {
      name: 'All',
      url: '/All-Places'
    }
  },
  selectedItem: 'all',
  toggleSelection: () => {},
  selectionListVisible: false,
  title: '',
  tripTypeListShown: false,
  trackCategoryClick: () => {},
  category: '',
  backUrl: '',
  showShare: false,
  showBlackShare: false,
  heading: '',
  url: '',
  showTitleAsH1: true,
  plpHeading: '',
  isRatingSchemaEnabled: false
};

var _default = (0, _reactRedux.connect)(state => ({
  selectionList: (0, _destinations.getSelectionList)(state),
  selectedItem: state.destinationListing.destinationListing.selectedItem,
  selectionListVisible: (0, _destinations.isSelectionListVisible)(state),
  category: state.destinationListing.destinationListing.category,
  weekendDestination: state.destinationListing.destinationListing.weekendDestination
}), dispatch => ({
  goBackState: params => params ? dispatch((0, _reactRouterRedux.push)(params)) : dispatch((0, _reactRouterRedux.goBack)()),
  toggleSelection: () => dispatch((0, _destinationListing.toggleSelectionList)())
}))(HeaderTitle);

exports.default = _default;

/***/ }),

/***/ "./app/components/Generic/ShowMore.js":
/*!********************************************!*\
  !*** ./app/components/Generic/ShowMore.js ***!
  \********************************************/
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

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowMore = class ShowMore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
    this.props.trackSegment(_segmentEvents.PACKAGE_INTERACTED, 'Overview', this.state.checked ? this.props.showLessText : this.props.showMoreText);
  }

  render() {
    const {
      isRatingSchemaEnabled,
      showLessText,
      showMoreText
    } = this.props;
    return _react.default.createElement("div", null, _react.default.createElement("input", {
      type: "checkbox",
      className: "read-more-state",
      checked: this.state.checked,
      id: "post-1"
    }), _react.default.createElement("div", {
      className: "read-more-wrap",
      property: isRatingSchemaEnabled ? 'description' : null
    }, this.props.wrapText, _react.default.createElement("span", {
      className: "read-more-target"
    }, this.props.moreText)), _react.default.createElement("label", {
      htmlFor: "post-1",
      className: "read-more-trigger"
    }, _react.default.createElement("button", {
      className: "read-more-button",
      onClick: this.handleChange
    }, this.state.checked ? showLessText : showMoreText, _react.default.createElement(_Icon.BlueDownArrow, null))));
  }

};
ShowMore.propTypes = {
  wrapText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]).isRequired,
  moreText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  showMoreText: _propTypes.default.string,
  showLessText: _propTypes.default.string,
  trackSegment: _propTypes.default.func,
  isRatingSchemaEnabled: _propTypes.default.bool
};
ShowMore.defaultProps = {
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  trackSegment: () => {},
  isRatingSchemaEnabled: false
};
var _default = ShowMore;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.js":
/*!**********************************************!*\
  !*** ./app/components/Review/StarRatings.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./StarRatings.scss */ "./app/components/Review/StarRatings.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-spread, react/no-array-index-key */
const StarRatings = ({
  rating,
  total,
  id
}) => {
  const r = parseInt(rating);
  const t = parseInt(total);
  const starIconElements = Array.apply(null, Array(r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${index}`
  }, _react.default.createElement(_Icon.StarIcon, null)));
  const starIconEmptyElements = Array.apply(null, Array(t - r)).map((e, index) => _react.default.createElement("li", {
    key: `${id}_${rating + index}`
  }, _react.default.createElement(_Icon.StarIconEmpty, null)));
  return _react.default.createElement("ul", {
    className: "traveler-rating-star-list"
  }, starIconElements, starIconEmptyElements);
};

StarRatings.propTypes = {
  rating: _propTypes.default.number,
  total: _propTypes.default.number,
  id: _propTypes.default.string.isRequired
};
StarRatings.defaultProps = {
  rating: 4,
  total: 5
};
var _default = StarRatings;
exports.default = _default;

/***/ }),

/***/ "./app/components/Review/StarRatings.scss":
/*!************************************************!*\
  !*** ./app/components/Review/StarRatings.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"traveler-rating-star-list": "_kyB_G"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvR2VuZXJpYy9TaG93TW9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9SZXZpZXcvU3RhclJhdGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvUmV2aWV3L1N0YXJSYXRpbmdzLnNjc3MiXSwibmFtZXMiOlsiVHJpcFR5cGVMaXN0Iiwic2VsZWN0aW9uTGlzdCIsInNlbGVjdGVkSXRlbSIsInRvZ2dsZVNlbGVjdGlvbiIsInRyYWNrQ2F0ZWdvcnlDbGljayIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpdGVtIiwidXJsIiwiZSIsIm5hbWUiLCJldmVudCIsIkRFU1RJTkFUSU9OX0xJU1RfQ0xJQ0siLCJzZWN0aW9uIiwib2JqZWN0IiwiY3RhIiwiY2F0ZWdvcnkiLCJkZXN0aW5hdGlvbl9saXN0IiwiZGVzdGluYXRpb25faWQiLCJ2YWx1ZSIsIkRGRUFVTFRfVkFMVUUiLCJsYWJlbCIsInRhcmdldCIsInRleHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkhlYWRlclRpdGxlIiwiQ29tcG9uZW50IiwiaGFuZGxlU2Nyb2xsIiwic2VsZWN0aW9uTGlzdFZpc2libGUiLCJwcm9wcyIsInNjcm9sbFRvcCIsIndpbmRvdyIsInNjcm9sbFkiLCJkcm9wRG93blRpdGxlIiwidGl0bGUiLCJyZW5kZXJTdWJIZWFkaW5nIiwic2hvd1RpdGxlQXNIMSIsInBscEhlYWRpbmciLCJpc1JhdGluZ1NjaGVtYUVuYWJsZWQiLCJjb21wb25lbnREaWRNb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJnb0JhY2tTdGF0ZSIsInRyaXBUeXBlTGlzdFNob3duIiwiYmFja1VybCIsInNob3dTaGFyZSIsInNob3dCbGFja1NoYXJlIiwiaGVhZGluZyIsInN1YkhlYWRlciIsImJvb2wiLCJhbGwiLCJzdGF0ZSIsImRlc3RpbmF0aW9uTGlzdGluZyIsIndlZWtlbmREZXN0aW5hdGlvbiIsImRpc3BhdGNoIiwicGFyYW1zIiwiU2hvd01vcmUiLCJSZWFjdCIsImNvbnN0cnVjdG9yIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJzZXRTdGF0ZSIsInRyYWNrU2VnbWVudCIsIlBBQ0tBR0VfSU5URVJBQ1RFRCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIndyYXBUZXh0IiwibW9yZVRleHQiLCJvbmVPZlR5cGUiLCJhcnJheSIsIlN0YXJSYXRpbmdzIiwicmF0aW5nIiwidG90YWwiLCJpZCIsInIiLCJwYXJzZUludCIsInQiLCJzdGFySWNvbkVsZW1lbnRzIiwiQXJyYXkiLCJhcHBseSIsImluZGV4Iiwic3Rhckljb25FbXB0eUVsZW1lbnRzIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7OztBQUVPLE1BQU1BLGVBQWUsQ0FBQztBQUMzQkMsZUFEMkI7QUFFM0JDLGNBRjJCO0FBRzNCQyxpQkFIMkI7QUFJM0JDO0FBSjJCLENBQUQsS0FNMUI7QUFBSyxhQUFVO0FBQWYsR0FDRSx5Q0FDR0MsT0FBT0MsSUFBUCxDQUFZTCxhQUFaLEVBQTJCTSxHQUEzQixDQUErQkMsUUFDOUI7QUFBSSxPQUFLQTtBQUFULEdBQWUsNkJBQUMsaUJBQUQ7QUFDYixNQUFJUCxjQUFjTyxJQUFkLEVBQW9CQyxHQURYO0FBRWIsYUFBWVAsaUJBQWlCTSxJQUFsQixHQUEwQixtQkFBMUIsR0FBZ0QsRUFGOUM7QUFHYixXQUFVRSxDQUFELElBQU87QUFDZFA7O0FBQ0EsUUFBSUYsY0FB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RjtBQU1ELENBYkQ7O0FBZUFYLFlBQVl0RCxTQUFaLEdBQXdCO0FBQ3RCdUQsVUFBUXRELG1CQUFVaUUsTUFESTtBQUV0QlYsU0FBT3ZELG1CQUFVaUUsTUFGSztBQUd0QlQsTUFBSXhELG1CQUFVRSxNQUFWLENBQWlCRDtBQUhDLENBQXhCO0FBTUFvRCxZQUFZakQsWUFBWixHQUEyQjtBQUN6QmtELFVBQVEsQ0FEaUI7QUFFekJDLFNBQU87QUFGa0IsQ0FBM0I7ZUFLZUYsVzs7Ozs7Ozs7Ozs7O0FDcENmO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImRlc3RpbmF0aW9uLWRldGFpbH5saXN0aW5nfnBhY2thZ2UtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdvQmFjaywgcHVzaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQge1xuICBnZXRTZWxlY3Rpb25MaXN0LFxuICBpc1NlbGVjdGlvbkxpc3RWaXNpYmxlXG59IGZyb20gJ3JlZHVjZXJzL2Rlc3RpbmF0aW9uTGlzdGluZy9kZXN0aW5hdGlvbnMnO1xuaW1wb3J0IHsgdG9nZ2xlU2VsZWN0aW9uTGlzdCB9IGZyb20gJ2FjdGlvbnMvZGVzdGluYXRpb25MaXN0aW5nJztcbmltcG9ydCB7IERFU1RJTkFUSU9OX0xJU1RfQ0xJQ0ssIERGRUFVTFRfVkFMVUUsIHRyYWNrU2VnbWVudCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyB3aGF0c2FwcFVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBXaGl0ZVNoYXJlSWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IEJsYWNrU2hhcmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgJy4vSGVhZGVyLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgVHJpcFR5cGVMaXN0ID0gKHtcbiAgc2VsZWN0aW9uTGlzdCxcbiAgc2VsZWN0ZWRJdGVtLFxuICB0b2dnbGVTZWxlY3Rpb24sXG4gIHRyYWNrQ2F0ZWdvcnlDbGljayxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBhYnNvbHV0ZSB3ZnVsbCBjYXRlZ29yeS1saXN0XCI+XG4gICAgPHVsPlxuICAgICAge09iamVjdC5rZXlzKHNlbGVjdGlvbkxpc3QpLm1hcChpdGVtID0+IChcbiAgICAgICAgPGxpIGtleT17aXRlbX0+PExpbmtcbiAgICAgICAgICB0bz17c2VsZWN0aW9uTGlzdFtpdGVtXS51cmx9XG4gICAgICAgICAgY2xhc3NOYW1lPXsoc2VsZWN0ZWRJdGVtID09PSBpdGVtKSA/ICdzZWxlY3RlZC1jYXRlZ29yeScgOiAnJ31cbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lID09PSAnQWxsJykge1xuICAgICAgICAgICAgICB0cmFja1NlZ21lbnQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBERVNUSU5BVElPTl9MSVNUX0NMSUNLLFxuICAgICAgICAgICAgICAgIHNlY3Rpb246ICdIZWFkZXIgU2VjdGlvbicsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgICAgICAgICBjdGE6IHNlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uIExpc3Q6ICR7c2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25fbGlzdDogc2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uX2lkOiBzZWxlY3Rpb25MaXN0W2l0ZW1dLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IERGRUFVTFRfVkFMVUUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGBEZXN0aW5hdGlvbiBUeXBlOiAke3NlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZX1gXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJhY2tDYXRlZ29yeUNsaWNrKHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiAnVG9wIERyb3Bkb3duJyxcbiAgICAgICAgICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgIGN0YTogZS50YXJnZXQudGV4dCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZS50YXJnZXQudGV4dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3NlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZX1cbiAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeC1sYXllci1zdWdnZXN0aW9uXCIgb25DbGljaz17dG9nZ2xlU2VsZWN0aW9ufS8+XG4gIDwvZGl2PlxuICApO1xuXG5UcmlwVHlwZUxpc3QucHJvcFR5cGVzID0ge1xuICBzZWxlY3Rpb25MaXN0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0b2dnbGVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYWNrQ2F0ZWdvcnlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5UcmlwVHlwZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0NhdGVnb3J5Q2xpY2s6ICgpID0+IHt9XG59O1xuXG5leHBvcnQgY2xhc3MgSGVhZGVyVGl0bGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9nZ2xlU2VsZWN0aW9uLHNlbGVjdGlvbkxpc3RWaXNpYmxlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGlmIChzY3JvbGxUb3AgPiAxMDAgJiYgc2VsZWN0aW9uTGlzdFZpc2libGUpIHtcbiAgICAgIHRvZ2dsZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBkcm9wRG93blRpdGxlID0gKHRpdGxlLCBjYXRlZ29yeSkgPT4ge1xuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgaWYgKHRpdGxlID09PSAnQWxsJykge1xuICAgICAgICByZXR1cm4gJ1RvcCBQbGFjZXMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBUb3AgUGxhY2VzIC0gJHt0aXRsZX1gO1xuICAgIH1cbiAgICByZXR1cm4gYFdlZWtlbmQgR2V0YXdheXMgLSAke3RpdGxlfWA7XG4gIH07XG5cbiAgcmVuZGVyU3ViSGVhZGluZyA9IChzaG93VGl0bGVBc0gxLCBwbHBIZWFkaW5nLCB0aXRsZSwgaXNSYXRpbmdTY2hlbWFFbmFibGVkKSA9PiB7XG4gICAgaWYgKHBscEhlYWRpbmcpIHtcbiAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPVwiZnc0IGZsZXhGdWxsXCI+e3BscEhlYWRpbmd9PC9oMj47XG4gICAgfSBlbHNlIGlmIChzaG93VGl0bGVBc0gxKSB7XG4gICAgICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImZ3NCBmbGV4RnVsbFwiIHByb3BlcnR5PXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcIm5hbWVcIiA6IG51bGx9Pnt0aXRsZX08L2gxPjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZ3NCBmbGV4RnVsbFwiPnt0aXRsZX08L3A+O1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZ29CYWNrU3RhdGUsXG4gICAgICBzZWxlY3Rpb25MaXN0LFxuICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgdG9nZ2xlU2VsZWN0aW9uLFxuICAgICAgc2VsZWN0aW9uTGlzdFZpc2libGUsXG4gICAgICB0aXRsZSxcbiAgICAgIHRyaXBUeXBlTGlzdFNob3duLFxuICAgICAgdHJhY2tDYXRlZ29yeUNsaWNrLFxuICAgICAgY2F0ZWdvcnksIGJhY2tVcmwsXG4gICAgICBzaG93U2hhcmUsXG4gICAgICBzaG93QmxhY2tTaGFyZSxcbiAgICAgIGhlYWRpbmcsIHVybCxcbiAgICAgIHNob3dUaXRsZUFzSDEsXG4gICAgICBwbHBIZWFkaW5nLFxuICAgICAgaXNSYXRpbmdTY2hlbWFFbmFibGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgc3ViSGVhZGVyID0gbnVsbDtcbiAgICBpZiAodHJpcFR5cGVMaXN0U2hvd24pIHtcbiAgICAgIHN1YkhlYWRlciA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tZHJvcC1jYXRlZ29yeSBmbGV4RnVsbFwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmdzQgaWJsb2NrXCI+XG4gICAgICAgICAgICAgIHt0aGlzLmRyb3BEb3duVGl0bGUoc2VsZWN0aW9uTGlzdFtzZWxlY3RlZEl0ZW1dLm5hbWUsIGNhdGVnb3J5KX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3duLWFycm93LWRlc3RpbmF0aW9uXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17KHNlbGVjdGlvbkxpc3RWaXNpYmxlKSA/ICcnIDogJ2hpZGUnfT5cbiAgICAgICAgICAgIDxUcmlwVHlwZUxpc3RcbiAgICAgICAgICAgICAgc2VsZWN0aW9uTGlzdD17c2VsZWN0aW9uTGlzdH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbj17dG9nZ2xlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICB0cmFja0NhdGVnb3J5Q2xpY2s9e3RyYWNrQ2F0ZWdvcnlDbGlja31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViSGVhZGVyID0gdGhpcy5yZW5kZXJTdWJIZWFkaW5nKHNob3dUaXRsZUFzSDEsIHBscEhlYWRpbmcsIHRpdGxlLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImYxNiBzZmN3IGhlYWRlci10aXRsZS1wIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnb0JhY2tTdGF0ZShiYWNrVXJsKX0gY2xhc3NOYW1lPVwiYmFjay1hcnJvd1wiPmdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICB7c3ViSGVhZGVyfVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dTaGFyZSA/XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLWxvZ28tcmlnaHQgZnJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3doYXRzYXBwVXJsKGhlYWRpbmcsIHVybCl9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNob3dCbGFja1NoYXJlID8gIDxCbGFja1NoYXJlSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgd2Z1bGxcIi8+IDogIDxXaGl0ZVNoYXJlSWNvbiBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXIgd2Z1bGxcIiAvPlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+IDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlclRpdGxlLnByb3BUeXBlcyA9IHtcbiAgZ29CYWNrU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvbkxpc3Q6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlU2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0aW9uTGlzdFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpcFR5cGVMaXN0U2hvd246IFByb3BUeXBlcy5ib29sLFxuICB0cmFja0NhdGVnb3J5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFja1VybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd1NoYXJlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0JsYWNrU2hhcmU6IFByb3BUeXBlcy5ib29sLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dUaXRsZUFzSDE6IFByb3BUeXBlcy5ib29sLFxuICBwbHBIZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkZXJUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGlvbkxpc3Q6IHsgYWxsOiB7IG5hbWU6ICdBbGwnLCB1cmw6ICcvQWxsLVBsYWNlcycgfSB9LFxuICBzZWxlY3RlZEl0ZW06ICdhbGwnLFxuICB0b2dnbGVTZWxlY3Rpb246ICgpID0+IHt9LFxuICBzZWxlY3Rpb25MaXN0VmlzaWJsZTogZmFsc2UsXG4gIHRpdGxlOiAnJyxcbiAgdHJpcFR5cGVMaXN0U2hvd246IGZhbHNlLFxuICB0cmFja0NhdGVnb3J5Q2xpY2s6ICgpID0+IHt9LFxuICBjYXRlZ29yeTogJycsXG4gIGJhY2tVcmw6ICcnLFxuICBzaG93U2hhcmU6IGZhbHNlLFxuICBzaG93QmxhY2tTaGFyZTogZmFsc2UsXG4gIGhlYWRpbmc6ICcnLFxuICB1cmw6ICcnLFxuICBzaG93VGl0bGVBc0gxOiB0cnVlLFxuICBwbHBIZWFkaW5nOiAnJyxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNlbGVjdGlvbkxpc3Q6IGdldFNlbGVjdGlvbkxpc3Qoc3RhdGUpLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLnNlbGVjdGVkSXRlbSxcbiAgICAgIHNlbGVjdGlvbkxpc3RWaXNpYmxlOiBpc1NlbGVjdGlvbkxpc3RWaXNpYmxlKHN0YXRlKSxcbiAgICAgIGNhdGVnb3J5OiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLmNhdGVnb3J5LFxuICAgICAgd2Vla2VuZERlc3RpbmF0aW9uOiBzdGF0ZS5kZXN0aW5hdGlvbkxpc3RpbmcuZGVzdGluYXRpb25MaXN0aW5nLndlZWtlbmREZXN0aW5hdGlvbixcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+ICh7XG4gICAgZ29CYWNrU3RhdGU6IChwYXJhbXMpID0+IHBhcmFtcyA/IGRpc3BhdGNoKHB1c2gocGFyYW1zKSkgOiBkaXNwYXRjaChnb0JhY2soKSksXG4gICAgdG9nZ2xlU2VsZWN0aW9uOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVTZWxlY3Rpb25MaXN0KCkpXG4gIH0pXG4pKEhlYWRlclRpdGxlKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQmx1ZURvd25BcnJvd1xufSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBQQUNLQUdFX0lOVEVSQUNURUQgfSBmcm9tIFwiLi4vLi4vYWN0aW9ucy9zZWdtZW50RXZlbnRzXCI7XG5cbmNsYXNzIFNob3dNb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoUEFDS0FHRV9JTlRFUkFDVEVELCAnT3ZlcnZpZXcnLCAodGhpcy5zdGF0ZS5jaGVja2VkID9cbiAgICAgIHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHQgKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1JhdGluZ1NjaGVtYUVuYWJsZWQsIHNob3dMZXNzVGV4dCwgc2hvd01vcmVUZXh0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXN0YXRlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBpZD1cInBvc3QtMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXdyYXBcIiBwcm9wZXJ0eT17aXNSYXRpbmdTY2hlbWFFbmFibGVkID8gJ2Rlc2NyaXB0aW9uJyA6IG51bGx9Pnt0aGlzLnByb3BzLndyYXBUZXh0fTxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10YXJnZXRcIj57dGhpcy5wcm9wcy5tb3JlVGV4dH08L3NwYW4+PC9kaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9zdC0xXCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRyaWdnZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tlZCkgPyBzaG93TGVzc1RleHQgOiBzaG93TW9yZVRleHR9XG4gICAgICAgICAgICA8Qmx1ZURvd25BcnJvdyAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuU2hvd01vcmUucHJvcFR5cGVzID0ge1xuICB3cmFwVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5vYmplY3QsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbW9yZVRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICBtb3JlVGV4dDogJycsXG4gIHNob3dNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG4gIHNob3dMZXNzVGV4dDogJ1JlYWQgTGVzcycsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge30sXG4gIGlzUmF0aW5nU2NoZW1hRW5hYmxlZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXNwcmVhZCwgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7XG4gIFN0YXJJY29uLFxuICBTdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuaW1wb3J0ICcuL1N0YXJSYXRpbmdzLnNjc3MnO1xuXG5jb25zdCBTdGFyUmF0aW5ncyA9ICh7IHJhdGluZywgdG90YWwsIGlkIH0pID0+IHtcbiAgY29uc3QgciA9IHBhcnNlSW50KHJhdGluZyk7XG4gIGNvbnN0IHQgPSBwYXJzZUludCh0b3RhbCk7XG5cbiAgY29uc3Qgc3Rhckljb25FbGVtZW50cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHIpKS5tYXAoKGUsIGluZGV4KSA9PiA8bGkga2V5PXtgJHtpZH1fJHtpbmRleH1gfT48U3Rhckljb24gLz48L2xpPik7XG4gIGNvbnN0IHN0YXJJY29uRW1wdHlFbGVtZW50cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHQgLSByKSkubWFwKChlLCBpbmRleCkgPT4gPGxpIGtleT17YCR7aWR9XyR7cmF0aW5nICsgaW5kZXh9YH0+PFN0YXJJY29uRW1wdHkgLz48L2xpPik7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwidHJhdmVsZXItcmF0aW5nLXN0YXItbGlzdFwiPlxuICAgICAge3N0YXJJY29uRWxlbWVudHN9XG4gICAgICB7c3Rhckljb25FbXB0eUVsZW1lbnRzfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5TdGFyUmF0aW5ncy5wcm9wVHlwZXMgPSB7XG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cblN0YXJSYXRpbmdzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmF0aW5nOiA0LFxuICB0b3RhbDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZ3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0cmF2ZWxlci1yYXRpbmctc3Rhci1saXN0XCI6IFwiX2t5Ql9HXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==