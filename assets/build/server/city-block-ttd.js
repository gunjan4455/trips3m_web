require("source-map-support").install();
exports.ids = ["city-block-ttd"];
exports.modules = {

/***/ "./app-v2/screens/cityBlock/thingsToDo/ThingsToDo.js":
/*!***********************************************************!*\
  !*** ./app-v2/screens/cityBlock/thingsToDo/ThingsToDo.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parseCityBlockFilters = _interopRequireDefault(__webpack_require__(/*! helpers/parseCityBlockFilters */ "./app/helpers/parseCityBlockFilters.js"));

var _Guide = _interopRequireDefault(__webpack_require__(/*! modules/shared/Guide */ "./app-v2/modules/shared/Guide.js"));

var _CityBlockFilters = _interopRequireDefault(__webpack_require__(/*! modules/cityBlock/CityBlockFilters */ "./app-v2/modules/cityBlock/CityBlockFilters.js"));

var _loadMorePackages = _interopRequireDefault(__webpack_require__(/*! modules/shared/loadMorePackages */ "./app-v2/modules/shared/loadMorePackages/index.js"));

var _NoPackageCard = _interopRequireDefault(__webpack_require__(/*! modules/shared/NoPackageCard */ "./app-v2/modules/shared/NoPackageCard.js"));

var _ToVisitCard = _interopRequireDefault(__webpack_require__(/*! ./ToVisitCard */ "./app-v2/screens/cityBlock/thingsToDo/ToVisitCard.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let ThingsToDo = class ThingsToDo extends _react.Component {
  constructor() {
    super();

    this.loadMoreThingsToDoCards = (destination, city, tab, experience, query) => {
      const {
        filters
      } = (0, _parseCityBlockFilters.default)({
        query: query || {}
      });
      const queryParams = {
        offset: this.state.currentPage === 1 ? this.state.currentPage * 10 : this.state.currentPage * 5,
        limit: 5,
        things_to_do: true,
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
      this.props.loadMoreThingsToDoCards(payload);
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
    const tab = routes[routes.length - 1].tab;
    const experience = routes[routes.length - 1].experience;
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
      className: "mb8"
    }, _react.default.createElement(_ToVisitCard.default, {
      item: item,
      key: i
    }))))), data.destinationSchemes && data.destinationSchemes.length ? _react.default.createElement("div", {
      className: "m8 mt0"
    }, _react.default.createElement(_loadMorePackages.default, {
      packagesRemaining: data.totalDestinationSchemes - data.destinationSchemes.length,
      loadMorePackages: () => this.loadMoreThingsToDoCards(destination, city, tab, experience, location.query),
      currentPage: this.state.currentPage,
      title: "remaining Things To Do)"
    })) : _react.default.createElement("div", {
      className: "m8 mt0 p15 sbcw"
    }, _react.default.createElement(_NoPackageCard.default, {
      destination: destination
    })), data.filters && (data.filters.filterCategories || data.filters.filteredCities) ? _react.default.createElement(_CityBlockFilters.default, {
      filters: data.filters,
      applyFilters: applyFilters,
      tab: "things-to-do",
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
ThingsToDo.propTypes = {
  data: _propTypes.default.object.isRequired,
  params: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired,
  applyFilters: _propTypes.default.func.isRequired,
  resetPath: _propTypes.default.func.isRequired,
  loadMoreThingsToDoCards: _propTypes.default.func,
  resetFilters: _propTypes.default.func.isRequired,
  routes: _propTypes.default.array
};
ThingsToDo.defaultProps = {
  loadMoreThingsToDoCards: () => {},
  routes: []
};
var _default = ThingsToDo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/cityBlock/thingsToDo/ToVisitCard.js":
/*!************************************************************!*\
  !*** ./app-v2/screens/cityBlock/thingsToDo/ToVisitCard.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _CityTags = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/CityTags */ "./app-v2/modules/cityBlock/CityTags.js"));

