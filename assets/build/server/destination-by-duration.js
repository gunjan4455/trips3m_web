require("source-map-support").install();
exports.ids = ["destination-by-duration"];
exports.modules = {

/***/ "./app-v2/modules/home/destinationByDuration/DestinationByDuration.js":
/*!****************************************************************************!*\
  !*** ./app-v2/modules/home/destinationByDuration/DestinationByDuration.js ***!
  \****************************************************************************/
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

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _SlideItem = _interopRequireDefault(__webpack_require__(/*! ./SlideItem */ "./app-v2/modules/home/destinationByDuration/SlideItem.js"));

var _Swiper = _interopRequireDefault(__webpack_require__(/*! modules/shared/Swiper */ "./app-v2/modules/shared/Swiper.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _styleCm = _interopRequireDefault(__webpack_require__(/*! ./style.cm.scss */ "./app-v2/modules/home/destinationByDuration/style.cm.scss"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let DestinationByDuration = (_temp2 = _class = class DestinationByDuration extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      durations: [],
      selectedFilter: {
        isDomestic: false,
        isDefault: true //international: false

      },
      slider: [],
      selectedDuration: '4-6',
      showLoader: false
    }, this.initialize = props => {
      const {
        destinations,
        destination
      } = props;
      const {
        selectedFilter
      } = this.state;

      if (!(0, _isEmpty2.default)(destinations) && ['international', 'india'].indexOf(destination) !== -1) {
        const isDomestic = destination === 'india';
        const key = domestic ? 'domestic' : 'international';
        this.setState({
          selectedFilter: _objectSpread({}, selectedFilter, {
            isDomestic,
            isDefault: false //international: !domestic

          })
        }, () => this.selectFilter(destinations[key]));
      } else if (!(0, _isEmpty2.default)(destinations)) {
        this.selectFilter(destinations.default);
      }
    }, this.changeFilter = filter => {
      const {
        selectedFilter
      } = this.state;
      const filterVal = filter;
      const isDomestic = !filter.title.includes('International');
      this.setState({
        showLoader: true
      });
      setTimeout(() => {
        this.setState({
          selectedFilter: {
            isDomestic,
            isDefault: false
          },
          showLoader: false
        }, () => {
          this.selectFilter(filterVal);
        });
      }, 700);
      this.props.trackSegmentEvent({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'Explore Bestselling Packages',
        object: 'Destination Type',
        cta: isDomestic ? 'Domestic' : 'International'
      });
    }, this.fetchDuration = selected => selected.durations.find(duration => duration.value === this.state.selectedDuration), this.selectFilter = filter => {
      if (filter) {
        const {
          selectedFilter
        } = this.state;
        const {
          destinations
        } = this.props;
        const {
          isDefault,
          isDomestic
        } = selectedFilter;
        let duration;
        let defaultDuration;

        if ((0, _isEmpty2.default)(destinations)) {
          return;
        }

        if (isDefault) {
          defaultDuration = this.fetchDuration(destinations.default);
          duration = destinations.default.durations;
        } else if (isDomestic) {
          defaultDuration = this.fetchDuration(destinations.domestic);
          duration = destinations.domestic.durations;
        } else {
          defaultDuration = this.fetchDuration(destinations.international);
          duration = destinations.international.durations;
        }

        this.setState({
          durations: duration,
          slider: defaultDuration.destinations,
          selectedDuration: defaultDuration.value
        });
      }
    }, this.renderInput = data => {
      const {
        selectedFilter: {
          isDefault,
          isDomestic
        }
      } = this.state;
      const label = data.title.includes('International') ? 'International' : 'Within India ';
      const domInput = data.key == 'domestic';
      const isChecked = !isDefault && (domInput ? isDomestic : !isDomestic);
      return _react.default.createElement("div", null, _react.default.createElement("input", {
        type: "radio",
        name: "packageByDestination",
        className: "input-chips",
        id: data.title,
        value: label //className="checkbox-common at_indiafilter"
        ,
        checked: isChecked,
        onChange: e => this.changeFilter(data, e)
      }), _react.default.createElement("label", {
        htmlFor: data.title
      }, label));
    }, this.changeDuration = set => {
      this.setState({
        showLoader: true
      });
      setTimeout(() => {
        this.setState({
          selectedDuration: set.value,
          slider: set.destinations,
          showLoader: false
        });
      }, 700);
      const cta = `${set.value.replace('-', '_to_')}_days`;
      this.props.trackSegmentEvent({
        event: _segmentEvents.ORGANISM_CLICKED,
        section: 'Explore Bestselling Packages',
        object: 'Trip days',
        cta
      });
    }, this.renderCards = ({
      slider,
      selectedDuration
    }) => {
      return slider.reduce((accumulator, slide, index) => {
        if (slide.packageCount > 0) {
          return accumulator.concat(_react.default.createElement("div", {
            key: index
          }, _react.default.createElement(_SlideItem.default, _extends({}, slide, {
            link: `/${slide.link}?days[]=${selectedDuration}`
          }))));
        }

        return accumulator;
      }, []);
    }, this.renderSliderOrLoader = ({
      slider,
      showLoader,
      selectedDuration
    }) => {
      const cards = this.renderCards({
        slider,
        selectedDuration
      });
      return !showLoader && cards.length ? _react.default.createElement(_Swiper.default, {
        ssrAnimation: {
          width: 120,
          height: 150
        },
        slideClass: "slide",
        spaceBetween: 15,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        id: "packageByDuration",
        slidesPerView: "auto",
        isSmallSwiper: true //key={selectedDuration + domestic + international}

      }, cards) : DestinationByDuration.renderLoader(showLoader);
    }, _temp;
  }

  componentWillMount() {
    this.initialize(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.initialize(nextProps);
  }

  static renderLoader(showLoader) {
    return showLoader ? _react.default.createElement("div", {
      className: `text-center relative ${_styleCm.default.loader}`
    }, _react.default.createElement(_Img.default, {
      src: `${_appConfig.default.assets.images}/public-product/mkt/dot-loader.gif`,
      className: "absolute-center"
    })) : _react.default.createElement("div", {
      className: "p48 sbc5"
    }, _react.default.createElement("div", {
      className: `relative block text-center ${_styleCm.default.icon}`
    }, _react.default.createElement(_Icon.LookingIcon, null)), _react.default.createElement("p", {
      className: "f16p fw9 mt15 mb0 text-center"
    }, "Couldn't find any destination. Try other duration."));
  }

  render() {
    const {
      destinations
    } = this.props;
    const {
      durations,
      selectedDuration,
      slider,
      selectedFilter: {
        domestic,
        international
      },
      showLoader
    } = this.state;
    return _react.default.createElement("div", null, destinations && !(0, _isEmpty2.default)(destinations) ? _react.default.createElement(_reactScroll.Element, {
      name: "section__allpackages",
      className: "clearfix",
      id: "trips_by_duration"
    }, _react.default.createElement("div", {
      className: "pl24 pr24"
    }, _react.default.createElement("p", {
      className: "f20 fw9 mb24"
    }, "Explore best selling packages"), _react.default.createElement("div", {
      className: "flex spaceBetween at_packages_tabGroup"
    }, _react.default.createElement("div", {
      className: "flexFull pr8 at_packages_tab"
    }, this.renderInput(destinations.international)), _react.default.createElement("div", {
      className: "flexFull pl8 at_packages_tab"
    }, this.renderInput(destinations.domestic)))), _react.default.createElement("div", {
      className: "pt32 pb24"
    }, _react.default.createElement(_Swiper.default, {
      slideClass: "slide",
      spaceBetween: 8,
      slidesOffsetBefore: 32,
      slidesOffsetAfter: 24,
      id: "destination_duration_filters",
      slidesPerView: "auto",
      isSmallSwiper: true
    }, durations.map((set, i) => _react.default.createElement("div", {
      key: i
    }, _react.default.createElement("input", {
      type: "radio",
      className: "input-chips chips_sm",
      name: "destination_duration" //verify
      ,
      id: set.title,
      checked: set.value === selectedDuration,
      onChange: () => this.changeDuration(set)
    }), _react.default.createElement("label", {
      htmlFor: set.title
    }, set.title))))), this.renderSliderOrLoader({
      slider,
      showLoader,
      selectedDuration,
      domestic,
      international
    })) : null);
  }

}, _class.defaultProps = {
  destinations: {},
  destination: '',
  trackSegmentEvent: () => {}
}, _class.propTypes = {
  destinations: _propTypes.default.object,
  destination: _propTypes.default.string,
  trackSegmentEvent: _propTypes.default.func
}, _temp2);
var _default = DestinationByDuration;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/destinationByDuration/SlideItem.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/home/destinationByDuration/SlideItem.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SlideItem = ({
  imagePath,
  imagekitUrl,
  name,
  packageCount,
  startingPrice,
  link,
  id
}) => {
  let isComponentViewed = false;

  const onSensorChange = isVisible => {
    if (!isComponentViewed && isVisible) {
      isComponentViewed = isVisible;
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.DESTINATION_VIEWED,
        category: `Destination:${name}`,
        section: 'Best Seller Destinations',
        object: `Destination/${id}`,
        cta: '',
        destination_id: id,
        value: startingPrice
      });
    }
  };

  const trackSegmentEvent = () => {
    (0, _segmentEvents.trackSegment)({
      event: _segmentEvents.ORGANISM_CLICKED,
      category: `HOME PAGE`,
      section: 'Explore Bestselling Packages',
      object: `Package Card`,
      cta: (0, _parsers.capitalizeFirstLetter)(name)
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement(_reactRouter.Link, {
    to: link,
    onClick: () => trackSegmentEvent()
  }, _react.default.createElement("div", {
    className: "radius4 overflowh",
    style: {
      width: '120px',
      height: '150px'
    }
  }, _react.default.createElement(_Img.default, {
    ikSrc: imagekitUrl,
    src: imagePath,
    alt: name,
    width: 120,
    height: 150
  })), _react.default.createElement(_reactVisibilitySensor.default, {
    onChange: onSensorChange,
    intervalDelay: 3000
  }), _react.default.createElement("p", {
    className: "f14p fw9 pfc3 mt8",
    style: {
      width: '120px'
    }
  }, (0, _parsers.capitalizeFirstLetter)(name)), _react.default.createElement("p", {
    className: "f10 pfc3 mt4"
  }, "Starting at: ", (0, _parsers.parsePrice)({
    price: startingPrice,
    appendOnly: false
  }))));
};

SlideItem.propTypes = {
  link: _propTypes.default.string.isRequired,
  imagePath: _propTypes.default.string.isRequired,
  imagekitUrl: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  packageCount: _propTypes.default.number.isRequired,
  startingPrice: _propTypes.default.number.isRequired,
  id: _propTypes.default.number.isRequired,
  bestTimeToVisit: _propTypes.default.array.isRequired
};
var _default = SlideItem;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/home/destinationByDuration/style.cm.scss":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/home/destinationByDuration/style.cm.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"loader": "_131qU4F-JztMBJeRkh7w2R",
	"icon": "_1dLZa7qrurNRwHjF3N6mFs"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob21lL2Rlc3RpbmF0aW9uQnlEdXJhdGlvbi9EZXN0aW5hdGlvbkJ5RHVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvaG9tZS9kZXN0aW5hdGlvbkJ5RHVyYXRpb24vU2xpZGVJdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2hvbWUvZGVzdGluYXRpb25CeUR1cmF0aW9uL3N0eWxlLmNtLnNjc3MiXSwibmFtZXMiOlsiRGVzdGluYXRpb25CeUR1cmF0aW9uIiwiQ29tcG9uZW50Iiwic3RhdGUiLCJkdXJhdGlvbnMiLCJzZWxlY3RlZEZpbHRlciIsImlzRG9tZXN0aWMiLCJpc0RlZmF1bHQiLCJzbGlkZXIiLCJzZWxlY3RlZER1cmF0aW9uIiwic2hvd0xvYWRlciIsImluaXRpYWxpemUiLCJwcm9wcyIsImRlc3RpbmF0aW9ucyIsImRlc3RpbmF0aW9uIiwiaW5kZXhPZiIsImtleSIsImRvbWVzdGljIiwic2V0U3RhdGUiLCJzZWxlY3RGaWx0ZXIiLCJkZWZhdWx0IiwiY2hhbmdlRmlsdGVyIiwiZmlsdGVyIiwiZmlsdGVyVmFsIiwidGl0bGUiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJ0cmFja1NlZ21lbnRFdmVudCIsImV2ZW50IiwiT1JHQU5JU01fQ0xJQ0tFRCIsInNlY3Rpb24iLCJvYmplY3QiLCJjdGEiLCJmZXRjaER1cmF0aW9uIiwic2VsZWN0ZWQiLCJmaW5kIiwiZHVyYXRpb24iLCJ2YWx1ZSIsImRlZmF1bHREdXJhdGlvbiIsImludGVybmF0aW9uYWwiLCJyZW5kZXJJbnB1dCIsImRhdGEiLCJsYWJlbCIsImRvbUlucHV0IiwiaXNDaGVja2VkIiwiZSIsImNoYW5nZUR1cmF0aW9uIiwic2V0IiwicmVwbGFjZSIsInJlbmRlckNhcmRzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJzbGlkZSIsImluZGV4IiwicGFja2FnZUNvdW50IiwiY29uY2F0IiwibGluayIsInJlbmRlclNsaWRlck9yTG9hZGVyIiwiY2FyZHMiLCJsZW5ndGgiLCJ3aWR0aCIsImhlaWdodCIsInJlbmRlckxvYWRlciIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJzdHlsZXMiLCJsb2FkZXIiLCJjb25maWciLCJhc3NldHMiLCJpbWFnZXMiLCJpY29uIiwicmVuZGVyIiwibWFwIiwiaSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJTbGlkZUl0ZW0iLCJpbWFnZVBhdGgiLCJpbWFnZWtpdFVybCIsIm5hbWUiLCJzdGFydGluZ1ByaWNlIiwiaWQiLCJpc0NvbXBvbmVudFZpZXdlZCIsIm9uU2Vuc29yQ2hhbmdlIiwiaXNWaXNpYmxlIiwiREVTVElOQVRJT05fVklFV0VEIiwiY2F0ZWdvcnkiLCJkZXN0aW5hdGlvbl9pZCIsInByaWNlIiwiYXBwZW5kT25seSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJiZXN0VGltZVRvVmlzaXQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztJQUVNQSxxQixzQkFBTixNQUFNQSxxQkFBTixTQUFvQ0MsZ0JBQXBDLENBQThDO0FBQUE7QUFBQTs7QUFBQSx3Q0FhNUNDLEtBYjRDLEdBYXBDO0FBQ05DLGlCQUFXLEVBREw7QUFFTkMsc0JBQWdCO0FBQ2RDLG9CQUFZLEtBREU7QUFFZEMsbUJBQVcsSUFGRyxDQUdkOztBQUhjLE9BRlY7QUFPTkMsY0FBUSxFQVBGO0FBUU5DLHdCQUFrQixLQVJaO0FBU05DLGtCQUFZO0FBVE4sS0Fib0MsT0F5QjVDQyxVQXpCNEMsR0F5QjlCQyxLQUFELElBQVc7QUFDdEIsWUFBTTtBQUFFQyxvQkFBRjtBQUFnQkM7QUFBaEIs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UTtBQUF4RSxJQURGLENBSkYsRUFPRSw2QkFBQyw4QkFBRDtBQUFRLGNBQVVJLGNBQWxCO0FBQWtDLG1CQUFlO0FBQWpELElBUEYsRUFRRTtBQUFHLGVBQVUsbUJBQWI7QUFBaUMsV0FBTztBQUFDM0IsYUFBTztBQUFSO0FBQXhDLEtBQTJELG9DQUFzQnVCLElBQXRCLENBQTNELENBUkYsRUFTRTtBQUFHLGVBQVU7QUFBYixzQkFBMEMseUJBQVc7QUFBRVMsV0FBT1IsYUFBVDtBQUF3QlMsZ0JBQVk7QUFBcEMsR0FBWCxDQUExQyxDQVRGLENBREYsQ0FERjtBQWVELENBMUNEOztBQTRDQWIsVUFBVUosU0FBVixHQUFzQjtBQUNwQnBCLFFBQU1xQixtQkFBVUMsTUFBVixDQUFpQmdCLFVBREg7QUFFcEJiLGFBQVdKLG1CQUFVQyxNQUFWLENBQWlCZ0IsVUFGUjtBQUdwQlosZUFBYUwsbUJBQVVDLE1BQVYsQ0FBaUJnQixVQUhWO0FBSXBCWCxRQUFNTixtQkFBVUMsTUFBVixDQUFpQmdCLFVBSkg7QUFLcEJ4QyxnQkFBY3VCLG1CQUFVa0IsTUFBVixDQUFpQkQsVUFMWDtBQU1wQlYsaUJBQWVQLG1CQUFVa0IsTUFBVixDQUFpQkQsVUFOWjtBQU9wQlQsTUFBSVIsbUJBQVVrQixNQUFWLENBQWlCRCxVQVBEO0FBUXBCRSxtQkFBaUJuQixtQkFBVW9CLEtBQVYsQ0FBZ0JIO0FBUmIsQ0FBdEI7ZUFXZWQsUzs7Ozs7Ozs7Ozs7O0FDakVmO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiZGVzdGluYXRpb24tYnktZHVyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHsgTG9va2luZ0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgU2xpZGVJdGVtIGZyb20gJy4vU2xpZGVJdGVtJztcbmltcG9ydCBTd2lwZXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvU3dpcGVyJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IEltZyBmcm9tICdjb21wb25lbnRzL0NvbW1vbi9JbWcnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHBDb25maWcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY20uc2Nzcyc7XG5cbmNsYXNzIERlc3RpbmF0aW9uQnlEdXJhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVzdGluYXRpb25zOiB7fSxcbiAgICBkZXN0aW5hdGlvbjogJycsXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6ICgpID0+IHt9XG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkZXN0aW5hdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgZHVyYXRpb25zOiBbXSxcbiAgICBzZWxlY3RlZEZpbHRlcjoge1xuICAgICAgaXNEb21lc3RpYzogZmFsc2UsXG4gICAgICBpc0RlZmF1bHQ6IHRydWVcbiAgICAgIC8vaW50ZXJuYXRpb25hbDogZmFsc2VcbiAgICB9LFxuICAgIHNsaWRlcjogW10sXG4gICAgc2VsZWN0ZWREdXJhdGlvbjogJzQtNicsXG4gICAgc2hvd0xvYWRlcjogZmFsc2VcbiAgfTtcblxuICBpbml0aWFsaXplID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbnMsIGRlc3RpbmF0aW9uIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghX2lzRW1wdHkoZGVzdGluYXRpb25zKSAmJiBbJ2ludGVybmF0aW9uYWwnLCAnaW5kaWEnXS5pbmRleE9mKGRlc3RpbmF0aW9uKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGlzRG9tZXN0aWMgPSBkZXN0aW5hdGlvbiA9PT0gJ2luZGlhJztcbiAgICAgIGNvbnN0IGtleSA9IGRvbWVzdGljID8gJ2RvbWVzdGljJyA6ICdpbnRlcm5hdGlvbmFsJztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZEZpbHRlcjoge1xuICAgICAgICAgIC4uLnNlbGVjdGVkRmlsdGVyLFxuICAgICAgICAgIGlzRG9tZXN0aWMsXG4gICAgICAgICAgaXNEZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIC8vaW50ZXJuYXRpb25hbDogIWRvbWVzdGljXG4gICAgICAgIH1cbiAgICAgIH0sICgpID0+IHRoaXMuc2VsZWN0RmlsdGVyKGRlc3RpbmF0aW9uc1trZXldKSk7XG4gICAgfSBlbHNlIGlmICghX2lzRW1wdHkoZGVzdGluYXRpb25zKSkge1xuICAgICAgdGhpcy5zZWxlY3RGaWx0ZXIoZGVzdGluYXRpb25zLmRlZmF1bHQpO1xuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLmluaXRpYWxpemUobmV4dFByb3BzKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJMb2FkZXIoc2hvd0xvYWRlcikge1xuICAgIHJldHVybiBzaG93TG9hZGVyID9cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1jZW50ZXIgcmVsYXRpdmUgJHtzdHlsZXMubG9hZGVyfWB9PlxuICAgICAgICA8SW1nXG4gICAgICAgICAgc3JjPXtgJHtjb25maWcuYXNzZXRzLmltYWdlc30vcHVibGljLXByb2R1Y3QvbWt0L2RvdC1sb2FkZXIuZ2lmYH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZS1jZW50ZXJcIiAvPlxuICAgICAgPC9kaXY+IDpcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDQ4IHNiYzVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBibG9jayB0ZXh0LWNlbnRlciAke3N0eWxlcy5pY29ufWB9PlxuICAgICAgICAgIDxMb29raW5nSWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2cCBmdzkgbXQxNSBtYjAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBDb3VsZG4ndCBmaW5kIGFueSBkZXN0aW5hdGlvbi4gVHJ5IG90aGVyIGR1cmF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj47XG4gIH1cblxuICBjaGFuZ2VGaWx0ZXIgPSAoZmlsdGVyKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmaWx0ZXJWYWwgPSBmaWx0ZXI7XG4gICAgY29uc3QgaXNEb21lc3RpYyA9ICFmaWx0ZXIudGl0bGUuaW5jbHVkZXMoJ0ludGVybmF0aW9uYWwnKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0xvYWRlcjogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZEZpbHRlcjogeyBpc0RvbWVzdGljLCBpc0RlZmF1bHQ6IGZhbHNlIH0sIHNob3dMb2FkZXI6IGZhbHNlXG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0RmlsdGVyKGZpbHRlclZhbCk7XG4gICAgICB9KTtcbiAgICB9LCA3MDApO1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnRXhwbG9yZSBCZXN0c2VsbGluZyBQYWNrYWdlcycsXG4gICAgICBvYmplY3Q6ICdEZXN0aW5hdGlvbiBUeXBlJyxcbiAgICAgIGN0YTogaXNEb21lc3RpYyA/ICdEb21lc3RpYyc6ICdJbnRlcm5hdGlvbmFsJ1xuICAgIH0pO1xuXG4gIH07XG5cbiAgZmV0Y2hEdXJhdGlvbiA9IChzZWxlY3RlZCkgPT4gc2VsZWN0ZWQuZHVyYXRpb25zLmZpbmQoKGR1cmF0aW9uKSA9PiAoZHVyYXRpb24udmFsdWUgPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWREdXJhdGlvbikpO1xuXG4gIHNlbGVjdEZpbHRlciA9IChmaWx0ZXIpID0+IHtcbiAgICBpZiAoZmlsdGVyKSB7XG4gICAgICBjb25zdCB7IHNlbGVjdGVkRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBkZXN0aW5hdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGlzRGVmYXVsdCwgaXNEb21lc3RpYyB9ID0gc2VsZWN0ZWRGaWx0ZXI7XG4gICAgICBsZXQgZHVyYXRpb247XG4gICAgICBsZXQgZGVmYXVsdER1cmF0aW9uO1xuXG4gICAgICBpZiAoX2lzRW1wdHkoZGVzdGluYXRpb25zKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKGlzRGVmYXVsdCkge1xuICAgICAgICBkZWZhdWx0RHVyYXRpb24gPSB0aGlzLmZldGNoRHVyYXRpb24oZGVzdGluYXRpb25zLmRlZmF1bHQpO1xuICAgICAgICBkdXJhdGlvbiA9IGRlc3RpbmF0aW9ucy5kZWZhdWx0LmR1cmF0aW9ucztcbiAgICAgIH0gZWxzZSBpZihpc0RvbWVzdGljKSB7XG4gICAgICAgIGRlZmF1bHREdXJhdGlvbiA9IHRoaXMuZmV0Y2hEdXJhdGlvbihkZXN0aW5hdGlvbnMuZG9tZXN0aWMpO1xuICAgICAgICBkdXJhdGlvbiA9IGRlc3RpbmF0aW9ucy5kb21lc3RpYy5kdXJhdGlvbnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0RHVyYXRpb24gPSB0aGlzLmZldGNoRHVyYXRpb24oZGVzdGluYXRpb25zLmludGVybmF0aW9uYWwpO1xuICAgICAgICBkdXJhdGlvbiA9IGRlc3RpbmF0aW9ucy5pbnRlcm5hdGlvbmFsLmR1cmF0aW9ucztcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGR1cmF0aW9uczogZHVyYXRpb24sXG4gICAgICAgIHNsaWRlcjogZGVmYXVsdER1cmF0aW9uLmRlc3RpbmF0aW9ucyxcbiAgICAgICAgc2VsZWN0ZWREdXJhdGlvbjogZGVmYXVsdER1cmF0aW9uLnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVySW5wdXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRGaWx0ZXI6IHtpc0RlZmF1bHQsIGlzRG9tZXN0aWN9IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGxhYmVsID0gZGF0YS50aXRsZS5pbmNsdWRlcygnSW50ZXJuYXRpb25hbCcpID8gJ0ludGVybmF0aW9uYWwnIDogJ1dpdGhpbiBJbmRpYSAnO1xuICAgIGNvbnN0IGRvbUlucHV0ID0gZGF0YS5rZXkgPT0gJ2RvbWVzdGljJztcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAhaXNEZWZhdWx0ICYmIChkb21JbnB1dCA/IGlzRG9tZXN0aWM6ICFpc0RvbWVzdGljICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgbmFtZT0ncGFja2FnZUJ5RGVzdGluYXRpb24nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY2hpcHNcIlxuICAgICAgICAgIGlkPXtkYXRhLnRpdGxlfVxuICAgICAgICAgIHZhbHVlPXtsYWJlbH1cbiAgICAgICAgICAvL2NsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vbiBhdF9pbmRpYWZpbHRlclwiXG4gICAgICAgICAgY2hlY2tlZD17aXNDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VGaWx0ZXIoZGF0YSwgZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPXtkYXRhLnRpdGxlfT57bGFiZWx9PC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY2hhbmdlRHVyYXRpb24gPSAoc2V0KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dMb2FkZXI6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWREdXJhdGlvbjogc2V0LnZhbHVlLCBzbGlkZXI6IHNldC5kZXN0aW5hdGlvbnMsIHNob3dMb2FkZXI6IGZhbHNlIH0pO1xuICAgIH0sIDcwMCk7XG4gICAgY29uc3QgY3RhID0gYCR7c2V0LnZhbHVlLnJlcGxhY2UoJy0nLCdfdG9fJyl9X2RheXNgO1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgZXZlbnQ6IE9SR0FOSVNNX0NMSUNLRUQsXG4gICAgICBzZWN0aW9uOiAnRXhwbG9yZSBCZXN0c2VsbGluZyBQYWNrYWdlcycsXG4gICAgICBvYmplY3Q6ICdUcmlwIGRheXMnLFxuICAgICAgY3RhXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ2FyZHMgPSAoeyBzbGlkZXIsIHNlbGVjdGVkRHVyYXRpb24gfSkgPT4ge1xuICAgIHJldHVybiBzbGlkZXIucmVkdWNlKChhY2N1bXVsYXRvciwgc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc2xpZGUucGFja2FnZUNvdW50ID4gMCkge1xuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IuY29uY2F0KDxkaXYga2V5PXtpbmRleH0gPlxuICAgICAgICAgIDxTbGlkZUl0ZW0gey4uLnNsaWRlfSBsaW5rPXtgLyR7c2xpZGUubGlua30/ZGF5c1tdPSR7c2VsZWN0ZWREdXJhdGlvbn1gfSAvPlxuICAgICAgICA8L2Rpdj4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICByZW5kZXJTbGlkZXJPckxvYWRlciA9ICh7IHNsaWRlciwgc2hvd0xvYWRlciwgc2VsZWN0ZWREdXJhdGlvbn0pID0+IHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucmVuZGVyQ2FyZHMoeyBzbGlkZXIsIHNlbGVjdGVkRHVyYXRpb24gfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICFzaG93TG9hZGVyICYmIGNhcmRzLmxlbmd0aCA/XG4gICAgICAgIDxTd2lwZXJcbiAgICAgICAgICBzc3JBbmltYXRpb249e3sgd2lkdGg6IDEyMCwgaGVpZ2h0OiAxNTAgfX1cbiAgICAgICAgICBzbGlkZUNsYXNzPVwic2xpZGVcIlxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTV9XG4gICAgICAgICAgc2xpZGVzT2Zmc2V0QmVmb3JlPXsyNH1cbiAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcj17MjR9XG4gICAgICAgICAgaWQ9J3BhY2thZ2VCeUR1cmF0aW9uJ1xuICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICBpc1NtYWxsU3dpcGVyPXt0cnVlfVxuICAgICAgICAgIC8va2V5PXtzZWxlY3RlZER1cmF0aW9uICsgZG9tZXN0aWMgKyBpbnRlcm5hdGlvbmFsfVxuICAgICAgICA+XG4gICAgICAgICAge2NhcmRzfVxuICAgICAgICA8L1N3aXBlcj4gOlxuICAgICAgICBEZXN0aW5hdGlvbkJ5RHVyYXRpb24ucmVuZGVyTG9hZGVyKHNob3dMb2FkZXIpXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgZHVyYXRpb25zLCBzZWxlY3RlZER1cmF0aW9uLCBzbGlkZXIsIHNlbGVjdGVkRmlsdGVyOiB7IGRvbWVzdGljLCBpbnRlcm5hdGlvbmFsIH0sXG4gICAgICBzaG93TG9hZGVyXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBkZXN0aW5hdGlvbnMgJiYgIV9pc0VtcHR5KGRlc3RpbmF0aW9ucykgP1xuICAgICAgICAgICAgPEVsZW1lbnQgbmFtZT1cInNlY3Rpb25fX2FsbHBhY2thZ2VzXCIgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIiBpZD1cInRyaXBzX2J5X2R1cmF0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwyNCBwcjI0XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjIwIGZ3OSBtYjI0XCI+RXhwbG9yZSBiZXN0IHNlbGxpbmcgcGFja2FnZXM8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhdF9wYWNrYWdlc190YWJHcm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwcjggYXRfcGFja2FnZXNfdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KGRlc3RpbmF0aW9ucy5pbnRlcm5hdGlvbmFsKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBwbDggYXRfcGFja2FnZXNfdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0KGRlc3RpbmF0aW9ucy5kb21lc3RpYyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQzMiBwYjI0XCI+XG4gICAgICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICAgICAgc2xpZGVDbGFzcz1cInNsaWRlXCJcbiAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17OH1cbiAgICAgICAgICAgICAgICAgIHNsaWRlc09mZnNldEJlZm9yZT17MzJ9XG4gICAgICAgICAgICAgICAgICBzbGlkZXNPZmZzZXRBZnRlcj17MjR9XG4gICAgICAgICAgICAgICAgICBpZD0nZGVzdGluYXRpb25fZHVyYXRpb25fZmlsdGVycydcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgIGlzU21hbGxTd2lwZXI9e3RydWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbnMubWFwKChzZXQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtY2hpcHMgY2hpcHNfc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzdGluYXRpb25fZHVyYXRpb25cIi8vdmVyaWZ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZXQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NldC52YWx1ZSA9PT0gc2VsZWN0ZWREdXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuY2hhbmdlRHVyYXRpb24oc2V0KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17c2V0LnRpdGxlfT57c2V0LnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTbGlkZXJPckxvYWRlcih7IHNsaWRlciwgc2hvd0xvYWRlciwgc2VsZWN0ZWREdXJhdGlvbiwgZG9tZXN0aWMsIGludGVybmF0aW9uYWwgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9FbGVtZW50PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbkJ5RHVyYXRpb247XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuXG5pbXBvcnQgeyBwYXJzZVByaWNlLCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IHsgREVTVElOQVRJT05fVklFV0VELCB0cmFja1NlZ21lbnQsIE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5pbXBvcnQgSW1nIGZyb20gJ2NvbXBvbmVudHMvQ29tbW9uL0ltZyc7XG5cbmNvbnN0IFNsaWRlSXRlbSA9ICh7IGltYWdlUGF0aCwgaW1hZ2VraXRVcmwsIG5hbWUsIHBhY2thZ2VDb3VudCwgc3RhcnRpbmdQcmljZSwgbGluaywgaWQgfSkgPT4ge1xuICBsZXQgaXNDb21wb25lbnRWaWV3ZWQgPSBmYWxzZTtcbiAgY29uc3Qgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlKSA9PiB7XG4gICAgaWYgKCFpc0NvbXBvbmVudFZpZXdlZCAmJiBpc1Zpc2libGUpIHtcbiAgICAgIGlzQ29tcG9uZW50Vmlld2VkID0gaXNWaXNpYmxlO1xuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IERFU1RJTkFUSU9OX1ZJRVdFRCxcbiAgICAgICAgY2F0ZWdvcnk6IGBEZXN0aW5hdGlvbjoke25hbWV9YCxcbiAgICAgICAgc2VjdGlvbjogJ0Jlc3QgU2VsbGVyIERlc3RpbmF0aW9ucycsXG4gICAgICAgIG9iamVjdDogYERlc3RpbmF0aW9uLyR7aWR9YCxcbiAgICAgICAgY3RhOiAnJyxcbiAgICAgICAgZGVzdGluYXRpb25faWQ6IGlkLFxuICAgICAgICB2YWx1ZTogc3RhcnRpbmdQcmljZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0cmFja1NlZ21lbnRFdmVudCA9ICgpID0+e1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogT1JHQU5JU01fQ0xJQ0tFRCxcbiAgICAgIGNhdGVnb3J5OiBgSE9NRSBQQUdFYCxcbiAgICAgIHNlY3Rpb246ICdFeHBsb3JlIEJlc3RzZWxsaW5nIFBhY2thZ2VzJyxcbiAgICAgIG9iamVjdDogYFBhY2thZ2UgQ2FyZGAsXG4gICAgICBjdGE6IGNhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rIFxuICAgICAgICB0bz17bGlua31cbiAgICAgICAgb25DbGljaz17KCk9PnRyYWNrU2VnbWVudEV2ZW50KCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFkaXVzNCBvdmVyZmxvd2hcIiBzdHlsZT17e3dpZHRoOiAnMTIwcHgnLCBoZWlnaHQ6ICcxNTBweCd9fT5cbiAgICAgICAgICA8SW1nIGlrU3JjPXtpbWFnZWtpdFVybH0gc3JjPXtpbWFnZVBhdGh9IGFsdD17bmFtZX0gd2lkdGg9ezEyMH0gaGVpZ2h0PXsxNTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTZW5zb3Igb25DaGFuZ2U9e29uU2Vuc29yQ2hhbmdlfSBpbnRlcnZhbERlbGF5PXszMDAwfSAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTRwIGZ3OSBwZmMzIG10OFwiIHN0eWxlPXt7d2lkdGg6ICcxMjBweCd9fT57Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEwIHBmYzMgbXQ0XCI+U3RhcnRpbmcgYXQ6IHtwYXJzZVByaWNlKHsgcHJpY2U6IHN0YXJ0aW5nUHJpY2UsIGFwcGVuZE9ubHk6IGZhbHNlIH0pfTwvcD5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblNsaWRlSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2VQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdla2l0VXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGFja2FnZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHN0YXJ0aW5nUHJpY2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgYmVzdFRpbWVUb1Zpc2l0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVJdGVtO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyXCI6IFwiXzEzMXFVNEYtSnp0TUJKZVJraDd3MlJcIixcblx0XCJpY29uXCI6IFwiXzFkTFphN3FydXJOUndIakYzTjZtRnNcIlxufTsiXSwic291cmNlUm9vdCI6IiJ9