require("source-map-support").install();
exports.ids = ["city-block-ptv"];
exports.modules = {

/***/ "./app-v2/screens/cityBlock/placesToVisit/PlacesToVisit.js":
/*!*****************************************************************!*\
  !*** ./app-v2/screens/cityBlock/placesToVisit/PlacesToVisit.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ToVisitCard = _interopRequireDefault(__webpack_require__(/*! ./ToVisitCard */ "./app-v2/screens/cityBlock/placesToVisit/ToVisitCard.js"));

var _CityBlockFilters = _interopRequireDefault(__webpack_require__(/*! modules/cityBlock/CityBlockFilters */ "./app-v2/modules/cityBlock/CityBlockFilters.js"));

var _NoPackageCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/NoPackageCard */ "./app-v2/modules/shared/NoPackageCard.js"));

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _loadMorePackages = _interopRequireDefault(__webpack_require__(/*! modules/shared/loadMorePackages */ "./app-v2/modules/shared/loadMorePackages/index.js"));

var _parseCityBlockFilters = _interopRequireDefault(__webpack_require__(/*! helpers/parseCityBlockFilters */ "./app/helpers/parseCityBlockFilters.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let PlacesToVisit = class PlacesToVisit extends _react.Component {
  constructor() {
    super();

    this.loadMoreCards = (destination, city, tab, experience, query) => {
      const {
        filters
      } = (0, _parseCityBlockFilters.default)({
        query: query || {}
      });
      const queryParams = {
        offset: this.state.currentPage === 1 ? this.state.currentPage * 10 : this.state.currentPage * 5 + 5,
        limit: 5,
        places_to_visit: true,
        lookup_parent: false,
        city: city,
        tab: tab,
        experience: experience
      };
      const payload = {
        destination,
        filters,
        queryParams
      };
      this.props.loadMoreCards(payload);
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    };

    this.state = {
      currentPage: 1
    };
    this.resetFilters = this.resetFilters.bind(this);
  }

  resetFilters() {
    const values = {};
    this.props.resetFilters(values);
  }

  render() {
    const {
      data,
      location,
      applyFilters,
      params,
      resetPath,
      routes,
      exitIntent
    } = this.props;
    const {
      destination,
      city
    } = params;
    const tab = routes[this.props.routes.length - 1].tab;
    const experience = routes[this.props.routes.length - 1].experience;
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement(_Guide.default, {
      guide: {
        title: data.title,
        heading: data.heading,
        description: data.description
      }
    })), exitIntent, _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement("div", {
      className: "col-xs-12 p0"
    }, data.destinationSchemes && data.destinationSchemes.map((item, i) => _react.default.createElement("div", {
      className: "mb8",
      key: i
    }, _react.default.createElement(_ToVisitCard.default, {
      item: item,
      key: i
    }))))), data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement(_loadMorePackages.default, {
      packagesRemaining: data.totalDestinationSchemes - data.destinationSchemes.length,
      loadMorePackages: () => this.loadMoreCards(destination, city, tab, experience, location.query),
      currentPage: this.state.currentPage,
      title: "remaining Places To Visit)"
    })) : _react.default.createElement("div", {
      className: "m8 mt0 p15 sbcw"
    }, _react.default.createElement(_NoPackageCard.default, {
      destination: destination
    })), data.filters && (data.filters.filterCategories || data.filters.filteredCities) ? _react.default.createElement(_CityBlockFilters.default, {
      filters: data.filters,
      applyFilters: applyFilters,
      tab: "places-to-visit",
      params: params,
      enableReinitialize: true,
      resetPath: resetPath,
      onSubmit: values => {
        applyFilters({
          values,
          location,
          filters: data.filters,
          params
        });
      },
      resetForm: this.resetFilters
    }) : null);
  }

};
PlacesToVisit.propTypes = {
  data: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired,
  applyFilters: _propTypes.default.func.isRequired,
  resetPath: _propTypes.default.func.isRequired,
  loadMoreCards: _propTypes.default.func,
  resetFilters: _propTypes.default.func.isRequired,
  routes: _propTypes.default.array
};
PlacesToVisit.defaultProps = {
  loadMoreCards: () => {},
  routes: []
};
var _default = PlacesToVisit;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/placesToVisit/ToVisitCard.js":
/*!***************************************************************!*\
  !*** ./app-v2/screens/cityBlock/placesToVisit/ToVisitCard.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _CityTags = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/CityTags */ "./app-v2/modules/cityBlock/CityTags.js"));

var _SmallBanner = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/SmallBanner */ "./app-v2/modules/cityBlock/SmallBanner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GVisitcardDiv = _glamorous.default.div({
  '& .cityList li': {
    color: '#3e3e3e'
  }
});

