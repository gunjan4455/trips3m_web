require("source-map-support").install();
exports.ids = ["city-block~home~listing~package-detail"];
exports.modules = {

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

/***/ "./app/components/Listing/PackageCardExperiment.js":
/*!*********************************************************!*\
  !*** ./app/components/Listing/PackageCardExperiment.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _PackageImgTitle = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageImgTitle */ "./app/components/Listing/PackageImgTitle.js"));

var _PackagePriceExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackagePriceExperiment */ "./app/components/Listing/PackagePriceExperiment.js"));

var _PackageDaysDiscountExperiment = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageDaysDiscountExperiment */ "./app/components/Listing/PackageDaysDiscountExperiment.js"));

var _PackageCities = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageCities */ "./app/components/Listing/PackageCities.js"));

var _PackageIncExc = _interopRequireDefault(__webpack_require__(/*! components/Listing/PackageIncExc */ "./app/components/Listing/PackageIncExc.js"));

var _FormOneCTA = _interopRequireDefault(__webpack_require__(/*! components/Form/FormLead/FormOneCTA */ "./app/components/Form/FormLead/FormOneCTA.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

__webpack_require__(/*! ./PackageCities.scss */ "./app/components/Listing/PackageCities.scss");

__webpack_require__(/*! ./Listing.scss */ "./app/components/Listing/Listing.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GCardTagsSpan = _glamorous.default.span({
  height: '24px',
  backgroundColor: '#fac22e'
});

let PackageCardExperiment = class PackageCardExperiment extends _react.Component {
  constructor(props) {
    super(props);

    this.handleChange = hotelId => {
      this.setState({
        hotelId
      });
      (0, _utils.rescue)(() => {
        const {
          card,
          setActiveHotels,
          isPackageRevamp
        } = this.props;
        const hotelInfo = card.family_packages[hotelId];
        isPackageRevamp ? setActiveHotels(card.id, hotelId) : null;
        this.trackSegmentEvent(_segmentEvents.HOTEL_CATEGORY_CLICKED, `${hotelInfo[0]} Star`, card.destinations[0].name || '', hotelInfo[1]);
      });
    };

    this.state = {
      hotelId: props.card.id
    };
    this.sensorVisibility = false;
    this.trackSegmentEvent = this.trackSegmentEvent.bind(this);
    this.trackLeadClickEvent = this.trackLeadClickEvent.bind(this);
    this.renderHotelSelections = this.renderHotelSelections.bind(this);
  }

  onSensorChange(isVisible, ctaTextPackage, toDestination) {
    if (!this.sensorVisibility && isVisible) {
      this.sensorVisibility = isVisible;
      this.trackSegmentEvent(_segmentEvents.PACKAGE_VIEWED, ctaTextPackage, toDestination);
    }
  }

  trackSegmentEvent(event, ctaTextPackage, toDestination, value) {
    (0, _utils.rescue)(() => {
      const {
        card
      } = this.props;
      const hotelInfo = card.family_packages[this.state.hotelId];
      (0, _segmentEvents.trackSegment)({
        event: event,
        category: `Destination:${toDestination}`,
        section: 'Package List/View Details',
        object: `Package/${card.id}`,
        cta: ctaTextPackage,
        package_id: card.id,
        destination_list: toDestination,
        destination_id: card.destinations[0].id,
        label: `Days:${card.days}::Index:${this.props.index + 1}::Hotel:${hotelInfo[0]} Star`,
        value: value ? value : hotelInfo[1],
        package_name: card.name
      });
    });
  }

  trackLeadClickEvent(ctaTextForm, toDestination) {
    const pId = this.props.card.id;
    const section = 'Get Quotes Button';
    const category = `Destination:${toDestination}`;
    const object = `Package/${pId}`;
    this.props.trackLeadFunnelClick(section, category, object, ctaTextForm, pId);
    return true;
  }

  renderHotelSelections() {
    const {
      card,
      heading
    } = this.props;
    const hotelsIds = Object.keys(card.family_packages || {});

    if (hotelsIds.length) {
      const hotelCheckboxes = hotelsIds.map(hotelId => {
        return _react.default.createElement("div", {
          key: hotelId,
          className: "iblock hotelStarItem mr8"
        }, _react.default.createElement("input", {
          name: `${heading}_hotel_star_input_${card.id}`,
          type: "radio",
          className: "checkbox-common radio-common-round",
          checked: hotelId.toString() === this.state.hotelId.toString(),
          id: `input_${card.id}_${hotelId}`,
          onChange: () => this.handleChange(hotelId),
          value: hotelId
        }), _react.default.createElement("label", {
          className: "",
          htmlFor: `input_${card.id}_${hotelId}`
        }, card.family_packages[hotelId][0], " Star"));
      });
      return _react.default.createElement("div", {
        className: `row row- star-ratings-selection more-than-three-stars`
      }, hotelCheckboxes);
    }

    return null;
  }

  render() {
    const {
      card,
      isPackageRevamp,
      comparingPackages,
      addToComparingPackages,
      removeFromComparingPackages,
      formToLocation
    } = this.props;
    const additionalInfoText = `Traveler has expressed interest in ${card.days} Days , ${card.nights} nights with cities ${card.cities}. For more details, see the <a href='/packages/${card.set_url}'>link</a>`; // TODO: Ugly code. Handle it differently

    let toDestination = '';

    try {
      toDestination = card.destinations[0].name;
    } catch (e) {
      toDestination = '';
    }

    const {
      hotelId
    } = this.state;
    const formOneToLocation = formToLocation ? formToLocation : toDestination;
    const ctaTextPackage = 'View Details';
    const ctaTextForm = 'Customize';
    const {
      isExperiment
    } = card;
    let hideDiscount = false,
        replacePrice = false,
        family_packages = card.family_packages;

    if (isExperiment) {
      hideDiscount = isExperiment.hideDiscount;
      replacePrice = isExperiment.replacePrice;
      family_packages = replacePrice ? card.family_packages_map : card.family_packages;
    }

    const hotelWithPrices = family_packages && family_packages[hotelId] ? family_packages[hotelId] : [];
    return _react.default.createElement("div", {
      className: "row row- mb8 mt8 relative exp-1 package-card"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${hotelId}`,
      className: "sfcw",
      onClick: () => this.trackSegmentEvent(_segmentEvents.PACKAGE_CLICKED, ctaTextPackage, toDestination)
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_PackageImgTitle.default, {
      isLargeImg: true,
      name: card.plp_heading || card.name,
      altText: card.set_url,
      imageUrl: card.image_url,
      imagekitUrl: card.imagekit_url
    }), card.mvp_tags && card.mvp_tags.length ? _react.default.createElement(GCardTagsSpan, {
      className: "absolute z2 radius2 f12 fw7 t10 l10 pfc3 pl15 pr15 flex alignCenter justifyCenter"
    }, card.mvp_tags[0]) : null)), _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible, ctaTextPackage, toDestination),
      intervalDelay: 3000
    }), !isPackageRevamp ? _react.default.createElement("div", {
      className: "addCompareDiv"
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: `AddCompareCheckBox-${card.id}`,
      className: "fixed-menu-button",
      checked:
      /* eslint-disable eqeqeq */
      comparingPackages.findIndex(pkg => pkg.id == card.id) !== -1
      /* eslint-enable */
      ,
      onChange: e => {
        if (e.target.checked) {
          if (comparingPackages.length === 2) {
            return;
          }

          addToComparingPackages(card);
          this.trackSegmentEvent(_segmentEvents.PACKAGE_COMPARE_ADDED, ctaTextPackage, toDestination);
        } else {
          removeFromComparingPackages(card);
        }
      }
    }), _react.default.createElement("label", {
      className: "sfcw f14 fw7",
      htmlFor: `AddCompareCheckBox-${card.id}`
    }, "Add To Compare")) : null, _react.default.createElement("div", {
      className: `row row- sbcw ${isPackageRevamp ? 'pt8 pb8' : 'p8'}`
    }, _react.default.createElement("div", {
      className: `${isPackageRevamp ? '' : 'pl8 pr8'}`
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 f10"
    }, _react.default.createElement(_PackageCities.default, {
      cities: card.city_list_with_days || {}
    }))), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "iblock pl0"
    }, _react.default.createElement(_PackageDaysDiscountExperiment.default, {
      days: card.days,
      nights: card.nights,
      isPackageRevamp: isPackageRevamp
    })), _react.default.createElement("div", {
      className: "block"
    }, this.renderHotelSelections())), _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr8"
    }, _react.default.createElement(_PackagePriceExperiment.default, {
      price: hotelWithPrices.length ? hotelWithPrices[2] : card.price_total,
      priceUnit: card.mini_desc,
      currency: card.currency,
      discount: hotelWithPrices.length ? hotelWithPrices[2] - hotelWithPrices[1] : card.price_total - card.discounted_price,
      promoTag: card.promo_tag,
      totalPrice: card.price_total,
      totalDiscount: card.price_total - card.discounted_price,
      hideDiscount: hideDiscount
    }))), _react.default.createElement("div", {
      className: "row inclusion-height-box mt8"
    }, _react.default.createElement(_PackageIncExc.default, {
      inclusions: card.inclusions,
      id: `card_${card.id}`,
      hotelInfo: card.family_packages && card.family_packages[`${hotelId}`],
      isPackageRevamp: isPackageRevamp
    }))), !isPackageRevamp ? _react.default.createElement("div", {
      className: "row row- pt8"
    }, _react.default.createElement("div", {
      className: "col-xs-6 pl0 pr4"
    }, _react.default.createElement(_reactRouter.Link, {
      to: `/packages/${card.set_url}?id=${hotelId}`,
      onClick: () => this.trackSegmentEvent(_segmentEvents.PACKAGE_CLICKED, ctaTextPackage, toDestination),
      className: "btn-pri wfull ripple"
    }, _react.default.createElement("div", {
      className: "wave-dark"
    }), ctaTextPackage)), _react.default.createElement("div", {
      className: "col-xs-6 pl4 pr0"
    }, _react.default.createElement(_FormOneCTA.default, {
      rtProps: {
        to_loc: formOneToLocation,
        trip_days: card.days.toString(),
        packageId: card.id,
        page: 'Package List Page',
        section: 'Package List',
        cta: ctaTextForm,
        object: `Package/${card.id}`,
        addtl_info: additionalInfoText
      },
      clickHandler: () => {
        this.trackLeadClickEvent(ctaTextForm, toDestination);
      }
    }, _react.default.createElement("div", {
      className: "btn-filled-pri wfull customized-variation ",
      "data-obj": JSON.stringify({
        to_loc: formOneToLocation,
        trip_days: card.days.toString()
      })
    }, _react.default.createElement("div", {
      className: "wave"
    }), ctaTextForm)))) : null));
  }

};
PackageCardExperiment.propTypes = {
  card: _propTypes.default.object.isRequired,
  trackLeadFunnelClick: _propTypes.default.func,
  comparingPackages: _propTypes.default.array.isRequired,
  addToComparingPackages: _propTypes.default.func,
  removeFromComparingPackages: _propTypes.default.func,
  index: _propTypes.default.number,
  formToLocation: _propTypes.default.string,
  promoTag: _propTypes.default.number,
  setActiveHotels: _propTypes.default.func.isRequired,
  isPackageRevamp: _propTypes.default.bool,
  heading: _propTypes.default.string
};
PackageCardExperiment.defaultProps = {
  trackLeadFunnelClick: () => {},
  formToLocation: '',
  removeFromComparingPackages: () => {},
  addToComparingPackages: () => {},
  promoTag: 0,
  heading: 'plp'
};
var _default = PackageCardExperiment;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlQ2FyZEV4cGVyaW1lbnQuanMiXSwibmFtZXMiOlsiRm9ybU9uZUNUQSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImJpbmQiLCJydFByb3BzIiwidGFnIiwiZGVhbHMiLCJidWRnZXQiLCJhZG1pbkNvbW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiU0VHTUVOVF9BRE1JTl9DT01NRU5UIiwicnRyaXBQcm9wcyIsInRvX2xvYyIsInRyaXBfZGF5cyIsImNsaWNrSGFuZGxlciIsInVwZGF0ZUZyb21PbmVQcm9wcyIsInB1c2hTdGF0ZSIsInJlbmRlciIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJHQ2FyZFRhZ3NTcGFuIiwiZ2xhbW9yb3VzIiwic3BhbiIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsIlBhY2thZ2VDYXJkRXhwZXJpbWVudCIsImhhbmRsZUNoYW5nZSIsImhvdGVsSWQiLCJzZXRTdGF0ZSIsImNhcmQiLCJzZXRBY3RpdmVIb3RlbHMiLCJpc1BhY2thZ2VSZXZhbXAiLCJob3RlbEluZm8iLCJmYW1pbHlfcGFja2FnZXMiLCJpZCIsInRyYWNrU2VnbWVudEV2ZW50IiwiSE9URUxfQ0FURUdPUllfQ0xJQ0tFRCIsImRlc3RpbmF0aW9ucyIsIm5hbWUiLCJzdGF0ZSIsInNlbnNvclZpc2liaWxpdHkiLCJ0cmFja0xlYWRDbGlja0V2ZW50IiwicmVuZGVySG90ZWxTZWxlY3Rpb25zIiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJjdGFUZXh0UGFja2FnZSIsInRvRGVzdGluYXRpb24iLCJQQUNLQUdFX1ZJRVdFRCIsImV2ZW50IiwidmFsdWUiLCJjYXRlZ29yeSIsInNlY3Rpb24iLCJjdGEiLCJwYWNrYWdlX2lkIiwiZGVzdGluYXRpb25fbGlzdCIsImRlc3RpbmF0aW9uX2lkIiwibGFiZWwiLCJkYXlzIiwiaW5kZXgiLCJwYWNrYWdlX25hbWUiLCJjdGFUZXh0Rm9ybSIsInBJZCIsInRyYWNrTGVhZEZ1bm5lbENsaWNrIiwiaGVhZGluZyIsImhvdGVsc0lkcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJob3RlbENoZWNrYm94ZXMiLCJtYXAiLCJ0b1N0cmluZyIsImNvbXBhcmluZ1BhY2thZ2VzIiwiYWRkVG9Db21wYXJpbmdQYWNrYWdlcyIsInJlbW92ZUZyb21Db21wYXJpbmdQYWNrYWdlcyIsImZvcm1Ub0xvY2F0aW9uIiwiYWRkaXRpb25hbEluZm9UZXh0IiwibmlnaHRzIiwiY2l0aWVzIiwic2V0X3VybCIsImUiLCJmb3JtT25lVG9Mb2NhdGlvbiIsImlzRXhwZXJpbWVudCIsImhpZGVEaXNjb3VudCIsInJlcGxhY2VQcmljZSIsImZhbWlseV9wYWNrYWdlc19tYXAiLCJob3RlbFdpdGhQcmljZXMiLCJQQUNLQUdFX0NMSUNLRUQiLCJwbHBfaGVhZGluZyIsImltYWdlX3VybCIsImltYWdla2l0X3VybCIsIm12cF90YWdzIiwiZmluZEluZGV4IiwicGtnIiwidGFyZ2V0IiwiY2hlY2tlZCIsIlBBQ0tBR0VfQ09NUEFSRV9BRERFRCIsImNpdHlfbGlzdF93aXRoX2RheXMiLCJwcmljZV90b3RhbCIsIm1pbmlfZGVzYyIsImN1cnJlbmN5IiwiZGlzY291bnRlZF9wcmljZSIsInByb21vX3RhZyIsImluY2x1c2lvbnMiLCJwYWNrYWdlSWQiLCJwYWdlIiwiYWRkdGxfaW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJudW1iZXIiLCJwcm9tb1RhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNB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V3lCLEtBQUs0QixJQUFMLENBQVVhLFFBQVY7QUFBdkMsT0FBZjtBQUF0RSxPQUNFO0FBQUssaUJBQVU7QUFBZixNQURGLEVBRUdWLFdBRkgsQ0FmRixDQURGLENBWEYsQ0FERixHQWlDWSxJQTlFaEIsQ0EzQ0YsQ0FERjtBQStIRDs7QUFwUDJDLEM7QUF1UDlDbkMsc0JBQXNCZixTQUF0QixHQUFrQztBQUNoQ21CLFFBQU1sQixtQkFBVUMsTUFBVixDQUFpQkUsVUFEUztBQUVoQ2dELHdCQUFzQm5ELG1CQUFVRSxJQUZBO0FBR2hDMEQscUJBQW1CNUQsbUJBQVVPLEtBQVYsQ0FBZ0JKLFVBSEg7QUFJaEMwRCwwQkFBd0I3RCxtQkFBVUUsSUFKRjtBQUtoQzRELCtCQUE2QjlELG1CQUFVRSxJQUxQO0FBTWhDNkMsU0FBTy9DLG1CQUFVaUcsTUFOZTtBQU9oQ2xDLGtCQUFnQi9ELG1CQUFVSyxNQVBNO0FBUWhDNkYsWUFBVWxHLG1CQUFVaUcsTUFSWTtBQVNoQzlFLG1CQUFpQm5CLG1CQUFVRSxJQUFWLENBQWVDLFVBVEE7QUFVaENpQixtQkFBaUJwQixtQkFBVUksSUFWSztBQVdoQ2dELFdBQVNwRCxtQkFBVUs7QUFYYSxDQUFsQztBQWNBUyxzQkFBc0JOLFlBQXRCLEdBQXFDO0FBQ25DMkMsd0JBQXNCLE1BQU0sQ0FBRSxDQURLO0FBRW5DWSxrQkFBZ0IsRUFGbUI7QUFHbkNELCtCQUE2QixNQUFNLENBQUUsQ0FIRjtBQUluQ0QsMEJBQXdCLE1BQU0sQ0FBRSxDQUpHO0FBS25DcUMsWUFBVSxDQUx5QjtBQU1uQzlDLFdBQVM7QUFOMEIsQ0FBckM7ZUFTZXRDLHFCIiwiZmlsZSI6ImNpdHktYmxvY2t+aG9tZX5saXN0aW5nfnBhY2thZ2UtZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBwdXNoIGFzIHB1c2hTdGF0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU0VHTUVOVF9BRE1JTl9DT01NRU5ULCBzZXRDb29raWUgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgdXBkYXRlRnJvbU9uZVByb3BzIH0gZnJvbSAncmVkdWNlcnMvZm9ybU9uZUxlYWQnO1xuXG5jbGFzcyBGb3JtT25lQ1RBIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBydFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHVwZGF0ZUZyb21PbmVQcm9wczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwdXNoU3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVhbHM6IFByb3BUeXBlcy5ib29sLFxuICAgIGNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGFnOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub2JqZWN0XG4gICAgXSksXG4gICAgYnVkZ2V0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBydFByb3BzOiB7fSxcbiAgICBjbGlja0hhbmRsZXI6ICgpID0+IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBkZWFsczogZmFsc2UsXG4gICAgdGFnOiAnJyxcbiAgICBidWRnZXQ6ICcnXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgcnRQcm9wcywgdGFnLCBkZWFscywgYnVkZ2V0IH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIG1lcmdlIGFkbWluIGNvbW1lbnRzIHdpdGggdGhlIGV4aXN0aW5nIG9uZXNcbiAgICBsZXQgYWRtaW5Db21tZW50cyA9IHJ0UHJvcHMuYWRtaW5Db21tZW50cyB8fCAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGFkbWluQ29tbWVudHMgPSBgJHthZG1pbkNvbW1lbnRzfSAjRm9ybV9maWxsZWRfb24gJHt3aW5kb3cubG9jYXRpb24uaHJlZn1gO1xuICAgIH1cbiAgICBhZG1pbkNvbW1lbnRzID0gYCAke2FkbWluQ29tbWVudHN9ICR7U0VHTUVOVF9BRE1JTl9DT01NRU5UfWA7XG4gICAgY29uc3QgcnRyaXBQcm9wcyA9IHtcbiAgICAgIC4uLnJ0UHJvcHMsXG4gICAgICBhZG1pbkNvbW1lbnRzLFxuICAgIH07XG4gICAgc2V0Q29va2llKCd0b19sb2MnLCBydFByb3BzLnRvX2xvYyk7XG4gICAgc2V0Q29va2llKCd0cmlwX2RheXMnLCBydFByb3BzLnRyaXBfZGF5cyk7XG4gICAgdGhpcy5wcm9wcy5jbGlja0hhbmRsZXIoKTtcbiAgICAvLyB1cGRhdGUgdGhlIHZhbHVlIG9uIHN0b3JlXG4gICAgdGhpcy5wcm9wcy51cGRhdGVGcm9tT25lUHJvcHMocnRyaXBQcm9wcyk7XG4gICAgLy8gY2hhbmdlIHRoZSB1cmxcbiAgICBpZiAoZGVhbHMpIHtcbiAgICAgIHRoaXMucHJvcHMucHVzaFN0YXRlKGAvcmVxdWVzdGVkX3RyaXBzL25ldz9kZWFscz10cnVlJnRhZz0ke3RhZ30mYnVkZ2V0PSR7YnVkZ2V0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLnB1c2hTdGF0ZSgnL3JlcXVlc3RlZF90cmlwcy9uZXcnKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2Z1bGxcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyB1cGRhdGVGcm9tT25lUHJvcHMsIHB1c2hTdGF0ZSB9KShGb3JtT25lQ1RBKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgU2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IFBhY2thZ2VJbWdUaXRsZSBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZUltZ1RpdGxlJztcbmltcG9ydCBQYWNrYWdlUHJpY2VFeHBlcmltZW50IGZyb20gJ2NvbXBvbmVudHMvTGlzdGluZy9QYWNrYWdlUHJpY2VFeHBlcmltZW50JztcbmltcG9ydCBQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudCBmcm9tICdjb21wb25lbnRzL0xpc3RpbmcvUGFja2FnZURheXNEaXNjb3VudEV4cGVyaW1lbnQnO1xuaW1wb3J0IFBhY2thZ2VDaXRpZXMgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VDaXRpZXMnO1xuaW1wb3J0IFBhY2thZ2VJbmNFeGMgZnJvbSAnY29tcG9uZW50cy9MaXN0aW5nL1BhY2thZ2VJbmNFeGMnO1xuaW1wb3J0IEZvcm1PbmVDVEEgZnJvbSAnY29tcG9uZW50cy9Gb3JtL0Zvcm1MZWFkL0Zvcm1PbmVDVEEnO1xuaW1wb3J0IHtcbiAgdHJhY2tTZWdtZW50LCBQQUNLQUdFX0NMSUNLRUQsIFBBQ0tBR0VfVklFV0VELFxuICBQQUNLQUdFX0NPTVBBUkVfQURERUQsIEhPVEVMX0NBVEVHT1JZX0NMSUNLRURcbn0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHJlc2N1ZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0ICcuL1BhY2thZ2VDaXRpZXMuc2Nzcyc7XG5pbXBvcnQgJy4vTGlzdGluZy5zY3NzJztcblxuY29uc3QgR0NhcmRUYWdzU3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgaGVpZ2h0OiAnMjRweCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmYWMyMmUnXG59KTtcblxuY2xhc3MgUGFja2FnZUNhcmRFeHBlcmltZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBob3RlbElkOiBwcm9wcy5jYXJkLmlkIH07XG4gICAgdGhpcy5zZW5zb3JWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50ID0gdGhpcy50cmFja1NlZ21lbnRFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJhY2tMZWFkQ2xpY2tFdmVudCA9IHRoaXMudHJhY2tMZWFkQ2xpY2tFdmVudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVySG90ZWxTZWxlY3Rpb25zID0gdGhpcy5yZW5kZXJIb3RlbFNlbGVjdGlvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uU2Vuc29yQ2hhbmdlKGlzVmlzaWJsZSwgY3RhVGV4dFBhY2thZ2UsIHRvRGVzdGluYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuc2Vuc29yVmlzaWJpbGl0eSAmJiBpc1Zpc2libGUpIHtcbiAgICAgIHRoaXMuc2Vuc29yVmlzaWJpbGl0eSA9IGlzVmlzaWJsZTtcbiAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9WSUVXRUQsIGN0YVRleHRQYWNrYWdlLCB0b0Rlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gKGhvdGVsSWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG90ZWxJZCB9KTtcbiAgICByZXNjdWUoICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY2FyZCwgc2V0QWN0aXZlSG90ZWxzLCBpc1BhY2thZ2VSZXZhbXAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBob3RlbEluZm8gPSBjYXJkLmZhbWlseV9wYWNrYWdlc1tob3RlbElkXTtcbiAgICAgIGlzUGFja2FnZVJldmFtcCA/IHNldEFjdGl2ZUhvdGVscyhjYXJkLmlkLCBob3RlbElkKSA6IG51bGw7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KEhPVEVMX0NBVEVHT1JZX0NMSUNLRUQsIGAke2hvdGVsSW5mb1swXX0gU3RhcmAsIGNhcmQuZGVzdGluYXRpb25zWzBdLm5hbWUgfHwgJycsIGhvdGVsSW5mb1sxXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdHJhY2tTZWdtZW50RXZlbnQoZXZlbnQsIGN0YVRleHRQYWNrYWdlLCB0b0Rlc3RpbmF0aW9uLCB2YWx1ZSkge1xuICAgIHJlc2N1ZSggKCkgPT4ge1xuICAgICAgY29uc3QgeyBjYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaG90ZWxJbmZvID0gY2FyZC5mYW1pbHlfcGFja2FnZXNbdGhpcy5zdGF0ZS5ob3RlbElkXTtcblxuICAgICAgdHJhY2tTZWdtZW50KHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uOiR7dG9EZXN0aW5hdGlvbn1gLFxuICAgICAgICBzZWN0aW9uOiAnUGFja2FnZSBMaXN0L1ZpZXcgRGV0YWlscycsXG4gICAgICAgIG9iamVjdDogYFBhY2thZ2UvJHtjYXJkLmlkfWAsXG4gICAgICAgIGN0YTogY3RhVGV4dFBhY2thZ2UsXG4gICAgICAgIHBhY2thZ2VfaWQ6IGNhcmQuaWQsXG4gICAgICAgIGRlc3RpbmF0aW9uX2xpc3Q6IHRvRGVzdGluYXRpb24sXG4gICAgICAgIGRlc3RpbmF0aW9uX2lkOiBjYXJkLmRlc3RpbmF0aW9uc1swXS5pZCxcbiAgICAgICAgbGFiZWw6IGBEYXlzOiR7Y2FyZC5kYXlzfTo6SW5kZXg6JHt0aGlzLnByb3BzLmluZGV4ICsgMX06OkhvdGVsOiR7aG90ZWxJbmZvWzBdfSBTdGFyYCxcbiAgICAgICAgdmFsdWU6IHZhbHVlID8gdmFsdWUgOiBob3RlbEluZm9bMV0sXG4gICAgICAgIHBhY2thZ2VfbmFtZTogY2FyZC5uYW1lXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB0cmFja0xlYWRDbGlja0V2ZW50KGN0YVRleHRGb3JtLCB0b0Rlc3RpbmF0aW9uKSB7XG4gICAgY29uc3QgcElkID0gdGhpcy5wcm9wcy5jYXJkLmlkO1xuICAgIGNvbnN0IHNlY3Rpb24gPSAnR2V0IFF1b3RlcyBCdXR0b24nO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gYERlc3RpbmF0aW9uOiR7dG9EZXN0aW5hdGlvbn1gO1xuICAgIGNvbnN0IG9iamVjdCA9IGBQYWNrYWdlLyR7cElkfWA7XG4gICAgdGhpcy5wcm9wcy50cmFja0xlYWRGdW5uZWxDbGljayhzZWN0aW9uLCBjYXRlZ29yeSwgb2JqZWN0LCBjdGFUZXh0Rm9ybSwgcElkKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZW5kZXJIb3RlbFNlbGVjdGlvbnMoKSB7XG4gICAgY29uc3QgeyBjYXJkLCBoZWFkaW5nIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgaG90ZWxzSWRzID0gT2JqZWN0LmtleXMoY2FyZC5mYW1pbHlfcGFja2FnZXMgfHwge30pO1xuXG4gICAgaWYgKGhvdGVsc0lkcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGhvdGVsQ2hlY2tib3hlcyA9IGhvdGVsc0lkcy5tYXAoaG90ZWxJZCA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2hvdGVsSWR9IGNsYXNzTmFtZT1cImlibG9jayBob3RlbFN0YXJJdGVtIG1yOFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9e2Ake2hlYWRpbmd9X2hvdGVsX3N0YXJfaW5wdXRfJHtjYXJkLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWNvbW1vbiByYWRpby1jb21tb24tcm91bmRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXtob3RlbElkLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RhdGUuaG90ZWxJZC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Y2FyZC5pZH1fJHtob3RlbElkfWB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZShob3RlbElkKX1cbiAgICAgICAgICAgICAgdmFsdWU9e2hvdGVsSWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIlwiIGh0bWxGb3I9e2BpbnB1dF8ke2NhcmQuaWR9XyR7aG90ZWxJZH1gfT5cbiAgICAgICAgICAgICAge2NhcmQuZmFtaWx5X3BhY2thZ2VzW2hvdGVsSWRdWzBdfSBTdGFyXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctIHN0YXItcmF0aW5ncy1zZWxlY3Rpb24gbW9yZS10aGFuLXRocmVlLXN0YXJzYH0+e2hvdGVsQ2hlY2tib3hlc308L2Rpdj47XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhcmQsaXNQYWNrYWdlUmV2YW1wLCBjb21wYXJpbmdQYWNrYWdlcywgYWRkVG9Db21wYXJpbmdQYWNrYWdlcywgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzLCBmb3JtVG9Mb2NhdGlvblxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgYWRkaXRpb25hbEluZm9UZXh0ID0gYFRyYXZlbGVyIGhhcyBleHByZXNzZWQgaW50ZXJlc3QgaW4gJHtjYXJkLmRheXN9IERheXMgLCAke2NhcmQubmlnaHRzfSBuaWdodHMgd2l0aCBjaXRpZXMgJHtjYXJkLmNpdGllc30uIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgPGEgaHJlZj0nL3BhY2thZ2VzLyR7Y2FyZC5zZXRfdXJsfSc+bGluazwvYT5gO1xuXG4gICAgLy8gVE9ETzogVWdseSBjb2RlLiBIYW5kbGUgaXQgZGlmZmVyZW50bHlcbiAgICBsZXQgdG9EZXN0aW5hdGlvbiA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0b0Rlc3RpbmF0aW9uID0gY2FyZC5kZXN0aW5hdGlvbnNbMF0ubmFtZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0b0Rlc3RpbmF0aW9uID0gJyc7XG4gICAgfVxuICAgIGNvbnN0IHsgaG90ZWxJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmb3JtT25lVG9Mb2NhdGlvbiA9IGZvcm1Ub0xvY2F0aW9uID8gZm9ybVRvTG9jYXRpb24gOiB0b0Rlc3RpbmF0aW9uO1xuICAgIGNvbnN0IGN0YVRleHRQYWNrYWdlID0gJ1ZpZXcgRGV0YWlscyc7XG4gICAgY29uc3QgY3RhVGV4dEZvcm0gPSAnQ3VzdG9taXplJztcbiAgICBjb25zdCB7IGlzRXhwZXJpbWVudCB9ID0gY2FyZDtcbiAgICBsZXQgaGlkZURpc2NvdW50ID0gZmFsc2UsIHJlcGxhY2VQcmljZSA9IGZhbHNlLCBmYW1pbHlfcGFja2FnZXMgPSBjYXJkLmZhbWlseV9wYWNrYWdlcztcbiAgICBpZiAoaXNFeHBlcmltZW50KSB7XG4gICAgICBoaWRlRGlzY291bnQgPSBpc0V4cGVyaW1lbnQuaGlkZURpc2NvdW50O1xuICAgICAgcmVwbGFjZVByaWNlID0gaXNFeHBlcmltZW50LnJlcGxhY2VQcmljZTtcbiAgICAgIGZhbWlseV9wYWNrYWdlcyA9IHJlcGxhY2VQcmljZSA/IGNhcmQuZmFtaWx5X3BhY2thZ2VzX21hcCA6IGNhcmQuZmFtaWx5X3BhY2thZ2VzO1xuICAgIH1cbiAgICBjb25zdCBob3RlbFdpdGhQcmljZXMgPSBmYW1pbHlfcGFja2FnZXMgJiYgZmFtaWx5X3BhY2thZ2VzW2hvdGVsSWRdID8gZmFtaWx5X3BhY2thZ2VzW2hvdGVsSWRdIDogW107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBtYjggbXQ4IHJlbGF0aXZlIGV4cC0xIHBhY2thZ2UtY2FyZFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXtgL3BhY2thZ2VzLyR7Y2FyZC5zZXRfdXJsfT9pZD0ke2hvdGVsSWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZmN3XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KFBBQ0tBR0VfQ0xJQ0tFRCwgY3RhVGV4dFBhY2thZ2UsIHRvRGVzdGluYXRpb24pfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPFBhY2thZ2VJbWdUaXRsZSBpc0xhcmdlSW1nPXt0cnVlfSBuYW1lPXtjYXJkLnBscF9oZWFkaW5nIHx8IGNhcmQubmFtZX0gYWx0VGV4dD17Y2FyZC5zZXRfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17Y2FyZC5pbWFnZV91cmx9IGltYWdla2l0VXJsPXtjYXJkLmltYWdla2l0X3VybH0gLz5cbiAgICAgICAgICAgIHtjYXJkLm12cF90YWdzICYmIGNhcmQubXZwX3RhZ3MubGVuZ3RoID8gPEdDYXJkVGFnc1NwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgejIgcmFkaXVzMiBmMTIgZnc3IHQxMCBsMTAgcGZjMyBwbDE1IHByMTUgZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+e2NhcmQubXZwX3RhZ3NbMF19PC9HQ2FyZFRhZ3NTcGFuPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFNlbnNvciBvbkNoYW5nZT17aXNWaXNpYmxlID0+IHRoaXMub25TZW5zb3JDaGFuZ2UoaXNWaXNpYmxlLCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbil9IGludGVydmFsRGVsYXk9ezMwMDB9Lz5cbiAgICAgICAge1xuICAgICAgICAgICFpc1BhY2thZ2VSZXZhbXAgP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRDb21wYXJlRGl2XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgaWQ9e2BBZGRDb21wYXJlQ2hlY2tCb3gtJHtjYXJkLmlkfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQtbWVudS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICAgICAgICAgICAgICBjb21wYXJpbmdQYWNrYWdlcy5maW5kSW5kZXgocGtnID0+IHBrZy5pZCA9PSBjYXJkLmlkKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyaW5nUGFja2FnZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFkZFRvQ29tcGFyaW5nUGFja2FnZXMoY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9DT01QQVJFX0FEREVELCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVGcm9tQ29tcGFyaW5nUGFja2FnZXMoY2FyZCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2ZjdyBmMTQgZnc3XCJcbiAgICAgICAgICAgICAgICBodG1sRm9yPXtgQWRkQ29tcGFyZUNoZWNrQm94LSR7Y2FyZC5pZH1gfVxuICAgICAgICAgICAgICA+QWRkIFRvIENvbXBhcmU8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0gc2JjdyAke2lzUGFja2FnZVJldmFtcCA/ICdwdDggcGI4JyA6ICdwOCd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzUGFja2FnZVJldmFtcCA/ICcnIDogJ3BsOCBwcjgnfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwbDAgcHIwIGYxMFwiPlxuICAgICAgICAgICAgICAgIDxQYWNrYWdlQ2l0aWVzIGNpdGllcz17Y2FyZC5jaXR5X2xpc3Rfd2l0aF9kYXlzIHx8IHt9fS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIHBsMFwiPlxuICAgICAgICAgICAgICAgIDxQYWNrYWdlRGF5c0Rpc2NvdW50RXhwZXJpbWVudFxuICAgICAgICAgICAgICAgICAgZGF5cz17Y2FyZC5kYXlzfVxuICAgICAgICAgICAgICAgICAgbmlnaHRzPXtjYXJkLm5pZ2h0c31cbiAgICAgICAgICAgICAgICAgIGlzUGFja2FnZVJldmFtcD17aXNQYWNrYWdlUmV2YW1wfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgIHsgdGhpcy5yZW5kZXJIb3RlbFNlbGVjdGlvbnMoKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjhcIj5cbiAgICAgICAgICAgICAgICA8UGFja2FnZVByaWNlRXhwZXJpbWVudFxuICAgICAgICAgICAgICAgICAgcHJpY2U9e2hvdGVsV2l0aFByaWNlcy5sZW5ndGggPyBob3RlbFdpdGhQcmljZXNbMl0gOiBjYXJkLnByaWNlX3RvdGFsfVxuICAgICAgICAgICAgICAgICAgcHJpY2VVbml0PXtjYXJkLm1pbmlfZGVzY31cbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtjYXJkLmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgZGlzY291bnQ9e1xuICAgICAgICAgICAgICAgICAgICBob3RlbFdpdGhQcmljZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgPyBob3RlbFdpdGhQcmljZXNbMl0gLSBob3RlbFdpdGhQcmljZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICA6IGNhcmQucHJpY2VfdG90YWwgLSBjYXJkLmRpc2NvdW50ZWRfcHJpY2VcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHByb21vVGFnPXtjYXJkLnByb21vX3RhZ31cbiAgICAgICAgICAgICAgICAgIHRvdGFsUHJpY2U9e2NhcmQucHJpY2VfdG90YWx9XG4gICAgICAgICAgICAgICAgICB0b3RhbERpc2NvdW50PXtjYXJkLnByaWNlX3RvdGFsIC0gY2FyZC5kaXNjb3VudGVkX3ByaWNlfVxuICAgICAgICAgICAgICAgICAgaGlkZURpc2NvdW50PXtoaWRlRGlzY291bnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGluY2x1c2lvbi1oZWlnaHQtYm94IG10OFwiPlxuICAgICAgICAgICAgICA8UGFja2FnZUluY0V4YyBpbmNsdXNpb25zPXtjYXJkLmluY2x1c2lvbnN9IGlkPXtgY2FyZF8ke2NhcmQuaWR9YH1cbiAgICAgICAgICAgICAgIGhvdGVsSW5mbz17Y2FyZC5mYW1pbHlfcGFja2FnZXMgJiYgY2FyZC5mYW1pbHlfcGFja2FnZXNbYCR7aG90ZWxJZH1gXX1cbiAgICAgICAgICAgICAgIGlzUGFja2FnZVJldmFtcD17aXNQYWNrYWdlUmV2YW1wfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIWlzUGFja2FnZVJldmFtcCA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcHQ4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiBwbDAgcHI0XCI+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICB0bz17YC9wYWNrYWdlcy8ke2NhcmQuc2V0X3VybH0/aWQ9JHtob3RlbElkfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoUEFDS0FHRV9DTElDS0VELCBjdGFUZXh0UGFja2FnZSwgdG9EZXN0aW5hdGlvbil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmkgd2Z1bGwgcmlwcGxlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlLWRhcmtcIi8+XG4gICAgICAgICAgICAgICAgICAgIHtjdGFUZXh0UGFja2FnZX1cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHBsNCBwcjBcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtT25lQ1RBXG4gICAgICAgICAgICAgICAgICAgIHJ0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICB0b19sb2M6IGZvcm1PbmVUb0xvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHRyaXBfZGF5czogY2FyZC5kYXlzLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgcGFja2FnZUlkOiBjYXJkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6ICdQYWNrYWdlIExpc3QgUGFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogJ1BhY2thZ2UgTGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgY3RhOiBjdGFUZXh0Rm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IGBQYWNrYWdlLyR7Y2FyZC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgIGFkZHRsX2luZm86IGFkZGl0aW9uYWxJbmZvVGV4dFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+ICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFja0xlYWRDbGlja0V2ZW50KGN0YVRleHRGb3JtLCB0b0Rlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaSB3ZnVsbCBjdXN0b21pemVkLXZhcmlhdGlvbiBcIiBkYXRhLW9iaj17SlNPTi5zdHJpbmdpZnkoe3RvX2xvYzogZm9ybU9uZVRvTG9jYXRpb24sIHRyaXBfZGF5czogY2FyZC5kYXlzLnRvU3RyaW5nKCl9KX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXZlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgIHtjdGFUZXh0Rm9ybX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybU9uZUNUQT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+IDogIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWNrYWdlQ2FyZEV4cGVyaW1lbnQucHJvcFR5cGVzID0ge1xuICBjYXJkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRyYWNrTGVhZEZ1bm5lbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29tcGFyaW5nUGFja2FnZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBhZGRUb0NvbXBhcmluZ1BhY2thZ2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZvcm1Ub0xvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcm9tb1RhZzogUHJvcFR5cGVzLm51bWJlcixcbiAgc2V0QWN0aXZlSG90ZWxzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc1BhY2thZ2VSZXZhbXA6IFByb3BUeXBlcy5ib29sLFxuICBoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5QYWNrYWdlQ2FyZEV4cGVyaW1lbnQuZGVmYXVsdFByb3BzID0ge1xuICB0cmFja0xlYWRGdW5uZWxDbGljazogKCkgPT4ge30sXG4gIGZvcm1Ub0xvY2F0aW9uOiAnJyxcbiAgcmVtb3ZlRnJvbUNvbXBhcmluZ1BhY2thZ2VzOiAoKSA9PiB7fSxcbiAgYWRkVG9Db21wYXJpbmdQYWNrYWdlczogKCkgPT4ge30sXG4gIHByb21vVGFnOiAwLFxuICBoZWFkaW5nOiAncGxwJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFja2FnZUNhcmRFeHBlcmltZW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==