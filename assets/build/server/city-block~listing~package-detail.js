require("source-map-support").install();
exports.ids = ["city-block~listing~package-detail"];
exports.modules = {

/***/ "./app-v2/modules/shared/interlinking/index.js":
/*!*****************************************************!*\
  !*** ./app-v2/modules/shared/interlinking/index.js ***!
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

var _chunk2 = _interopRequireDefault(__webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RenderLinks = ({
  url,
  name
}) => {
  return _react.default.createElement("a", {
    href: url,
    className: "nowrap pl15 pr15 pt8 pb8 sbc5 pfc3 f14 radius2 iblock  mr8"
  }, _react.default.createElement("span", {
    className: "iblock pt4 pb4"
  }, name));
};

const generateFooterLinks = footerLinkArr => {
  return _react.default.createElement("div", {
    className: "flex mb8"
  }, footerLinkArr.map(footerLink => {
    if (footerLink.hasOwnProperty('name')) {
      return _react.default.createElement(RenderLinks, {
        url: footerLink.url,
        name: footerLink.name
      });
    } else {
      return Object.values(footerLink).map(footer => {
        return _react.default.createElement(RenderLinks, {
          url: footer.link,
          name: footer.name
        });
      });
    }
  }));
};

const generateFooterLinkSection = footerLinkSection => {
  const footerLinks = footerLinkSection.footerLinks ? footerLinkSection.footerLinks : footerLinkSection.footer_links;
  const groupedArr = (0, _chunk2.default)(footerLinks, 5);
  return footerLinks && footerLinks.length ? _react.default.createElement("div", {
    className: "p15 sbcw mb8"
  }, _react.default.createElement("h3", {
    className: "f16 fw9 pfc3 mb15"
  }, footerLinkSection.name), _react.default.createElement("div", {
    className: "overflowXscroll swiper-full-width"
  }, groupedArr.length ? groupedArr.map(footerLinkArr => generateFooterLinks(footerLinkArr)) : null)) : null;
};

const InterLinking = ({
  footerLinks
}) => _react.default.createElement("div", null, footerLinks.map(footerLinkSection => generateFooterLinkSection(footerLinkSection)));

InterLinking.propTypes = {
  footerLinks: _propTypes.default.array.isRequired
};
RenderLinks.propTypes = {
  name: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired
};
var _default = InterLinking;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/travelerReview/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/travelerReview/index.js ***!
  \************************************************/
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

var _get2 = _interopRequireDefault(__webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js"));

var _action = __webpack_require__(/*! ./action */ "./app-v2/modules/travelerReview/action.js");

var _TravelerReview = _interopRequireDefault(__webpack_require__(/*! ./TravelerReview */ "./app-v2/modules/travelerReview/TravelerReview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  testimonials: (0, _get2.default)(state, 'travelerReviews.testimonials'),
  pagination: (0, _get2.default)(state, 'travelerReviews.pagination'),
  packageId: (0, _get2.default)(state, 'packages.details.data.data.seo_packages.id'),
  baseUrl: (0, _get2.default)(state, 'packages.details.data.data.seo_packages.set_url')
}), dispatch => ({
  loadMore: params => dispatch((0, _action.fetchPdpTestimonials)(params))
}))(_TravelerReview.default));
const plpContainer = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(state => ({
  testimonials: state.listing.packages.testimonials
}))(_TravelerReview.default));
/**
 * Sidebar Section
 */

var _default = {
  container,
  plpContainer,
  actions: {
    fetchCityBlockTestimonials: _action.fetchCityBlockTestimonials
  },
  defaultAction: _action.fetchCityBlockTestimonials
};
exports.default = _default;

/***/ }),

/***/ "./app/helpers/exitIntent.js":
/*!***********************************!*\
  !*** ./app/helpers/exitIntent.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeExitIntent = exports.renderExitIntent = exports.showPopUp = exports.hidePopup = void 0;

var _FormDataFormatter = __webpack_require__(/*! ./FormDataFormatter */ "./app/helpers/FormDataFormatter.js");