const GAddressDiv = _glamorous.default.div({
  '& .locationMarker': {
    minWidth: '20px',
    maxWidth: '20px',
    height: '20px',
    left: '0',
    top: '0',
    '& svg': {
      position: 'absolute',
      maxHeight: '100%'
    }
  }
});

const parser = new _htmlToReact.Parser();

const ToVisitCard = ({
  item
}) => _react.default.createElement(GVisitcardDiv, {
  className: "clearfix sbcw"
}, _react.default.createElement("div", {
  className: "col-xs-12 p0"
}, _react.default.createElement(_SmallBanner.default, item)), _react.default.createElement("div", {
  className: "col-xs-12 p15"
}, _react.default.createElement(_reactRouter.Link, {
  to: item.urlSpotlight
}, _react.default.createElement("h4", {
  className: "f16 fw9 m0 pb15 pfc3"
}, item.title)), _react.default.createElement(GAddressDiv, {
  className: "relative mb8 flex alignCenter spaceBetween"
}, _react.default.createElement("span", {
  className: "locationMarker relative block mr8"
}, _react.default.createElement(_Icon.LocationMarkerIcon, null)), _react.default.createElement("p", {
  className: "f14p fw9 pfc3 m0 flexFull ellipsis"
}, "The wildlife warden munnar PO, idukki dist.kerala, india")), _react.default.createElement("div", {
  className: "m0 dynamicTextInherit ellipsis_three"
}, parser.parse(item.description)), _react.default.createElement("div", {
  className: "cityList mt8"
}, _react.default.createElement(_CityTags.default, item))));