var _SmallBanner = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/SmallBanner */ "./app-v2/modules/cityBlock/SmallBanner.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const GAddressDiv = _glamorous.default.p({
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
}) => _react.default.createElement("div", {
  className: "clearfix sbcw"
}, _react.default.createElement("div", {
  className: "col-xs-12 p0"
}, _react.default.createElement(_SmallBanner.default, _extends({
  bannerStyle: {}
}, item))), _react.default.createElement("div", {
  className: "col-xs-12 pt15 pb15"
}, _react.default.createElement(_reactRouter.Link, {
  to: item.urlSpotlight
}, _react.default.createElement("h4", {
  className: "f18 fw9 m0 pb15 pfc3"
}, item.title)), _react.default.createElement(GAddressDiv, {
  className: "relative mb15 f14p m0 flex alignCenter spaceBetween ellipsis"
}, _react.default.createElement("span", {
  className: "locationMarker relative block mr8"
}, _react.default.createElement(_Icon.LocationMarkerIcon, null)), _react.default.createElement("p", {
  className: "f14p fw9 pfc3 m0 flexFull ellipsis"
}, "The wildlife warden munnar PO, idukki dist. kerala, india")), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9jaXR5QmxvY2svdGhpbmdzVG9Eby9UaGluZ3NUb0RvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay90aGluZ3NUb0RvL1RvVmlzaXRDYXJkLmpzIl0sIm5hbWVzIjpbIlRoaW5nc1RvRG8iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImxvYWRNb3JlVGhpbmdzVG9Eb0NhcmRzIiwiZGVzdGluYXRpb24iLCJjaXR5IiwidGFiIiwiZXhwZXJpZW5jZSIsInF1ZXJ5IiwiZmlsdGVycyIsInF1ZXJ5UGFyYW1zIiwib2Zmc2V0Iiwic3RhdGUiLCJjdXJyZW50UGFnZSIsImxpbWl0IiwidGhpbmdzX3RvX2RvIiwibG9va3VwX3BhcmVudCIsInBheWxvYWQiLCJwcm9wcyIsInNldFN0YXRlIiwicmVzZXRGaWx0ZXJzIiwiYmluZCIsInZhbHVlcyIsInJlbmRlciIsImRhdGEiLCJsb2NhdGlvbiIsImFwcGx5RmlsdGVycyIsInBhcmFtcyIsInJlc2V0UGF0aCIsInJvdXRlcyIsImV4aXRJbnRlbnQiLCJsZW5ndGgiLCJ0aXRsZSIsImhlYWRpbmciLCJkZXNjcmlwdGlvbiIsImRlc3RpbmF0aW9uU2NoZW1lcyIsIm1hcCIsIml0ZW0iLCJpIiwidG90YWxEZXN0aW5hdGlvblNjaGVtZXMiLCJmaWx0ZXJDYXRlZ29yaWVzIiwiZmlsdGVyZWRDaXRpZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiR0FkZHJlc3NEaXYiLCJnbGFtb3JvdXMiLCJwIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsIm1heEhlaWdodCIsInBhcnNlciIsIlBhcnNlciIsIlRvVmlzaXRDYXJkIiwidXJsU3BvdGxpZ2h0IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7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QUE5QixDQVZGLENBSkYsQ0FERjs7QUFvQkF3QixZQUFZbkIsU0FBWixHQUF3QjtBQUN0QkwsUUFBTU0sbUJBQVVDLE1BQVYsQ0FBaUJDO0FBREQsQ0FBeEI7ZUFJZWdCLFciLCJmaWxlIjoiY2l0eS1ibG9jay10dGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHBhcnNlRmlsdGVycyBmcm9tICdoZWxwZXJzL3BhcnNlQ2l0eUJsb2NrRmlsdGVycyc7XG5pbXBvcnQgR3VpZGUgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR3VpZGUnO1xuaW1wb3J0IENpdHlCbG9ja0ZpbHRlcnMgZnJvbSAnbW9kdWxlcy9jaXR5QmxvY2svQ2l0eUJsb2NrRmlsdGVycyc7XG5pbXBvcnQgTG9hZE1vcmVQYWNrYWdlcyBmcm9tICdtb2R1bGVzL3NoYXJlZC9sb2FkTW9yZVBhY2thZ2VzJztcbmltcG9ydCBOb1BhY2thZ2VDYXJkIGZyb20gJ21vZHVsZXMvc2hhcmVkL05vUGFja2FnZUNhcmQnO1xuaW1wb3J0IFRvVmlzaXRDYXJkIGZyb20gJy4vVG9WaXNpdENhcmQnO1xuXG5jbGFzcyBUaGluZ3NUb0RvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIGN1cnJlbnRQYWdlOiAxXG4gICAgfTtcbiAgICB0aGlzLnJlc2V0RmlsdGVycyA9IHRoaXMucmVzZXRGaWx0ZXJzLmJpbmQodGhpcyk7XG4gIH1cblxuICByZXNldEZpbHRlcnMoKXtcbiAgICBjb25zdCB2YWx1ZXMgPSB7fTtcbiAgICB0aGlzLnByb3BzLnJlc2V0RmlsdGVycyh2YWx1ZXMpO1xuICB9XG5cbiAgbG9hZE1vcmVUaGluZ3NUb0RvQ2FyZHMgPSAoZGVzdGluYXRpb24sIGNpdHksIHRhYiwgZXhwZXJpZW5jZSwgcXVlcnkpID0+IHtcbiAgICBjb25zdCB7IGZpbHRlcnMgfSA9IHBhcnNlRmlsdGVycyh7XG4gICAgICBxdWVyeTogcXVlcnkgfHwge31cbiAgICB9KTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IHtcbiAgICAgIG9mZnNldDogdGhpcy5zdGF0ZS5jdXJyZW50UGFnZSA9PT0gMSA/ICh0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICogMTApIDogKHRoaXMuc3RhdGUuY3VycmVudFBhZ2UgKiA1KSxcbiAgICAgIGxpbWl0OiA1LFxuICAgICAgdGhpbmdzX3RvX2RvOiB0cnVlLFxuICAgICAgbG9va3VwX3BhcmVudDogZmFsc2UsXG4gICAgICBjaXR5OiBjaXR5LFxuICAgICAgdGFiOiB0YWIsXG4gICAgICBleHBlcmllbmNlOiBleHBlcmllbmNlXG4gICAgfTtcbiAgICBjb25zdCBwYXlsb2FkID0geyBkZXN0aW5hdGlvbiwgZmlsdGVycywgcXVlcnlQYXJhbXMgfTtcbiAgICB0aGlzLnByb3BzLmxvYWRNb3JlVGhpbmdzVG9Eb0NhcmRzKHBheWxvYWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQYWdlOiB0aGlzLnN0YXRlLmN1cnJlbnRQYWdlICsgMX0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGxvY2F0aW9uLCBhcHBseUZpbHRlcnMsIHBhcmFtcywgcmVzZXRQYXRoLCByb3V0ZXMsIGV4aXRJbnRlbnR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRlc3RpbmF0aW9uLCBjaXR5IH0gPSBwYXJhbXM7XG4gICAgY29uc3QgdGFiID0gcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXS50YWI7XG4gICAgY29uc3QgZXhwZXJpZW5jZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0uZXhwZXJpZW5jZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibTggbXQwXCI+XG4gICAgICAgICAgICA8R3VpZGVcbiAgICAgICAgICAgICAgZ3VpZGU9e3sgdGl0bGU6IGRhdGEudGl0bGUsIGhlYWRpbmc6IGRhdGEuaGVhZGluZywgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleGl0SW50ZW50fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDBcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzICYmIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjhcIj48VG9WaXNpdENhcmQgaXRlbT17aXRlbX0ga2V5PXtpfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzICYmIGRhdGEuZGVzdGluYXRpb25TY2hlbWVzLmxlbmd0aCA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MFwiPlxuICAgICAgICAgICAgICA8TG9hZE1vcmVQYWNrYWdlc1xuICAgICAgICAgICAgICAgIHBhY2thZ2VzUmVtYWluaW5nPXtkYXRhLnRvdGFsRGVzdGluYXRpb25TY2hlbWVzIC0gZGF0YS5kZXN0aW5hdGlvblNjaGVtZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgIGxvYWRNb3JlUGFja2FnZXM9eygpID0+IHRoaXMubG9hZE1vcmVUaGluZ3NUb0RvQ2FyZHMoZGVzdGluYXRpb24sIGNpdHksIHRhYiwgZXhwZXJpZW5jZSwgbG9jYXRpb24ucXVlcnkpfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPSdyZW1haW5pbmcgVGhpbmdzIFRvIERvKSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm04IG10MCBwMTUgc2Jjd1wiPjxOb1BhY2thZ2VDYXJkIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn0gLz48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgZGF0YS5maWx0ZXJzICYmIChkYXRhLmZpbHRlcnMuZmlsdGVyQ2F0ZWdvcmllcyB8fCBkYXRhLmZpbHRlcnMuZmlsdGVyZWRDaXRpZXMpID9cbiAgICAgICAgICAgIDxDaXR5QmxvY2tGaWx0ZXJzXG4gICAgICAgICAgICAgIGZpbHRlcnM9e2RhdGEuZmlsdGVyc31cbiAgICAgICAgICAgICAgYXBwbHlGaWx0ZXJzPXthcHBseUZpbHRlcnN9XG4gICAgICAgICAgICAgIHRhYj1cInRoaW5ncy10by1kb1wiXG4gICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICBlbmFibGVSZWluaXRpYWxpemVcbiAgICAgICAgICAgICAgcmVzZXRQYXRoPXtyZXNldFBhdGh9XG4gICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgICAgIGFwcGx5RmlsdGVycyh7IHZhbHVlcywgbG9jYXRpb24sIGZpbHRlcnM6IGRhdGEuZmlsdGVycywgcGFyYW1zIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZXNldEZvcm09e3RoaXMucmVzZXRGaWx0ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblRoaW5nc1RvRG8ucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHBhcmFtczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFwcGx5RmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVzZXRQYXRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkTW9yZVRoaW5nc1RvRG9DYXJkczogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlc2V0RmlsdGVyczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcm91dGVzOiBQcm9wVHlwZXMuYXJyYXlcbn07XG5cblRoaW5nc1RvRG8uZGVmYXVsdFByb3BzID0ge1xuICBsb2FkTW9yZVRoaW5nc1RvRG9DYXJkczogKCkgPT4ge30sXG4gIHJvdXRlczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRoaW5nc1RvRG87XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IExvY2F0aW9uTWFya2VySWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBDaXR5VGFncyBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NpdHlCbG9jay9DaXR5VGFncyc7XG5pbXBvcnQgU21hbGxCYW5uZXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9jaXR5QmxvY2svU21hbGxCYW5uZXInO1xuXG5jb25zdCBHQWRkcmVzc0RpdiA9IGdsYW1vcm91cy5wKHtcbiAgJyYgLmxvY2F0aW9uTWFya2VyJzoge1xuICAgIG1pbldpZHRoOiAnMjBweCcsXG4gICAgbWF4V2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICBsZWZ0OiAnMCcsXG4gICAgdG9wOiAnMCcsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICB9XG4gIH0sXG59KTtcbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgVG9WaXNpdENhcmQgPSAoeyBpdGVtIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBzYmN3XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDBcIj5cbiAgICAgIDxTbWFsbEJhbm5lciBiYW5uZXJTdHlsZT17e319IHsuLi5pdGVtfSAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHB0MTUgcGIxNVwiPlxuICAgICAgPExpbmsgdG89e2l0ZW0udXJsU3BvdGxpZ2h0fT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImYxOCBmdzkgbTAgcGIxNSBwZmMzXCI+e2l0ZW0udGl0bGV9PC9oND5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxHQWRkcmVzc0RpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYjE1IGYxNHAgbTAgZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gZWxsaXBzaXNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9jYXRpb25NYXJrZXIgcmVsYXRpdmUgYmxvY2sgbXI4XCI+PExvY2F0aW9uTWFya2VySWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBmdzkgcGZjMyBtMCBmbGV4RnVsbCBlbGxpcHNpc1wiPlRoZSB3aWxkbGlmZSB3YXJkZW4gbXVubmFyIFBPLFxuICAgICAgICBpZHVra2kgZGlzdC5cbiAgICAgICAgICBrZXJhbGEsIGluZGlhPC9wPjwvR0FkZHJlc3NEaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0wIGR5bmFtaWNUZXh0SW5oZXJpdCBlbGxpcHNpc190aHJlZVwiPntwYXJzZXIucGFyc2UoaXRlbS5kZXNjcmlwdGlvbil9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpdHlMaXN0IG10OFwiPjxDaXR5VGFncyB7Li4uaXRlbX0gLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Ub1Zpc2l0Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9WaXNpdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9