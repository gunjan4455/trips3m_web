require("source-map-support").install();
exports.ids = ["quote-agent-card"];
exports.modules = {

/***/ "./app-v2/modules/discountEngine/DiscountOffer.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/discountEngine/DiscountOffer.js ***!
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

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

__webpack_require__(/*! ./discountOffer.scss */ "./app-v2/modules/discountEngine/discountOffer.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _DiscountOfferPopup = _interopRequireDefault(__webpack_require__(/*! ./components/DiscountOfferPopup */ "./app-v2/modules/discountEngine/components/DiscountOfferPopup.js"));

var _AppliedCouponBanner = _interopRequireDefault(__webpack_require__(/*! ./components/AppliedCouponBanner */ "./app-v2/modules/discountEngine/components/AppliedCouponBanner.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DiscountOffer = (_temp = _class = class DiscountOffer extends _react.default.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (data, event) => {
      if (event === _segmentEvents.ORGANISM_VIEWED && this.isEventTracked) {
        return;
      }

      this.isEventTracked = event === _segmentEvents.ORGANISM_VIEWED;
      const {
        tripId
      } = this.props;
      (0, _segmentEvents.trackSegment)({
        category: data.category,
        section: data.section,
        object: data.object,
        cta: data.cta,
        event: event,
        trip_id: tripId,
        destination_id: '',
        misc_id_1: data.miscId1,
        misc_type_1: data.miscType1,
        misc_id_2: data.miscId2,
        misc_type_2: data.miscType2,
        misc_id_3: data.miscId3,
        misc_type_3: data.miscType3,
        misc_id_4: data.miscId4,
        misc_type_4: data.miscType4,
        misc_id_5: data.miscId5,
        misc_type_5: data.miscType5
      });
    };

    this.throwSubmissionError = error => {
      throw new _reduxForm.SubmissionError({
        _error: error
      });
    };

    this.handleRemoveDiscountCoupon = () => {
      return this.props.removeDiscountCoupon(this.props.tripId).then(results => {
        if (results && results.valid === 'true') {
          window.location.reload();
        }
      });
    };

    this.applyCouponCallback = results => {
      if (results) {
        if (results.valid === 'true') {
          this.setState({
            closeModal: true
          });
          window.location.reload();
        } else {
          this.throwSubmissionError(results.msg);
        }
      } else {
        this.throwSubmissionError('Some server error occurred!');
      }
    };

    this.applyDiscountCoupon = params => {
      return this.props.applyDiscountCoupon(params).then(this.applyCouponCallback);
    };

    this.handleSubmit = values => {
      this.props.clearFormSubmitError();

      if (!values.discountOfferInput && (!values.discountOfferRadio || values.discountOfferRadio === '0')) {
        this.throwSubmissionError('Please select atleast 1 coupon');
      }

      const params = {
        offerType: 'coupon',
        offerCode: '',
        tripId: this.props.tripId
      };
      let applyMode = 'Typed';
      let couponId = null;

      if (values.discountOfferInput) {
        params.offerCode = values.discountOfferInput;
      } else if (values.discountOfferRadio) {
        const offer = this.props.offers.filter(offer => offer.couponType.toLowerCase() === 'normal' && offer.couponId.toString() === values.discountOfferRadio)[0];
        params.offerCode = offer.code;
        couponId = offer.couponId;
        applyMode = 'Selection';
      }

      this.trackSegmentEvent({
        category: '',
        section: 'Discount Pop-up',
        object: '',
        cta: 'Apply',
        miscId1: couponId,
        miscType1: 'Coupon Applied',
        miscId2: applyMode,
        miscType2: 'Application Mode'
      }, _segmentEvents.ORGANISM_CLICKED);

      if (this.hasDiscountApplied) {
        return this.props.updateDiscountCoupon(params).then(this.applyCouponCallback);
      }

      return this.applyDiscountCoupon(params);
    };

    this.onSensorChange = isVisible => {
      if (isVisible) {
        this.trackSegmentEvent({
          category: '',
          section: 'Discount Banner',
          object: '',
          cta: ''
        }, _segmentEvents.ORGANISM_VIEWED);
      }
    };

    this.state = {
      closeModal: false
    };
    this.hasDiscountApplied = props.discountInformation && props.discountInformation.discount > 0 || false;
    this.isEventTracked = false;
  }

  componentDidMount() {
    if (this.props.discountInformation.discountableTypeId) {
      this.props.fetchAppliedOffer(this.props.discountInformation.discountableTypeId);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.discountInformation.discountableTypeId !== nextProps.discountInformation.discountableTypeId) {
      this.props.fetchAppliedOffer(nextProps.discountInformation.discountableTypeId);
    }
  }

  renderDiscountOffersModal() {
    const {
      offers,
      updateFormField,
      discountInformation
    } = this.props;
    return _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        type: "button",
        className: "sfc1 f14 fw7 m0 ml5 flex alignCenter cursorP at_getOffersCTA"
      }, _react.default.createElement("span", {
        className: "input-24 mr8 p2 iblock"
      }, _react.default.createElement(_Icon.OffersIcon, null)), " Get Offers"),
      fullView: true,
      isDefaultModal: false,
      closeModal: this.state.closeModal,
      onAfterModalOpen: () => this.trackSegmentEvent({
        cta: 'Change',
        section: 'Discount Banner'
      }, _segmentEvents.ORGANISM_CLICKED),
      onAfterModalClose: () => this.trackSegmentEvent({
        cta: 'Close',
        section: 'Discount Pop-up'
      }, _segmentEvents.ORGANISM_CLICKED),
      hasCustomClose: true
    }, _react.default.createElement(_DiscountOfferPopup.default, {
      offers: offers,
      discountInformation: discountInformation,
      handleSubmit: this.handleSubmit,
      updateFormField: updateFormField,
      trackSegmentEvent: this.trackSegmentEvent
    }));
  }

  render() {
    return this.props.renderAppliedCoupon ? _react.default.createElement(_AppliedCouponBanner.default, {
      appliedOffer: this.props.appliedOffer,
      removeDiscountCoupon: this.handleRemoveDiscountCoupon
    }) : this.renderDiscountOffersModal();
  }

}, _class.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  offers: _propTypes.default.array,
  renderAppliedCoupon: _propTypes.default.bool,
  appliedOffer: _propTypes.default.object,
  params: _propTypes.default.object.isRequired,
  discountInformation: _propTypes.default.object.isRequired,
  applyDiscountCoupon: _propTypes.default.func.isRequired,
  removeDiscountCoupon: _propTypes.default.func.isRequired,
  updateDiscountCoupon: _propTypes.default.func.isRequired,
  updateFormField: _propTypes.default.func.isRequired,
  clearFormSubmitError: _propTypes.default.func.isRequired,
  fetchAppliedOffer: _propTypes.default.func.isRequired
}, _class.defaultProps = {
  offers: [],
  renderAppliedCoupon: false,
  appliedOffer: {}
}, _temp);
exports.default = DiscountOffer;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/AppliedCouponBanner.js":
/*!*************************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/AppliedCouponBanner.js ***!
  \*************************************************************************/
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

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _tnc = _interopRequireDefault(__webpack_require__(/*! ./tnc */ "./app-v2/modules/discountEngine/components/tnc.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  parse
} = new _htmlToReact.Parser();

const AppliedCouponBanner = ({
  appliedOffer,
  removeDiscountCoupon
}) => {
  const getAmount = (offer = {}) => {
    return offer.discountType === 1 ? `${(0, _parsers.parsePrice)({
      price: offer.offerVal,
      currency: offer.currency
    })}` : `${offer.offerVal}%`;
  };

  return _react.default.createElement("div", {
    className: "p15 sfcw flex alignCenter"
  }, _react.default.createElement("div", {
    className: "flexFull"
  }, _react.default.createElement("h3", {
    className: "f14 fw9 pfc3 mb4"
  }, `${appliedOffer.code} applied!`), _react.default.createElement("p", {
    className: "f14 pfc3 mb8"
  }, "You got discount worth ", getAmount(appliedOffer)), _react.default.createElement(_GenericModal.default, {
    trigger: _react.default.createElement("span", {
      className: "f14 fw7 sfc1 cursorP"
    }, "View T&C"),
    hasNoClose: true
  }, _react.default.createElement(_tnc.default, {
    tncHtml: appliedOffer.tncHtml
  }))), _react.default.createElement("button", {
    className: "text-right f14 fw7 sfc1",
    onClick: removeDiscountCoupon
  }, "Remove"));
};

AppliedCouponBanner.propTypes = {
  appliedOffer: _propTypes.default.object.isRequired,
  removeDiscountCoupon: _propTypes.default.func.isRequired,
  trackSegmentEvent: _propTypes.default.func
};
AppliedCouponBanner.defaultProps = {
  trackSegmentEvent: () => {}
};
var _default = AppliedCouponBanner;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/DiscountOfferInput.js":
/*!************************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/DiscountOfferInput.js ***!
  \************************************************************************/
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DiscountOfferInput = ({
  input,
  meta: {
    touched,
    error
  },
  resetRadio
}) => _react.default.createElement("div", {
  className: "clearfix"
}, _react.default.createElement("label", {
  className: "f14p fw4 pfc3 mb8 block",
  htmlFor: "selectOffer"
}, "Please Apply a Discount"), _react.default.createElement("input", _extends({
  id: "selectOffer",
  type: "text",
  className: "input",
  placeholder: "Enter Coupon Code"
}, input, {
  onChange: event => {
    input.onChange(event);
    resetRadio();
  }
})), touched && error && _react.default.createElement("span", {
  className: "error"
}, error));

DiscountOfferInput.propTypes = {
  input: _propTypes.default.any,
  meta: _propTypes.default.object,
  resetRadio: _propTypes.default.func.isRequired
};
var _default = DiscountOfferInput;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/DiscountOfferList.js":
/*!***********************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/DiscountOfferList.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _DiscountOfferInput = _interopRequireDefault(__webpack_require__(/*! ./DiscountOfferInput */ "./app-v2/modules/discountEngine/components/DiscountOfferInput.js"));

var _DiscountOfferRadio = _interopRequireDefault(__webpack_require__(/*! ./DiscountOfferRadio */ "./app-v2/modules/discountEngine/components/DiscountOfferRadio.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DiscountOfferList = (_temp = _class = class DiscountOfferList extends _react.default.Component {
  constructor(props) {
    super(props);

    this.resetRadio = () => {
      this.setState({
        currentOfferId: 0
      });
      this.props.updateFormField('discountOfferForm', 'discountOfferRadio', null);
    };

    this.toggleRadio = currentOfferId => {
      this.setState({
        currentOfferId: currentOfferId
      });
      this.props.updateFormField('discountOfferForm', 'discountOfferInput', '');
    };

    this.state = {
      currentOfferId: props.appliedOfferId
    };
  }

  componentDidMount() {
    this.props.updateFormField('discountOfferForm', 'discountOfferRadio', this.props.appliedOfferId.toString());
  }

  render() {
    const textInputOffer = _react.default.createElement(_reduxForm.Field, {
      name: "discountOfferInput",
      type: "text",
      component: _DiscountOfferInput.default,
      resetRadio: this.resetRadio
    });

    return _react.default.createElement("div", null, _react.default.createElement("form", {
      onSubmit: this.props.handleSubmit
    }, textInputOffer, this.props.error && _react.default.createElement("span", {
      className: "input-error-text mt4"
    }, this.props.error), this.props.offers.length ? _react.default.createElement("div", {
      className: "formInputDividerWithText"
    }) : null, _react.default.createElement("div", {
      className: "discountOfferList"
    }, this.props.offers.length ? this.props.offers.map((offer, index) => _react.default.createElement(_reduxForm.Field, {
      key: index,
      name: "discountOfferRadio",
      component: _DiscountOfferRadio.default,
      id: `offer_${index}`,
      type: "radio",
      offer: offer,
      currentOfferId: this.state.currentOfferId,
      value: offer.couponId,
      onClickHandler: this.toggleRadio,
      appliedOfferId: this.props.appliedOfferId
    })) : null), _react.default.createElement("div", {
      className: "bs6 p8 sbcw b0 l0 r0 fixed"
    }, _react.default.createElement("button", {
      disabled: this.props.submitting,
      className: "btn-filled-pri-large wfull radius2 at_discountOfferFormSubmit"
    }, "Apply Selected Coupon"))));
  }

}, _class.propTypes = {
  offers: _propTypes.default.array,
  appliedOfferId: _propTypes.default.number,
  handleSubmit: _propTypes.default.func.isRequired,
  updateFormField: _propTypes.default.func.isRequired,
  error: _propTypes.default.string,
  submitting: _propTypes.default.bool
}, _class.defaultProps = {
  offers: [],
  appliedOfferId: 0,
  discountCoupon: '',
  submitting: false
}, _temp);

var _default = (0, _reduxForm.reduxForm)({
  form: 'discountOfferForm'
})(DiscountOfferList);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/DiscountOfferPopup.js":
/*!************************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/DiscountOfferPopup.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _DiscountOfferList = _interopRequireDefault(__webpack_require__(/*! ./DiscountOfferList */ "./app-v2/modules/discountEngine/components/DiscountOfferList.js"));

var _OtherOffers = _interopRequireDefault(__webpack_require__(/*! ./OtherOffers */ "./app-v2/modules/discountEngine/components/OtherOffers.js"));

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DiscountOfferPopup = (_temp = _class = class DiscountOfferPopup extends _react.default.Component {
  constructor(props) {
    super(props);

    this.onSensorChange = isVisible => {
      if (isVisible) {
        this.props.trackSegmentEvent({
          category: '',
          section: 'Discount Pop-up',
          object: '',
          cta: ''
        }, _segmentEvents.ORGANISM_VIEWED);
      }
    };
  }

  render() {
    const {
      offers,
      hasDiscountApplied,
      appliedOfferId,
      updateFormField
    } = this.props;
    const discountOffers = offers.filter(offer => offer.couponType.toLowerCase() === 'normal');
    const informatoryOffers = offers.filter(offer => offer.couponType.toLowerCase() === 'view only');
    return _react.default.createElement(_reactVisibilitySensor.default, {
      onChange: isVisible => this.onSensorChange(isVisible),
      partialVisibility: "bottom",
      delayedCall: true
    }, _react.default.createElement("div", {
      className: "discountOffersModalContent relative siteModalContent"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: 'Current Discounts & Offers'
    }), _react.default.createElement("div", {
      className: "pb48"
    }, _react.default.createElement("div", {
      className: "p15 pb24"
    }, _react.default.createElement(_DiscountOfferList.default, {
      offers: discountOffers,
      appliedOfferId: appliedOfferId,
      onSubmit: this.props.handleSubmit,
      updateFormField: updateFormField
    })), _react.default.createElement("div", {
      className: "pt8 sbc5"
    }), _react.default.createElement("div", {
      className: "mt8 pt15"
    }, informatoryOffers.length ? _react.default.createElement("div", {
      className: "p15"
    }, _react.default.createElement(_OtherOffers.default, {
      offers: informatoryOffers
    })) : null, !discountOffers.length && !informatoryOffers.length ? _react.default.createElement("span", {
      className: "block p15 pt0"
    }, "No coupons currently available") : null))));
  }

}, _class.propTypes = {
  offers: _propTypes.default.array,
  hasDiscountApplied: _propTypes.default.bool,
  appliedOfferId: _propTypes.default.number,
  handleSubmit: _propTypes.default.func.isRequired,
  updateFormField: _propTypes.default.func.isRequired,
  trackSegmentEvent: _propTypes.default.func
}, _class.defaultProps = {
  offers: [],
  hasDiscountApplied: false,
  appliedOfferId: 0,
  trackSegmentEvent: () => {}
}, _temp);
exports.default = DiscountOfferPopup;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/DiscountOfferRadio.js":
/*!************************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/DiscountOfferRadio.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RenderDiscountOfferRadioButton = ({
  offer,
  input,
  id,
  currentOfferId,
  appliedOfferId,
  onClickHandler
}) => {
  const getExpirationString = endDate => {
    return `Expiring ${(0, _DateTime.timeFromEndOfDay)(endDate)}`;
  };

  const getShowMoreProps = offer => {
    return {
      wrapText: offer.tnc ? offer.tnc.substr(0, 80) : '',
      moreText: offer.tnc && offer.tnc.length > 80 ? offer.tnc.substr(80) : ''
    };
  };

  return _react.default.createElement("div", {
    className: ` clearfix discountOfferItem ${input.value === appliedOfferId ? 'discountOfferItemApplied' : ''} `
  }, _react.default.createElement("div", null, _react.default.createElement("input", _extends({
    type: "radio",
    id: id
  }, input, {
    checked: input.value === currentOfferId,
    className: `discountOfferInput `,
    onClick: () => onClickHandler(input.value)
  })), _react.default.createElement("label", {
    htmlFor: id,
    className: "at_discountOfferRadioBtn"
  }, _react.default.createElement("span", {
    className: "customRadio"
  }), _react.default.createElement("span", {
    className: "discountOfferExpiredMsg absolute t8 r8 f10 fw7"
  }, getExpirationString(offer.endDate)), _react.default.createElement("div", {
    className: "discountOfferData flex ml15"
  }, _react.default.createElement("div", {
    className: "discountValueInfo p15"
  }, _react.default.createElement("div", {
    className: "discountValue mb4"
  }, _react.default.createElement("div", {
    className: "discountVal f16 fw9 pfc3"
  }, offer.discountType === 1 ? `${(0, _parsers.parsePrice)({
    price: offer.offerVal,
    currency: offer.currency,
    appendOnly: false
  })}` : `${offer.offerVal}%`, _react.default.createElement("span", {
    className: "ml8"
  }, offer.discountType === 1 ? 'Cashback' : 'Off', " "))), _react.default.createElement("h3", {
    className: "f14p"
  }, offer.heading), _react.default.createElement("div", {
    className: "offerDescription f12 pfc4 m0"
  }, _react.default.createElement(_ShowMore.default, _extends({
    isDefaultShowMore: false
  }, getShowMoreProps(offer)))))))));
};

RenderDiscountOfferRadioButton.propTypes = {
  offer: _propTypes.default.object,
  currentOfferId: _propTypes.default.number,
  appliedOfferId: _propTypes.default.number,
  input: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  onClickHandler: _propTypes.default.func.isRequired
};
RenderDiscountOfferRadioButton.defaultProps = {
  offer: {},
  currentOfferId: 0
};
var _default = RenderDiscountOfferRadioButton;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/OtherOffers.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/OtherOffers.js ***!
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

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! modules/shared/ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let OtherOffers = (_temp2 = _class = class OtherOffers extends _react.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.getShowMoreProps = offer => {
      return {
        wrapText: offer.tnc ? offer.tnc.substr(0, 82) : '',
        moreText: offer.tnc && offer.tnc.length > 82 ? offer.tnc.substr(82) : ''
      };
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", null, _react.default.createElement("h3", {
      className: "f14p fw9 pfc3 mb15"
    }, "View Other Offers"), this.props.offers.map((offer, index) => _react.default.createElement("div", {
      className: "otherOfferList radius2 p15 mb8",
      key: index
    }, _react.default.createElement("h4", {
      className: "f16p fw7 pfc3"
    }, offer.heading), _react.default.createElement("div", {
      className: "f12 pfc4 m0"
    }, _react.default.createElement(_ShowMore.default, this.getShowMoreProps(offer))))));
  }

}, _class.propTypes = {
  offers: _propTypes.default.array
}, _class.defaultProps = {
  offers: []
}, _temp2);
exports.default = OtherOffers;

/***/ }),

/***/ "./app-v2/modules/discountEngine/components/tnc.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/discountEngine/components/tnc.js ***!
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

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GTnCText = _glamorous.default.div({
  maxHeight: '200px',
  overflow: 'auto'
});

const {
  parse
} = new _htmlToReact.Parser();

const Tnc = ({
  tncHtml
}) => {
  return _react.default.createElement("div", {
    className: "p24"
  }, _react.default.createElement("h2", {
    className: "f18 mb15"
  }, "Terms and Conditions"), _react.default.createElement(GTnCText, null, parse(tncHtml)));
};

Tnc.propTypes = {
  tncHtml: _propTypes.default.string
};
Tnc.defaultProps = {
  trackSegmentEvent: () => {}
};
var _default = Tnc;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/discountEngine/discountOffer.scss":
/*!**********************************************************!*\
  !*** ./app-v2/modules/discountEngine/discountOffer.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"discountOffersModalContent": "_2BiQL",
	"bannerBG": "_Lz7W5",
	"discountOffersBox": "_1lse0",
	"offersBoxIconBig": "_2SaPm",
	"discountOffersTitle": "_lIbgv",
	"offersBoxIcon": "_16C14",
	"formInputDividerWithText": "_VOerc",
	"otherOfferList": "_3TIDV",
	"discountOfferList": "_3nA85",
	"discountOfferItem": "_3-FQ5",
	"discountOfferItemApplied": "_1N8tk",
	"discountOfferInput": "_2jg7j",
	"discountOfferExpiredMsg": "_ZflaP",
	"customRadio": "_3Vjgh",
	"offerApplied": "_1HD8O",
	"discountValue": "_1H-na",
	"discountVal": "_2TrxY",
	"discountValueInfo": "_3MXNZ",
	"offerDescription": "_B9g3X",
	"discountOfferData": "_2egXY"
};

/***/ }),

/***/ "./app-v2/modules/discountEngine/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/discountEngine/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _DiscountOffer = _interopRequireDefault(__webpack_require__(/*! ./DiscountOffer */ "./app-v2/modules/discountEngine/DiscountOffer.js"));

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/discountEngine/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  offers: state.discountOffers.data.aq,
  appliedOfferLoaded: state.discountOffers.appliedOfferLoaded,
  appliedOffer: state.discountOffers.appliedOfferData
}), {
  fetchDiscountOffers: _action.fetchDiscountOffers,
  fetchAppliedOffer: _action.fetchAppliedOffer,
  applyDiscountCoupon: _action.applyDiscountCoupon,
  removeDiscountCoupon: _action.removeDiscountCoupon,
  updateDiscountCoupon: _action.updateDiscountCoupon,
  updateFormField: _action.updateFormField,
  clearFormSubmitError: _action.clearFormSubmitError
})(_DiscountOffer.default));

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/agentCard/AgentCard.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/quote/agentCard/AgentCard.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactVisibilitySensor = _interopRequireDefault(__webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _requestCallback = _interopRequireDefault(__webpack_require__(/*! modules/requestCallback */ "./app-v2/modules/requestCallback/index.js"));

var _AgentChatButton = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/AgentChatButton */ "./app-v2/modules/quote/shared/AgentChatButton.js"));

var _BasicInfo = _interopRequireDefault(__webpack_require__(/*! ./components/BasicInfo */ "./app-v2/modules/quote/agentCard/components/BasicInfo.js"));

var _discountEngine = _interopRequireDefault(__webpack_require__(/*! modules/discountEngine */ "./app-v2/modules/discountEngine/index.js"));

var _AgentDetail = _interopRequireDefault(__webpack_require__(/*! ./components/AgentDetail */ "./app-v2/modules/quote/agentCard/components/AgentDetail.js"));

var _bottom = _interopRequireDefault(__webpack_require__(/*! modules/quote/bottom */ "./app-v2/modules/quote/bottom/index.js"));