ToVisitCard.propTypes = {
  item: _propTypes.default.object.isRequired
};
var _default = ToVisitCard;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9jaXR5QmxvY2svcGxhY2VzVG9WaXNpdC9QbGFjZXNUb1Zpc2l0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9wbGFjZXNUb1Zpc2l0L1RvVmlzaXRDYXJkLmpzIl0sIm5hbWVzIjpbIlBsYWNlc1RvVmlzaXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImxvYWRNb3JlQ2FyZHMiLCJkZXN0aW5hdGlvbiIsImNpdHkiLCJ0YWIiLCJleHBlcmllbmNlIiwicXVlcnkiLCJmaWx0ZXJzIiwicXVlcnlQYXJhbXMiLCJvZmZzZXQiLCJzdGF0ZSIsImN1cnJlbnRQYWdlIiwibGltaXQiLCJwbGFjZXNfdG9fdmlzaXQiLCJsb29rdXBfcGFyZW50IiwicGF5bG9hZCIsInByb3BzIiwic2V0U3RhdGUiLCJyZXNldEZpbHRlcnMiLCJiaW5kIiwidmFsdWVzIiwicmVuZGVyIiwiZGF0YSIsImxvY2F0aW9uIiwiYXBwbHlGaWx0ZXJzIiwicGFyYW1zIiwicmVzZXRQYXRoIiwicm91dGVzIiwiZXhpdEludGVudCIsImxlbmd0aCIsInRpdGxlIiwiaGVhZGluZyIsImRlc2NyaXB0aW9uIiwiZGVzdGluYXRpb25TY2hlbWVzIiwibWFwIiwiaXRlbSIsImkiLCJ0b3RhbERlc3RpbmF0aW9uU2NoZW1lcyIsImZpbHRlckNhdGVnb3JpZXMiLCJmaWx0ZXJlZENpdGllcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJHVmlzaXRjYXJkRGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwiY29sb3IiLCJHQWRkcmVzc0RpdiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwicG9zaXRpb24iLCJtYXhIZWlnaHQiLCJwYXJzZXIiLCJQYXJzZXIiLCJUb1Zpc2l0Q2FyZCIsInVybFNw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LEdBQW9ELDZCQUFDLHdCQUFELE9BQXBELENBREYsRUFFRTtBQUFHLGFBQVU7QUFBYiw4REFGRixDQUpGLEVBUUU7QUFBSyxhQUFVO0FBQWYsR0FBdUQ2QixPQUFPSSxLQUFQLENBQWE1QixLQUFLSCxXQUFsQixDQUF2RCxDQVJGLEVBU0U7QUFBSyxhQUFVO0FBQWYsR0FDRSw2QkFBQyxpQkFBRCxFQUFjRyxJQUFkLENBREYsQ0FURixDQUpGLENBREY7O0FBcUJBMEIsWUFBWXJCLFNBQVosR0FBd0I7QUFDdEJMLFFBQU1NLG1CQUFVQyxNQUFWLENBQWlCQztBQURELENBQXhCO2VBSWVrQixXIiwiZmlsZSI6ImNpdHktYmxvY2stcHR2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUb1Zpc2l0Q2FyZCBmcm9tICcuL1RvVmlzaXRDYXJkJztcbmltcG9ydCBDaXR5QmxvY2tGaWx0ZXJzIGZyb20gJ21vZHVsZXMvY2l0eUJsb2NrL0NpdHlCbG9ja0ZpbHRlcnMnO1xuaW1wb3J0IE5vUGFja2FnZUNhcmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvTm9QYWNrYWdlQ2FyZCc7XG5pbXBvcnQgR3VpZGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR3VpZGUnO1xuaW1wb3J0IExvYWRNb3JlUGFja2FnZXMgZnJvbSAnbW9kdWxlcy9zaGFyZWQvbG9hZE1vcmVQYWNrYWdlcyc7XG5pbXBvcnQgcGFyc2VGaWx0ZXJzIGZyb20gJ2hlbHBlcnMvcGFyc2VDaXR5QmxvY2tGaWx0ZXJzJztcblxuY2xhc3MgUGxhY2VzVG9WaXNpdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfTtcbiAgICB0aGlzLnJlc2V0RmlsdGVycyA9IHRoaXMucmVzZXRGaWx0ZXJzLmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldEZpbHRlcnMoKSB7XG4gICAgY29uc3QgdmFsdWVzID0ge307XG4gICAgdGhpcy5wcm9wcy5yZXNldEZpbHRlcnModmFsdWVzKTtcbiAgfVxuXG4gIGxvYWRNb3JlQ2FyZHMgPSAoZGVzdGluYXRpb24sIGNpdHksIHRhYiwgZXhwZXJpZW5jZSwgcXVlcnkpID0+IHtcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHBhcnNlRmlsdGVycyh7XG4gICAgICBxdWVyeTogcXVlcnkgfHwge31cbiAgICB9KTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgICAgIG9mZnNldDogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gMSA/ICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICogMTApIDogKCh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICogNSkgKyA1KSxcbiAgICAgIGxpbWl0OiA1LFxuICAgICAgcGxhY2VzX3RvX3Zpc2l0OiB0cnVlLFxuICAgICAgbG9va3VwX3BhcmVudDogZmFsc2UsXG4gICAgICBjaXR5OiBjaXR5LFxuICAgICAgdGFiOiB0YWIsXG4gICAgICBleHBlcmllbmNlOiBleHBlcmllbmNlXG4gICAgfTtcbiAgICBjb25zdCBwYXlsb2FkID0geyBkZXN0aW5hdGlvbiwgZmlsdGVycywgcXVlcnlQYXJhbXMgfTtcbiAgICB0aGlzLnByb3BzLmxvYWRNb3JlQ2FyZHMocGF5bG9hZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRQYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICsgMSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBsb2NhdGlvbiwgYXBwbHlGaWx0ZXJzLCBwYXJhbXMsIHJlc2V0UGF0aCwgcm91dGVzLCBleGl0SW50ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZGVzdGluYXRpb24sIGNpdHkgfSA9IHBhcmFtcztcbiAgICBjb25zdCB0YWIgPSByb3V0ZXNbdGhpcy5wcm9wcy5yb3V0ZXMubGVuZ3RoIC0gMV0udGFiO1xuICAgIGNvbnN0IGV4cGVyaWVuY2UgPSByb3V0ZXNbdGhpcy5wcm9wcy5yb3V0ZXMubGVuZ3RoIC0gMV0uZXhwZXJpZW5jZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibTggbXQwXCI+XG4gICAgICAgICAgPEd1aWRlXG4gICAgICAgICAgICBndWlkZT17eyB0aXRsZTogZGF0YS50aXRsZSwgaGVhZGluZzogZGF0YS5oZWFkaW5nLCBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbiB9fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2V4aXRJbnRlbnR9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibTggbXQwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMFwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMgJiYgZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iOFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxUb1Zpc2l0Q2FyZCBpdGVtPXtpdGVtfSBrZXk9e2l9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcyAmJiBkYXRhLmRlc3RpbmF0aW9uU2NoZW1lcy5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtOCBtdDBcIj5cbiAgICAgICAgICAgICAgPExvYWRNb3JlUGFja2FnZXNcbiAgICAgICAgICAgICAgICBwYWNrYWdlc1JlbWFpbmluZz17ZGF0YS50b3RhbERlc3RpbmF0aW9uU2NoZW1lcyAtIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBsb2FkTW9yZVBhY2thZ2VzPXsoKSA9PiB0aGlzLmxvYWRNb3JlQ2FyZHMoZGVzdGluYXRpb24sIGNpdHksIHRhYiwgZXhwZXJpZW5jZSwgbG9jYXRpb24ucXVlcnkpfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPSdyZW1haW5pbmcgUGxhY2VzIFRvIFZpc2l0KSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MCBwMTUgc2Jjd1wiPjxOb1BhY2thZ2VDYXJkIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn0gLz48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5maWx0ZXJzICYmIChkYXRhLmZpbHRlcnMuZmlsdGVyQ2F0ZWdvcmllcyB8fCBkYXRhLmZpbHRlcnMuZmlsdGVyZWRDaXRpZXMpID9cbiAgICAgICAgICAgIDxDaXR5QmxvY2tGaWx0ZXJzXG4gICAgICAgICAgICAgIGZpbHRlcnM9e2RhdGEuZmlsdGVyc31cbiAgICAgICAgICAgICAgYXBwbHlGaWx0ZXJzPXthcHBseUZpbHRlcnN9XG4gICAgICAgICAgICAgIHRhYj1cInBsYWNlcy10by12aXNpdFwiXG4gICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgICAgICAgcmVzZXRQYXRoPXtyZXNldFBhdGh9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgICAgIGFwcGx5RmlsdGVycyh7IHZhbHVlcywgbG9jYXRpb24sIGZpbHRlcnM6IGRhdGEuZmlsdGVycywgcGFyYW1zIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZXNldEZvcm09e3RoaXMucmVzZXRGaWx0ZXJzfVxuICAgICAgICAgICAgLz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICAgIDtcbiAgfVxufVxuXG5QbGFjZXNUb1Zpc2l0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZXhpdEludGVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBhcHBseUZpbHRlcnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlc2V0UGF0aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZE1vcmVDYXJkczogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlc2V0RmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cblBsYWNlc1RvVmlzaXQuZGVmYXVsdFByb3BzID0ge1xuICBsb2FkTW9yZUNhcmRzOiAoKSA9PiB7fSxcbiAgcm91dGVzOiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxhY2VzVG9WaXNpdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaW1wb3J0IHsgTG9jYXRpb25NYXJrZXJJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IENpdHlUYWdzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL0NpdHlUYWdzJztcbmltcG9ydCBTbWFsbEJhbm5lciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NpdHlCbG9jay9TbWFsbEJhbm5lcic7XG5cbmNvbnN0IEdWaXNpdGNhcmREaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLmNpdHlMaXN0IGxpJzoge1xuICAgIGNvbG9yOiAnIzNlM2UzZScsXG4gIH0sXG59KTtcbmNvbnN0IEdBZGRyZXNzRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIC5sb2NhdGlvbk1hcmtlcic6IHtcbiAgICBtaW5XaWR0aDogJzIwcHgnLFxuICAgIG1heFdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGVmdDogJzAnLFxuICAgIHRvcDogJzAnLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgfVxuICB9LFxufSk7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgVG9WaXNpdENhcmQgPSAoeyBpdGVtIH0pID0+IChcbiAgPEdWaXNpdGNhcmREaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggc2Jjd1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwXCI+XG4gICAgICA8U21hbGxCYW5uZXIgey4uLml0ZW19IC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDE1XCI+XG4gICAgICA8TGluayB0bz17aXRlbS51cmxTcG90bGlnaHR9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZjE2IGZ3OSBtMCBwYjE1IHBmYzNcIj57aXRlbS50aXRsZX08L2g0PlxuICAgICAgPC9MaW5rPlxuICAgICAgPEdBZGRyZXNzRGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iOCBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2NhdGlvbk1hcmtlciByZWxhdGl2ZSBibG9jayBtcjhcIj48TG9jYXRpb25NYXJrZXJJY29uIC8+PC9zcGFuPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIGZ3OSBwZmMzIG0wIGZsZXhGdWxsIGVsbGlwc2lzXCI+VGhlIHdpbGRsaWZlIHdhcmRlbiBtdW5uYXIgUE8sIGlkdWtraSBkaXN0LmtlcmFsYSwgaW5kaWE8L3A+XG4gICAgICA8L0dBZGRyZXNzRGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtMCBkeW5hbWljVGV4dEluaGVyaXQgZWxsaXBzaXNfdGhyZWVcIj57cGFyc2VyLnBhcnNlKGl0ZW0uZGVzY3JpcHRpb24pfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXR5TGlzdCBtdDhcIj5cbiAgICAgICAgPENpdHlUYWdzIHsuLi5pdGVtfS8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9HVmlzaXRjYXJkRGl2PlxuKTtcblxuVG9WaXNpdENhcmQucHJvcFR5cGVzID0ge1xuICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb1Zpc2l0Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=