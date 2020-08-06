require("source-map-support").install();
exports.ids = ["FlightsBannerAndForm~quote-agent-card"];
exports.modules = {

/***/ "./app-v2/modules/flights/form/components/Dropdown.js":
/*!************************************************************!*\
  !*** ./app-v2/modules/flights/form/components/Dropdown.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SEARCH_MINIMUM_LENGTH = 3;
const SEARCH_DEBOUNCE_TIME = 250;

const GDropDownListDiv = _glamorous.default.div({
  maxHeight: '205px',
  overflowY: 'auto'
});

let Dropdown = class Dropdown extends _react.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    this.handleSelection = e => {
      const {
        input
      } = this.props;
      this.toggleMenu();
      input.onChange(e.target.getAttribute('data-val'));
    };

    this.searchTerm = () => {
      const {
        inputValue
      } = this.state;
      const {
        getOptions,
        options
      } = this.props;

      if (inputValue && inputValue.length >= SEARCH_MINIMUM_LENGTH && getOptions) {
        return getOptions(inputValue).then(res => this.setState({
          items: res.data.results
        }));
      }

      return this.setState({
        items: options
      });
    };

    this.handleChange = e => {
      const {
        input,
        fetchSuggestions
      } = this.props;
      const val = e.target.value;
      input.onChange(val);
      this.setState({
        inputValue: val,
        isOpen: true
      }, () => {
        if (fetchSuggestions) {
          this.loadOptions();
        }
      });
    };

    this.handleClickOutside = event => {
      if (!(this.listElement_ && this.listElement_.contains && this.listElement_.contains(event.target)) && !(this.inputElement_ && this.inputElement_.contains && this.inputElement_.contains(event.target))) {
        this.setState({
          isOpen: false
        });
      }
    };

    this.handleClick = () => {
      const {
        trackSegment
      } = this.props;
      this.toggleMenu();
      trackSegment();
    };

    this.state = {
      isOpen: false,
      inputValue: '',
      items: props.options
    };
    this.loadOptions = (0, _debounce.default)(this.searchTerm, SEARCH_DEBOUNCE_TIME);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  render() {
    const {
      input,
      options,
      meta: {
        touched,
        error
      },
      disabled,
      placeholder,
      readOnly,
      inputClassName
    } = this.props;
    const {
      isOpen,
      inputValue,
      items
    } = this.state;
    const newItems = input.value || inputValue ? items : options;
    return _react.default.createElement("div", {
      className: `relative pb15 ${touched && error && 'mb8'}`
    }, _react.default.createElement("input", {
      placeholder: placeholder,
      value: input.value || inputValue,
      className: `${inputClassName} text-capitalize ${'select'} ${touched && error && 'input-error mb2'}`,
      disabled: disabled,
      onChange: this.handleChange,
      onClick: this.handleClick,
      readOnly: readOnly,
      ref: ref => this.inputElement_ = ref
    }), isOpen ? _react.default.createElement(GDropDownListDiv, {
      className: "border sbcw absolute z10 l0 r0 showScroll",
      ref: ref => this.listElement_ = ref
    }, newItems.map(option => _react.default.createElement("div", {
      className: "p8 bb",
      "data-val": option.value,
      key: `isd_${option.value}`,
      onClick: this.handleSelection
    }, option.label))) : null, touched && error && _react.default.createElement("span", {
      className: "input-error-text absolute b0 "
    }, error));
  }

};
Dropdown.propTypes = {
  options: _propTypes.default.array.isRequired,
  input: _propTypes.default.object.isRequired,
  meta: _propTypes.default.object.isRequired,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  getOptions: _propTypes.default.func,
  trackSegment: _propTypes.default.func,
  fetchSuggestions: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  inputClassName: _propTypes.default.string
};
Dropdown.defaultProps = {
  disabled: false,
  placeholder: '',
  trackSegment: () => {},
  readOnly: false,
  fetchSuggestions: true,
  inputClassName: 'pl48'
};
var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9mbGlnaHRzL2Zvcm0vY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiXSwibmFtZXMiOlsiU0VBUkNIX01JTklNVU1fTEVOR1RIIiwiU0VBUkNIX0RFQk9VTkNFX1RJTUUiLCJHRHJvcERvd25MaXN0RGl2IiwiZ2xhbW9yb3VzIiwiZGl2IiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiRHJvcGRvd24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwidG9nZ2xlTWVudSIsInNldFN0YXRlIiwiaXNPcGVuIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iLCJlIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJsZW5ndGgiLCJ0aGVuIiwicmVzIiwiaXRlbXMiLCJkYXRhIiwicmVzdWx0cyIsImhhbmRsZUNoYW5nZSIsImZldGNoU3VnZ2VzdGlvbnMiLCJ2YWwiLCJ2YWx1ZSIsImxvYWRPcHRpb25zIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJsaXN0RWxlbWVudF8iLCJjb250YWlucyIsImlucHV0RWxlbWVudF8iLCJoYW5kbGVDbGljayIsInRyYWNrU2VnbWVudCIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJyZWFkT25seSIsImlucHV0Q2xhc3NOYW1lIiwibmV3SXRlbXMiLCJyZWYiLCJtYXAiLCJvcHRpb24iLCJsYWJlbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLE1BQU1BLHdCQUF3QixDQUE5QjtBQUNBLE1BQU1DLHVCQUF1QixHQUE3Qjs7QUFFQSxNQUFNQyxtQkFBbUJDLG1CQUFVQyxHQUFWLENBQWM7QUFDckNDLGFBQVcsT0FEMEI7QUFFckNDLGFBQVc7QUFGMEIsQ0FBZCxDQUF6Qjs7SUFLTUMsUSxHQUFOLE1BQU1BLFFBQU4sU0FBdUJDLGdCQUF2QixDQUFpQztBQUUvQkMsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOOztBQURpQixTQWNuQkMsVUFkbUIsR0FjTixNQUFNO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFFQyxnQkFBUSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0Q7QUFBdEIsT0FBZDtBQUNELEtBaEJrQjs7QUFBQSxTQWtCbkJFLGVBbEJtQixHQWtCQUMsQ0FBRCxJQUFPO0FBQ3ZCLFlBQU07QUFBRUM7QUFBRixVQUFZLEtBQUtQLEtBQXZCO0FBQ0EsV0FBS0MsVUFBTDtBQUNBTSxZQUFNQyxRQUFOLENBQWVGLEVBQUVHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFmO0FBQ0QsS0F0QmtCOztBQUFBLFNBd0JuQkMsVUF4Qm1CLEdBd0JOLE1BQU07QUFDakIsWUFBTTtBQUFFQztBQUFGLFVBQWlCLEtBQUtSLEtBQTVCO0FBQ0EsWUFBTTtBQUFFUyxrQkFBRjtBQUFjQztBQUFkLFVBQTBCLEtBQUtkLEtBQXJDOztBQUNBLFVBQ0VZLGNBQ0FBLFdBQVdHLE1BQVgsSUFBcUJ6QixxQkFEckIsSUFFQXVCLFVBSEYs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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUxBLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUzs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkEsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiRmxpZ2h0c0Jhbm5lckFuZEZvcm1+cXVvdGUtYWdlbnQtY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgU0VBUkNIX01JTklNVU1fTEVOR1RIID0gMztcbmNvbnN0IFNFQVJDSF9ERUJPVU5DRV9USU1FID0gMjUwO1xuXG5jb25zdCBHRHJvcERvd25MaXN0RGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gIG1heEhlaWdodDogJzIwNXB4JyxcbiAgb3ZlcmZsb3dZOiAnYXV0bydcbn0pO1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNPcGVuOiBmYWxzZSwgaW5wdXRWYWx1ZTogJycsIGl0ZW1zOiBwcm9wcy5vcHRpb25zIH07XG4gICAgdGhpcy5sb2FkT3B0aW9ucyA9IGRlYm91bmNlKHRoaXMuc2VhcmNoVGVybSwgU0VBUkNIX0RFQk9VTkNFX1RJTUUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNlbGVjdGlvbiA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICBpbnB1dC5vbkNoYW5nZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsJykpO1xuICB9O1xuXG4gIHNlYXJjaFRlcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZ2V0T3B0aW9ucywgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoXG4gICAgICBpbnB1dFZhbHVlICYmXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCA+PSBTRUFSQ0hfTUlOSU1VTV9MRU5HVEggJiZcbiAgICAgIGdldE9wdGlvbnNcbiAgICApIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25zKGlucHV0VmFsdWUpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuc2V0U3RhdGUoe2l0ZW1zOiByZXMuZGF0YS5yZXN1bHRzIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBpdGVtczogb3B0aW9ucyB9KTtcbiAgfTtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgIGlucHV0LCBmZXRjaFN1Z2dlc3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlucHV0Lm9uQ2hhbmdlKHZhbCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHZhbCwgaXNPcGVuOiB0cnVlIH0sICgpID0+IHtcbiAgICAgIGlmIChmZXRjaFN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHRoaXMubG9hZE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVDbGlja091dHNpZGUgPSBldmVudCA9PiB7XG4gICAgaWYgKCEodGhpcy5saXN0RWxlbWVudF8gJiYgdGhpcy5saXN0RWxlbWVudF8uY29udGFpbnMgJiYgdGhpcy5saXN0RWxlbWVudF8uY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICAgICYmICEodGhpcy5pbnB1dEVsZW1lbnRfICYmIHRoaXMuaW5wdXRFbGVtZW50Xy5jb250YWlucyAmJiB0aGlzLmlucHV0RWxlbWVudF8uY29udGFpbnMoZXZlbnQudGFyZ2V0KSlcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IHRyYWNrU2VnbWVudCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnRvZ2dsZU1lbnUoKTtcbiAgICB0cmFja1NlZ21lbnQoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCwgb3B0aW9ucywgbWV0YTogeyB0b3VjaGVkICwgZXJyb3IgfSwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCByZWFkT25seSwgaW5wdXRDbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4sIGlucHV0VmFsdWUsIGl0ZW1zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld0l0ZW1zID0gKGlucHV0LnZhbHVlIHx8IGlucHV0VmFsdWUpID8gaXRlbXMgOiBvcHRpb25zO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgcGIxNSAke3RvdWNoZWQgJiYgKGVycm9yICYmICdtYjgnKX1gfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXtpbnB1dC52YWx1ZSB8fCBpbnB1dFZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5wdXRDbGFzc05hbWV9IHRleHQtY2FwaXRhbGl6ZSAkeydzZWxlY3QnfSAke3RvdWNoZWQgJiYgKGVycm9yICYmICdpbnB1dC1lcnJvciBtYjInKX1gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgcmVmPXsocmVmKSA9PiB0aGlzLmlucHV0RWxlbWVudF8gPSByZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIHsgaXNPcGVuID9cbiAgICAgICAgICA8R0Ryb3BEb3duTGlzdERpdiBjbGFzc05hbWU9XCJib3JkZXIgc2JjdyBhYnNvbHV0ZSB6MTAgbDAgcjAgc2hvd1Njcm9sbFwiIHJlZj17KHJlZikgPT4gdGhpcy5saXN0RWxlbWVudF8gPSByZWZ9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuZXdJdGVtcy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInA4IGJiXCIgZGF0YS12YWw9e29wdGlvbi52YWx1ZX0ga2V5PXtgaXNkXyR7b3B0aW9uLnZhbHVlfWB9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VsZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9HRHJvcERvd25MaXN0RGl2PlxuICAgICAgICA6IG51bGx9XG4gICAgICAgIHtcbiAgICAgICAgICB0b3VjaGVkICYmXG4gICAgICAgICAgKGVycm9yICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHQgYWJzb2x1dGUgYjBcblxuICAgICAgICAgIFwiPntlcnJvcn08L3NwYW4+KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ2V0T3B0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGZldGNoU3VnZ2VzdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG4gIGlucHV0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICB0cmFja1NlZ21lbnQ6ICgpID0+IHt9LFxuICByZWFkT25seTogZmFsc2UsXG4gIGZldGNoU3VnZ2VzdGlvbnM6IHRydWUsXG4gIGlucHV0Q2xhc3NOYW1lOiAncGw0OCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9