var _dealPrice = _interopRequireDefault(__webpack_require__(/*! modules/quote/dealPrice */ "./app-v2/modules/quote/dealPrice/index.js"));

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AgentCard = ({
  tripId,
  quoteId,
  agent,
  userDetails,
  destination,
  tripStatus,
  priceInformation,
  discountInformation,
  downloadQuote,
  showRoster,
  trackSegment
}) => {
  const trackSegmentEvent = (event, section, object, cta) => {
    trackSegment({
      event,
      section: section || 'Agent',
      object: object || `Agent/${agent.id}`,
      cta
    });
  };

  const onSensorChange = isVisible => {
    if (isVisible) {
      trackSegment({
        event: _segmentEvents.ORGANISM_VIEWED,
        section: 'Price Matching'
      });
    }
  };

  const hasDiscountApplied = discountInformation.discount > 0;
  const isTripStatusBeforeInvoiced = (0, _utils.checkIsTripStatusBeforeInvoiced)(tripStatus);
  return _react.default.createElement("div", {
    className: "sbcw mt8 mb2"
  }, _react.default.createElement("div", {
    className: "p15 at_agentDetailCard"
  }, _react.default.createElement(_AgentDetail.default, {
    userDetails: userDetails,
    agent: agent
  }), _react.default.createElement("div", {
    className: "mt15 flex alignCenter spaceBetween at_agentActionCTA_section"
  }, _react.default.createElement("a", {
    href: `tel:${agent.phoneNumber}`,
    onClick: () => trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Agent', '', 'Call'),
    className: "iblock flex alignCenter pfc3 fw7 at_call_CTA"
  }, _react.default.createElement("span", {
    className: "input-24 mr8"
  }, _react.default.createElement(_Icon.CallUs, null)), _react.default.createElement("span", {
    className: "pfc3"
  }, "Call")), _react.default.createElement(_requestCallback.default, null), _react.default.createElement(_reactRouter.Link, {
    to: "",
    className: "iblock flex alignCenter pfc3 fw7 at_message_CTA"
  }, _react.default.createElement("span", {
    className: "input-24 mr8"
  }, _react.default.createElement(_Icon.ChatIcon, null)), _react.default.createElement(_AgentChatButton.default, {
    textClassName: 'pfc3, fw7',
    name: "Message",
    handleChatClick: () => trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Agent', '', 'Message')
  })))), _react.default.createElement(_BasicInfo.default, {
    tripId: tripId,
    quoteId: quoteId,
    destination: destination,
    priceInformation: priceInformation,
    downloadQuote: downloadQuote,
    discountInformation: discountInformation,
    showRoster: showRoster,
    tripStatus: tripStatus,
    trackSegment: trackSegmentEvent
  }), _react.default.createElement(_bottom.default.container, {
    trackSegment: trackSegment
  }), _react.default.createElement("div", {
    className: "pt8 sbc5"
  }), hasDiscountApplied ? _react.default.createElement(_discountEngine.default, {
    discountInformation: discountInformation,
    tripId: tripId,
    renderAppliedCoupon: true
  }) : null, isTripStatusBeforeInvoiced && _react.default.createElement(_reactVisibilitySensor.default, {
    onChange: isVisible => onSensorChange(isVisible),
    partialVisibility: "bottom",
    delayedCall: true
  }, _react.default.createElement(_dealPrice.default, {
    trackSegment: trackSegmentEvent
  })));
};

AgentCard.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  agent: _propTypes.default.shape({
    id: _propTypes.default.number.isRequired,
    name: _propTypes.default.string.isRequired,
    tripsSold: _propTypes.default.number.isRequired,
    email: _propTypes.default.string.isRequired,
    phoneNumber: _propTypes.default.string.isRequired,
    imageUrl: _propTypes.default.string.isRequired,
    star: _propTypes.default.number,
    reviewsCount: _propTypes.default.number,
    reviewLink: _propTypes.default.string
  }),
  userDetails: _propTypes.default.object.isRequired,
  destination: _propTypes.default.string.isRequired,
  tripStatus: _propTypes.default.string.isRequired,
  priceInformation: _propTypes.default.object.isRequired,
  discountInformation: _propTypes.default.object,
  downloadQuote: _propTypes.default.func.isRequired,
  showRoster: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
AgentCard.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  },
  discountInformation: {},
  showRoster: () => {},
  trackSegment: () => {}
};
var _default = AgentCard;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/agentCard/G.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/quote/agentCard/G.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GQuotePriceDestinationDiv = void 0;

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GQuotePriceDestinationDiv = _glamorous.default.div({
  borderTop: '1px solid #EFEFEF',
  borderBottom: '1px solid #EFEFEF',
  '& .quotePriceInfo': {
    minWidth: '200px',
    textAlign: 'right'
  }
});

exports.GQuotePriceDestinationDiv = GQuotePriceDestinationDiv;

/***/ }),

/***/ "./app-v2/modules/quote/agentCard/components/AgentDetail.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/quote/agentCard/components/AgentDetail.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Avatar = _interopRequireDefault(__webpack_require__(/*! modules/shared/Avatar */ "./app-v2/modules/shared/Avatar.js"));

var _RatingStar = _interopRequireDefault(__webpack_require__(/*! modules/shared/RatingStar */ "./app-v2/modules/shared/RatingStar.js"));

var _AgentOnlineIndicator = _interopRequireDefault(__webpack_require__(/*! modules/shared/agentProfile/AgentOnlineIndicator */ "./app-v2/modules/shared/agentProfile/AgentOnlineIndicator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AgentDetail = ({
  agent,
  userDetails
}) => _react.default.createElement("div", {
  className: "flex alignCenter"
}, _react.default.createElement(_Avatar.default, {
  imagePath: agent.imageUrl,
  name: agent.name
}), _react.default.createElement("div", {
  className: "flexFull"
}, _react.default.createElement("a", {
  className: "pfc3",
  href: agent.reviewLink,
  rel: "noopener noreferrer"
}, _react.default.createElement("h6", {
  className: "f14 fw9 mb5"
}, agent.name)), _react.default.createElement("div", {
  className: "mb5 flex alignCenter"
}, _react.default.createElement(_AgentOnlineIndicator.default, {
  showPresenceMessage: true,
  userId: agent.id,
  userDetails: userDetails
}), agent.star ? _react.default.createElement("div", {
  className: "ml8"
}, _react.default.createElement(_RatingStar.default, {
  rating: agent.star
})) : null), _react.default.createElement("p", {
  className: "f14 m0"
}, _react.default.createElement("a", {
  className: "pfc3 at_tripCount",
  href: agent.reviewLink
}, `${agent.tripsSold} Trips`), _react.default.createElement("span", {
  className: "ml5 mr5 pfc4"
}, "|"), _react.default.createElement("a", {
  className: "pfc3 at_ReviewsCount",
  href: agent.reviewLink
}, `${agent.reviewsCount} Reviews`))));

AgentDetail.propTypes = {
  agent: _propTypes.default.shape({
    id: _propTypes.default.number.isRequired,
    name: _propTypes.default.string.isRequired,
    tripsSold: _propTypes.default.number.isRequired,
    email: _propTypes.default.string.isRequired,
    phoneNumber: _propTypes.default.string.isRequired,
    imageUrl: _propTypes.default.string.isRequired,
    star: _propTypes.default.number,
    reviewsCount: _propTypes.default.number,
    reviewLink: _propTypes.default.string
  }),
  userDetails: _propTypes.default.object.isRequired
};
AgentDetail.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  }
};
var _default = AgentDetail;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/agentCard/components/BasicInfo.js":
/*!****************************************************************!*\
  !*** ./app-v2/modules/quote/agentCard/components/BasicInfo.js ***!
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

var _G = __webpack_require__(/*! ../G */ "./app-v2/modules/quote/agentCard/G.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _QuotePrice = _interopRequireDefault(__webpack_require__(/*! modules/quote/shared/price/QuotePrice */ "./app-v2/modules/quote/shared/price/QuotePrice.js"));

var _discountEngine = _interopRequireDefault(__webpack_require__(/*! modules/discountEngine */ "./app-v2/modules/discountEngine/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BasicInfo = ({
  tripId,
  quoteId,
  destination,
  tripStatus,
  priceInformation,
  discountInformation,
  downloadQuote,
  showRoster,
  trackSegment
}) => {
  const handleDownloadQuote = () => {
    downloadQuote({
      quoteId
    }).then(res => {
      if (res.success) {
        window.open(res.download_url, 'target=_blank');
      } else {
        showRoster({
          type: _rosterTypes.INFO_ROSTER,
          message: res.msg
        });
      }
    }).catch(ex => {
      console.log('ex........', ex);
    });
    trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Agent', '', 'Download');
  };

  const canCheckCoupons = !(0, _utils.isTripConverted)(tripStatus);
  const hasDiscountApplied = discountInformation.discount > 0;
  return _react.default.createElement("div", {
    className: "sbcw"
  }, _react.default.createElement(_G.GQuotePriceDestinationDiv, {
    className: "p15 flex alignCenter spaceBetween at_quoteBasicInfo"
  }, _react.default.createElement("p", {
    className: "f14 m0 mr5 flexFull at_quoteDestination"
  }, destination), _react.default.createElement("div", {
    className: "flexFull quotePriceInfo"
  }, _react.default.createElement(_QuotePrice.default, _extends({}, priceInformation, discountInformation)))), _react.default.createElement("div", {
    className: "p15 flex spaceBetween alignCenter"
  }, _react.default.createElement("button", {
    onClick: handleDownloadQuote,
    className: "f14 fw7 sfc1 m0 mr5 flex alignCenter at_downloadQuoteCTA"
  }, _react.default.createElement("span", {
    className: "input-24 iblock mr5"
  }, _react.default.createElement(_Icon.DownloadBlack, null)), _react.default.createElement("span", null, "Download Quote")), canCheckCoupons && !hasDiscountApplied ? _react.default.createElement(_discountEngine.default, {
    discountInformation: discountInformation,
    tripId: tripId
  }) : null));
};

BasicInfo.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  destination: _propTypes.default.string.isRequired,
  tripStatus: _propTypes.default.string.isRequired,
  priceInformation: _propTypes.default.object.isRequired,
  discountInformation: _propTypes.default.object,
  downloadQuote: _propTypes.default.func.isRequired,
  showRoster: _propTypes.default.func,
  trackSegment: _propTypes.default.func
};
BasicInfo.defaultProps = {
  discountInformation: {},
  showRoster: () => {},
  trackSegment: () => {}
};
var _default = BasicInfo;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/agentCard/index.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/quote/agentCard/index.js ***!
  \*************************************************/
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

var _AgentCard = _interopRequireDefault(__webpack_require__(/*! ./AgentCard */ "./app-v2/modules/quote/agentCard/AgentCard.js"));

var _quoteActivities2 = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _auth = __webpack_require__(/*! reducers/auth */ "./app/reducers/auth.js");

var _action3 = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => _objectSpread({
  agent: (0, _quoteList2.getAgentDetails)((0, _quoteList2.getCurrentQuote)(state)),
  tripId: (0, _quoteActivities2.getTripId)(state),
  userDetails: (0, _auth.getUserDetails)(state)
}, (0, _quoteList2.getQuotesBasicInfo)((0, _quoteList2.getCurrentQuote)(state))), {
  downloadQuote: _quoteActivities.downloadQuote,
  showRoster: _action3.showRoster
})(_AgentCard.default));
var _default = {
  container,
  webviewActions: [_quoteList.load, _constants.load, _action2.fetchPreDefinedMessages, _action.fetchDiscountOffers, _quoteActivities.switchQuote, _quoteActivities.updateRequestedTripId]
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/bottom/Bottom.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/quote/bottom/Bottom.js ***!
  \***********************************************/
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

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _CancelBooking = _interopRequireDefault(__webpack_require__(/*! modules/trip/ctas/CancelBooking */ "./app-v2/modules/trip/ctas/CancelBooking.js"));

var _ReactivateTrip = _interopRequireDefault(__webpack_require__(/*! modules/trip/ctas/ReactivateTrip */ "./app-v2/modules/trip/ctas/ReactivateTrip.js"));

var _ReactivateQuote = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/ReactivateQuote */ "./app-v2/modules/quote/ctas/ReactivateQuote.js"));

var _SocialShare = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/SocialShare */ "./app-v2/modules/quote/ctas/SocialShare.js"));

var _SwitchQuote = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/SwitchQuote */ "./app-v2/modules/quote/ctas/SwitchQuote.js"));

var _PayNow = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/PayNow */ "./app-v2/modules/quote/ctas/PayNow.js"));

var _BookNow = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/BookNow */ "./app-v2/modules/quote/ctas/BookNow.js"));

var _ViewInvoiceAndPay = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/ViewInvoiceAndPay */ "./app-v2/modules/quote/ctas/ViewInvoiceAndPay.js"));

var _RejectQuote = _interopRequireDefault(__webpack_require__(/*! modules/quote/ctas/RejectQuote */ "./app-v2/modules/quote/ctas/RejectQuote.js"));

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

var _ChildEventsType = _interopRequireDefault(__webpack_require__(/*! modules/trip/ChildEventsType */ "./app-v2/modules/trip/ChildEventsType.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! modules/quote/popups/bookNow/index */ "./app-v2/modules/quote/popups/bookNow/index.js"));

var _rosterTypes = __webpack_require__(/*! constants/rosterTypes */ "./app/constants/rosterTypes.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _parsers = __webpack_require__(/*! utils/parsers */ "./app/utils/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GFooterDiv = _glamorous.default.div({
  minHeight: '48px',
  justifyContent: 'space-between'
});

let QuoteStickyFooter = class QuoteStickyFooter extends _react.Component {
  constructor(props) {
    super(props);

    this.trackSegmentEvent = (event, cta, object = '') => {
      this.props.trackSegment({
        event,
        section: 'Quote Status',
        object: object,
        cta
      });
    };

    this.callbackHandler = (type, data = {}) => {
      data.tripId = this.props.tripId;
      data.quoteId = this.props.quoteId;

      switch (type) {
        case _EventTypes.default.BOOK_NOW:
          this.openBookNowPopup();
          this.props.bookNow(data);
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Book Now');
          break;

        case _EventTypes.default.REJECT_QUOTE:
          this.props.rejectQuote(data);
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Reject Quote');
          break;

        case _EventTypes.default.REACTIVATE_QUOTE:
          this.props.reactivateQuote(data);
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Reactivate Quote');
          break;

        case _ChildEventsType.default.REACTIVATE_TRIP:
          this.props.reactivateBooking(data);
          break;

        case _ChildEventsType.default.CANCEL_TRIP:
          this.props.cancelBooking(data);
          break;

        case _EventTypes.default.PAY_NOW:
          this.openBookNowPopup();
          this.trackSegmentEvent(_segmentEvents.ORGANISM_CLICKED, 'Proceed to Pay');
          break;
      }
    };

    this.openBookNowPopup = () => {
      this.setState({
        openModal: true,
        closeModal: false
      });
    };

    this.closePopup = () => {
      this.setState({
        closeModal: true,
        openModal: false
      });
    };

    this.state = {
      openModal: false,
      closeModal: true
    };
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.rejectQuoteSuccess && nextProps.rejectQuoteSuccess) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: 'Quote Has Been Rejected'
      });
    } else if (!this.props.reactivateQuoteSuccess && nextProps.reactivateQuoteSuccess) {
      this.props.showRoster({
        type: _rosterTypes.INFO_ROSTER,
        message: 'Quote Reactivated Successfully!'
      });
    }
  }

  render() {
    const ctas = [];
    const {
      tripId,
      quoteId,
      quoteStatus,
      currentQuote,
      convertedQuote,
      userDetails,
      loading
    } = this.props;
    const shareLink = (0, _parsers.formatURL)({
      path: (0, _urlHelpers.downloadQuoteUrl)(quoteId)
    });

    if (quoteStatus.isRejected) {
      ctas.push(_react.default.createElement(_ReactivateQuote.default, {
        callbackHandler: this.callbackHandler,
        tripId: tripId,
        quoteId: quoteId,
        key: "cta-reactivate-quote",
        loading: loading
      }));
    } else if (quoteStatus.isRequestCancelled) {
      ctas.push(_react.default.createElement(_ReactivateTrip.default, {
        callbackHandler: this.callbackHandler,
        tripId: tripId,
        key: "reactivate_trip",
        loading: loading
      }));
    } else if (!(quoteStatus.isConverted || quoteStatus.isCancelled)) {
      if (quoteStatus.isInvoiceRequested) {
        ctas.push(_react.default.createElement(_RejectQuote.default, {
          quoteRejectionReasons: this.props.quoteRejectionReasons,
          callbackHandler: this.callbackHandler,
          tripId: tripId,
          quoteId: quoteId,
          key: "cta-reject-quote",
          loading: loading
        }));
        ctas.push(_react.default.createElement(_PayNow.default, {
          ctaText: "Proceed to Pay",
          disablePayNow: true,
          callbackHandler: this.callbackHandler,
          key: "cta-pay-now"
        }));
      } else if (!quoteStatus.isInvoiced) {
        ctas.push(_react.default.createElement(_RejectQuote.default, {
          quoteRejectionReasons: this.props.quoteRejectionReasons,
          callbackHandler: this.callbackHandler,
          tripId: tripId,
          quoteId: quoteId,
          key: "cta-reject-quote",
          loading: loading
        }));
        ctas.push(_react.default.createElement(_BookNow.default, {
          callbackHandler: this.callbackHandler,
          tripId: tripId,
          quoteId: quoteId,
          key: "cta-book-now"
        }));
      }
    }

    if (!ctas.length) {
      return null;
    }

    return _react.default.createElement("div", null, _react.default.createElement(GFooterDiv, {
      className: "flex sbcw p8 bt"
    }, ctas, _react.default.createElement(_GenericModal.default, {
      trigger: null,
      fullView: true,
      isOpen: this.state.openModal,
      hasCustomClose: true,
      customCloseTrigger: this.state.closeModal,
      onRequestCloseCustom: this.closePopup
    }, _react.default.createElement(_index.default, {
      opsDetail: this.props.currentQuote.opDetails,
      closeModal: this.closePopup
    }))));
  }

};
QuoteStickyFooter.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  quoteStatus: _propTypes.default.shape({
    isRejected: _propTypes.default.bool,
    isInvoiced: _propTypes.default.bool,
    isInvoiceRequested: _propTypes.default.bool,
    isCancelled: _propTypes.default.bool,
    isConverted: _propTypes.default.bool,
    isRequestCancelled: _propTypes.default.bool
  }).isRequired,
  currentQuote: _propTypes.default.object.isRequired,
  convertedQuote: _propTypes.default.object,
  quoteRejectionReasons: _propTypes.default.object.isRequired,
  userDetails: _propTypes.default.object.isRequired,
  bookNow: _propTypes.default.func.isRequired,
  rejectQuote: _propTypes.default.func.isRequired,
  reactivateQuote: _propTypes.default.func.isRequired,
  reactivateBooking: _propTypes.default.func.isRequired,
  cancelBooking: _propTypes.default.func.isRequired,
  rejectQuoteSuccess: _propTypes.default.bool.isRequired,
  reactivateQuoteSuccess: _propTypes.default.bool.isRequired,
  loading: _propTypes.default.bool,
  trackSegment: _propTypes.default.func,
  showRoster: _propTypes.default.func
};
QuoteStickyFooter.defaultProps = {
  loading: false,
  convertedQuote: {},
  trackSegment: () => {},
  showRoster: () => {}
};
var _default = QuoteStickyFooter;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/bottom/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/quote/bottom/index.js ***!
  \**********************************************/
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

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _constants = __webpack_require__(/*! modules/quote/reducers/constants */ "./app-v2/modules/quote/reducers/constants.js");

var _auth = __webpack_require__(/*! reducers/auth */ "./app/reducers/auth.js");

var _quoteActivities2 = __webpack_require__(/*! modules/quote/actions/quoteActivities */ "./app-v2/modules/quote/actions/quoteActivities.js");

var _tripActivities = __webpack_require__(/*! modules/trip/actions/tripActivities */ "./app-v2/modules/trip/actions/tripActivities.js");

var _action = __webpack_require__(/*! modules/roster/action */ "./app-v2/modules/roster/action.js");

var _Bottom = _interopRequireDefault(__webpack_require__(/*! ./Bottom */ "./app-v2/modules/quote/bottom/Bottom.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => {
  const currentQuote = (0, _quoteList.getCurrentQuote)(state);
  return _objectSpread({
    tripId: (0, _quoteActivities.getTripId)(state),
    quoteId: currentQuote.id,
    currentQuote: currentQuote,
    convertedQuote: (0, _quoteList.getConvertedQuote)(state),
    quoteStatus: (0, _quoteList.getCurrentQuoteStatuses)(currentQuote),
    quoteRejectionReasons: (0, _constants.getQuoteRejectionReasons)(state),
    userDetails: (0, _auth.getUserDetails)(state)
  }, (0, _quoteList.quoteCtasStatus)(state));
}, {
  bookNow: _quoteActivities2.bookNow,
  rejectQuote: _quoteActivities2.rejectQuote,
  reactivateQuote: _quoteActivities2.reactivateQuote,
  reactivateBooking: _tripActivities.reactivateBooking,
  cancelBooking: _tripActivities.cancelBooking,
  showRoster: _action.showRoster
})(_Bottom.default));
var _default = {
  container
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/BookNow.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/quote/ctas/BookNow.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let BookNow = class BookNow extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleBookNow = () => {
      const {
        tripId,
        quoteId
      } = this.props;
      this.props.callbackHandler(_EventTypes.default.BOOK_NOW, {
        tripId,
        quoteId
      });
    }, _temp;
  }

  render() {
    const {
      isQuoteCardCta
    } = this.props;
    return _react.default.createElement("div", {
      className: "flexFull"
    }, _react.default.createElement("button", {
      className: isQuoteCardCta ? 'block p15 text-left wfull at_bookNow' : 'wfull btn-pri-large ripple pl5 pr5 at_bookNow',
      onClick: this.handleBookNow
    }, "Book Now"));
  }

};
BookNow.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  opsDetail: _propTypes.default.object,
  callbackHandler: _propTypes.default.func,
  trackSegment: _propTypes.default.func,
  isQuoteCardCta: _propTypes.default.bool
};
BookNow.defaultProps = {
  opsDetail: {},
  callbackHandler: () => {},
  trackSegment: () => {},
  isQuoteCardCta: false
};
var _default = BookNow;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/PayNow.js":
/*!*********************************************!*\
  !*** ./app-v2/modules/quote/ctas/PayNow.js ***!
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

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! ../EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Pay Now';

const PayNow = ({
  payNowUrl,
  ctaText,
  disablePayNow,
  callbackHandler,
  trackSegment
}) => {
  const handlePayNow = () => {
    // trackSegment('Book Now clicked', 'Quote Price', 'Book Now');
    callbackHandler(_EventTypes.default.PAY_NOW);
  };

  return _react.default.createElement("div", {
    className: "flexFull flex"
  }, disablePayNow ? _react.default.createElement("div", {
    className: "flexFull flex"
  }, _react.default.createElement("button", {
    className: "wfull btn-pri-large ripple pl5 pr5",
    onClick: handlePayNow
  }, ctaText)) : _react.default.createElement("div", {
    className: "flexFull flex"
  }, _react.default.createElement("a", {
    href: payNowUrl,
    className: "wfull btn-filled-pri-large radius2 ripple"
  }, ctaText)));
};

PayNow.propTypes = {
  payNowUrl: _propTypes.default.string,
  ctaText: _propTypes.default.string,
  disablePayNow: _propTypes.default.bool,
  callbackHandler: _propTypes.default.func.isRequired,
  trackSegment: _propTypes.default.func
};
PayNow.defaultProps = {
  payNowUrl: '',
  ctaText: CTA_TEXT,
  disablePayNow: false,
  trackSegment: () => {}
};
var _default = PayNow;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/ctas/ReactivateQuote.js":
/*!******************************************************!*\
  !*** ./app-v2/modules/quote/ctas/ReactivateQuote.js ***!
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

var _EventTypes = _interopRequireDefault(__webpack_require__(/*! modules/quote/EventTypes */ "./app-v2/modules/quote/EventTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Reactivate Quote';