var _appConfig = _interopRequireWildcard(__webpack_require__(/*! appConfig */ "./config/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const hidePopup = e => {
  if (e) {
    e.stopPropagation();
  }

  document.getElementById('bg-mask-ei').classList.remove('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.remove('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].addEventListener('click', showPopUp);
};

exports.hidePopup = hidePopup;

const showPopUp = () => {
  document.getElementById('bg-mask-ei').classList.add('show');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].classList.add('mob-exit-popup');
  document.getElementsByClassName('mkt-mob-exit-intent')[0].removeEventListener('click', showPopUp);
};

exports.showPopUp = showPopUp;

const renderExitIntent = () => {
  if (window.ReactExitIntentImage) {
    ReactExitIntentImage.render({
      isPublicProduct: true
    });
    window.isLeadPopupOpened = false;
    setTimeout(function () {
      window.isLeadPopupOpened = false;
      const exitPopup = document.getElementsByClassName('mkt-mob-exit-intent')[0];

      if (exitPopup) {
        exitPopup.addEventListener('click', showPopUp);
      }

      const closeBtn = document.getElementsByClassName('close-popup')[0];

      if (closeBtn) {
        const closeMobBtn = closeBtn.cloneNode();
        closeMobBtn.innerHTML = "&#215;";
        closeMobBtn.classList.add('close-mob-btn');
        closeBtn.classList.add('hide');
        closeMobBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          hidePopup(e);
        });
        closeBtn.parentNode.insertBefore(closeMobBtn, closeBtn);
      }
    }, 1000);
  }
};

exports.renderExitIntent = renderExitIntent;

const initializeExitIntent = () => {
  const existing = document.getElementById('exit-intent-script-tag');

  if (existing && document.getElementById('reactExitIntentImage')) {
    renderExitIntent();
    return;
  }

  const el = document.createElement('script');
  el.id = 'exit-intent-script-tag';
  el.src = `${_appConfig.default.assets.js}/public-product/trips3m-imageintent-amp-vsegment-0.5.js`;
  el.defer = true;

  el.onload = () => {
    console.log('script loaded');

    if (typeof window !== 'undefined' && typeof window.Raven !== 'undefined' && _appConfig.sentryKey) {
      //todo: ignore errors for the chat connection
      window.Raven.config(_appConfig.sentryKey, {
        shouldSendCallback(data) {
          return !/MSIE/.test(window.navigator.userAgent);
        },

        ignoreErrors: ["Uncaught, unspecified error event."]
      }).install();
    }

    if (document.getElementById('reactExitIntentImage')) {
      renderExitIntent();
    }
  };

  document.body.appendChild(el);
};

exports.initializeExitIntent = initializeExitIntent;

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/chunk.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/chunk.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = baseSlice(array, index, (index += size));
  }
  return result;
}