const ReactivateQuote = ({
  tripId,
  quoteId,
  loading,
  callbackHandler,
  isQuoteCardCta
}) => _react.default.createElement("div", {
  className: "flexFull flex"
}, _react.default.createElement("button", {
  className: isQuoteCardCta ? 'block p15 text-left wfull' : 'wfull btn-pri-large ripple pl5 pr5',
  disabled: loading,
  onClick: () => {
    callbackHandler(_EventTypes.default.REACTIVATE_QUOTE, {
      tripId,
      quoteId
    });
  }
}, CTA_TEXT));

ReactivateQuote.propTypes = {
  tripId: _propTypes.default.number.isRequired,
  quoteId: _propTypes.default.number.isRequired,
  loading: _propTypes.default.bool,
  callbackHandler: _propTypes.default.func.isRequired,
  isQuoteCardCta: _propTypes.default.bool
};
ReactivateQuote.defaultProps = {
  isQuoteCardCta: false,
  loading: false
};
var _default = ReactivateQuote;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/dealPrice/dealPrice.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/quote/dealPrice/dealPrice.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _appConfig = _interopRequireDefault(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _ModalHeaderCustom = _interopRequireDefault(__webpack_require__(/*! modules/shared/headers/ModalHeaderCustom */ "./app-v2/modules/shared/headers/ModalHeaderCustom.js"));

var _form = _interopRequireDefault(__webpack_require__(/*! ./form */ "./app-v2/modules/quote/dealPrice/form.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! app/actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _DateTime = __webpack_require__(/*! helpers/DateTime */ "./app/helpers/DateTime.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

var _rtms = __webpack_require__(/*! helpers/rtms */ "./app/helpers/rtms.js");

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThankYouMessage = ({
  agentName
}) => {
  return _react.default.createElement("div", {
    className: "mt24"
  }, _react.default.createElement("div", {
    className: "thank-you-animation relative"
  }, _react.default.createElement("div", {
    className: "envelope-box"
  }, _react.default.createElement(_Icon.EnvelopeIcon, null)), _react.default.createElement("div", {
    className: "thankyou-tick"
  }, _react.default.createElement(_Icon.ThankYouTick, null))), _react.default.createElement("p", {
    className: "pfc1 f32 fw7 text-center"
  }, "Thank You"), _react.default.createElement("p", {
    className: "f14 text-center"
  }, agentName ? _react.default.createElement("b", null, agentName) : 'Our Agent', " will get back to you soon."));
};

ThankYouMessage.propTypes = {
  agentName: _propTypes.default.string
};

const generateTrigger = handleModalOpen => _react.default.createElement("div", {
  className: "p15 text-center"
}, _react.default.createElement("p", {
  className: "f16 fw9 lh24"
}, _react.default.createElement("span", {
  className: "f16 fw9"
}, "Got a cheaper deal?"), _react.default.createElement("span", {
  className: "sfc1 ml4",
  onClick: () => handleModalOpen()
}, "Tell us")), _react.default.createElement("p", {
  className: "f14 pfc4 fw4 lh24"
}, "And we will try to match the price."));

let DealPrice = (_temp2 = _class = class DealPrice extends _react.default.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showThankYou: false,
      closeModal: true
    }, this.showThankYou = () => this.setState({
      showThankYou: true
    }), this.submit = async values => {
      setTimeout(() => {
        this.setState({
          closeModal: true,
          showThankYou: false
        });
      }, 3000);
      this.showThankYou();
      this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Price Matching-Popup', '', 'Submit');
      await this.initializeChat();
      this.sendMessage(`Dear Agent, I am receiving a better quote at ${values.currency} ${values.price}. Please provide me a better deal`);
    }, this.initializeChat = async () => {
      if (_appConfig.default.useRtms && this.rtms_) {
        this.rtms_.close();
      }

      const {
        userDetails,
        addMessage,
        agent,
        currentQuoteId
      } = this.props;
      const {
        currentSubscription_,
        rtms_
      } = await (0, _rtms.initializeChatUsingRtms)({
        userId: userDetails.id,
        agentId: agent.id
      });
      this.currentSubscription_ = currentSubscription_;
      this.rtms_ = rtms_;
      this.currentSubscription_.on(_rtms.MessageType.MESSAGE, function (message) {
        if (message.commentable_id === currentQuoteId) {
          addMessage(message, currentQuoteId);
        }
      }.bind(this));
      this.currentSubscription_.on(_rtms.MessageType.MY_MESSAGE, function (message) {
        if (message.commentable_id === currentQuoteId) {
          addMessage(message, currentQuoteId);
        }
      }.bind(this));
    }, this.handleModalOpen = () => {
      this.setState({
        closeModal: false
      });
      this.props.trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Price Matching', '', 'Tell Us');
    }, this.handleModalClose = () => {
      const {
        trackSegment
      } = this.props;
      this.setState({
        showThankYou: false,
        closeModal: true
      });
      trackSegment(_segmentEvents.ORGANISM_CLICKED, 'Price Matching-Popup', '', 'Cross');
    }, _temp;
  }

  sendMessage(message) {
    const {
      tripId,
      currentQuoteId,
      createComment,
      userDetails,
      addMessage
    } = this.props;
    const {
      id,
      name,
      email,
      avatar
    } = userDetails;
    const messageObj = {
      title: '#chat',
      comment: message,
      commentBy: 'TRAVELLER',
      commentable_id: currentQuoteId,
      commentable_type: 'Quote',
      role: 'traveller',
      userId: id,
      user_id: id,
      userName: name,
      email,
      userPic: avatar,
      createdAt: (0, _DateTime.currentDate)(),
      created_at: new Date().toISOString().split('.')[0] + "+00:00",
      uId: (0, _utils.generateUniqueId)(id, (0, _DateTime.toTimeStamp)(new Date()), message),
      notification_sub_category: 'comment_added',
      trip_id: parseInt(tripId.toString().replace(/[^0-9\.]/g, ''), 10),
      isPending: 0
    };
    this.currentSubscription_.sendMessage({
      content: messageObj
    });
    createComment(tripId, currentQuoteId, messageObj);
  }

  render() {
    const {
      agent
    } = this.props;
    return _react.default.createElement(_GenericModal.default, {
      trigger: generateTrigger(this.handleModalOpen),
      fullView: true,
      isDefaultModal: false,
      hasCustomClose: true,
      onRequestCloseCustom: this.handleModalClose,
      customCloseTrigger: this.state.closeModal
    }, _react.default.createElement("div", {
      className: "relative siteModalContent"
    }, _react.default.createElement(_ModalHeaderCustom.default, {
      heading: 'Got a better deal?'
    }), _react.default.createElement("div", {
      className: "p24"
    }, this.state.showThankYou ? _react.default.createElement(ThankYouMessage, {
      agentName: agent && agent.name
    }) : _react.default.createElement(_form.default, {
      save: this.submit
    }))));
  }

}, _class.propTypes = {
  trackSegment: _propTypes.default.func.isRequired,
  userDetails: _propTypes.default.object.isRequired,
  agent: _propTypes.default.object.isRequired,
  tripId: _propTypes.default.number.isRequired,
  currentQuoteId: _propTypes.default.number.isRequired,
  createComment: _propTypes.default.func.isRequired,
  addMessage: _propTypes.default.func.isRequired
}, _temp2);
var _default = DealPrice;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/dealPrice/form.js":
/*!************************************************!*\
  !*** ./app-v2/modules/quote/dealPrice/form.js ***!
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

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reduxForm = __webpack_require__(/*! redux-form */ "redux-form");

var _input = _interopRequireDefault(__webpack_require__(/*! modules/shared/input */ "./app-v2/modules/shared/input/index.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! modules/flights/form/components/Dropdown */ "./app-v2/modules/flights/form/components/Dropdown.js"));

var _currencies = __webpack_require__(/*! constants/currencies */ "./app/constants/currencies.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let DealPriceForm = (_temp = _class = class DealPriceForm extends _react.default.PureComponent {
  render() {
    const {
      handleSubmit,
      save,
      quotePrice
    } = this.props;
    return _react.default.createElement("form", {
      onSubmit: handleSubmit(save),
      className: "at_priceMatchForm"
    }, _react.default.createElement("h4", {
      className: "pfc1 f32 fw7 pb8 lh24 m0 flexFull text-left  "
    }, "We Price Match!"), _react.default.createElement("p", {
      className: "f14 mb48"
    }, "Tell us a better deal and we will try to match the price."), _react.default.createElement("div", {
      className: "mb24"
    }, _react.default.createElement("label", {
      className: "f14 fw9 pb8 block"
    }, "Please share the quoted price ", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("div", {
      className: "row"
    }, _react.default.createElement("div", {
      className: "col-xs-4"
    }, _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "currency",
      component: _Dropdown.default,
      options: _currencies.CurrencyList,
      readOnly: true,
      fetchSuggestions: false,
      inputClassName: ""
    }), _react.default.createElement("span", {
      className: "t25 r4 block wauto lauto input-icon absolute-center-v downArrow"
    }, _react.default.createElement(_Icon.DownArrow, null)))), _react.default.createElement("div", {
      className: "col-xs-8 pl0"
    }, _react.default.createElement(_reduxForm.Field, {
      name: "price",
      type: "number",
      placeholder: "Quoted Price",
      component: _input.default
    })))), _react.default.createElement("div", {
      className: "bs6 p8 sbcw b0 l0 r0 z2 fixed"
    }, _react.default.createElement("button", {
      className: "btn-filled-pri-large wfull radius2",
      type: "submit",
      disabled: !quotePrice
    }, "Submit")));
  }

}, _class.propTypes = {
  save: _propTypes.default.func.isRequired,
  handleSubmit: _propTypes.default.func.isRequired,
  quotePrice: _propTypes.default.number
}, _class.defaultProps = {
  quotePrice: 0
}, _temp);

const validate = values => {
  const errors = {};

  if (!values.price) {
    errors.price = 'Please enter the quote price';
  }

  return errors;
};

const selector = (0, _reduxForm.formValueSelector)('dealPriceForm');
const DealPriceConnectedForm = (0, _reactRedux.connect)(state => {
  const quotePrice = selector(state, 'price');
  return {
    quotePrice
  };
})(DealPriceForm);

var _default = (0, _reduxForm.reduxForm)({
  form: 'dealPriceForm',
  validate,
  initialValues: {
    currency: _currencies.DEFAULT_CURRENCY.value
  },
  enableReinitialize: true
})(DealPriceConnectedForm);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/dealPrice/index.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/quote/dealPrice/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _dealPrice = _interopRequireDefault(__webpack_require__(/*! ./dealPrice */ "./app-v2/modules/quote/dealPrice/dealPrice.js"));

var _quoteList = __webpack_require__(/*! modules/quote/reducers/quoteList */ "./app-v2/modules/quote/reducers/quoteList.js");

var _quoteActivities = __webpack_require__(/*! modules/quote/reducers/quoteActivities */ "./app-v2/modules/quote/reducers/quoteActivities.js");

var _action = __webpack_require__(/*! modules/chat/action */ "./app-v2/modules/chat/action.js");

var _auth = __webpack_require__(/*! app/reducers/auth */ "./app/reducers/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = (0, _reactRedux.connect)(state => ({
  agent: (0, _quoteList.getAgentDetails)((0, _quoteList.getCurrentQuote)(state)),
  currentQuoteId: state.quote.actions.currentQuoteId,
  tripId: (0, _quoteActivities.getTripId)(state),
  userDetails: (0, _auth.getUserDetails)(state)
}), {
  createComment: _action.createComment,
  addMessage: _action.addMessage // quoteCommentAdded

})(_dealPrice.default);
var _default = Container;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/quote/shared/AgentChatButton.js":
/*!********************************************************!*\
  !*** ./app-v2/modules/quote/shared/AgentChatButton.js ***!
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _GenericModal = _interopRequireDefault(__webpack_require__(/*! modules/shared/GenericModal */ "./app-v2/modules/shared/GenericModal.js"));

var _chat = _interopRequireDefault(__webpack_require__(/*! modules/chat */ "./app-v2/modules/chat/index.js"));

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AgentChatButton = (_temp = _class = class AgentChatButton extends _react.default.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      textClassName
    } = this.props;
    const ChatContainer = _chat.default.container;
    return _react.default.createElement("div", null, this.props.showIcon ? _react.default.createElement("span", {
      className: "input-24 mr8"
    }, _react.default.createElement(_Icon.DefaultIcon, null)) : null, _react.default.createElement(_GenericModal.default, {
      trigger: _react.default.createElement("button", {
        className: `${textClassName} at_agent_chat_button`,
        onClick: this.props.handleChatClick
      }, this.props.name),
      fullView: true,
      hasCustomClose: true,
      isWhiteIcon: true
    }, _react.default.createElement(ChatContainer, null)));
  }

}, _class.propTypes = {
  name: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  handleChatClick: _propTypes.default.func,
  textClassName: _propTypes.default.string,
  customButton: _propTypes.default.bool
}, _class.defaultProps = {
  name: 'Chat',
  showIcon: false,
  handleChatClick: () => {},
  textClassName: 'f14 fw7 sfc1',
  customButton: false
}, _temp);
var _default = AgentChatButton;
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

/***/ "./app-v2/modules/shared/ShowMore.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/ShowMore.js ***!
  \*******************************************/
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

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GreadmoreLabel = _glamorous.default.label({
  '& button.read-more-button': {
    lineHeight: '20px',
    padding: '0'
  }
});

const GDownArrowSpan = _glamorous.default.span({
  width: '10px',
  height: '6px',
  '& svg': {
    width: '10px',
    height: '6px',
    top: '1px'
  }
});

let ShowMore = class ShowMore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.defaultOpen
    };
    this.handleChange = this.handleChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      checked: false
    });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.state.checked && this.props.trackSegment({
        cta: 'Read More'
      });
    });
  }

  render() {
    const textLength = 195;
    return _react.default.createElement("div", {
      className: "row row- text-left"
    }, _react.default.createElement("input", {
      type: "checkbox",
      className: "read-more-state",
      checked: this.state.checked,
      id: "post-1"
    }), _react.default.createElement("div", {
      className: `read-more-wrap ${this.props.isDefaultShowMore ? 'p-last-no-margin pfc3 f14p dynamicTextInherit' : ''}`
    }, // TODO: find a better way for truncate the string
    !this.state.checked && this.props.appendText && this.props.wrapText.length >= textLength ? this.props.wrapText + this.props.appendText : this.props.wrapText, _react.default.createElement("span", {
      className: "read-more-target"
    }, this.props.moreText)), this.props.moreText.length > 0 || !(0, _isEmpty2.default)(this.props.moreText) ? _react.default.createElement(GreadmoreLabel, {
      htmlFor: "post-1",
      className: "read-more-trigger relative"
    }, _react.default.createElement("button", {
      className: "read-more-button flex alignCenter spaceBetween relative f12 fw7",
      onClick: this.handleChange
    }, _react.default.createElement("span", {
      className: "flexFull f14 fw7"
    }, this.state.checked ? this.props.showLessText : this.props.showMoreText, this.state.checked), _react.default.createElement(GDownArrowSpan, {
      className: "flex ml8 relative alignCenter justifyCenter"
    }, _react.default.createElement(_Icon.BlueDownArrow, null)))) : '');
  }

};
ShowMore.propTypes = {
  wrapText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]).isRequired,
  moreText: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string, _propTypes.default.object]),
  showMoreText: _propTypes.default.string,
  showLessText: _propTypes.default.string,
  defaultOpen: _propTypes.default.bool,
  isDefaultShowMore: _propTypes.default.bool,
  trackSegment: _propTypes.default.func,
  appendText: _propTypes.default.string
};
ShowMore.defaultProps = {
  wrapText: '',
  moreText: '',
  showMoreText: 'Read More',
  showLessText: 'Read Less',
  defaultOpen: false,
  isDefaultShowMore: true,
  trackSegment: () => {}
};
var _default = ShowMore;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/input/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/shared/input/index.js ***!
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

const InputComponent = (_ref) => {
  let {
    input,
    label,
    labelClassName,
    placeholder,
    meta: {
      touched,
      error
    },
    onChange
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["input", "label", "labelClassName", "placeholder", "meta", "onChange"]);

  return _react.default.createElement("div", null, label ? _react.default.createElement("label", {
    className: labelClassName
  }, label) : null, _react.default.createElement("input", _extends({
    className: "input"
  }, input, rest, {
    placeholder: placeholder,
    onChange: val => {
      input.onChange(val);
      onChange(val);
    }
  })), touched && error && _react.default.createElement("span", {
    className: "input-error-text"
  }, error));
};

InputComponent.propTypes = {
  input: _propTypes.default.object.isRequired,
  onChange: _propTypes.default.func,
  meta: _propTypes.default.object.isRequired,
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  labelClassName: _propTypes.default.string
};
InputComponent.defaultProps = {
  onChange: () => {},
  label: '',
  placeholder: '',
  labelClassName: ''
};
var _default = InputComponent;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/trip/ctas/ReactivateTrip.js":
/*!****************************************************!*\
  !*** ./app-v2/modules/trip/ctas/ReactivateTrip.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _ChildEventsType = _interopRequireDefault(__webpack_require__(/*! modules/trip/ChildEventsType */ "./app-v2/modules/trip/ChildEventsType.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CTA_TEXT = 'Reactivate Trip';

const ReactivateTrip = ({
  tripId,
  callbackHandler
}) => _react.default.createElement("div", {
  className: "flexFull flex"
}, _react.default.createElement("button", {
  className: "wfull btn-pri-large ripple pl5 pr5",
  onClick: () => {
    callbackHandler(_ChildEventsType.default.REACTIVATE_TRIP, {
      tripId
    });
  }
}, CTA_TEXT));

ReactivateTrip.propTypes = {
  tripId: _propTypes.PropTypes.number.isRequired,
  callbackHandler: _propTypes.PropTypes.func.isRequired
};
ReactivateTrip.defaultProps = {};
var _default = ReactivateTrip;
exports.default = _default;

/***/ }),

/***/ "./app/constants/currencies.js":
/*!*************************************!*\
  !*** ./app/constants/currencies.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_CURRENCY = exports.CurrencyList = void 0;
const CurrencyList = Object.freeze([{
  label: 'INR',
  value: 'INR'
}, {
  label: 'USD',
  value: 'USD'
}, {
  label: 'EUR',
  value: 'EUR'
}, {
  label: 'SGD',
  value: 'SGD'
}, {
  label: 'MYR',
  value: 'MYR'
}, {
  label: 'PHP',
  value: 'PHP'
}, {
  label: 'GBP',
  value: 'GBP'
}, {
  label: 'AUD',
  value: 'AUD'
}, {
  label: 'CAD',
  value: 'CAD'
}, {
  label: 'SAR',
  value: 'SAR'
}, {
  label: 'LBP',
  value: 'LBP'
}, {
  label: 'ZAR',
  value: 'ZAR'
}, {
  label: 'PKR',
  value: 'PKR'
}, {
  label: 'AED',
  value: 'AED'
}, {
  label: 'CHF',
  value: 'CHF'
}, {
  label: 'JPY',
  value: 'JPY'
}, {
  label: 'NZD',
  value: 'NZD'
}]);
exports.CurrencyList = CurrencyList;
const DEFAULT_CURRENCY = Object.freeze({
  label: 'INR',
  value: 'INR'
});
exports.DEFAULT_CURRENCY = DEFAULT_CURRENCY;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9EaXNjb3VudE9mZmVyLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rpc2NvdW50RW5naW5lL2NvbXBvbmVudHMvQXBwbGllZENvdXBvbkJhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9jb21wb25lbnRzL0Rpc2NvdW50T2ZmZXJJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9kaXNjb3VudEVuZ2luZS9jb21wb25lbnRzL0Rpc2NvdW50T2ZmZXJMaXN0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rpc2NvdW50RW5naW5lL2NvbXBvbmVudHMvRGlzY291bnRPZmZlclBvcHVwLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rpc2NvdW50RW5naW5lL2NvbXBvbmVudHMvRGlzY291bnRPZmZlclJhZGlvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rpc2NvdW50RW5naW5lL2NvbXBvbmVudHMvT3RoZXJPZmZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZGlzY291bnRFbmdpbmUvY29tcG9uZW50cy90bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvZGlzY291bnRFbmdpbmUvZGlzY291bnRPZmZlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL2Rpc2NvdW50RW5naW5lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2FnZW50Q2FyZC9BZ2VudENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvYWdlbnRDYXJkL0cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvYWdlbnRDYXJkL2NvbXBvbmVudHMvQWdlbnREZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvYWdlbnRDYXJkL2NvbXBvbmVudHMvQmFzaWNJbmZvLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2FnZW50Q2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9ib3R0b20vQm90dG9tLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3F1b3RlL2JvdHRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9jdGFzL0Jvb2tOb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY3Rhcy9QYXlOb3cuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvY3Rhcy9SZWFjdGl2YXRlUXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvZGVhbFByaWNlL2RlYWxQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9kZWFsUHJpY2UvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9xdW90ZS9kZWFsUHJpY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvcXVvdGUvc2hhcmVkL0FnZW50Q2hhdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvU2hvd01vcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyaXAvY3Rhcy9SZWFjdGl2YXRlVHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29uc3RhbnRzL2N1cnJlbmNpZXMuanMiXSwibmFtZXMiOlsiRGlzY291bnRPZmZlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInRyYWNrU2VnbWVudEV2ZW50IiwiZGF0YSIsImV2ZW50IiwiT1JHQU5JU01fVklFV0VEIiwiaXNFdmVudFRyYWNrZWQiLCJ0cmlwSWQiLCJjYXRlZ29yeSIsInNlY3Rpb24iLCJvYmplY3QiLCJjdGEiLCJ0cmlwX2lkIiwiZGVzdGluYXRpb25faWQiLCJtaXNjX2lkXzEiLCJtaXNjSWQxIiwibWlzY190eXBlXzEiLCJtaXNjVHlwZTEiLCJtaXNjX2lkXzIiLCJtaXNjSWQyIiwibWlzY190eXBlXzIiLCJtaXNjVHlwZTIiLCJtaXNjX2lkXzMiLCJtaXNjSWQzIiwibWlzY190eXBlXzMiLCJtaXNjVHlwZTMiLCJtaXNjX2lkXzQiLCJtaXNjSWQ0IiwibWlzY190eXBlXzQiLCJtaXNjVHlwZTQiLCJtaXNjX2lkXzUiLCJtaXNjSWQ1IiwibWlzY190eXBlXzUiLCJtaXNjVHlwZTUiLCJ0aHJvd1N1Ym1pc3Npb25FcnJvciIsImVycm9yIiwiU3VibWlzc2lvbkVycm9yIiwiX2Vycm9yIiwiaGFuZGxlUmVtb3ZlRGlzY291bnRDb3Vwb24iLCJyZW1vdmVEaXNjb3VudENvdXBvbiIsInRoZW4iLCJyZXN1bHRzIiwidmFsaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImFwcGx5Q291cG9uQ2FsbGJhY2siLCJzZXRTdGF0ZSIsImNsb3NlTW9kYWwiLCJtc2ciLCJhcHBseURpc2NvdW50Q291cG9uIiwicGFyYW1zIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwiY2xlYXJGb3JtU3VibWl0RXJyb3IiLCJkaXNjb3VudE9mZmVySW5wdXQiLCJkaXNjb3VudE9mZmVyUmFkaW8iLCJvZmZlclR5cGUiLCJvZmZlckNvZGUiLCJhcHBseU1vZGUiLCJjb3Vwb25JZCIsIm9mZmVyIiwib2ZmZXJzIiwiZmlsdGVyIiwiY291cG9uVHlwZSIsInRvTG93ZXJDYXNlIiwidG9TdHJpbmciLCJjb2RlIiwiT1JHQU5JU01fQ0xJQ0tFRCIsImhhc0Rpc2NvdW50QXBwbGllZCIsInVwZGF0ZURpc2NvdW50Q291cG9uIiwib25TZW5zb3JDaGFuZ2UiLCJpc1Zpc2libGUiLCJzdGF0ZSIsImRpc2NvdW50SW5mb3JtYXRpb24iLCJkaXNjb3VudCIsImNvbXBvbmVudERpZE1vdW50IiwiZGlzY291bnRhYmxlVHlwZUlkIiwiZmV0Y2hBcHBsaWVkT2ZmZXIiLCJVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlckRpc2NvdW50T2ZmZXJzTW9kYWwiLCJ1cGRhdGVGb3JtRmllbGQiLCJyZW5kZXIiLCJyZW5kZXJBcHBsaWVkQ291cG9uIiwiYXBwbGllZE9mZmVyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwYXJzZSIsIlBhcnNlciIsIkFwcGxpZWRDb3Vwb25CYW5uZXIiLCJnZXRBbW91bnQiLCJkaXNjb3VudFR5cGUiLCJwcmljZSIsIm9mZmVyVmFsIiwiY3VycmVuY3kiLCJ0bmNIdG1sIiwiRGlzY291bnRPZmZlcklucHV0IiwiaW5wdXQiLCJtZXRhIiwidG91Y2hlZCIsInJlc2V0UmFkaW8iLCJvbkNoYW5nZSIsImFueSIsIkRpc2NvdW50T2ZmZXJMaXN0IiwiY3VycmVudE9mZmVySWQiLCJ0b2dnbGVSYWRpbyIsImFwcGxpZWRPZmZlcklkIiwidGV4dElucHV0T2ZmZXIiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIlJlbmRlckRpc2NvdW50T2ZmZXJSYWRpb0J1dHRvbiIsInN1Ym1pdHRpbmciLCJzdHJpbmciLCJkaXNjb3VudENvdXBvbiIsImZvcm0iLCJEaXNjb3VudE9mZmVyUG9wdXAiLCJkaXNjb3VudE9mZmVycyIsImluZm9ybWF0b3J5T2ZmZXJzIiwiaWQiLCJvbkNsaWNrSGFuZGxlciIsImdldEV4cGlyYXRpb25TdHJpbmciLCJlbmREYXRlIiwiZ2V0U2hvd01vcmVQcm9wcyIsIndyYXBUZXh0IiwidG5jIiwic3Vic3RyIiwibW9yZVRleHQiLCJ2YWx1ZSIsImFwcGVuZE9ubHkiLCJoZWFkaW5nIiwiT3RoZXJPZmZlcnMiLCJHVG5DVGV4dCIsImdsYW1vcm91cyIsImRpdiIsIm1heEhlaWdodCIsIm92ZXJmbG93IiwiVG5jIiwiYXEiLCJhcHBsaWVkT2ZmZXJMb2FkZWQiLCJhcHBsaWVkT2ZmZXJEYXRhIiwiZmV0Y2hEaXNjb3VudE9mZmVycyIsIkFnZW50Q2FyZCIsInF1b3RlSWQiLCJhZ2VudCIsInVzZXJEZXRhaWxzIiwiZGVzdGluYXRpb24iLCJ0cmlwU3RhdHVzIiwicHJpY2VJbmZvcm1hdGlvbiIsImRvd25sb2FkUXVvdGUiLCJzaG93Um9zdGVyIiwidHJhY2tTZWdtZW50IiwiaXNUcmlwU3RhdHVzQmVmb3JlSW52b2ljZWQiLCJwaG9uZU51bWJlciIsInNoYXBlIiwibmFtZSIsInRyaXBzU29sZCIsImVtYWlsIiwiaW1hZ2VVcmwiLCJzdGFyIiwicmV2aWV3c0NvdW50IiwicmV2aWV3TGluayIsIkdRdW90ZVByaWNlRGVzdGluYXRpb25EaXYiLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsIkFnZW50RGV0YWlsIiwiQmFzaWNJbmZvIiwiaGFuZGxlRG93bmxvYWRRdW90ZSIsInJlcyIsInN1Y2Nlc3MiLCJvcGVuIiwiZG93bmxvYWRfdXJsIiwidHlwZSIsIklORk9fUk9TVEVSIiwibWVzc2FnZSIsImNhdGNoIiwiZXgiLCJjb25zb2xlIiwibG9nIiwiY2FuQ2hlY2tDb3Vwb25zIiwiY29udGFpbmVyIiwid2Vidmlld0FjdGlvbnMiLCJmZXRjaFF1b3Rlc0RhdGEiLCJsb2FkQ29uc3RhbnRzIiwiZmV0Y2hQcmVEZWZpbmVkTWVzc2FnZXMiLCJzd2l0Y2hRdW90ZSIsInVwZGF0ZVJlcXVlc3RlZFRyaXBJZCIsIkdGb290ZXJEaXYiLCJtaW5IZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsIlF1b3RlU3RpY2t5Rm9vdGVyIiwiY2FsbGJhY2tIYW5kbGVyIiwiUVVPVEVfRVZFTlRTX0VOVU1TIiwiQk9PS19OT1ciLCJvcGVuQm9va05vd1BvcHVwIiwiYm9va05vdyIsIlJFSkVDVF9RVU9URSIsInJlamVjdFF1b3RlIiwiUkVBQ1RJVkFURV9RVU9URSIsInJlYWN0aXZhdGVRdW90ZSIsIlRSSVBfRVZFTlRTX0VOVU1TIiwiUkVBQ1RJVkFURV9UUklQIiwicmVhY3RpdmF0ZUJvb2tpbmciLCJDQU5DRUxfVFJJUCIsImNhbmNlbEJvb2tpbmciLCJQQVlfTk9XIiwib3Blbk1vZGFsIiwiY2xvc2VQb3B1cCIsImJpbmQiLCJyZWplY3RRdW90ZVN1Y2Nlc3MiLCJyZWFjdGl2YXRlUXVvdGVTdWNjZXNzIiwiY3RhcyIsInF1b3RlU3RhdHVzIiwiY3VycmVudFF1b3RlIiwiY29udmVydGVkUXVvdGUiLCJsb2FkaW5nIiwic2hhcmVMaW5rIiwicGF0aCIsImlzUmVqZWN0ZWQiLCJwdXNoIiwiaXNSZXF1ZXN0Q2FuY2VsbGVkIiwiaXNDb252ZXJ0ZWQiLCJpc0NhbmNlbGxlZCIsImlzSW52b2ljZVJlcXVlc3RlZCIsInF1b3RlUmVqZWN0aW9uUmVhc29ucyIsImlzSW52b2ljZWQiLCJvcERldGFpbHMiLCJRdW90ZUJvdHRvbSIsIkJvb2tOb3ciLCJoYW5kbGVCb29rTm93IiwiRVZFTlRTX0VOVU1TIiwiaXNRdW90ZUNhcmRDdGEiLCJvcHNEZXRhaWwiLCJDVEFfVEVYVCIsIlBheU5vdyIsInBheU5vd1VybCIsImN0YVRleHQiLCJkaXNhYmxlUGF5Tm93IiwiaGFuZGxlUGF5Tm93IiwiUmVhY3RpdmF0ZVF1b3RlIiwiVGhhbmtZb3VNZXNzYWdlIiwiYWdlbnROYW1lIiwiZ2VuZXJhdGVUcmlnZ2VyIiwiaGFuZGxlTW9kYWxPcGVuIiwiRGVhbFByaWNlIiwiUHVyZUNvbXBvbmVudCIsInNob3dUaGFua1lvdSIsInN1Ym1pdCIsInNldFRpbWVvdXQiLCJpbml0aWFsaXplQ2hhdCIsInNlbmRNZXNzYWdlIiwiY29uZmlnIiwidXNlUnRtcyIsInJ0bXNfIiwiY2xvc2UiLCJhZGRNZXNzYWdlIiwiY3VycmVudFF1b3RlSWQiLCJjdXJyZW50U3Vic2NyaXB0aW9uXyIsInVzZXJJZCIsImFnZW50SWQiLCJvbiIsIk1lc3NhZ2VUeXBlIiwiTUVTU0FHRSIsImNvbW1lbnRhYmxlX2lkIiwiTVlfTUVTU0FHRSIsImhhbmRsZU1vZGFsQ2xvc2UiLCJjcmVhdGVDb21tZW50IiwiYXZhdGFyIiwibWVzc2FnZU9iaiIsInRpdGxlIiwiY29tbWVudCIsImNvbW1lbnRCeSIsImNvbW1lbnRhYmxlX3R5cGUiLCJyb2xlIiwidXNlcl9pZCIsInVzZXJOYW1lIiwidXNlclBpYyIsImNyZWF0ZWRBdCIsImNyZWF0ZWRfYXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInVJZCIsIm5vdGlmaWNhdGlvbl9zdWJfY2F0ZWdvcnkiLCJwYXJzZUludCIsInJlcGxhY2UiLCJpc1BlbmRpbmciLCJjb250ZW50IiwiRGVhbFByaWNlRm9ybSIsInNhdmUiLCJxdW90ZVByaWNlIiwiRHJvcGRvd25Db21wb25lbnQiLCJDdXJyZW5jeUxpc3QiLCJJbnB1dENvbXBvbmVudCIsInZhbGlkYXRlIiwiZXJyb3JzIiwic2VsZWN0b3IiLCJEZWFsUHJpY2VDb25uZWN0ZWRGb3JtIiwiaW5pdGlhbFZhbHVlcyIsIkRFRkFVTFRfQ1VSUkVOQ1kiLCJlbmFibGVSZWluaXRpYWxpemUiLCJDb250YWluZXIiLCJxdW90ZSIsImFjdGlvbnMiLCJBZ2VudENoYXRCdXR0b24iLCJ0ZXh0Q2xhc3NOYW1lIiwiQ2hhdENvbnRhaW5lciIsIkNoYXQiLCJzaG93SWNvbiIsImhhbmRsZUNoYXRDbGljayIsImN1c3RvbUJ1dHRvbiIsIkdSYXRpbmdVbCIsIm1hcmdpbiIsInBhZGRpbmciLCJkaXNwbGF5IiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImdldFN0YXJzIiwic3Rhck51bSIsImtleVR5cGUiLCJpIiwic3RhcnMiLCJSYXRpbmdTdGFyIiwicmF0aW5nIiwiaXNFbXB0eVN0YXJzSGlkZGVuIiwicmF0aW5nQmFyUmFuZ2UiLCJ0cnVuY2F0ZWRSYXRpbmciLCJNYXRoIiwidHJ1bmMiLCJmcmFjdGlvbmFsUmF0aW5nIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmdWxsU3RhckNvdW50IiwiaGFsZlN0YXJDb3VudCIsImVtcHR5U3RhckNvdW50IiwiU3Rhckljb24iLCJIYWxmU3RhciIsIlN0YXJJY29uRW1wdHkiLCJHcmVhZG1vcmVMYWJlbCIsImxhYmVsIiwibGluZUhlaWdodCIsIkdEb3duQXJyb3dTcGFuIiwic3BhbiIsInRvcCIsIlNob3dNb3JlIiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dExlbmd0aCIsImlzRGVmYXVsdFNob3dNb3JlIiwiYXBwZW5kVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIm9uZU9mVHlwZSIsImxhYmVsQ2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJyZXN0IiwidmFsIiwiUmVhY3RpdmF0ZVRyaXAiLCJPYmplY3QiLCJmcmVlemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7O0lBRXFCQSxhLHFCQUFOLE1BQU1BLGFBQU4sU0FBNEJDLGVBQU1DLFNBQWxDLENBQTRDO0FBdUJ6REMsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQXNCbkJDLGlCQXRCbUIsR0FzQkMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ25DLFVBQUlBLFVBQVVDLDhCQUFWLElBQTZCLEtBQUtDLGNBQXRDLEVBQXNEO0FBQ3BEO0FBQ0Q7O0FBQ0QsV0FBS0EsY0FBTCxHQUFzQkYsVUFBVUMsOEJBQWhDO0FBRUEsWUFBTTtBQUFFRTtBQUFGLFVBQWEsS0FBS04sS0FBeEI7QUFFQSx1Q0FBYTtBQUNYTyxrQkFBVUwsS0FBS0ss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QWdCdE4sU0FBTztBQUF2QixDQUp3QyxFQUt4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQUx3QyxFQU14QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQU53QyxFQU94QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVB3QyxFQVF4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVJ3QyxFQVN4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVR3QyxFQVV4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVZ3QyxFQVd4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVh3QyxFQVl4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQVp3QyxFQWF4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQWJ3QyxFQWN4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQWR3QyxFQWV4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQWZ3QyxFQWdCeEM7QUFBRXNOLFNBQU8sS0FBVDtBQUFnQnROLFNBQU87QUFBdkIsQ0FoQndDLEVBaUJ4QztBQUFFc04sU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQWpCd0MsQ0FBZCxDQUFyQjs7QUFvQkEsTUFBTTZLLG1CQUFtQitELE9BQU9DLE1BQVAsQ0FBYztBQUFFdkIsU0FBTyxLQUFUO0FBQWdCdE4sU0FBTztBQUF2QixDQUFkLENBQXpCIiwiZmlsZSI6InF1b3RlLWFnZW50LWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFN1Ym1pc3Npb25FcnJvciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgJy4vZGlzY291bnRPZmZlci5zY3NzJztcbmltcG9ydCB7IE9mZmVyc0JveEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyB0cmFja1NlZ21lbnQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCwgT1JHQU5JU01fVklFV0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IERpc2NvdW50T2ZmZXJQb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvRGlzY291bnRPZmZlclBvcHVwJztcbmltcG9ydCB7IE9mZmVyc0ljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgQXBwbGllZENvdXBvbkJhbm5lciBmcm9tIFwiLi9jb21wb25lbnRzL0FwcGxpZWRDb3Vwb25CYW5uZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY291bnRPZmZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvZmZlcnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByZW5kZXJBcHBsaWVkQ291cG9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBhcHBsaWVkT2ZmZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZGlzY291bnRJbmZvcm1hdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGFwcGx5RGlzY291bnRDb3Vwb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmVtb3ZlRGlzY291bnRDb3Vwb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlRGlzY291bnRDb3Vwb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlRm9ybUZpZWxkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsZWFyRm9ybVN1Ym1pdEVycm9yOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGZldGNoQXBwbGllZE9mZmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvZmZlcnM6IFtdLFxuICAgIHJlbmRlckFwcGxpZWRDb3Vwb246IGZhbHNlLFxuICAgIGFwcGxpZWRPZmZlcjoge31cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2xvc2VNb2RhbDogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5oYXNEaXNjb3VudEFwcGxpZWQgPSBwcm9wcy5kaXNjb3VudEluZm9ybWF0aW9uICYmIHByb3BzLmRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnQgPiAwIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNFdmVudFRyYWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnRhYmxlVHlwZUlkKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXBwbGllZE9mZmVyKHRoaXMucHJvcHMuZGlzY291bnRJbmZvcm1hdGlvbi5kaXNjb3VudGFibGVUeXBlSWQpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnRhYmxlVHlwZUlkICE9PSBuZXh0UHJvcHMuZGlzY291bnRJbmZvcm1hdGlvbi5kaXNjb3VudGFibGVUeXBlSWQpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hBcHBsaWVkT2ZmZXIobmV4dFByb3BzLmRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnRhYmxlVHlwZUlkKTtcbiAgICB9XG4gIH1cblxuICB0cmFja1NlZ21lbnRFdmVudCA9IChkYXRhLCBldmVudCkgPT4ge1xuICAgIGlmIChldmVudCA9PT0gT1JHQU5JU01fVklFV0VEICYmIHRoaXMuaXNFdmVudFRyYWNrZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0V2ZW50VHJhY2tlZCA9IGV2ZW50ID09PSBPUkdBTklTTV9WSUVXRUQ7XG5cbiAgICBjb25zdCB7IHRyaXBJZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBjYXRlZ29yeTogZGF0YS5jYXRlZ29yeSxcbiAgICAgIHNlY3Rpb246IGRhdGEuc2VjdGlvbixcbiAgICAgIG9iamVjdDogZGF0YS5vYmplY3QsXG4gICAgICBjdGE6IGRhdGEuY3RhLFxuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgdHJpcF9pZDogdHJpcElkLFxuICAgICAgZGVzdGluYXRpb25faWQ6ICcnLFxuICAgICAgbWlzY19pZF8xOiBkYXRhLm1pc2NJZDEsXG4gICAgICBtaXNjX3R5cGVfMTogZGF0YS5taXNjVHlwZTEsXG4gICAgICBtaXNjX2lkXzI6IGRhdGEubWlzY0lkMixcbiAgICAgIG1pc2NfdHlwZV8yOiBkYXRhLm1pc2NUeXBlMixcbiAgICAgIG1pc2NfaWRfMzogZGF0YS5taXNjSWQzLFxuICAgICAgbWlzY190eXBlXzM6IGRhdGEubWlzY1R5cGUzLFxuICAgICAgbWlzY19pZF80OiBkYXRhLm1pc2NJZDQsXG4gICAgICBtaXNjX3R5cGVfNDogZGF0YS5taXNjVHlwZTQsXG4gICAgICBtaXNjX2lkXzU6IGRhdGEubWlzY0lkNSxcbiAgICAgIG1pc2NfdHlwZV81OiBkYXRhLm1pc2NUeXBlNVxuICAgIH0pO1xuICB9O1xuXG4gIHRocm93U3VibWlzc2lvbkVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcih7XG4gICAgICBfZXJyb3I6IGVycm9yXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlUmVtb3ZlRGlzY291bnRDb3Vwb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVtb3ZlRGlzY291bnRDb3Vwb24odGhpcy5wcm9wcy50cmlwSWQpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHMudmFsaWQgPT09ICd0cnVlJykge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgYXBwbHlDb3Vwb25DYWxsYmFjayA9IChyZXN1bHRzKSA9PiB7XG4gICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgIGlmIChyZXN1bHRzLnZhbGlkID09PSAndHJ1ZScpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUgfSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93U3VibWlzc2lvbkVycm9yKHJlc3VsdHMubXNnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnRocm93U3VibWlzc2lvbkVycm9yKCdTb21lIHNlcnZlciBlcnJvciBvY2N1cnJlZCEnKTtcbiAgICB9XG4gIH07XG5cbiAgYXBwbHlEaXNjb3VudENvdXBvbiA9IChwYXJhbXMpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hcHBseURpc2NvdW50Q291cG9uKHBhcmFtcylcbiAgICAgIC50aGVuKHRoaXMuYXBwbHlDb3Vwb25DYWxsYmFjayk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKHZhbHVlcykgPT4ge1xuICAgIHRoaXMucHJvcHMuY2xlYXJGb3JtU3VibWl0RXJyb3IoKTtcblxuICAgIGlmICghdmFsdWVzLmRpc2NvdW50T2ZmZXJJbnB1dCAmJiAoIXZhbHVlcy5kaXNjb3VudE9mZmVyUmFkaW8gfHwgdmFsdWVzLmRpc2NvdW50T2ZmZXJSYWRpbyA9PT0gJzAnKSkge1xuICAgICAgdGhpcy50aHJvd1N1Ym1pc3Npb25FcnJvcignUGxlYXNlIHNlbGVjdCBhdGxlYXN0IDEgY291cG9uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0geyBvZmZlclR5cGU6ICdjb3Vwb24nLCBvZmZlckNvZGU6ICcnLCB0cmlwSWQ6IHRoaXMucHJvcHMudHJpcElkIH07XG4gICAgbGV0IGFwcGx5TW9kZSA9ICdUeXBlZCc7XG4gICAgbGV0IGNvdXBvbklkID0gbnVsbDtcblxuICAgIGlmICh2YWx1ZXMuZGlzY291bnRPZmZlcklucHV0KSB7XG4gICAgICBwYXJhbXMub2ZmZXJDb2RlID0gdmFsdWVzLmRpc2NvdW50T2ZmZXJJbnB1dDtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWVzLmRpc2NvdW50T2ZmZXJSYWRpbykge1xuICAgICAgY29uc3Qgb2ZmZXIgPSB0aGlzLnByb3BzLm9mZmVycy5maWx0ZXIob2ZmZXIgPT4gb2ZmZXIuY291cG9uVHlwZS50b0xvd2VyQ2FzZSgpID09PSAnbm9ybWFsJ1xuICAgICAgICAmJiBvZmZlci5jb3Vwb25JZC50b1N0cmluZygpID09PSB2YWx1ZXMuZGlzY291bnRPZmZlclJhZGlvKVswXTtcbiAgICAgIHBhcmFtcy5vZmZlckNvZGUgPSBvZmZlci5jb2RlO1xuICAgICAgY291cG9uSWQgPSBvZmZlci5jb3Vwb25JZDtcbiAgICAgIGFwcGx5TW9kZSA9ICdTZWxlY3Rpb24nO1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoe1xuICAgICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgc2VjdGlvbjogJ0Rpc2NvdW50IFBvcC11cCcsXG4gICAgICBvYmplY3Q6ICcnLFxuICAgICAgY3RhOiAnQXBwbHknLFxuICAgICAgbWlzY0lkMTogY291cG9uSWQsXG4gICAgICBtaXNjVHlwZTE6ICdDb3Vwb24gQXBwbGllZCcsXG4gICAgICBtaXNjSWQyOiBhcHBseU1vZGUsXG4gICAgICBtaXNjVHlwZTI6ICdBcHBsaWNhdGlvbiBNb2RlJyxcbiAgICB9LCBPUkdBTklTTV9DTElDS0VEKTtcblxuICAgIGlmICh0aGlzLmhhc0Rpc2NvdW50QXBwbGllZCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudXBkYXRlRGlzY291bnRDb3Vwb24ocGFyYW1zKVxuICAgICAgICAudGhlbih0aGlzLmFwcGx5Q291cG9uQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFwcGx5RGlzY291bnRDb3Vwb24ocGFyYW1zKTtcbiAgfTtcblxuICBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUpID0+IHtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KHtcbiAgICAgICAgY2F0ZWdvcnk6ICcnLFxuICAgICAgICBzZWN0aW9uOiAnRGlzY291bnQgQmFubmVyJyxcbiAgICAgICAgb2JqZWN0OiAnJyxcbiAgICAgICAgY3RhOiAnJyxcbiAgICAgIH0sIE9SR0FOSVNNX1ZJRVdFRCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlckRpc2NvdW50T2ZmZXJzTW9kYWwoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb2ZmZXJzLCB1cGRhdGVGb3JtRmllbGQsIGRpc2NvdW50SW5mb3JtYXRpb25cbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoPE1vZGFsXG4gICAgICB0cmlnZ2VyPXs8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzZmMxIGYxNCBmdzcgbTAgbWw1IGZsZXggYWxpZ25DZW50ZXIgY3Vyc29yUCBhdF9nZXRPZmZlcnNDVEFcIj48c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC0yNCBtcjggcDIgaWJsb2NrXCI+PE9mZmVyc0ljb24gLz48L3NwYW4+IEdldCBPZmZlcnM8L2J1dHRvbj59XG4gICAgICBmdWxsVmlldz17dHJ1ZX1cbiAgICAgIGlzRGVmYXVsdE1vZGFsPXtmYWxzZX1cbiAgICAgIGNsb3NlTW9kYWw9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgIG9uQWZ0ZXJNb2RhbE9wZW49eygpID0+IHRoaXMudHJhY2tTZWdtZW50RXZlbnQoeyBjdGE6ICdDaGFuZ2UnLCBzZWN0aW9uOiAnRGlzY291bnQgQmFubmVyJyB9LCBPUkdBTklTTV9DTElDS0VEKX1cbiAgICAgIG9uQWZ0ZXJNb2RhbENsb3NlPXsoKSA9PiB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KHsgY3RhOiAnQ2xvc2UnLCBzZWN0aW9uOiAnRGlzY291bnQgUG9wLXVwJyB9LCBPUkdBTklTTV9DTElDS0VEKX1cbiAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgID5cbiAgICAgIDxEaXNjb3VudE9mZmVyUG9wdXBcbiAgICAgICAgb2ZmZXJzPXtvZmZlcnN9XG4gICAgICAgIGRpc2NvdW50SW5mb3JtYXRpb249e2Rpc2NvdW50SW5mb3JtYXRpb259XG4gICAgICAgIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgIHVwZGF0ZUZvcm1GaWVsZD17dXBkYXRlRm9ybUZpZWxkfVxuICAgICAgICB0cmFja1NlZ21lbnRFdmVudD17dGhpcy50cmFja1NlZ21lbnRFdmVudH0gLz5cbiAgICA8L01vZGFsPik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMucmVuZGVyQXBwbGllZENvdXBvblxuICAgICAgICA/IDxBcHBsaWVkQ291cG9uQmFubmVyIGFwcGxpZWRPZmZlcj17dGhpcy5wcm9wcy5hcHBsaWVkT2ZmZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRGlzY291bnRDb3Vwb249e3RoaXMuaGFuZGxlUmVtb3ZlRGlzY291bnRDb3Vwb259IC8+XG4gICAgICAgIDogdGhpcy5yZW5kZXJEaXNjb3VudE9mZmVyc01vZGFsKClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuXG5pbXBvcnQgeyBwYXJzZVByaWNlIH0gZnJvbSAnaGVscGVycy9wYXJzZXJzJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IFRuYyBmcm9tIFwiLi90bmNcIjtcblxuY29uc3QgeyBwYXJzZSB9ID0gbmV3IFBhcnNlcigpO1xuXG5jb25zdCBBcHBsaWVkQ291cG9uQmFubmVyID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkT2ZmZXIsIHJlbW92ZURpc2NvdW50Q291cG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiB7XG4gIGNvbnN0IGdldEFtb3VudCA9IChvZmZlciA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIG9mZmVyLmRpc2NvdW50VHlwZSA9PT0gMVxuICAgICAgPyBgJHtwYXJzZVByaWNlKHtcbiAgICAgICAgcHJpY2U6IG9mZmVyLm9mZmVyVmFsLFxuICAgICAgICBjdXJyZW5jeTogb2ZmZXIuY3VycmVuY3lcbiAgICAgIH0pfWBcbiAgICAgIDogYCR7b2ZmZXIub2ZmZXJWYWx9JWA7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAxNSBzZmN3IGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImYxNCBmdzkgcGZjMyBtYjRcIj57YCR7YXBwbGllZE9mZmVyLmNvZGV9IGFwcGxpZWQhYH08L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjMyBtYjhcIj5Zb3UgZ290IGRpc2NvdW50IHdvcnRoIHtnZXRBbW91bnQoYXBwbGllZE9mZmVyKX08L3A+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9ezxzcGFuIGNsYXNzTmFtZT1cImYxNCBmdzcgc2ZjMSBjdXJzb3JQXCI+VmlldyBUJkM8L3NwYW4+fSBoYXNOb0Nsb3NlXG4gICAgICAgID5cbiAgICAgICAgICA8VG5jIHRuY0h0bWw9e2FwcGxpZWRPZmZlci50bmNIdG1sfSAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgZjE0IGZ3NyBzZmMxXCIgb25DbGljaz17cmVtb3ZlRGlzY291bnRDb3Vwb259PlJlbW92ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQXBwbGllZENvdXBvbkJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGFwcGxpZWRPZmZlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICByZW1vdmVEaXNjb3VudENvdXBvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tTZWdtZW50RXZlbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5BcHBsaWVkQ291cG9uQmFubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhY2tTZWdtZW50RXZlbnQ6ICgpID0+IHtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwbGllZENvdXBvbkJhbm5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBEaXNjb3VudE9mZmVySW5wdXQgPSAoeyBpbnB1dCwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCByZXNldFJhZGlvIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmMTRwIGZ3NCBwZmMzIG1iOCBibG9ja1wiIGh0bWxGb3I9XCJzZWxlY3RPZmZlclwiPlBsZWFzZSBBcHBseSBhIERpc2NvdW50PC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIGlkPVwic2VsZWN0T2ZmZXJcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDb3Vwb24gQ29kZVwiXG4gICAgICB7Li4uaW5wdXR9XG4gICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgIGlucHV0Lm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgICAgcmVzZXRSYWRpbygpO1xuICAgICAgfX1cbiAgICAvPlxuICAgIHt0b3VjaGVkICYmIGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yfTwvc3Bhbj59XG4gIDwvZGl2PlxuKTtcblxuRGlzY291bnRPZmZlcklucHV0LnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5hbnksXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHJlc2V0UmFkaW86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3VudE9mZmVySW5wdXQ7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgRGlzY291bnRPZmZlcklucHV0IGZyb20gJy4vRGlzY291bnRPZmZlcklucHV0JztcbmltcG9ydCBSZW5kZXJEaXNjb3VudE9mZmVyUmFkaW9CdXR0b24gZnJvbSAnLi9EaXNjb3VudE9mZmVyUmFkaW8nO1xuXG5jbGFzcyBEaXNjb3VudE9mZmVyTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb2ZmZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgYXBwbGllZE9mZmVySWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUZvcm1GaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdWJtaXR0aW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb2ZmZXJzOiBbXSxcbiAgICBhcHBsaWVkT2ZmZXJJZDogMCxcbiAgICBkaXNjb3VudENvdXBvbjogJycsXG4gICAgc3VibWl0dGluZzogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50T2ZmZXJJZDogcHJvcHMuYXBwbGllZE9mZmVySWRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVGb3JtRmllbGQoJ2Rpc2NvdW50T2ZmZXJGb3JtJywgJ2Rpc2NvdW50T2ZmZXJSYWRpbycsIHRoaXMucHJvcHMuYXBwbGllZE9mZmVySWQudG9TdHJpbmcoKSk7XG4gIH1cblxuICByZXNldFJhZGlvID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50T2ZmZXJJZDogMCB9KTtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZvcm1GaWVsZCgnZGlzY291bnRPZmZlckZvcm0nLCAnZGlzY291bnRPZmZlclJhZGlvJywgbnVsbCk7XG4gIH07XG5cbiAgdG9nZ2xlUmFkaW8gPSAoY3VycmVudE9mZmVySWQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudE9mZmVySWQ6IGN1cnJlbnRPZmZlcklkIH0pO1xuICAgIHRoaXMucHJvcHMudXBkYXRlRm9ybUZpZWxkKCdkaXNjb3VudE9mZmVyRm9ybScsICdkaXNjb3VudE9mZmVySW5wdXQnLCAnJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRJbnB1dE9mZmVyID0gPEZpZWxkXG4gICAgICBuYW1lPVwiZGlzY291bnRPZmZlcklucHV0XCJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIGNvbXBvbmVudD17RGlzY291bnRPZmZlcklucHV0fVxuICAgICAgcmVzZXRSYWRpbz17dGhpcy5yZXNldFJhZGlvfVxuICAgIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAge3RleHRJbnB1dE9mZmVyfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHQgbXQ0XCI+e3RoaXMucHJvcHMuZXJyb3J9PC9zcGFuPn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5vZmZlcnMubGVuZ3RoID8gPGRpdiBjbGFzc05hbWU9XCJmb3JtSW5wdXREaXZpZGVyV2l0aFRleHRcIiAvPiA6IG51bGx9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3VudE9mZmVyTGlzdFwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9mZmVycy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMub2ZmZXJzLm1hcCgob2ZmZXIsIGluZGV4KSA9PiA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzY291bnRPZmZlclJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmVuZGVyRGlzY291bnRPZmZlclJhZGlvQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgaWQ9e2BvZmZlcl8ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgb2ZmZXI9e29mZmVyfVxuICAgICAgICAgICAgICAgICAgY3VycmVudE9mZmVySWQ9e3RoaXMuc3RhdGUuY3VycmVudE9mZmVySWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b2ZmZXIuY291cG9uSWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17dGhpcy50b2dnbGVSYWRpb31cbiAgICAgICAgICAgICAgICAgIGFwcGxpZWRPZmZlcklkPXt0aGlzLnByb3BzLmFwcGxpZWRPZmZlcklkfVxuICAgICAgICAgICAgICAgIC8+KVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiczYgcDggc2JjdyBiMCBsMCByMCBmaXhlZCc+XG4gICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLnN1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1maWxsZWQtcHJpLWxhcmdlIHdmdWxsIHJhZGl1czIgYXRfZGlzY291bnRPZmZlckZvcm1TdWJtaXRcIj5BcHBseSBTZWxlY3RlZFxuICAgICAgICAgICAgICBDb3Vwb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdkaXNjb3VudE9mZmVyRm9ybScsXG59KShEaXNjb3VudE9mZmVyTGlzdCk7XG5cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJztcblxuaW1wb3J0IHsgT2ZmZXJzQm94RmlsbEljb24sIFN1blNtYWxsIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IERpc2NvdW50T2ZmZXJMaXN0IGZyb20gJy4vRGlzY291bnRPZmZlckxpc3QnO1xuaW1wb3J0IE90aGVyT2ZmZXJzIGZyb20gJy4vT3RoZXJPZmZlcnMnO1xuaW1wb3J0IE1vZGFsSGVhZGVyQ3VzdG9tIGZyb20gJ21vZHVsZXMvc2hhcmVkL2hlYWRlcnMvTW9kYWxIZWFkZXJDdXN0b20nO1xuaW1wb3J0IHsgT1JHQU5JU01fVklFV0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY291bnRPZmZlclBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9mZmVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGhhc0Rpc2NvdW50QXBwbGllZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXBwbGllZE9mZmVySWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUZvcm1GaWVsZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9mZmVyczogW10sXG4gICAgaGFzRGlzY291bnRBcHBsaWVkOiBmYWxzZSxcbiAgICBhcHBsaWVkT2ZmZXJJZDogMCxcbiAgICB0cmFja1NlZ21lbnRFdmVudDogKCkgPT4ge31cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgb25TZW5zb3JDaGFuZ2UgPSAoaXNWaXNpYmxlKSA9PiB7XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnRFdmVudCh7XG4gICAgICAgIGNhdGVnb3J5OiAnJyxcbiAgICAgICAgc2VjdGlvbjogJ0Rpc2NvdW50IFBvcC11cCcsXG4gICAgICAgIG9iamVjdDogJycsXG4gICAgICAgIGN0YTogJycsXG4gICAgICB9LCBPUkdBTklTTV9WSUVXRUQpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb2ZmZXJzLCBoYXNEaXNjb3VudEFwcGxpZWQsIGFwcGxpZWRPZmZlcklkLCB1cGRhdGVGb3JtRmllbGRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGRpc2NvdW50T2ZmZXJzID0gb2ZmZXJzLmZpbHRlcihvZmZlciA9PiBvZmZlci5jb3Vwb25UeXBlLnRvTG93ZXJDYXNlKCkgPT09ICdub3JtYWwnKTtcbiAgICBjb25zdCBpbmZvcm1hdG9yeU9mZmVycyA9IG9mZmVycy5maWx0ZXIob2ZmZXIgPT4gb2ZmZXIuY291cG9uVHlwZS50b0xvd2VyQ2FzZSgpID09PSAndmlldyBvbmx5Jyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNlbnNvciBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4gdGhpcy5vblNlbnNvckNoYW5nZShpc1Zpc2libGUpfVxuICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJpbGl0eT0nYm90dG9tJ1xuICAgICAgICAgICAgICBkZWxheWVkQ2FsbD17dHJ1ZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnRPZmZlcnNNb2RhbENvbnRlbnQgcmVsYXRpdmUgc2l0ZU1vZGFsQ29udGVudFwiPlxuICAgICAgICAgIDxNb2RhbEhlYWRlckN1c3RvbSBoZWFkaW5nPXsnQ3VycmVudCBEaXNjb3VudHMgJiBPZmZlcnMnfSAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYjQ4XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IHBiMjRcIj5cbiAgICAgICAgICAgICAgICA8RGlzY291bnRPZmZlckxpc3Qgb2ZmZXJzPXtkaXNjb3VudE9mZmVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZE9mZmVySWQ9e2FwcGxpZWRPZmZlcklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5wcm9wcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1GaWVsZD17dXBkYXRlRm9ybUZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0OCBzYmM1XCIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDggcHQxNVwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5mb3JtYXRvcnlPZmZlcnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwicDE1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxPdGhlck9mZmVycyBvZmZlcnM9e2luZm9ybWF0b3J5T2ZmZXJzfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICFkaXNjb3VudE9mZmVycy5sZW5ndGggJiYgIWluZm9ybWF0b3J5T2ZmZXJzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJibG9jayBwMTUgcHQwXCI+Tm8gY291cG9ucyBjdXJyZW50bHkgYXZhaWxhYmxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2Vuc29yPlxuICAgICk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IHBhcnNlUHJpY2UgfSBmcm9tICdoZWxwZXJzL3BhcnNlcnMnO1xuaW1wb3J0IHsgdGltZUZyb21FbmRPZkRheSB9IGZyb20gJ2hlbHBlcnMvRGF0ZVRpbWUnO1xuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcblxuY29uc3QgUmVuZGVyRGlzY291bnRPZmZlclJhZGlvQnV0dG9uID0gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVyLCBpbnB1dCwgaWQsIGN1cnJlbnRPZmZlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZE9mZmVySWQsIG9uQ2xpY2tIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBnZXRFeHBpcmF0aW9uU3RyaW5nID0gKGVuZERhdGUpID0+IHtcbiAgICByZXR1cm4gYEV4cGlyaW5nICR7dGltZUZyb21FbmRPZkRheShlbmREYXRlKX1gO1xuICB9O1xuXG4gIGNvbnN0IGdldFNob3dNb3JlUHJvcHMgPSAob2ZmZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JhcFRleHQ6IG9mZmVyLnRuYyA/IG9mZmVyLnRuYy5zdWJzdHIoMCwgODApIDogJycsXG4gICAgICBtb3JlVGV4dDogb2ZmZXIudG5jICYmIG9mZmVyLnRuYy5sZW5ndGggPiA4MCA/IG9mZmVyLnRuYy5zdWJzdHIoODApIDogJydcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiAoPGRpdlxuICAgIGNsYXNzTmFtZT17YCBjbGVhcmZpeCBkaXNjb3VudE9mZmVySXRlbSAke2lucHV0LnZhbHVlID09PSBhcHBsaWVkT2ZmZXJJZCA/ICdkaXNjb3VudE9mZmVySXRlbUFwcGxpZWQnIDogJyd9IGB9PlxuICAgIDxkaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9e2lkfSB7Li4uaW5wdXR9IGNoZWNrZWQ9e2lucHV0LnZhbHVlID09PSBjdXJyZW50T2ZmZXJJZH1cbiAgICAgICAgICAgICBjbGFzc05hbWU9e2BkaXNjb3VudE9mZmVySW5wdXQgYH0gb25DbGljaz17KCkgPT4gb25DbGlja0hhbmRsZXIoaW5wdXQudmFsdWUpfSAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9XCJhdF9kaXNjb3VudE9mZmVyUmFkaW9CdG5cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VzdG9tUmFkaW9cIiAvPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImRpc2NvdW50T2ZmZXJFeHBpcmVkTXNnIGFic29sdXRlIHQ4IHI4IGYxMCBmdzdcIj5cbiAgICAgICAgICAgICAge2dldEV4cGlyYXRpb25TdHJpbmcob2ZmZXIuZW5kRGF0ZSl9PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc2NvdW50T2ZmZXJEYXRhIGZsZXggbWwxNVwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3VudFZhbHVlSW5mbyBwMTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY291bnRWYWx1ZSBtYjRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjb3VudFZhbCBmMTYgZnc5IHBmYzNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvZmZlci5kaXNjb3VudFR5cGUgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtwYXJzZVByaWNlKHtcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZTogb2ZmZXIub2ZmZXJWYWwsXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IG9mZmVyLmN1cnJlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZE9ubHk6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pfWBcbiAgICAgICAgICAgICAgICAgICAgOiBgJHtvZmZlci5vZmZlclZhbH0lYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbDhcIj57b2ZmZXIuZGlzY291bnRUeXBlID09PSAxID8gJ0Nhc2hiYWNrJyA6ICdPZmYnfSA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZjE0cFwiPntvZmZlci5oZWFkaW5nfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmVyRGVzY3JpcHRpb24gZjEyIHBmYzQgbTBcIj5cbiAgICAgICAgICAgICAgPFNob3dNb3JlIGlzRGVmYXVsdFNob3dNb3JlPXtmYWxzZX0gey4uLmdldFNob3dNb3JlUHJvcHMob2ZmZXIpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+KTtcbn07XG5cblJlbmRlckRpc2NvdW50T2ZmZXJSYWRpb0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9mZmVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjdXJyZW50T2ZmZXJJZDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXBwbGllZE9mZmVySWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5SZW5kZXJEaXNjb3VudE9mZmVyUmFkaW9CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBvZmZlcjoge30sXG4gIGN1cnJlbnRPZmZlcklkOiAwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJEaXNjb3VudE9mZmVyUmFkaW9CdXR0b247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJ21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3RoZXJPZmZlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb2ZmZXJzOiBQcm9wVHlwZXMuYXJyYXlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9mZmVyczogW11cbiAgfTtcblxuICBnZXRTaG93TW9yZVByb3BzID0gKG9mZmVyKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyYXBUZXh0OiBvZmZlci50bmMgPyBvZmZlci50bmMuc3Vic3RyKDAsIDgyKSA6ICcnLFxuICAgICAgbW9yZVRleHQ6IG9mZmVyLnRuYyAmJiBvZmZlci50bmMubGVuZ3RoID4gODIgPyBvZmZlci50bmMuc3Vic3RyKDgyKSA6ICcnXG4gICAgfTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmMTRwIGZ3OSBwZmMzIG1iMTVcIj5WaWV3IE90aGVyIE9mZmVyczwvaDM+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9mZmVycy5tYXAoKG9mZmVyLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJPZmZlckxpc3QgcmFkaXVzMiBwMTUgbWI4XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmMTZwIGZ3NyBwZmMzXCI+e29mZmVyLmhlYWRpbmd9PC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmMTIgcGZjNCBtMFwiPjxTaG93TW9yZSB7Li4udGhpcy5nZXRTaG93TW9yZVByb3BzKG9mZmVyKX0gLz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2h0bWwtdG8tcmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBHVG5DVGV4dCA9IGdsYW1vcm91cy5kaXYoe1xuICBtYXhIZWlnaHQ6ICcyMDBweCcsXG4gIG92ZXJmbG93OiAnYXV0bydcbn0pO1xuXG5jb25zdCB7IHBhcnNlIH0gPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IFRuYyA9ICh7IHRuY0h0bWwgfSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwMjRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJmMTggbWIxNVwiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMj5cbiAgICAgIDxHVG5DVGV4dD57cGFyc2UodG5jSHRtbCl9PC9HVG5DVGV4dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRuYy5wcm9wVHlwZXMgPSB7XG4gIHRuY0h0bWw6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblRuYy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrU2VnbWVudEV2ZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRuYztcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRpc2NvdW50T2ZmZXJzTW9kYWxDb250ZW50XCI6IFwiXzJCaVFMXCIsXG5cdFwiYmFubmVyQkdcIjogXCJfTHo3VzVcIixcblx0XCJkaXNjb3VudE9mZmVyc0JveFwiOiBcIl8xbHNlMFwiLFxuXHRcIm9mZmVyc0JveEljb25CaWdcIjogXCJfMlNhUG1cIixcblx0XCJkaXNjb3VudE9mZmVyc1RpdGxlXCI6IFwiX2xJYmd2XCIsXG5cdFwib2ZmZXJzQm94SWNvblwiOiBcIl8xNkMxNFwiLFxuXHRcImZvcm1JbnB1dERpdmlkZXJXaXRoVGV4dFwiOiBcIl9WT2VyY1wiLFxuXHRcIm90aGVyT2ZmZXJMaXN0XCI6IFwiXzNUSURWXCIsXG5cdFwiZGlzY291bnRPZmZlckxpc3RcIjogXCJfM25BODVcIixcblx0XCJkaXNjb3VudE9mZmVySXRlbVwiOiBcIl8zLUZRNVwiLFxuXHRcImRpc2NvdW50T2ZmZXJJdGVtQXBwbGllZFwiOiBcIl8xTjh0a1wiLFxuXHRcImRpc2NvdW50T2ZmZXJJbnB1dFwiOiBcIl8yamc3alwiLFxuXHRcImRpc2NvdW50T2ZmZXJFeHBpcmVkTXNnXCI6IFwiX1pmbGFQXCIsXG5cdFwiY3VzdG9tUmFkaW9cIjogXCJfM1ZqZ2hcIixcblx0XCJvZmZlckFwcGxpZWRcIjogXCJfMUhEOE9cIixcblx0XCJkaXNjb3VudFZhbHVlXCI6IFwiXzFILW5hXCIsXG5cdFwiZGlzY291bnRWYWxcIjogXCJfMlRyeFlcIixcblx0XCJkaXNjb3VudFZhbHVlSW5mb1wiOiBcIl8zTVhOWlwiLFxuXHRcIm9mZmVyRGVzY3JpcHRpb25cIjogXCJfQjlnM1hcIixcblx0XCJkaXNjb3VudE9mZmVyRGF0YVwiOiBcIl8yZWdYWVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEaXNjb3VudE9mZmVyIGZyb20gJy4vRGlzY291bnRPZmZlcic7XG5pbXBvcnQge1xuICBmZXRjaERpc2NvdW50T2ZmZXJzLFxuICBmZXRjaEFwcGxpZWRPZmZlcixcbiAgYXBwbHlEaXNjb3VudENvdXBvbixcbiAgcmVtb3ZlRGlzY291bnRDb3Vwb24sXG4gIHVwZGF0ZURpc2NvdW50Q291cG9uLFxuICB1cGRhdGVGb3JtRmllbGQsXG4gIGNsZWFyRm9ybVN1Ym1pdEVycm9yXG59IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KChzdGF0ZSkgPT4gKHtcbiAgb2ZmZXJzOiBzdGF0ZS5kaXNjb3VudE9mZmVycy5kYXRhLmFxLFxuICBhcHBsaWVkT2ZmZXJMb2FkZWQ6IHN0YXRlLmRpc2NvdW50T2ZmZXJzLmFwcGxpZWRPZmZlckxvYWRlZCxcbiAgYXBwbGllZE9mZmVyOiBzdGF0ZS5kaXNjb3VudE9mZmVycy5hcHBsaWVkT2ZmZXJEYXRhXG59KSwge1xuICBmZXRjaERpc2NvdW50T2ZmZXJzLFxuICBmZXRjaEFwcGxpZWRPZmZlcixcbiAgYXBwbHlEaXNjb3VudENvdXBvbixcbiAgcmVtb3ZlRGlzY291bnRDb3Vwb24sXG4gIHVwZGF0ZURpc2NvdW50Q291cG9uLFxuICB1cGRhdGVGb3JtRmllbGQsXG4gIGNsZWFyRm9ybVN1Ym1pdEVycm9yXG59KShEaXNjb3VudE9mZmVyKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IENhbGxVcywgQ2hhdEljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCBSZXF1ZXN0Q2FsbGJhY2sgZnJvbSAnbW9kdWxlcy9yZXF1ZXN0Q2FsbGJhY2snO1xuaW1wb3J0IEFnZW50Q2hhdEJ1dHRvbiBmcm9tICdtb2R1bGVzL3F1b3RlL3NoYXJlZC9BZ2VudENoYXRCdXR0b24nO1xuaW1wb3J0IEJhc2ljSW5mbyBmcm9tICcuL2NvbXBvbmVudHMvQmFzaWNJbmZvJztcbmltcG9ydCBEaXNjb3VudE9mZmVyIGZyb20gJ21vZHVsZXMvZGlzY291bnRFbmdpbmUnO1xuaW1wb3J0IEFnZW50RGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9BZ2VudERldGFpbCc7XG5pbXBvcnQgUXVvdGVCb3R0b20gZnJvbSAnbW9kdWxlcy9xdW90ZS9ib3R0b20nO1xuaW1wb3J0IERlYWxQcmljZSBmcm9tICdtb2R1bGVzL3F1b3RlL2RlYWxQcmljZSc7XG5pbXBvcnQgeyBPUkdBTklTTV9WSUVXRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IHsgY2hlY2tJc1RyaXBTdGF0dXNCZWZvcmVJbnZvaWNlZCB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBBZ2VudENhcmQgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgdHJpcElkLCBxdW90ZUlkLCBhZ2VudCwgdXNlckRldGFpbHMsIGRlc3RpbmF0aW9uLCB0cmlwU3RhdHVzLCBwcmljZUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRJbmZvcm1hdGlvbiwgZG93bmxvYWRRdW90ZSwgc2hvd1Jvc3RlciwgdHJhY2tTZWdtZW50XG4gICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuXG4gIGNvbnN0IHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBzZWN0aW9uLCBvYmplY3QsIGN0YSkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudCxcbiAgICAgIHNlY3Rpb246IHNlY3Rpb24gfHwgJ0FnZW50JyxcbiAgICAgIG9iamVjdDogb2JqZWN0IHx8IGBBZ2VudC8ke2FnZW50LmlkfWAsXG4gICAgICBjdGFcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvblNlbnNvckNoYW5nZSA9IChpc1Zpc2libGUpID0+IHtcbiAgICBpZihpc1Zpc2libGUpIHtcbiAgICAgIHRyYWNrU2VnbWVudCh7IGV2ZW50OiBPUkdBTklTTV9WSUVXRUQsIHNlY3Rpb246ICdQcmljZSBNYXRjaGluZycgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhc0Rpc2NvdW50QXBwbGllZCA9IGRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnQgPiAwO1xuICBjb25zdCBpc1RyaXBTdGF0dXNCZWZvcmVJbnZvaWNlZCA9IGNoZWNrSXNUcmlwU3RhdHVzQmVmb3JlSW52b2ljZWQodHJpcFN0YXR1cyk7XG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzYmN3IG10OCBtYjJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicDE1IGF0X2FnZW50RGV0YWlsQ2FyZFwiPlxuICAgICAgICA8QWdlbnREZXRhaWwgdXNlckRldGFpbHM9e3VzZXJEZXRhaWxzfSBhZ2VudD17YWdlbnR9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxNSBmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlbiBhdF9hZ2VudEFjdGlvbkNUQV9zZWN0aW9uXCI+XG4gICAgICAgICAgPGEgaHJlZj17YHRlbDoke2FnZW50LnBob25lTnVtYmVyfWB9IG9uQ2xpY2s9eygpID0+IHRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdBZ2VudCcsICcnLCAnQ2FsbCcpfVxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlibG9jayBmbGV4IGFsaWduQ2VudGVyIHBmYzMgZnc3IGF0X2NhbGxfQ1RBXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC0yNCBtcjhcIj48Q2FsbFVzIC8+PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInBmYzNcIj5DYWxsPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8UmVxdWVzdENhbGxiYWNrIC8+XG4gICAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJpYmxvY2sgZmxleCBhbGlnbkNlbnRlciBwZmMzIGZ3NyBhdF9tZXNzYWdlX0NUQVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgbXI4XCI+PENoYXRJY29uIC8+PC9zcGFuPlxuICAgICAgICAgICAgPEFnZW50Q2hhdEJ1dHRvbiB0ZXh0Q2xhc3NOYW1lPXsncGZjMywgZnc3J30gbmFtZT1cIk1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGF0Q2xpY2s9eygpID0+IHRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdBZ2VudCcsICcnLCAnTWVzc2FnZScpfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCYXNpY0luZm8gdHJpcElkPXt0cmlwSWR9IHF1b3RlSWQ9e3F1b3RlSWR9IGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn1cbiAgICAgICAgICAgICAgICAgcHJpY2VJbmZvcm1hdGlvbj17cHJpY2VJbmZvcm1hdGlvbn0gZG93bmxvYWRRdW90ZT17ZG93bmxvYWRRdW90ZX1cbiAgICAgICAgICAgICAgICAgZGlzY291bnRJbmZvcm1hdGlvbj17ZGlzY291bnRJbmZvcm1hdGlvbn0gc2hvd1Jvc3Rlcj17c2hvd1Jvc3Rlcn1cbiAgICAgICAgICAgICAgICAgdHJpcFN0YXR1cz17dHJpcFN0YXR1c30gdHJhY2tTZWdtZW50PXt0cmFja1NlZ21lbnRFdmVudH0gLz5cblxuICAgICAgPFF1b3RlQm90dG9tLmNvbnRhaW5lciB0cmFja1NlZ21lbnQ9e3RyYWNrU2VnbWVudH0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdDggc2JjNVwiIC8+XG4gICAgICB7XG4gICAgICAgIGhhc0Rpc2NvdW50QXBwbGllZFxuICAgICAgICAgID8gPERpc2NvdW50T2ZmZXIgZGlzY291bnRJbmZvcm1hdGlvbj17ZGlzY291bnRJbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaXBJZD17dHJpcElkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyQXBwbGllZENvdXBvbj17dHJ1ZX0gLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICB7IGlzVHJpcFN0YXR1c0JlZm9yZUludm9pY2VkICYmXG4gICAgICA8U2Vuc29yIG9uQ2hhbmdlPXsoaXNWaXNpYmxlKSA9PiBvblNlbnNvckNoYW5nZShpc1Zpc2libGUpIH1cbiAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHk9J2JvdHRvbSdcbiAgICAgICAgICAgICAgZGVsYXllZENhbGw9e3RydWV9PlxuICAgICAgICA8RGVhbFByaWNlIHRyYWNrU2VnbWVudD17dHJhY2tTZWdtZW50RXZlbnR9Lz5cbiAgICAgIDwvU2Vuc29yPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFnZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBxdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGFnZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRyaXBzU29sZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcGhvbmVOdW1iZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWFnZVVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHN0YXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmV2aWV3c0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmlld0xpbms6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSksXG4gIHVzZXJEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRlc3RpbmF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRyaXBTdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJpY2VJbmZvcm1hdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBkaXNjb3VudEluZm9ybWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkb3dubG9hZFF1b3RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93Um9zdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuY1xufTtcblxuQWdlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWdlbnQ6IHtcbiAgICBzdGFyOiAwLFxuICAgIHJldmlld3NDb3VudDogMCxcbiAgICByZXZpZXdMaW5rOiAnJ1xuICB9LFxuICBkaXNjb3VudEluZm9ybWF0aW9uOiB7fSxcbiAgc2hvd1Jvc3RlcjogKCkgPT4ge30sXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50Q2FyZDtcbiIsImltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuZXhwb3J0IGNvbnN0IEdRdW90ZVByaWNlRGVzdGluYXRpb25EaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNFRkVGRUYnLFxuICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI0VGRUZFRicsXG4gICcmIC5xdW90ZVByaWNlSW5mbyc6IHtcbiAgICBtaW5XaWR0aDogJzIwMHB4JyxcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEF2YXRhciBmcm9tICdtb2R1bGVzL3NoYXJlZC9BdmF0YXInO1xuaW1wb3J0IFJhdGluZ1N0YXIgZnJvbSAnbW9kdWxlcy9zaGFyZWQvUmF0aW5nU3Rhcic7XG5pbXBvcnQgQWdlbnRPbmxpbmVJbmRpY2F0b3IgZnJvbSAnbW9kdWxlcy9zaGFyZWQvYWdlbnRQcm9maWxlL0FnZW50T25saW5lSW5kaWNhdG9yJztcblxuY29uc3QgQWdlbnREZXRhaWwgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICBhZ2VudCwgdXNlckRldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgIH0pID0+ICg8ZGl2IGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICA8QXZhdGFyIGltYWdlUGF0aD17YWdlbnQuaW1hZ2VVcmx9IG5hbWU9e2FnZW50Lm5hbWV9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbFwiPlxuICAgICAgPGEgY2xhc3NOYW1lPVwicGZjM1wiIGhyZWY9e2FnZW50LnJldmlld0xpbmt9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cImYxNCBmdzkgbWI1XCI+e2FnZW50Lm5hbWV9PC9oNj5cbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWI1IGZsZXggYWxpZ25DZW50ZXJcIj5cbiAgICAgICAgPEFnZW50T25saW5lSW5kaWNhdG9yXG4gICAgICAgICAgc2hvd1ByZXNlbmNlTWVzc2FnZT17dHJ1ZX1cbiAgICAgICAgICB1c2VySWQ9e2FnZW50LmlkfVxuICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cbiAgICAgICAgLz5cbiAgICAgICAge2FnZW50LnN0YXIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWw4XCI+PFJhdGluZ1N0YXIgcmF0aW5nPXthZ2VudC5zdGFyfSAvPjwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBtMFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwZmMzIGF0X3RyaXBDb3VudFwiIGhyZWY9e2FnZW50LnJldmlld0xpbmt9PlxuICAgICAgICAgIHtgJHthZ2VudC50cmlwc1NvbGR9IFRyaXBzYH1cbiAgICAgICAgPC9hPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbDUgbXI1IHBmYzRcIj58PC9zcGFuPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwZmMzIGF0X1Jldmlld3NDb3VudFwiIGhyZWY9e2FnZW50LnJldmlld0xpbmt9PlxuICAgICAgICAgIHtgJHthZ2VudC5yZXZpZXdzQ291bnR9IFJldmlld3NgfVxuICAgICAgICA8L2E+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQWdlbnREZXRhaWwucHJvcFR5cGVzID0ge1xuICBhZ2VudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0cmlwc1NvbGQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHBob25lTnVtYmVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1hZ2VVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdGFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHJldmlld3NDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXZpZXdMaW5rOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLFxuICB1c2VyRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuQWdlbnREZXRhaWwuZGVmYXVsdFByb3BzID0ge1xuICBhZ2VudDoge1xuICAgIHN0YXI6IDAsXG4gICAgcmV2aWV3c0NvdW50OiAwLFxuICAgIHJldmlld0xpbms6ICcnXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZ2VudERldGFpbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBHUXVvdGVQcmljZURlc3RpbmF0aW9uRGl2IH0gZnJvbSAnLi4vRyc7XG5pbXBvcnQgeyBEb3dubG9hZEJsYWNrIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyBJTkZPX1JPU1RFUiB9IGZyb20gJ2NvbnN0YW50cy9yb3N0ZXJUeXBlcyc7XG5pbXBvcnQgeyBpc1RyaXBDb252ZXJ0ZWQgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCBRdW90ZVByaWNlIGZyb20gJ21vZHVsZXMvcXVvdGUvc2hhcmVkL3ByaWNlL1F1b3RlUHJpY2UnO1xuaW1wb3J0IERpc2NvdW50T2ZmZXIgZnJvbSAnbW9kdWxlcy9kaXNjb3VudEVuZ2luZSc7XG5cbmNvbnN0IEJhc2ljSW5mbyA9ICh7XG4gICAgICAgICAgICAgICAgICAgICB0cmlwSWQsIHF1b3RlSWQsIGRlc3RpbmF0aW9uLCB0cmlwU3RhdHVzLCBwcmljZUluZm9ybWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRJbmZvcm1hdGlvbiwgZG93bmxvYWRRdW90ZSwgc2hvd1Jvc3RlciwgdHJhY2tTZWdtZW50XG4gICAgICAgICAgICAgICAgICAgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVEb3dubG9hZFF1b3RlID0gKCkgPT4ge1xuICAgIGRvd25sb2FkUXVvdGUoeyBxdW90ZUlkIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHJlcy5kb3dubG9hZF91cmwsICd0YXJnZXQ9X2JsYW5rJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaG93Um9zdGVyKHsgdHlwZTogSU5GT19ST1NURVIsIG1lc3NhZ2U6IHJlcy5tc2cgfSk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goKGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXguLi4uLi4uLicsIGV4KTtcbiAgICB9KTtcbiAgICB0cmFja1NlZ21lbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ0FnZW50JywgJycsICdEb3dubG9hZCcpO1xuICB9O1xuXG4gIGNvbnN0IGNhbkNoZWNrQ291cG9ucyA9ICFpc1RyaXBDb252ZXJ0ZWQodHJpcFN0YXR1cyk7XG4gIGNvbnN0IGhhc0Rpc2NvdW50QXBwbGllZCA9IGRpc2NvdW50SW5mb3JtYXRpb24uZGlzY291bnQgPiAwO1xuXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzYmN3XCI+XG4gICAgPEdRdW90ZVByaWNlRGVzdGluYXRpb25EaXYgY2xhc3NOYW1lPVwicDE1IGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIGF0X3F1b3RlQmFzaWNJbmZvXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTQgbTAgbXI1IGZsZXhGdWxsIGF0X3F1b3RlRGVzdGluYXRpb25cIj57ZGVzdGluYXRpb259PC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBxdW90ZVByaWNlSW5mb1wiPlxuICAgICAgICA8UXVvdGVQcmljZSB7Li4ucHJpY2VJbmZvcm1hdGlvbn0gey4uLmRpc2NvdW50SW5mb3JtYXRpb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0dRdW90ZVByaWNlRGVzdGluYXRpb25EaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwMTUgZmxleCBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXJcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRG93bmxvYWRRdW90ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZjE0IGZ3NyBzZmMxIG0wIG1yNSBmbGV4IGFsaWduQ2VudGVyIGF0X2Rvd25sb2FkUXVvdGVDVEFcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtMjQgaWJsb2NrIG1yNVwiPjxEb3dubG9hZEJsYWNrIC8+PC9zcGFuPlxuICAgICAgICA8c3Bhbj5Eb3dubG9hZCBRdW90ZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge1xuICAgICAgICBjYW5DaGVja0NvdXBvbnMgJiYgIWhhc0Rpc2NvdW50QXBwbGllZFxuICAgICAgICAgID8gPERpc2NvdW50T2ZmZXIgZGlzY291bnRJbmZvcm1hdGlvbj17ZGlzY291bnRJbmZvcm1hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaXBJZD17dHJpcElkfSAvPlxuICAgICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj4pO1xufTtcblxuQmFzaWNJbmZvLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZGVzdGluYXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdHJpcFN0YXR1czogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcmljZUluZm9ybWF0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGRpc2NvdW50SW5mb3JtYXRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gIGRvd25sb2FkUXVvdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dSb3N0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5CYXNpY0luZm8uZGVmYXVsdFByb3BzID0ge1xuICBkaXNjb3VudEluZm9ybWF0aW9uOiB7fSxcbiAgc2hvd1Jvc3RlcjogKCkgPT4ge30sXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mbztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCB7IGxvYWQgYXMgZmV0Y2hRdW90ZXNEYXRhIH0gZnJvbSAnbW9kdWxlcy9xdW90ZS9hY3Rpb25zL3F1b3RlTGlzdCc7XG5pbXBvcnQgeyBsb2FkIGFzIGxvYWRDb25zdGFudHMgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvY29uc3RhbnRzJztcbmltcG9ydCB7IHN3aXRjaFF1b3RlLCB1cGRhdGVSZXF1ZXN0ZWRUcmlwSWQgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGZldGNoRGlzY291bnRPZmZlcnMgfSBmcm9tICdtb2R1bGVzL2Rpc2NvdW50RW5naW5lL2FjdGlvbic7XG5pbXBvcnQgeyBmZXRjaFByZURlZmluZWRNZXNzYWdlcyB9IGZyb20gJ21vZHVsZXMvcGRtL2FjdGlvbic7XG5cbmltcG9ydCB7IGdldEFnZW50RGV0YWlscywgZ2V0Q3VycmVudFF1b3RlLCBnZXRRdW90ZXNCYXNpY0luZm8gfSBmcm9tICdtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlTGlzdCc7XG5pbXBvcnQgQWdlbnRDYXJkIGZyb20gJy4vQWdlbnRDYXJkJztcbmltcG9ydCB7IGdldFRyaXBJZCB9IGZyb20gXCJtb2R1bGVzL3F1b3RlL3JlZHVjZXJzL3F1b3RlQWN0aXZpdGllc1wiO1xuaW1wb3J0IHsgZ2V0VXNlckRldGFpbHMgfSBmcm9tICdyZWR1Y2Vycy9hdXRoJztcbmltcG9ydCB7IGRvd25sb2FkUXVvdGUgfSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IHNob3dSb3N0ZXIgfSBmcm9tIFwibW9kdWxlcy9yb3N0ZXIvYWN0aW9uXCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICBhZ2VudDogZ2V0QWdlbnREZXRhaWxzKGdldEN1cnJlbnRRdW90ZShzdGF0ZSkpLFxuICAgIHRyaXBJZDogZ2V0VHJpcElkKHN0YXRlKSxcbiAgICB1c2VyRGV0YWlsczogZ2V0VXNlckRldGFpbHMoc3RhdGUpLFxuICAgIC4uLmdldFF1b3Rlc0Jhc2ljSW5mbyhnZXRDdXJyZW50UXVvdGUoc3RhdGUpKSxcbiAgfSksIHtcbiAgICBkb3dubG9hZFF1b3RlLFxuICAgIHNob3dSb3N0ZXJcbiAgfVxuKShBZ2VudENhcmQpKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXIsXG4gIHdlYnZpZXdBY3Rpb25zOiBbZmV0Y2hRdW90ZXNEYXRhLCBsb2FkQ29uc3RhbnRzLCBmZXRjaFByZURlZmluZWRNZXNzYWdlcyxcbiAgICBmZXRjaERpc2NvdW50T2ZmZXJzLCBzd2l0Y2hRdW90ZSwgdXBkYXRlUmVxdWVzdGVkVHJpcElkXVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgeyBnZXRGdWxsTmFtZSB9IGZyb20gJ2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgQ2FuY2VsQm9va2luZyBmcm9tICdtb2R1bGVzL3RyaXAvY3Rhcy9DYW5jZWxCb29raW5nJztcbmltcG9ydCBSZWFjdGl2YXRlVHJpcCBmcm9tICdtb2R1bGVzL3RyaXAvY3Rhcy9SZWFjdGl2YXRlVHJpcCc7XG5pbXBvcnQgUmVhY3RpdmF0ZVF1b3RlIGZyb20gJ21vZHVsZXMvcXVvdGUvY3Rhcy9SZWFjdGl2YXRlUXVvdGUnO1xuaW1wb3J0IFNvY2lhbFNoYXJlIGZyb20gJ21vZHVsZXMvcXVvdGUvY3Rhcy9Tb2NpYWxTaGFyZSc7XG5pbXBvcnQgU3dpdGNoUXVvdGUgZnJvbSAnbW9kdWxlcy9xdW90ZS9jdGFzL1N3aXRjaFF1b3RlJztcbmltcG9ydCBQYXlOb3cgZnJvbSAnbW9kdWxlcy9xdW90ZS9jdGFzL1BheU5vdyc7XG5pbXBvcnQgQm9va05vdyBmcm9tICdtb2R1bGVzL3F1b3RlL2N0YXMvQm9va05vdyc7XG5pbXBvcnQgVmlld0ludm9pY2VBbmRQYXkgZnJvbSAnbW9kdWxlcy9xdW90ZS9jdGFzL1ZpZXdJbnZvaWNlQW5kUGF5JztcbmltcG9ydCBSZWplY3RRdW90ZSBmcm9tICdtb2R1bGVzL3F1b3RlL2N0YXMvUmVqZWN0UXVvdGUnO1xuaW1wb3J0IFFVT1RFX0VWRU5UU19FTlVNUyBmcm9tICdtb2R1bGVzL3F1b3RlL0V2ZW50VHlwZXMnO1xuaW1wb3J0IFRSSVBfRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvdHJpcC9DaGlsZEV2ZW50c1R5cGUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ21vZHVsZXMvc2hhcmVkL0dlbmVyaWNNb2RhbCc7XG5pbXBvcnQgQm9va05vd1BvcHVwIGZyb20gJ21vZHVsZXMvcXVvdGUvcG9wdXBzL2Jvb2tOb3cvaW5kZXgnO1xuaW1wb3J0IHsgSU5GT19ST1NURVIgfSBmcm9tICdjb25zdGFudHMvcm9zdGVyVHlwZXMnO1xuaW1wb3J0IHsgZG93bmxvYWRRdW90ZVVybCB9IGZyb20gJ2hlbHBlcnMvdXJsSGVscGVycyc7XG5pbXBvcnQgeyBmb3JtYXRVUkwgfSBmcm9tICd1dGlscy9wYXJzZXJzJztcblxuY29uc3QgR0Zvb3RlckRpdiA9IGdsYW1vcm91cy5kaXYoe1xuICBtaW5IZWlnaHQ6ICc0OHB4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbn0pO1xuXG5jbGFzcyBRdW90ZVN0aWNreUZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3Blbk1vZGFsOiBmYWxzZSxcbiAgICAgIGNsb3NlTW9kYWw6IHRydWVcbiAgICB9O1xuXG4gICAgdGhpcy5jYWxsYmFja0hhbmRsZXIgPSB0aGlzLmNhbGxiYWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJlamVjdFF1b3RlU3VjY2VzcyAmJiBuZXh0UHJvcHMucmVqZWN0UXVvdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dSb3N0ZXIoeyB0eXBlOiBJTkZPX1JPU1RFUiwgbWVzc2FnZTogJ1F1b3RlIEhhcyBCZWVuIFJlamVjdGVkJyB9KTtcbiAgICB9XG5cbiAgICBlbHNlIGlmICghdGhpcy5wcm9wcy5yZWFjdGl2YXRlUXVvdGVTdWNjZXNzICYmIG5leHRQcm9wcy5yZWFjdGl2YXRlUXVvdGVTdWNjZXNzKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dSb3N0ZXIoeyB0eXBlOiBJTkZPX1JPU1RFUiwgbWVzc2FnZTogJ1F1b3RlIFJlYWN0aXZhdGVkIFN1Y2Nlc3NmdWxseSEnIH0pO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBjdGEsIG9iamVjdCA9ICcnKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoe1xuICAgICAgZXZlbnQsXG4gICAgICBzZWN0aW9uOiAnUXVvdGUgU3RhdHVzJyxcbiAgICAgIG9iamVjdDogb2JqZWN0LFxuICAgICAgY3RhXG4gICAgfSk7XG4gIH07XG5cbiAgY2FsbGJhY2tIYW5kbGVyID0gKHR5cGUsIGRhdGEgPSB7fSkgPT4ge1xuICAgIGRhdGEudHJpcElkID0gdGhpcy5wcm9wcy50cmlwSWQ7XG4gICAgZGF0YS5xdW90ZUlkID0gdGhpcy5wcm9wcy5xdW90ZUlkO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFFVT1RFX0VWRU5UU19FTlVNUy5CT09LX05PVzpcbiAgICAgICAgdGhpcy5vcGVuQm9va05vd1BvcHVwKCk7XG4gICAgICAgIHRoaXMucHJvcHMuYm9va05vdyhkYXRhKTtcbiAgICAgICAgdGhpcy50cmFja1NlZ21lbnRFdmVudChPUkdBTklTTV9DTElDS0VELCAnQm9vayBOb3cnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFFVT1RFX0VWRU5UU19FTlVNUy5SRUpFQ1RfUVVPVEU6XG4gICAgICAgIHRoaXMucHJvcHMucmVqZWN0UXVvdGUoZGF0YSk7XG4gICAgICAgIHRoaXMudHJhY2tTZWdtZW50RXZlbnQoT1JHQU5JU01fQ0xJQ0tFRCwgJ1JlamVjdCBRdW90ZScpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUVVPVEVfRVZFTlRTX0VOVU1TLlJFQUNUSVZBVEVfUVVPVEU6XG4gICAgICAgIHRoaXMucHJvcHMucmVhY3RpdmF0ZVF1b3RlKGRhdGEpO1xuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdSZWFjdGl2YXRlIFF1b3RlJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUUklQX0VWRU5UU19FTlVNUy5SRUFDVElWQVRFX1RSSVA6XG4gICAgICAgIHRoaXMucHJvcHMucmVhY3RpdmF0ZUJvb2tpbmcoZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUUklQX0VWRU5UU19FTlVNUy5DQU5DRUxfVFJJUDpcbiAgICAgICAgdGhpcy5wcm9wcy5jYW5jZWxCb29raW5nKGRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUVVPVEVfRVZFTlRTX0VOVU1TLlBBWV9OT1c6XG4gICAgICAgIHRoaXMub3BlbkJvb2tOb3dQb3B1cCgpO1xuICAgICAgICB0aGlzLnRyYWNrU2VnbWVudEV2ZW50KE9SR0FOSVNNX0NMSUNLRUQsICdQcm9jZWVkIHRvIFBheScpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgb3BlbkJvb2tOb3dQb3B1cCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3Blbk1vZGFsOiB0cnVlLCBjbG9zZU1vZGFsOiBmYWxzZSB9KTtcbiAgfTtcblxuICBjbG9zZVBvcHVwID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjbG9zZU1vZGFsOiB0cnVlLCBvcGVuTW9kYWw6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjdGFzID0gW107XG4gICAgY29uc3QgeyB0cmlwSWQsIHF1b3RlSWQsIHF1b3RlU3RhdHVzLCBjdXJyZW50UXVvdGUsIGNvbnZlcnRlZFF1b3RlLCB1c2VyRGV0YWlscywgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzaGFyZUxpbmsgPSBmb3JtYXRVUkwoeyBwYXRoOiBkb3dubG9hZFF1b3RlVXJsKHF1b3RlSWQpIH0pO1xuXG4gICAgaWYgKHF1b3RlU3RhdHVzLmlzUmVqZWN0ZWQpIHtcbiAgICAgIGN0YXMucHVzaCg8UmVhY3RpdmF0ZVF1b3RlIGNhbGxiYWNrSGFuZGxlcj17dGhpcy5jYWxsYmFja0hhbmRsZXJ9IHRyaXBJZD17dHJpcElkfSBxdW90ZUlkPXtxdW90ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3RhLXJlYWN0aXZhdGUtcXVvdGVcIiBsb2FkaW5nPXtsb2FkaW5nfSAvPik7XG4gICAgfSBlbHNlIGlmIChxdW90ZVN0YXR1cy5pc1JlcXVlc3RDYW5jZWxsZWQpIHtcbiAgICAgIGN0YXMucHVzaCg8UmVhY3RpdmF0ZVRyaXAgY2FsbGJhY2tIYW5kbGVyPXt0aGlzLmNhbGxiYWNrSGFuZGxlcn0gdHJpcElkPXt0cmlwSWR9IGtleT1cInJlYWN0aXZhdGVfdHJpcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9IC8+KTtcbiAgICB9IGVsc2UgaWYgKCEocXVvdGVTdGF0dXMuaXNDb252ZXJ0ZWQgfHwgcXVvdGVTdGF0dXMuaXNDYW5jZWxsZWQpKSB7XG4gICAgICBpZiAocXVvdGVTdGF0dXMuaXNJbnZvaWNlUmVxdWVzdGVkKSB7XG4gICAgICAgIGN0YXMucHVzaCg8UmVqZWN0UXVvdGUgcXVvdGVSZWplY3Rpb25SZWFzb25zPXt0aGlzLnByb3BzLnF1b3RlUmVqZWN0aW9uUmVhc29uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0hhbmRsZXI9e3RoaXMuY2FsbGJhY2tIYW5kbGVyfSB0cmlwSWQ9e3RyaXBJZH0gcXVvdGVJZD17cXVvdGVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJjdGEtcmVqZWN0LXF1b3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfSAvPik7XG4gICAgICAgIGN0YXMucHVzaCg8UGF5Tm93IGN0YVRleHQ9XCJQcm9jZWVkIHRvIFBheVwiIGRpc2FibGVQYXlOb3c9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcj17dGhpcy5jYWxsYmFja0hhbmRsZXJ9IGtleT1cImN0YS1wYXktbm93XCIgLz4pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIXF1b3RlU3RhdHVzLmlzSW52b2ljZWQpIHtcbiAgICAgICAgY3Rhcy5wdXNoKDxSZWplY3RRdW90ZSBxdW90ZVJlamVjdGlvblJlYXNvbnM9e3RoaXMucHJvcHMucXVvdGVSZWplY3Rpb25SZWFzb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcj17dGhpcy5jYWxsYmFja0hhbmRsZXJ9IHRyaXBJZD17dHJpcElkfSBxdW90ZUlkPXtxdW90ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImN0YS1yZWplY3QtcXVvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9IC8+KTtcbiAgICAgICAgY3Rhcy5wdXNoKDxCb29rTm93IGNhbGxiYWNrSGFuZGxlcj17dGhpcy5jYWxsYmFja0hhbmRsZXJ9IHRyaXBJZD17dHJpcElkfSBxdW90ZUlkPXtxdW90ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiY3RhLWJvb2stbm93XCIgLz4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWN0YXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxHRm9vdGVyRGl2IGNsYXNzTmFtZT1cImZsZXggc2JjdyBwOCBidFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN0YXNcbiAgICAgICAgICB9XG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB0cmlnZ2VyPXtudWxsfVxuICAgICAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbk1vZGFsfVxuICAgICAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICBjdXN0b21DbG9zZVRyaWdnZXI9e3RoaXMuc3RhdGUuY2xvc2VNb2RhbH1cbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tPXt0aGlzLmNsb3NlUG9wdXB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJvb2tOb3dQb3B1cFxuICAgICAgICAgICAgICBvcHNEZXRhaWw9e3RoaXMucHJvcHMuY3VycmVudFF1b3RlLm9wRGV0YWlsc31cbiAgICAgICAgICAgICAgY2xvc2VNb2RhbD17dGhpcy5jbG9zZVBvcHVwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L0dGb290ZXJEaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblF1b3RlU3RpY2t5Rm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgcXVvdGVTdGF0dXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaXNSZWplY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbnZvaWNlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNJbnZvaWNlUmVxdWVzdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0NhbmNlbGxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNDb252ZXJ0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzUmVxdWVzdENhbmNlbGxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfSkuaXNSZXF1aXJlZCxcbiAgY3VycmVudFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNvbnZlcnRlZFF1b3RlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBxdW90ZVJlamVjdGlvblJlYXNvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdXNlckRldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICBib29rTm93OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZWplY3RRdW90ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVhY3RpdmF0ZVF1b3RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZWFjdGl2YXRlQm9va2luZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2FuY2VsQm9va2luZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICByZWplY3RRdW90ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHJlYWN0aXZhdGVRdW90ZVN1Y2Nlc3M6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dSb3N0ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuUXVvdGVTdGlja3lGb290ZXIuZGVmYXVsdFByb3BzID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgY29udmVydGVkUXVvdGU6IHt9LFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9LFxuICBzaG93Um9zdGVyOiAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVTdGlja3lGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBnZXRDdXJyZW50UXVvdGVTdGF0dXNlcyxcbiAgZ2V0Q3VycmVudFF1b3RlLFxuICBnZXRDb252ZXJ0ZWRRdW90ZSxcbiAgcXVvdGVDdGFzU3RhdHVzXG59IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGdldFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGdldFF1b3RlUmVqZWN0aW9uUmVhc29ucyB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFVzZXJEZXRhaWxzIH0gZnJvbSAncmVkdWNlcnMvYXV0aCc7XG5pbXBvcnQge1xuICBib29rTm93LFxuICByZWplY3RRdW90ZSxcbiAgcmVhY3RpdmF0ZVF1b3RlLFxufSBmcm9tICdtb2R1bGVzL3F1b3RlL2FjdGlvbnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7XG4gIHJlYWN0aXZhdGVCb29raW5nLFxuICBjYW5jZWxCb29raW5nXG59IGZyb20gJ21vZHVsZXMvdHJpcC9hY3Rpb25zL3RyaXBBY3Rpdml0aWVzJztcbmltcG9ydCB7IHNob3dSb3N0ZXIgfSBmcm9tICdtb2R1bGVzL3Jvc3Rlci9hY3Rpb24nO1xuaW1wb3J0IFF1b3RlQm90dG9tIGZyb20gJy4vQm90dG9tJztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgY29uc3QgY3VycmVudFF1b3RlID0gZ2V0Q3VycmVudFF1b3RlKHN0YXRlKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHJpcElkOiBnZXRUcmlwSWQoc3RhdGUpLFxuICAgICAgcXVvdGVJZDogY3VycmVudFF1b3RlLmlkLFxuICAgICAgY3VycmVudFF1b3RlOiBjdXJyZW50UXVvdGUsXG4gICAgICBjb252ZXJ0ZWRRdW90ZTogZ2V0Q29udmVydGVkUXVvdGUoc3RhdGUpLFxuICAgICAgcXVvdGVTdGF0dXM6IGdldEN1cnJlbnRRdW90ZVN0YXR1c2VzKGN1cnJlbnRRdW90ZSksXG4gICAgICBxdW90ZVJlamVjdGlvblJlYXNvbnM6IGdldFF1b3RlUmVqZWN0aW9uUmVhc29ucyhzdGF0ZSksXG4gICAgICB1c2VyRGV0YWlsczogZ2V0VXNlckRldGFpbHMoc3RhdGUpLFxuICAgICAgLi4ucXVvdGVDdGFzU3RhdHVzKHN0YXRlKVxuICAgIH07XG4gIH0sIHtcbiAgICBib29rTm93LFxuICAgIHJlamVjdFF1b3RlLFxuICAgIHJlYWN0aXZhdGVRdW90ZSxcbiAgICByZWFjdGl2YXRlQm9va2luZyxcbiAgICBjYW5jZWxCb29raW5nLFxuICAgIHNob3dSb3N0ZXJcbiAgfSkoUXVvdGVCb3R0b20pKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250YWluZXJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVWRU5UU19FTlVNUyBmcm9tICdtb2R1bGVzL3F1b3RlL0V2ZW50VHlwZXMnO1xuXG5jbGFzcyBCb29rTm93IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBoYW5kbGVCb29rTm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdHJpcElkLCBxdW90ZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMucHJvcHMuY2FsbGJhY2tIYW5kbGVyKEVWRU5UU19FTlVNUy5CT09LX05PVywgeyB0cmlwSWQsIHF1b3RlSWQgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNRdW90ZUNhcmRDdGEgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGxcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2lzUXVvdGVDYXJkQ3RhID8gJ2Jsb2NrIHAxNSB0ZXh0LWxlZnQgd2Z1bGwgYXRfYm9va05vdycgOiAnd2Z1bGwgYnRuLXByaS1sYXJnZSByaXBwbGUgcGw1IHByNSBhdF9ib29rTm93J30gb25DbGljaz17dGhpcy5oYW5kbGVCb29rTm93fT5cbiAgICAgICAgICBCb29rIE5vd1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQm9va05vdy5wcm9wVHlwZXMgPSB7XG4gIHRyaXBJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBxdW90ZUlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9wc0RldGFpbDogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2FsbGJhY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNRdW90ZUNhcmRDdGE6IFByb3BUeXBlcy5ib29sXG59O1xuXG5Cb29rTm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgb3BzRGV0YWlsOiB7fSxcbiAgY2FsbGJhY2tIYW5kbGVyOiAoKSA9PiB7XG4gIH0sXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9LFxuICBpc1F1b3RlQ2FyZEN0YTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tOb3c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEVWRU5UU19FTlVNUyBmcm9tIFwiLi4vRXZlbnRUeXBlc1wiO1xuXG5jb25zdCBDVEFfVEVYVCA9ICdQYXkgTm93JztcblxuY29uc3QgUGF5Tm93ID0gKHsgcGF5Tm93VXJsLCBjdGFUZXh0LCBkaXNhYmxlUGF5Tm93LCBjYWxsYmFja0hhbmRsZXIsIHRyYWNrU2VnbWVudCB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZVBheU5vdyA9ICgpID0+IHtcbiAgICAvLyB0cmFja1NlZ21lbnQoJ0Jvb2sgTm93IGNsaWNrZWQnLCAnUXVvdGUgUHJpY2UnLCAnQm9vayBOb3cnKTtcblxuICAgIGNhbGxiYWNrSGFuZGxlcihFVkVOVFNfRU5VTVMuUEFZX05PVyk7XG4gIH07XG5cbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZsZXhGdWxsIGZsZXhcIj5cbiAgICB7XG4gICAgICBkaXNhYmxlUGF5Tm93ID9cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZnVsbCBidG4tcHJpLWxhcmdlIHJpcHBsZSBwbDUgcHI1XCIgb25DbGljaz17aGFuZGxlUGF5Tm93fT57Y3RhVGV4dH08L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+PGEgaHJlZj17cGF5Tm93VXJsfSBjbGFzc05hbWU9XCJ3ZnVsbCBidG4tZmlsbGVkLXByaS1sYXJnZSByYWRpdXMyIHJpcHBsZVwiPlxuICAgICAgICAgIHtjdGFUZXh0fVxuICAgICAgICA8L2E+PC9kaXY+XG4gICAgfVxuICA8L2Rpdj4pO1xufTtcblxuUGF5Tm93LnByb3BUeXBlcyA9IHtcbiAgcGF5Tm93VXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjdGFUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlUGF5Tm93OiBQcm9wVHlwZXMuYm9vbCxcbiAgY2FsbGJhY2tIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5QYXlOb3cuZGVmYXVsdFByb3BzID0ge1xuICBwYXlOb3dVcmw6ICcnLFxuICBjdGFUZXh0OiBDVEFfVEVYVCxcbiAgZGlzYWJsZVBheU5vdzogZmFsc2UsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXlOb3c7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvcXVvdGUvRXZlbnRUeXBlcyc7XG5cbmNvbnN0IENUQV9URVhUID0gJ1JlYWN0aXZhdGUgUXVvdGUnO1xuXG5jb25zdCBSZWFjdGl2YXRlUXVvdGUgPSAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpcElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0hhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpc1F1b3RlQ2FyZEN0YVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+XG4gICAge1xuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2lzUXVvdGVDYXJkQ3RhID8gJ2Jsb2NrIHAxNSB0ZXh0LWxlZnQgd2Z1bGwnIDogJ3dmdWxsIGJ0bi1wcmktbGFyZ2UgcmlwcGxlIHBsNSBwcjUnfVxuICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNhbGxiYWNrSGFuZGxlcihFVkVOVFNfRU5VTVMuUkVBQ1RJVkFURV9RVU9URSwgeyB0cmlwSWQsIHF1b3RlSWQgfSk7XG4gICAgICAgIH19PlxuICAgICAgICB7Q1RBX1RFWFR9XG4gICAgICA8L2J1dHRvbj5cbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuUmVhY3RpdmF0ZVF1b3RlLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHF1b3RlSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGNhbGxiYWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNRdW90ZUNhcmRDdGE6IFByb3BUeXBlcy5ib29sXG59O1xuXG5SZWFjdGl2YXRlUXVvdGUuZGVmYXVsdFByb3BzID0ge1xuICBpc1F1b3RlQ2FyZEN0YTogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdGl2YXRlUXVvdGU7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcENvbmZpZyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsJztcbmltcG9ydCBNb2RhbEhlYWRlckN1c3RvbSBmcm9tICdtb2R1bGVzL3NoYXJlZC9oZWFkZXJzL01vZGFsSGVhZGVyQ3VzdG9tJztcbmltcG9ydCBEZWFsUHJpY2VGb3JtICBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgVGhhbmtZb3VUaWNrLCBFbnZlbG9wZUljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBPUkdBTklTTV9DTElDS0VEIH0gZnJvbSAnYXBwL2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyBjdXJyZW50RGF0ZSwgdG9UaW1lU3RhbXAgfSBmcm9tICdoZWxwZXJzL0RhdGVUaW1lJztcbmltcG9ydCB7IGdlbmVyYXRlVW5pcXVlSWQgfSBmcm9tICdoZWxwZXJzL3V0aWxzJztcbmltcG9ydCB7IGluaXRpYWxpemVDaGF0VXNpbmdSdG1zLCBNZXNzYWdlVHlwZSB9IGZyb20gJ2hlbHBlcnMvcnRtcyc7XG5cbmNvbnN0IFRoYW5rWW91TWVzc2FnZSA9ICh7IGFnZW50TmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdDI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoYW5rLXlvdS1hbmltYXRpb24gcmVsYXRpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbnZlbG9wZS1ib3hcIj48RW52ZWxvcGVJY29uIC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhhbmt5b3UtdGlja1wiPjxUaGFua1lvdVRpY2sgLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwicGZjMSBmMzIgZnc3IHRleHQtY2VudGVyXCI+VGhhbmsgWW91PC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjE0IHRleHQtY2VudGVyXCI+XG4gICAgICAgIHthZ2VudE5hbWUgPyA8Yj57YWdlbnROYW1lfTwvYj4gOiAnT3VyIEFnZW50J30gd2lsbCBnZXQgYmFjayB0byB5b3Ugc29vbi5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRoYW5rWW91TWVzc2FnZS5wcm9wVHlwZXMgPSB7XG4gIGFnZW50TmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgZ2VuZXJhdGVUcmlnZ2VyID0gKGhhbmRsZU1vZGFsT3BlbikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInAxNSB0ZXh0LWNlbnRlclwiPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNiBmdzkgbGgyNFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZjE2IGZ3OVwiPkdvdCBhIGNoZWFwZXIgZGVhbD88L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZmMxIG1sNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsT3BlbigpfT5UZWxsIHVzPC9zcGFuPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTQgcGZjNCBmdzQgbGgyNFwiPkFuZCB3ZSB3aWxsIHRyeSB0byBtYXRjaCB0aGUgcHJpY2UuPC9wPlxuICA8L2Rpdj5cbik7XG5cbmNsYXNzIERlYWxQcmljZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJhY2tTZWdtZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVzZXJEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgYWdlbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICB0cmlwSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50UXVvdGVJZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNyZWF0ZUNvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgYWRkTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRlID0geyBzaG93VGhhbmtZb3UgOiBmYWxzZSwgY2xvc2VNb2RhbDogdHJ1ZSB9O1xuXG4gIHNob3dUaGFua1lvdSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe3Nob3dUaGFua1lvdTp0cnVlfSk7XG5cbiAgc3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IHRydWUsIHNob3dUaGFua1lvdTogZmFsc2UgfSk7XG4gICAgfSwgMzAwMCk7XG4gICAgdGhpcy5zaG93VGhhbmtZb3UoKTtcbiAgICB0aGlzLnByb3BzLnRyYWNrU2VnbWVudChPUkdBTklTTV9DTElDS0VELCdQcmljZSBNYXRjaGluZy1Qb3B1cCcsICAnJywgJ1N1Ym1pdCcpO1xuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUNoYXQoKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlKGBEZWFyIEFnZW50LCBJIGFtIHJlY2VpdmluZyBhIGJldHRlciBxdW90ZSBhdCAke3ZhbHVlcy5jdXJyZW5jeX0gJHt2YWx1ZXMucHJpY2V9LiBQbGVhc2UgcHJvdmlkZSBtZSBhIGJldHRlciBkZWFsYCk7XG4gIH07XG5cbiAgaW5pdGlhbGl6ZUNoYXQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNvbmZpZy51c2VSdG1zICYmIHRoaXMucnRtc18pIHtcbiAgICAgIHRoaXMucnRtc18uY2xvc2UoKTtcbiAgICB9XG4gICAgY29uc3QgeyB1c2VyRGV0YWlscywgYWRkTWVzc2FnZSwgYWdlbnQsIGN1cnJlbnRRdW90ZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgY3VycmVudFN1YnNjcmlwdGlvbl8sIHJ0bXNfIH0gPSBhd2FpdCBpbml0aWFsaXplQ2hhdFVzaW5nUnRtcyh7IHVzZXJJZDogdXNlckRldGFpbHMuaWQsIGFnZW50SWQ6IGFnZW50LmlkIH0pO1xuICAgIHRoaXMuY3VycmVudFN1YnNjcmlwdGlvbl8gPSBjdXJyZW50U3Vic2NyaXB0aW9uXztcbiAgICB0aGlzLnJ0bXNfID0gcnRtc187XG4gICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uXy5vbihNZXNzYWdlVHlwZS5NRVNTQUdFLCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKG1lc3NhZ2UuY29tbWVudGFibGVfaWQgPT09IGN1cnJlbnRRdW90ZUlkKSB7XG4gICAgICAgIGFkZE1lc3NhZ2UobWVzc2FnZSwgY3VycmVudFF1b3RlSWQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRTdWJzY3JpcHRpb25fLm9uKE1lc3NhZ2VUeXBlLk1ZX01FU1NBR0UsIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAobWVzc2FnZS5jb21tZW50YWJsZV9pZCA9PT0gY3VycmVudFF1b3RlSWQpIHtcbiAgICAgICAgYWRkTWVzc2FnZShtZXNzYWdlLCBjdXJyZW50UXVvdGVJZCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfTtcblxuICBoYW5kbGVNb2RhbE9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNsb3NlTW9kYWw6IGZhbHNlIH0pO1xuICAgIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KE9SR0FOSVNNX0NMSUNLRUQsICdQcmljZSBNYXRjaGluZycsICAnJywgJ1RlbGwgVXMnKTtcbiAgfTtcblxuICBoYW5kbGVNb2RhbENsb3NlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgIHRyYWNrU2VnbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1RoYW5rWW91OiBmYWxzZSwgY2xvc2VNb2RhbDogdHJ1ZSB9KTtcbiAgICB0cmFja1NlZ21lbnQoT1JHQU5JU01fQ0xJQ0tFRCwnUHJpY2UgTWF0Y2hpbmctUG9wdXAnLCAgJycsICdDcm9zcycpO1xuICB9O1xuXG4gIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IHRyaXBJZCwgY3VycmVudFF1b3RlSWQsIGNyZWF0ZUNvbW1lbnQsIHVzZXJEZXRhaWxzLCBhZGRNZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsLCBhdmF0YXIgfSA9IHVzZXJEZXRhaWxzO1xuICAgIGNvbnN0IG1lc3NhZ2VPYmogPSB7XG4gICAgICB0aXRsZTogJyNjaGF0JyxcbiAgICAgIGNvbW1lbnQ6IG1lc3NhZ2UsXG4gICAgICBjb21tZW50Qnk6ICdUUkFWRUxMRVInLFxuICAgICAgY29tbWVudGFibGVfaWQ6IGN1cnJlbnRRdW90ZUlkLFxuICAgICAgY29tbWVudGFibGVfdHlwZTogJ1F1b3RlJyxcbiAgICAgIHJvbGU6ICd0cmF2ZWxsZXInLFxuICAgICAgdXNlcklkOiBpZCxcbiAgICAgIHVzZXJfaWQ6IGlkLFxuICAgICAgdXNlck5hbWU6IG5hbWUsXG4gICAgICBlbWFpbCxcbiAgICAgIHVzZXJQaWM6IGF2YXRhcixcbiAgICAgIGNyZWF0ZWRBdDogY3VycmVudERhdGUoKSxcbiAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnLicpWzBdICsgXCIrMDA6MDBcIixcbiAgICAgIHVJZDogZ2VuZXJhdGVVbmlxdWVJZChpZCwgdG9UaW1lU3RhbXAobmV3IERhdGUoKSksIG1lc3NhZ2UpLFxuICAgICAgbm90aWZpY2F0aW9uX3N1Yl9jYXRlZ29yeTogJ2NvbW1lbnRfYWRkZWQnLFxuICAgICAgdHJpcF9pZDogcGFyc2VJbnQodHJpcElkLnRvU3RyaW5nKCkucmVwbGFjZSgvW14wLTlcXC5dL2csICcnKSwgMTApLFxuICAgICAgaXNQZW5kaW5nOiAwLFxuICAgIH07XG4gICAgdGhpcy5jdXJyZW50U3Vic2NyaXB0aW9uXy5zZW5kTWVzc2FnZSh7IGNvbnRlbnQ6IG1lc3NhZ2VPYmogfSk7XG4gICAgY3JlYXRlQ29tbWVudCh0cmlwSWQsIGN1cnJlbnRRdW90ZUlkLCBtZXNzYWdlT2JqKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFnZW50IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgdHJpZ2dlcj17Z2VuZXJhdGVUcmlnZ2VyKHRoaXMuaGFuZGxlTW9kYWxPcGVuKX1cbiAgICAgICAgZnVsbFZpZXc9e3RydWV9XG4gICAgICAgIGlzRGVmYXVsdE1vZGFsPXtmYWxzZX1cbiAgICAgICAgaGFzQ3VzdG9tQ2xvc2U9e3RydWV9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlQ3VzdG9tPXt0aGlzLmhhbmRsZU1vZGFsQ2xvc2V9XG4gICAgICAgIGN1c3RvbUNsb3NlVHJpZ2dlcj17dGhpcy5zdGF0ZS5jbG9zZU1vZGFsfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNpdGVNb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICA8TW9kYWxIZWFkZXJDdXN0b20gaGVhZGluZz17J0dvdCBhIGJldHRlciBkZWFsPyd9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwMjRcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93VGhhbmtZb3UgP1xuICAgICAgICAgICAgICAgIDxUaGFua1lvdU1lc3NhZ2UgYWdlbnROYW1lPXthZ2VudCAmJiBhZ2VudC5uYW1lfS8+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxEZWFsUHJpY2VGb3JtIHNhdmU9e3RoaXMuc3VibWl0fSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWFsUHJpY2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGaWVsZCwgcmVkdXhGb3JtLCBmb3JtVmFsdWVTZWxlY3RvciB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuXG5pbXBvcnQgSW5wdXRDb21wb25lbnQgZnJvbSAgJ21vZHVsZXMvc2hhcmVkL2lucHV0JztcbmltcG9ydCB7IERvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBEcm9wZG93bkNvbXBvbmVudCBmcm9tICdtb2R1bGVzL2ZsaWdodHMvZm9ybS9jb21wb25lbnRzL0Ryb3Bkb3duJztcbmltcG9ydCAgeyBDdXJyZW5jeUxpc3QsIERFRkFVTFRfQ1VSUkVOQ1kgfSBmcm9tICdjb25zdGFudHMvY3VycmVuY2llcyc7XG5cblxuY2xhc3MgRGVhbFByaWNlRm9ybSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc2F2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcXVvdGVQcmljZTogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcXVvdGVQcmljZTogMFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgc2F2ZSwgcXVvdGVQcmljZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzYXZlKX0gY2xhc3NOYW1lPVwiYXRfcHJpY2VNYXRjaEZvcm1cIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBmYzEgZjMyIGZ3NyBwYjggbGgyNCBtMCBmbGV4RnVsbCB0ZXh0LWxlZnQgIFwiPldlIFByaWNlIE1hdGNoITwvaDQ+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBtYjQ4XCI+VGVsbCB1cyBhIGJldHRlciBkZWFsIGFuZCB3ZSB3aWxsIHRyeSB0byBtYXRjaCB0aGUgcHJpY2UuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWIyNCc+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZjE0IGZ3OSBwYjggYmxvY2snPlBsZWFzZSBzaGFyZSB0aGUgcXVvdGVkIHByaWNlIDxlbSBjbGFzc05hbWU9J3BmYzInPio8L2VtPjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtEcm9wZG93bkNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e0N1cnJlbmN5TGlzdH1cbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICBmZXRjaFN1Z2dlc3Rpb25zPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGlucHV0Q2xhc3NOYW1lPScnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3QyNSByNCBibG9jayB3YXV0byBsYXV0byBpbnB1dC1pY29uIGFic29sdXRlLWNlbnRlci12IGRvd25BcnJvdyc+PERvd25BcnJvdyAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtOCBwbDAnPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVvdGVkIFByaWNlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lucHV0Q29tcG9uZW50fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJzNiBwOCBzYmN3IGIwIGwwIHIwIHoyIGZpeGVkXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSB3ZnVsbCByYWRpdXMyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IXF1b3RlUHJpY2V9PlxuICAgICAgICAgICAgU3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuICBpZiAoIXZhbHVlcy5wcmljZSkge1xuICAgIGVycm9ycy5wcmljZSA9ICdQbGVhc2UgZW50ZXIgdGhlIHF1b3RlIHByaWNlJztcbiAgfVxuICByZXR1cm4gZXJyb3JzO1xufTtcblxuY29uc3Qgc2VsZWN0b3IgPSBmb3JtVmFsdWVTZWxlY3RvcignZGVhbFByaWNlRm9ybScpO1xuXG5jb25zdCBEZWFsUHJpY2VDb25uZWN0ZWRGb3JtID0gY29ubmVjdCgoc3RhdGUpID0+IHtcbiAgY29uc3QgcXVvdGVQcmljZSA9IHNlbGVjdG9yKHN0YXRlLCAncHJpY2UnKTtcbiAgcmV0dXJuIHsgcXVvdGVQcmljZSB9O1xufSkoRGVhbFByaWNlRm9ybSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHV4Rm9ybSh7XG4gIGZvcm06ICdkZWFsUHJpY2VGb3JtJyxcbiAgdmFsaWRhdGUsXG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBjdXJyZW5jeTogREVGQVVMVF9DVVJSRU5DWS52YWx1ZVxuICB9LFxuICBlbmFibGVSZWluaXRpYWxpemU6IHRydWVcbn0pKERlYWxQcmljZUNvbm5lY3RlZEZvcm0pO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERlYWxQcmljZSBmcm9tICcuL2RlYWxQcmljZSc7XG5pbXBvcnQgeyBnZXRBZ2VudERldGFpbHMsIGdldEN1cnJlbnRRdW90ZSB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVMaXN0JztcbmltcG9ydCB7IGdldFRyaXBJZCB9IGZyb20gJ21vZHVsZXMvcXVvdGUvcmVkdWNlcnMvcXVvdGVBY3Rpdml0aWVzJztcbmltcG9ydCB7IGNyZWF0ZUNvbW1lbnQsIGFkZE1lc3NhZ2UgfSBmcm9tICdtb2R1bGVzL2NoYXQvYWN0aW9uJztcbmltcG9ydCB7IGdldFVzZXJEZXRhaWxzIH0gZnJvbSAnYXBwL3JlZHVjZXJzL2F1dGgnO1xuXG5cblxuY29uc3QgQ29udGFpbmVyID0gIGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgYWdlbnQ6IGdldEFnZW50RGV0YWlscyhnZXRDdXJyZW50UXVvdGUoc3RhdGUpKSxcbiAgY3VycmVudFF1b3RlSWQ6IHN0YXRlLnF1b3RlLmFjdGlvbnMuY3VycmVudFF1b3RlSWQsXG4gIHRyaXBJZDogZ2V0VHJpcElkKHN0YXRlKSxcbiAgdXNlckRldGFpbHM6IGdldFVzZXJEZXRhaWxzKHN0YXRlKVxufSksXG4gIHtcbiAgICBjcmVhdGVDb21tZW50LFxuICAgIGFkZE1lc3NhZ2VcbiAgICAvLyBxdW90ZUNvbW1lbnRBZGRlZFxuICB9XG4pKERlYWxQcmljZSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0SWNvbiB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCBNb2RhbCBmcm9tICdtb2R1bGVzL3NoYXJlZC9HZW5lcmljTW9kYWwnO1xuaW1wb3J0IENoYXQgZnJvbSAnbW9kdWxlcy9jaGF0JztcblxuY2xhc3MgQWdlbnRDaGF0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNob3dJY29uOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRleHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VzdG9tQnV0dG9uOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbmFtZTogJ0NoYXQnLFxuICAgIHNob3dJY29uOiBmYWxzZSxcbiAgICBoYW5kbGVDaGF0Q2xpY2s6ICgpID0+IHt9LFxuICAgIHRleHRDbGFzc05hbWU6ICdmMTQgZnc3IHNmYzEnLFxuICAgIGN1c3RvbUJ1dHRvbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRleHRDbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgQ2hhdENvbnRhaW5lciA9IENoYXQuY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLnNob3dJY29uXG4gICAgICAgICAgICA/IDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LTI0IG1yOFwiPjxEZWZhdWx0SWNvbiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIHRyaWdnZXI9e1xuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3RleHRDbGFzc05hbWV9IGF0X2FnZW50X2NoYXRfYnV0dG9uYH0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVDaGF0Q2xpY2t9Pnt0aGlzLnByb3BzLm5hbWV9PC9idXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bGxWaWV3PXt0cnVlfVxuICAgICAgICAgIGhhc0N1c3RvbUNsb3NlPXt0cnVlfVxuICAgICAgICAgIGlzV2hpdGVJY29uPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPENoYXRDb250YWluZXIgLz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnRDaGF0QnV0dG9uO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IHtcbiAgU3Rhckljb24sXG4gIEhhbGZTdGFyLFxuICBTdGFySWNvbkVtcHR5XG59IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcblxuY29uc3QgR1JhdGluZ1VsID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1hcmdpbjogJzAnLFxuICBwYWRkaW5nOiAnMCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAnJiBsaSc6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzZweCcsXG4gICAgd2lkdGg6ICcxMHB4JyxcbiAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcwJyxcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0U3RhcnMoQ29tcG9uZW50LCBzdGFyTnVtLCBrZXlUeXBlKSB7XG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RhcnMgPSBbXTtcbiAgd2hpbGUgKGkgPCBzdGFyTnVtKSB7XG4gICAgc3RhcnMucHVzaCg8bGkga2V5PXtrZXlUeXBlICsgaX0+PENvbXBvbmVudCAvPjwvbGk+KTtcbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHN0YXJzO1xufVxuXG5jb25zdCBSYXRpbmdTdGFyID0gKHsgcmF0aW5nLCBpc0VtcHR5U3RhcnNIaWRkZW4gfSkgPT4ge1xuICBjb25zdCBzdGFycyA9IFtdO1xuICBjb25zdCByYXRpbmdCYXJSYW5nZSA9IDU7XG4gIGNvbnN0IHRydW5jYXRlZFJhdGluZyA9IE1hdGgudHJ1bmMocmF0aW5nKTtcbiAgY29uc3QgZnJhY3Rpb25hbFJhdGluZyA9IHBhcnNlRmxvYXQoKHJhdGluZyAtIHRydW5jYXRlZFJhdGluZykudG9GaXhlZCgxKSk7XG4gIGxldCBmdWxsU3RhckNvdW50ID0gMDtcbiAgbGV0IGhhbGZTdGFyQ291bnQgPSAwO1xuXG4gIGlmIChmcmFjdGlvbmFsUmF0aW5nID09PSAwLjApIHtcbiAgICBmdWxsU3RhckNvdW50ID0gcmF0aW5nO1xuICB9IGVsc2UgaWYgKGZyYWN0aW9uYWxSYXRpbmcgPD0gMC41KSB7XG4gICAgZnVsbFN0YXJDb3VudCA9IHRydW5jYXRlZFJhdGluZztcbiAgICBoYWxmU3RhckNvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBmdWxsU3RhckNvdW50ID0gdHJ1bmNhdGVkUmF0aW5nICsgMTtcbiAgfVxuXG4gIGNvbnN0IGVtcHR5U3RhckNvdW50ID0gcmF0aW5nQmFyUmFuZ2UgLSAoZnVsbFN0YXJDb3VudCArIGhhbGZTdGFyQ291bnQpO1xuXG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb24sIGZ1bGxTdGFyQ291bnQsICdmdWxsX3N0YXInKSk7XG4gIHN0YXJzLnB1c2goZ2V0U3RhcnMoSGFsZlN0YXIsIGhhbGZTdGFyQ291bnQsICdoYWxmX3N0YXInKSk7XG4gIC8vIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICBpZiAoIWlzRW1wdHlTdGFyc0hpZGRlbikge1xuICAgIHN0YXJzLnB1c2goZ2V0U3RhcnMoU3Rhckljb25FbXB0eSwgZW1wdHlTdGFyQ291bnQsICdlbXB0eV9zdGFyJykpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R1JhdGluZ1VsIGNsYXNzTmFtZT1cInJhdGluZy1zdGFyLWxpc3QgYXRfcmF0aW5nXCI+XG4gICAgICA8dWw+XG4gICAgICAgIHtcbiAgICAgICAgICBzdGFyc1xuICAgICAgICB9XG4gICAgICA8L3VsPlxuICAgIDwvR1JhdGluZ1VsPlxuICApO1xufTtcblxuUmF0aW5nU3Rhci5wcm9wVHlwZXMgPSB7XG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUmF0aW5nU3Rhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHJhdGluZzogMCxcbiAgaXNFbXB0eVN0YXJzSGlkZGVuOiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nU3RhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHsgQmx1ZURvd25BcnJvdyB9IGZyb20gJ2hlbHBlcnMvSWNvbi9JY29uJztcbmltcG9ydCB7IE9SR0FOSVNNX0NMSUNLRUQgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuXG5jb25zdCBHcmVhZG1vcmVMYWJlbCA9IGdsYW1vcm91cy5sYWJlbCh7XG4gICcmIGJ1dHRvbi5yZWFkLW1vcmUtYnV0dG9uJzoge1xuICAgIGxpbmVIZWlnaHQ6ICcyMHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gIH0sXG59KTtcblxuY29uc3QgR0Rvd25BcnJvd1NwYW4gPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTBweCcsXG4gIGhlaWdodDogJzZweCcsXG4gICcmIHN2Zyc6IHtcbiAgICB3aWR0aDogJzEwcHgnLFxuICAgIGhlaWdodDogJzZweCcsXG4gICAgdG9wOiAnMXB4J1xuICB9XG59KTtcblxuY2xhc3MgU2hvd01vcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogcHJvcHMuZGVmYXVsdE9wZW5cbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hlY2tlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiAhdGhpcy5zdGF0ZS5jaGVja2VkXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMudHJhY2tTZWdtZW50KHsgY3RhOiAnUmVhZCBNb3JlJyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0TGVuZ3RoID0gMTk1O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIHRleHQtbGVmdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXN0YXRlXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2VkfSBpZD1cInBvc3QtMVwiIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2ByZWFkLW1vcmUtd3JhcCAke3RoaXMucHJvcHMuaXNEZWZhdWx0U2hvd01vcmUgPyAncC1sYXN0LW5vLW1hcmdpbiBwZmMzIGYxNHAgZHluYW1pY1RleHRJbmhlcml0JyA6ICcnfWB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgICAvLyBUT0RPOiBmaW5kIGEgYmV0dGVyIHdheSBmb3IgdHJ1bmNhdGUgdGhlIHN0cmluZ1xuICAgICAgICAgICAgIXRoaXMuc3RhdGUuY2hlY2tlZCAmJiB0aGlzLnByb3BzLmFwcGVuZFRleHQgJiYgdGhpcy5wcm9wcy53cmFwVGV4dC5sZW5ndGggPj0gdGV4dExlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMud3JhcFRleHQgKyB0aGlzLnByb3BzLmFwcGVuZFRleHRcbiAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLndyYXBUZXh0XG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlYWQtbW9yZS10YXJnZXRcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1vcmVUZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1vcmVUZXh0Lmxlbmd0aCA+IDAgfHwgIV9pc0VtcHR5KHRoaXMucHJvcHMubW9yZVRleHQpID9cbiAgICAgICAgICAgIDxHcmVhZG1vcmVMYWJlbCBodG1sRm9yPVwicG9zdC0xXCIgY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRyaWdnZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtYnV0dG9uIGZsZXggYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuIHJlbGF0aXZlIGYxMiBmdzdcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmMTQgZnc3XCI+XG4gICAgICAgICAgICAgICAgICB7KHRoaXMuc3RhdGUuY2hlY2tlZCkgPyB0aGlzLnByb3BzLnNob3dMZXNzVGV4dCA6IHRoaXMucHJvcHMuc2hvd01vcmVUZXh0fVxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEdEb3duQXJyb3dTcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sOCByZWxhdGl2ZSBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyXCI+PEJsdWVEb3duQXJyb3cgLz48L0dEb3duQXJyb3dTcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvR3JlYWRtb3JlTGFiZWw+XG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2hvd01vcmUucHJvcFR5cGVzID0ge1xuICB3cmFwVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKS5pc1JlcXVpcmVkLFxuICBtb3JlVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm9iamVjdFxuICBdKSxcbiAgc2hvd01vcmVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93TGVzc1RleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IFByb3BUeXBlcy5ib29sLFxuICB0cmFja1NlZ21lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBhcHBlbmRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG5cbn07XG5cblNob3dNb3JlLmRlZmF1bHRQcm9wcyA9IHtcbiAgd3JhcFRleHQ6ICcnLFxuICBtb3JlVGV4dDogJycsXG4gIHNob3dNb3JlVGV4dDogJ1JlYWQgTW9yZScsXG4gIHNob3dMZXNzVGV4dDogJ1JlYWQgTGVzcycsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgaXNEZWZhdWx0U2hvd01vcmU6IHRydWUsXG4gIHRyYWNrU2VnbWVudDogKCkgPT4ge1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaG93TW9yZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBJbnB1dENvbXBvbmVudCA9ICh7IGlucHV0LCBsYWJlbCwgbGFiZWxDbGFzc05hbWUsICBwbGFjZWhvbGRlciwgbWV0YTogeyB0b3VjaGVkLCBlcnJvciB9LCBvbkNoYW5nZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXY+XG4gICAgeyBsYWJlbCA/XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtsYWJlbENsYXNzTmFtZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+IDogbnVsbH1cbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIHsuLi5yZXN0fVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgaW5wdXQub25DaGFuZ2UodmFsKTtcbiAgICAgICAgb25DaGFuZ2UodmFsKTtcbiAgICAgIH19XG4gICAgLz5cbiAgICB7dG91Y2hlZCAmJiBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvci10ZXh0XCI+e2Vycm9yfTwvc3Bhbj59XG4gIDwvZGl2PlxuKTtcblxuSW5wdXRDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuSW5wdXRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBvbkNoYW5nZTogKCkgPT4ge30sXG4gIGxhYmVsOiAnJyxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICBsYWJlbENsYXNzTmFtZTogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0Q29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgRVZFTlRTX0VOVU1TIGZyb20gJ21vZHVsZXMvdHJpcC9DaGlsZEV2ZW50c1R5cGUnO1xuXG5jb25zdCBDVEFfVEVYVCA9ICdSZWFjdGl2YXRlIFRyaXAnO1xuXG5jb25zdCBSZWFjdGl2YXRlVHJpcCA9ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyaXBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tIYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoPGRpdiBjbGFzc05hbWU9XCJmbGV4RnVsbCBmbGV4XCI+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwid2Z1bGwgYnRuLXByaS1sYXJnZSByaXBwbGUgcGw1IHByNVwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrSGFuZGxlcihFVkVOVFNfRU5VTVMuUkVBQ1RJVkFURV9UUklQLCB7IHRyaXBJZCB9KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge0NUQV9URVhUfVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cblJlYWN0aXZhdGVUcmlwLnByb3BUeXBlcyA9IHtcbiAgdHJpcElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGNhbGxiYWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuUmVhY3RpdmF0ZVRyaXAuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0aXZhdGVUcmlwO1xuIiwiZXhwb3J0IGNvbnN0IEN1cnJlbmN5TGlzdCA9IE9iamVjdC5mcmVlemUoW1xuICB7IGxhYmVsOiAnSU5SJywgdmFsdWU6ICdJTlInfSxcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJ30sXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUid9LFxuICB7IGxhYmVsOiAnU0dEJywgdmFsdWU6ICdTR0QnfSxcbiAgeyBsYWJlbDogJ01ZUicsIHZhbHVlOiAnTVlSJ30sXG4gIHsgbGFiZWw6ICdQSFAnLCB2YWx1ZTogJ1BIUCd9LFxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnfSxcbiAgeyBsYWJlbDogJ0FVRCcsIHZhbHVlOiAnQVVEJ30sXG4gIHsgbGFiZWw6ICdDQUQnLCB2YWx1ZTogJ0NBRCd9LFxuICB7IGxhYmVsOiAnU0FSJywgdmFsdWU6ICdTQVInfSxcbiAgeyBsYWJlbDogJ0xCUCcsIHZhbHVlOiAnTEJQJ30sXG4gIHsgbGFiZWw6ICdaQVInLCB2YWx1ZTogJ1pBUid9LFxuICB7IGxhYmVsOiAnUEtSJywgdmFsdWU6ICdQS1InfSxcbiAgeyBsYWJlbDogJ0FFRCcsIHZhbHVlOiAnQUVEJ30sXG4gIHsgbGFiZWw6ICdDSEYnLCB2YWx1ZTogJ0NIRid9LFxuICB7IGxhYmVsOiAnSlBZJywgdmFsdWU6ICdKUFknfSxcbiAgeyBsYWJlbDogJ05aRCcsIHZhbHVlOiAnTlpEJ31cbl0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DVVJSRU5DWSA9IE9iamVjdC5mcmVlemUoeyBsYWJlbDogJ0lOUicsIHZhbHVlOiAnSU5SJ30pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==