module.exports = chunk;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvaW50ZXJsaW5raW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3RyYXZlbGVyUmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9oZWxwZXJzL2V4aXRJbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIl0sIm5hbWVzIjpbIlJlbmRlckxpbmtzIiwidXJsIiwibmFtZSIsImdlbmVyYXRlRm9vdGVyTGlua3MiLCJmb290ZXJMaW5rQXJyIiwibWFwIiwiZm9vdGVyTGluayIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwidmFsdWVzIiwiZm9vdGVyIiwibGluayIsImdlbmVyYXRlRm9vdGVyTGlua1NlY3Rpb24iLCJmb290ZXJMaW5rU2VjdGlvbiIsImZvb3RlckxpbmtzIiwiZm9vdGVyX2xpbmtzIiwiZ3JvdXBlZEFyciIsImxlbmd0aCIsIkludGVyTGlua2luZyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImNvbnRhaW5lciIsInN0YXRlIiwidGVzdGltb25pYWxzIiwicGFnaW5hdGlvbiIsInBhY2thZ2VJZCIsImJhc2VVcmwiLCJkaXNwYXRjaCIsImxvYWRNb3JlIiwicGFyYW1zIiwiVHJhdmVsZXJSZXZpZXciLCJwbHBDb250YWluZXIiLCJsaXN0aW5nIiwicGFja2FnZXMiLCJhY3Rpb25zIiwiZmV0Y2hDaXR5QmxvY2tUZXN0aW1vbmlhbHMiLCJkZWZhdWx0QWN0aW9uIiwiaGlkZVBvcHVwIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dQb3BVcCIsImFkZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXJFeGl0SW50ZW50Iiwid2luZG93IiwiUmVhY3RFeGl0SW50ZW50SW1hZ2UiLCJyZW5kZXIiLCJpc1B1YmxpY1Byb2R1Y3QiLCJpc0xlYWRQb3B1cE9wZW5lZCIsInNldFRpbWVvdXQiLCJleGl0UG9wdXAiLCJjbG9zZUJ0biIsImNsb3NlTW9iQnRuIiwiY2xvbmVOb2RlIiwiaW5uZXJIVE1MIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaW5pdGlhbGl6ZUV4aXRJbnRlbnQiLCJleGlzdGluZyIsImVsIiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3JjIiwiY29uZmlnIiwiYXNzZXRzIiwianMiLCJkZWZlciIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJSYXZlbiIsInNlbnRyeUtleSIsInNob3VsZFNlbmRDYWxsYmFjayIsImRhdGEiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaWdub3JlRXJyb3JzIiwiaW5zdGFsbCIsImJvZHkiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsTUFBTUEsY0FBYyxDQUFDO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQW1CO0FBQ3JDLFNBQVE7QUFBRyxVQUFRRCxHQUFYO0FBQWdCLGVBQVk7QUFBNUIsS0FDTjtBQUFNLGVBQVk7QUFBbEIsS0FBb0NDLElB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T0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJjaXR5LWJsb2Nrfmxpc3Rpbmd+cGFja2FnZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBfY2h1bmsgZnJvbSdsb2Rhc2gvY2h1bmsnO1xuXG5jb25zdCBSZW5kZXJMaW5rcyA9ICh7IHVybCwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoPGEgaHJlZiA9IHt1cmx9IGNsYXNzTmFtZSA9ICdub3dyYXAgcGwxNSBwcjE1IHB0OCBwYjggc2JjNSBwZmMzIGYxNCByYWRpdXMyIGlibG9jayAgbXI4Jz5cbiAgICA8c3BhbiBjbGFzc05hbWUgPSAnaWJsb2NrIHB0NCBwYjQnPntuYW1lfTwvc3Bhbj5cbiAgPC9hPik7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUZvb3RlckxpbmtzID0gKGZvb3RlckxpbmtBcnIpID0+IHtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9ICdmbGV4IG1iOCc+XG4gICAgICB7XG4gICAgICAgIGZvb3RlckxpbmtBcnIubWFwKChmb290ZXJMaW5rKSA9PiB7XG4gICAgICAgICAgaWYoZm9vdGVyTGluay5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gKCA8UmVuZGVyTGlua3MgdXJsID0ge2Zvb3RlckxpbmsudXJsfSBuYW1lID0ge2Zvb3RlckxpbmsubmFtZX0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChPYmplY3QudmFsdWVzKGZvb3RlckxpbmspLm1hcCgoZm9vdGVyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoPFJlbmRlckxpbmtzIHVybCA9IHtmb290ZXIubGlua30gbmFtZSA9IHtmb290ZXIubmFtZX0gLz4pOyBcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7fTtcblxuY29uc3QgZ2VuZXJhdGVGb290ZXJMaW5rU2VjdGlvbiA9IChmb290ZXJMaW5rU2VjdGlvbikgPT4ge1xuICBjb25zdCBmb290ZXJMaW5rcyA9IGZvb3RlckxpbmtTZWN0aW9uLmZvb3RlckxpbmtzID8gZm9vdGVyTGlua1NlY3Rpb24uZm9vdGVyTGlua3MgOiBmb290ZXJMaW5rU2VjdGlvbi5mb290ZXJfbGlua3M7XG4gIGNvbnN0IGdyb3VwZWRBcnIgPSBfY2h1bmsoZm9vdGVyTGlua3MsIDUpO1xuICByZXR1cm4oXG4gICAgZm9vdGVyTGlua3MgJiYgZm9vdGVyTGlua3MubGVuZ3RoID9cbiAgICAgPGRpdiBjbGFzc05hbWU9J3AxNSBzYmN3IG1iOCc+XG4gICAgICAgPGgzIGNsYXNzTmFtZT0nZjE2IGZ3OSBwZmMzIG1iMTUnPntmb290ZXJMaW5rU2VjdGlvbi5uYW1lfTwvaDM+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICdvdmVyZmxvd1hzY3JvbGwgc3dpcGVyLWZ1bGwtd2lkdGgnPlxuICAgICAgICAge1xuICAgICAgICAgICBncm91cGVkQXJyLmxlbmd0aCA/XG4gICAgICAgICAgICAgIGdyb3VwZWRBcnIubWFwKChmb290ZXJMaW5rQXJyKSA9PiBnZW5lcmF0ZUZvb3RlckxpbmtzKGZvb3RlckxpbmtBcnIpKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgIH1cbiAgICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgOlxuICAgICBudWxsXG4gICk7XG59O1xuXG5cbmNvbnN0IEludGVyTGlua2luZyA9ICh7IGZvb3RlckxpbmtzIH0pID0+IChcbiAgPGRpdj5cbiAgICB7XG4gICAgICBmb290ZXJMaW5rcy5tYXAoKGZvb3RlckxpbmtTZWN0aW9uKSA9PiBnZW5lcmF0ZUZvb3RlckxpbmtTZWN0aW9uKGZvb3RlckxpbmtTZWN0aW9uKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuSW50ZXJMaW5raW5nLnByb3BUeXBlcyA9IHtcbiAgZm9vdGVyTGlua3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxufTtcblxuUmVuZGVyTGlua3MucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJMaW5raW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuXG5pbXBvcnQgeyBmZXRjaENpdHlCbG9ja1Rlc3RpbW9uaWFscywgZmV0Y2hQZHBUZXN0aW1vbmlhbHMgfSBmcm9tICcuL2FjdGlvbic7XG5cbmltcG9ydCBUcmF2ZWxlclJldmlldyBmcm9tICcuL1RyYXZlbGVyUmV2aWV3JztcblxuY29uc3QgY29udGFpbmVyID0gd2l0aFJvdXRlcihjb25uZWN0KFxuICBzdGF0ZSA9PiAoe1xuICAgIHRlc3RpbW9uaWFsczogX2dldChzdGF0ZSwgJ3RyYXZlbGVyUmV2aWV3cy50ZXN0aW1vbmlhbHMnKSxcbiAgICBwYWdpbmF0aW9uOiBfZ2V0KHN0YXRlLCAndHJhdmVsZXJSZXZpZXdzLnBhZ2luYXRpb24nKSxcbiAgICBwYWNrYWdlSWQ6IF9nZXQoc3RhdGUsICdwYWNrYWdlcy5kZXRhaWxzLmRhdGEuZGF0YS5zZW9fcGFja2FnZXMuaWQnKSxcbiAgICBiYXNlVXJsOiBfZ2V0KHN0YXRlLCAncGFja2FnZXMuZGV0YWlscy5kYXRhLmRhdGEuc2VvX3BhY2thZ2VzLnNldF91cmwnKVxuICB9KSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBsb2FkTW9yZTogcGFyYW1zID0+IGRpc3BhdGNoKGZldGNoUGRwVGVzdGltb25pYWxzKHBhcmFtcykpXG4gIH0pKShUcmF2ZWxlclJldmlldykpO1xuXG5cbmNvbnN0IHBscENvbnRhaW5lciA9IHdpdGhSb3V0ZXIoY29ubmVjdChcbiAgc3RhdGUgPT4gKHtcbiAgICB0ZXN0aW1vbmlhbHM6IHN0YXRlLmxpc3RpbmcucGFja2FnZXMudGVzdGltb25pYWxzLFxuICB9KSkoVHJhdmVsZXJSZXZpZXcpKTtcblxuXG5cbi8qKlxuICogU2lkZWJhciBTZWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29udGFpbmVyLFxuICBwbHBDb250YWluZXIsXG4gIGFjdGlvbnM6IHtcbiAgICBmZXRjaENpdHlCbG9ja1Rlc3RpbW9uaWFsc1xuICB9LFxuICBkZWZhdWx0QWN0aW9uOiBmZXRjaENpdHlCbG9ja1Rlc3RpbW9uaWFsc1xufTtcbiIsImltcG9ydCB7IGdldFBhZ2VOYW1lLCBnZXRDb29raWUgfSBmcm9tIFwiLi9Gb3JtRGF0YUZvcm1hdHRlclwiO1xuaW1wb3J0IGNvbmZpZywgeyBzZW50cnlLZXkgfSBmcm9tICdhcHBDb25maWcnO1xuaW1wb3J0IHsgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGhpZGVQb3B1cCA9IChlKSA9PiB7XG4gIGlmIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctbWFzay1laScpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWt0LW1vYi1leGl0LWludGVudCcpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ21vYi1leGl0LXBvcHVwJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21rdC1tb2ItZXhpdC1pbnRlbnQnKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dQb3BVcCk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzaG93UG9wVXAgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy1tYXNrLWVpJykuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdta3QtbW9iLWV4aXQtaW50ZW50JylbMF0uY2xhc3NMaXN0LmFkZCgnbW9iLWV4aXQtcG9wdXAnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWt0LW1vYi1leGl0LWludGVudCcpWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1BvcFVwKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJFeGl0SW50ZW50ID0gKCkgPT4ge1xuICBpZiAod2luZG93LlJlYWN0RXhpdEludGVudEltYWdlKSB7XG4gICAgUmVhY3RFeGl0SW50ZW50SW1hZ2UucmVuZGVyKHtpc1B1YmxpY1Byb2R1Y3Q6IHRydWV9KTtcbiAgICB3aW5kb3cuaXNMZWFkUG9wdXBPcGVuZWQgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB3aW5kb3cuaXNMZWFkUG9wdXBPcGVuZWQgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGV4aXRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21rdC1tb2ItZXhpdC1pbnRlbnQnKVswXTtcbiAgICAgIGlmIChleGl0UG9wdXApIHtcbiAgICAgICAgZXhpdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1BvcFVwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UtcG9wdXAnKVswXTtcbiAgICAgIGlmIChjbG9zZUJ0bikge1xuICAgICAgICBjb25zdCBjbG9zZU1vYkJ0biA9IGNsb3NlQnRuLmNsb25lTm9kZSgpO1xuICAgICAgICBjbG9zZU1vYkJ0bi5pbm5lckhUTUwgPSBcIiYjMjE1O1wiO1xuICAgICAgICBjbG9zZU1vYkJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2ItYnRuJyk7XG4gICAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgY2xvc2VNb2JCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBoaWRlUG9wdXAoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjbG9zZUJ0bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9zZU1vYkJ0biwgY2xvc2VCdG4pO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUV4aXRJbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQtaW50ZW50LXNjcmlwdC10YWcnKTtcbiAgaWYoZXhpc3RpbmcgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0RXhpdEludGVudEltYWdlJykpe1xuICAgIHJlbmRlckV4aXRJbnRlbnQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBlbC5pZD0gJ2V4aXQtaW50ZW50LXNjcmlwdC10YWcnO1xuICBlbC5zcmMgPSBgJHtjb25maWcuYXNzZXRzLmpzfS9wdWJsaWMtcHJvZHVjdC90cmlwczNtLWltYWdlaW50ZW50LWFtcC12c2VnbWVudC0wLjUuanNgO1xuICBlbC5kZWZlciA9IHRydWU7XG4gIGVsLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2NyaXB0IGxvYWRlZCcpO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LlJhdmVuICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgc2VudHJ5S2V5KSB7XG4gICAgICAvL3RvZG86IGlnbm9yZSBlcnJvcnMgZm9yIHRoZSBjaGF0IGNvbm5lY3Rpb25cbiAgICAgIHdpbmRvdy5SYXZlbi5jb25maWcoc2VudHJ5S2V5LCB7XG4gICAgICAgIHNob3VsZFNlbmRDYWxsYmFjayhkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuICEvTVNJRS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlnbm9yZUVycm9yczogW1xuICAgICAgICAgIFwiVW5jYXVnaHQsIHVuc3BlY2lmaWVkIGVycm9yIGV2ZW50LlwiXG4gICAgICAgIF1cbiAgICAgIH0pLmluc3RhbGwoKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdEV4aXRJbnRlbnRJbWFnZScpKSB7XG4gICAgICByZW5kZXJFeGl0SW50ZW50KCk7XG4gICAgfVxuICB9O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbn07XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIHZhbHVlIGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAqIEBwYXJhbSB7Kn0gb2JqZWN0IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgb2JqZWN0IGFyZ3VtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcmd1bWVudHMgYXJlIGZyb20gYW4gaXRlcmF0ZWUgY2FsbCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgICAgPyAoaXNBcnJheUxpa2Uob2JqZWN0KSAmJiBpc0luZGV4KGluZGV4LCBvYmplY3QubGVuZ3RoKSlcbiAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICApIHtcbiAgICByZXR1cm4gZXEob2JqZWN0W2luZGV4XSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUNlaWwgPSBNYXRoLmNlaWwsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBlbGVtZW50cyBzcGxpdCBpbnRvIGdyb3VwcyB0aGUgbGVuZ3RoIG9mIGBzaXplYC5cbiAqIElmIGBhcnJheWAgY2FuJ3QgYmUgc3BsaXQgZXZlbmx5LCB0aGUgZmluYWwgY2h1bmsgd2lsbCBiZSB0aGUgcmVtYWluaW5nXG4gKiBlbGVtZW50cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTFdIFRoZSBsZW5ndGggb2YgZWFjaCBjaHVua1xuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGFuIGl0ZXJhdGVlIGZvciBtZXRob2RzIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGNodW5rcy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5jaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMik7XG4gKiAvLyA9PiBbWydhJywgJ2InXSwgWydjJywgJ2QnXV1cbiAqXG4gKiBfLmNodW5rKFsnYScsICdiJywgJ2MnLCAnZCddLCAzKTtcbiAqIC8vID0+IFtbJ2EnLCAnYicsICdjJ10sIFsnZCddXVxuICovXG5mdW5jdGlvbiBjaHVuayhhcnJheSwgc2l6ZSwgZ3VhcmQpIHtcbiAgaWYgKChndWFyZCA/IGlzSXRlcmF0ZWVDYWxsKGFycmF5LCBzaXplLCBndWFyZCkgOiBzaXplID09PSB1bmRlZmluZWQpKSB7XG4gICAgc2l6ZSA9IDE7XG4gIH0gZWxzZSB7XG4gICAgc2l6ZSA9IG5hdGl2ZU1heCh0b0ludGVnZXIoc2l6ZSksIDApO1xuICB9XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGggfHwgc2l6ZSA8IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG5hdGl2ZUNlaWwobGVuZ3RoIC8gc2l6ZSkpO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IGJhc2VTbGljZShhcnJheSwgaW5kZXgsIChpbmRleCArPSBzaXplKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaHVuaztcbiIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG4iLCJ2YXIgdG9GaW5pdGUgPSByZXF1aXJlKCcuL3RvRmluaXRlJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9