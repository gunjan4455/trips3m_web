require("source-map-support").install();
exports.ids = ["vendors~mkt~mkt-section3~mkt-section4"];
exports.modules = {

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "lodash.throttle");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf("#") === 0 ? hash : "#" + hash : "";

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash : // remove hash
    loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.offsetTop - c.offsetTop;
};
exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL2NvbXBvbmVudHMvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvY29tcG9uZW50cy9MaW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL0hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9hbmltYXRlLXNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL2NhbmNlbC1ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9wYXNzaXZlLWV2ZW50LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3Njcm9sbC1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvc2Nyb2xsLWV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsL21vZHVsZXMvbWl4aW5zL3Njcm9sbC1oYXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvc2Nyb2xsLWxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9zY3JvbGwtc3B5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zY3JvbGwvbW9kdWxlcy9taXhpbnMvc2Nyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy9zbW9vdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNjcm9sbC9tb2R1bGVzL21peGlucy91dGlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsYUFBYSxtQkFBTyxDQUFDLG9CQUFPOztBQUU1Qjs7QUFFQSxrQkFBa0IsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRWpEOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBLDJEOzs7Ozs7Ozs7Ozs7QUNqRGE7O0FBRWI7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFF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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzNQYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxjQUFjLG1CQUFPLENBQUMsd0NBQWlCOztBQUV2Qzs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyx3R0FBMkI7O0FBRWhFLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSw0Qjs7Ozs7Ozs7Ozs7O0FDM0ZhOztBQUViO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGFBQWEsbUJBQU8sQ0FBQyxvRUFBUzs7QUFFOUI7O0FBRUEscUJBQXFCLG1CQUFPLENBQUMsc0ZBQWtCOztBQUUvQzs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyxvRkFBaUI7O0FBRTdDOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixVQUFVLGtCQUFrQjs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN6R2E7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN0RWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJ2ZW5kb3Jzfm1rdH5ta3Qtc2VjdGlvbjN+bWt0LXNlY3Rpb240LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9zY3JvbGxMaW5rID0gcmVxdWlyZSgnLi4vbWl4aW5zL3Njcm9sbC1saW5rJyk7XG5cbnZhciBfc2Nyb2xsTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxMaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQnV0dG9uRWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhCdXR0b25FbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCdXR0b25FbGVtZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCdXR0b25FbGVtZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnV0dG9uRWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJ1dHRvbkVsZW1lbnQpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCdXR0b25FbGVtZW50LCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQnV0dG9uRWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9zY3JvbGxMaW5rMi5kZWZhdWx0KShCdXR0b25FbGVtZW50KTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Njcm9sbEVsZW1lbnQgPSByZXF1aXJlKCcuLi9taXhpbnMvc2Nyb2xsLWVsZW1lbnQnKTtcblxudmFyIF9zY3JvbGxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEVsZW1lbnQpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgRWxlbWVudFdyYXBwZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRWxlbWVudFdyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVsZW1lbnRXcmFwcGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50V3JhcHBlcik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVsZW1lbnRXcmFwcGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRWxlbWVudFdyYXBwZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFbGVtZW50V3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gUmVtb3ZlIGBwYXJlbnRCaW5kaW5nc2AgZnJvbSBwcm9wc1xuICAgICAgdmFyIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgICAgaWYgKG5ld1Byb3BzLnBhcmVudEJpbmRpbmdzKSB7XG4gICAgICAgIGRlbGV0ZSBuZXdQcm9wcy5wYXJlbnRCaW5kaW5ncztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIG5ld1Byb3BzLCB7IHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgICAgICBfdGhpczIucHJvcHMucGFyZW50QmluZGluZ3MuZG9tTm9kZSA9IGVsO1xuICAgICAgICAgIH0gfSksXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEVsZW1lbnRXcmFwcGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuO1xuXG5FbGVtZW50V3JhcHBlci5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfc2Nyb2xsRWxlbWVudDIuZGVmYXVsdCkoRWxlbWVudFdyYXBwZXIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfc2Nyb2xsTGluayA9IHJlcXVpcmUoJy4uL21peGlucy9zY3JvbGwtbGluaycpO1xuXG52YXIgX3Njcm9sbExpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsTGluayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIExpbmtFbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKExpbmtFbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5rRWxlbWVudCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlua0VsZW1lbnQpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IExpbmtFbGVtZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGlua0VsZW1lbnQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdhJyxcbiAgICAgICAgX3RoaXMucHJvcHMsXG4gICAgICAgIF90aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgcmV0dXJuIExpbmtFbGVtZW50O1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3Njcm9sbExpbmsyLmRlZmF1bHQpKExpbmtFbGVtZW50KTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkhlbHBlcnMgPSBleHBvcnRzLlNjcm9sbEVsZW1lbnQgPSBleHBvcnRzLlNjcm9sbExpbmsgPSBleHBvcnRzLmFuaW1hdGVTY3JvbGwgPSBleHBvcnRzLnNjcm9sbFNweSA9IGV4cG9ydHMuRXZlbnRzID0gZXhwb3J0cy5zY3JvbGxlciA9IGV4cG9ydHMuRWxlbWVudCA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5MaW5rID0gdW5kZWZpbmVkO1xuXG52YXIgX0xpbmsgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvTGluay5qcycpO1xuXG52YXIgX0xpbmsyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGluayk7XG5cbnZhciBfQnV0dG9uID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0J1dHRvbi5qcycpO1xuXG52YXIgX0J1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9CdXR0b24pO1xuXG52YXIgX0VsZW1lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvRWxlbWVudC5qcycpO1xuXG52YXIgX0VsZW1lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRWxlbWVudCk7XG5cbnZhciBfc2Nyb2xsZXIgPSByZXF1aXJlKCcuL21peGlucy9zY3JvbGxlci5qcycpO1xuXG52YXIgX3Njcm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbGVyKTtcblxudmFyIF9zY3JvbGxFdmVudHMgPSByZXF1aXJlKCcuL21peGlucy9zY3JvbGwtZXZlbnRzLmpzJyk7XG5cbnZhciBfc2Nyb2xsRXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEV2ZW50cyk7XG5cbnZhciBfc2Nyb2xsU3B5ID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsLXNweS5qcycpO1xuXG52YXIgX3Njcm9sbFNweTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxTcHkpO1xuXG52YXIgX2FuaW1hdGVTY3JvbGwgPSByZXF1aXJlKCcuL21peGlucy9hbmltYXRlLXNjcm9sbC5qcycpO1xuXG52YXIgX2FuaW1hdGVTY3JvbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5pbWF0ZVNjcm9sbCk7XG5cbnZhciBfc2Nyb2xsTGluayA9IHJlcXVpcmUoJy4vbWl4aW5zL3Njcm9sbC1saW5rLmpzJyk7XG5cbnZhciBfc2Nyb2xsTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxMaW5rKTtcblxudmFyIF9zY3JvbGxFbGVtZW50ID0gcmVxdWlyZSgnLi9taXhpbnMvc2Nyb2xsLWVsZW1lbnQuanMnKTtcblxudmFyIF9zY3JvbGxFbGVtZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEVsZW1lbnQpO1xuXG52YXIgX0hlbHBlcnMgPSByZXF1aXJlKCcuL21peGlucy9IZWxwZXJzLmpzJyk7XG5cbnZhciBfSGVscGVyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IZWxwZXJzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5MaW5rID0gX0xpbmsyLmRlZmF1bHQ7XG5leHBvcnRzLkJ1dHRvbiA9IF9CdXR0b24yLmRlZmF1bHQ7XG5leHBvcnRzLkVsZW1lbnQgPSBfRWxlbWVudDIuZGVmYXVsdDtcbmV4cG9ydHMuc2Nyb2xsZXIgPSBfc2Nyb2xsZXIyLmRlZmF1bHQ7XG5leHBvcnRzLkV2ZW50cyA9IF9zY3JvbGxFdmVudHMyLmRlZmF1bHQ7XG5leHBvcnRzLnNjcm9sbFNweSA9IF9zY3JvbGxTcHkyLmRlZmF1bHQ7XG5leHBvcnRzLmFuaW1hdGVTY3JvbGwgPSBfYW5pbWF0ZVNjcm9sbDIuZGVmYXVsdDtcbmV4cG9ydHMuU2Nyb2xsTGluayA9IF9zY3JvbGxMaW5rMi5kZWZhdWx0O1xuZXhwb3J0cy5TY3JvbGxFbGVtZW50ID0gX3Njcm9sbEVsZW1lbnQyLmRlZmF1bHQ7XG5leHBvcnRzLkhlbHBlcnMgPSBfSGVscGVyczIuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IHsgTGluazogX0xpbmsyLmRlZmF1bHQsIEJ1dHRvbjogX0J1dHRvbjIuZGVmYXVsdCwgRWxlbWVudDogX0VsZW1lbnQyLmRlZmF1bHQsIHNjcm9sbGVyOiBfc2Nyb2xsZXIyLmRlZmF1bHQsIEV2ZW50czogX3Njcm9sbEV2ZW50czIuZGVmYXVsdCwgc2Nyb2xsU3B5OiBfc2Nyb2xsU3B5Mi5kZWZhdWx0LCBhbmltYXRlU2Nyb2xsOiBfYW5pbWF0ZVNjcm9sbDIuZGVmYXVsdCwgU2Nyb2xsTGluazogX3Njcm9sbExpbmsyLmRlZmF1bHQsIFNjcm9sbEVsZW1lbnQ6IF9zY3JvbGxFbGVtZW50Mi5kZWZhdWx0LCBIZWxwZXJzOiBfSGVscGVyczIuZGVmYXVsdCB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBERVBSRUNBVEVEICovXG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgc2Nyb2xsU3B5ID0gcmVxdWlyZSgnLi9zY3JvbGwtc3B5Jyk7XG52YXIgZGVmYXVsdFNjcm9sbGVyID0gcmVxdWlyZSgnLi9zY3JvbGxlcicpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbnZhciBzY3JvbGxIYXNoID0gcmVxdWlyZSgnLi9zY3JvbGwtaGFzaCcpO1xuXG52YXIgcHJvdG9UeXBlcyA9IHtcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udGFpbmVySWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNweTogUHJvcFR5cGVzLmJvb2wsXG4gIHNtb290aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBkZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNEeW5hbWljOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGR1cmF0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuZnVuY10pLFxuICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2V0QWN0aXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZXRJbmFjdGl2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlnbm9yZUNhbmNlbEV2ZW50czogUHJvcFR5cGVzLmJvb2wsXG4gIGhhc2hTcHk6IFByb3BUeXBlcy5ib29sXG59O1xuXG52YXIgSGVscGVycyA9IHtcbiAgU2Nyb2xsOiBmdW5jdGlvbiBTY3JvbGwoQ29tcG9uZW50LCBjdXN0b21TY3JvbGxlcikge1xuXG4gICAgY29uc29sZS53YXJuKFwiSGVscGVycy5TY3JvbGwgaXMgZGVwcmVjYXRlZCBzaW5jZSB2MS43LjBcIik7XG5cbiAgICB2YXIgc2Nyb2xsZXIgPSBjdXN0b21TY3JvbGxlciB8fCBkZWZhdWx0U2Nyb2xsZXI7XG5cbiAgICB2YXIgU2Nyb2xsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhTY3JvbGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBTY3JvbGwocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNjcm9sbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjcm9sbCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoU2Nyb2xsLCBbe1xuICAgICAgICBrZXk6ICdnZXRTY3JvbGxTcHlDb250YWluZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Nyb2xsU3B5Q29udGFpbmVyKCkge1xuICAgICAgICAgIHZhciBjb250YWluZXJJZCA9IHRoaXMucHJvcHMuY29udGFpbmVySWQ7XG4gICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGFpbmVyO1xuXG4gICAgICAgICAgaWYgKGNvbnRhaW5lcklkKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5zcHkgfHwgdGhpcy5wcm9wcy5oYXNoU3B5KSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsU3B5Q29udGFpbmVyID0gdGhpcy5nZXRTY3JvbGxTcHlDb250YWluZXIoKTtcblxuICAgICAgICAgICAgaWYgKCFzY3JvbGxTcHkuaXNNb3VudGVkKHNjcm9sbFNweUNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgICAgc2Nyb2xsU3B5Lm1vdW50KHNjcm9sbFNweUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhhc2hTcHkpIHtcbiAgICAgICAgICAgICAgaWYgKCFzY3JvbGxIYXNoLmlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsSGFzaC5tb3VudChzY3JvbGxlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2Nyb2xsSGFzaC5tYXBDb250YWluZXIodGhpcy5wcm9wcy50bywgc2Nyb2xsU3B5Q29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuc3B5KSB7XG4gICAgICAgICAgICAgIHNjcm9sbFNweS5hZGRTdGF0ZUhhbmRsZXIodGhpcy5zdGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY3JvbGxTcHkuYWRkU3B5SGFuZGxlcih0aGlzLnNweUhhbmRsZXIsIHNjcm9sbFNweUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjb250YWluZXI6IHNjcm9sbFNweUNvbnRhaW5lclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgIHNjcm9sbFNweS51bm1vdW50KHRoaXMuc3RhdGVIYW5kbGVyLCB0aGlzLnNweUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gKCh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCBcIlwiKSArIFwiIFwiICsgKHRoaXMucHJvcHMuYWN0aXZlQ2xhc3MgfHwgXCJhY3RpdmVcIikpLnRyaW0oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBwcm90b1R5cGVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgICBwcm9wcy5vbkNsaWNrID0gdGhpcy5oYW5kbGVDbGljaztcblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBTY3JvbGw7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgdmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG8gPSBmdW5jdGlvbiAodG8sIHByb3BzKSB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFRvKHRvLCBfZXh0ZW5kcyh7fSwgX3RoaXMyLnN0YXRlLCBwcm9wcykpO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5oYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogZ2l2ZSB0aGUgcG9zaWJpbGl0eSB0byBvdmVycmlkZSBvbkNsaWNrXHJcbiAgICAgICAgICovXG5cbiAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBkb250IGJ1YmJsZSB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLypcclxuICAgICAgICAgKiBkbyB0aGUgbWFnaWMhXHJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzMi5zY3JvbGxUbyhfdGhpczIucHJvcHMudG8sIF90aGlzMi5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnN0YXRlSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjcm9sbGVyLmdldEFjdGl2ZUxpbmsoKSAhPT0gX3RoaXMyLnByb3BzLnRvKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5zdGF0ZSAhPT0gbnVsbCAmJiBfdGhpczIuc3RhdGUuYWN0aXZlICYmIF90aGlzMi5wcm9wcy5vblNldEluYWN0aXZlKSB7XG4gICAgICAgICAgICBfdGhpczIucHJvcHMub25TZXRJbmFjdGl2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNweUhhbmRsZXIgPSBmdW5jdGlvbiAoeSkge1xuXG4gICAgICAgIHZhciBzY3JvbGxTcHlDb250YWluZXIgPSBfdGhpczIuZ2V0U2Nyb2xsU3B5Q29udGFpbmVyKCk7XG5cbiAgICAgICAgaWYgKHNjcm9sbEhhc2guaXNNb3VudGVkKCkgJiYgIXNjcm9sbEhhc2guaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRvID0gX3RoaXMyLnByb3BzLnRvO1xuICAgICAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHZhciBlbGVtVG9wQm91bmQgPSAwO1xuICAgICAgICB2YXIgZWxlbUJvdHRvbUJvdW5kID0gMDtcbiAgICAgICAgdmFyIGNvbnRhaW5lclRvcCA9IDA7XG5cbiAgICAgICAgaWYgKHNjcm9sbFNweUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyQ29yZHMgPSBzY3JvbGxTcHlDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29udGFpbmVyVG9wID0gY29udGFpbmVyQ29yZHMudG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IF90aGlzMi5wcm9wcy5pc0R5bmFtaWMpIHtcbiAgICAgICAgICBlbGVtZW50ID0gc2Nyb2xsZXIuZ2V0KHRvKTtcbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY29yZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGVsZW1Ub3BCb3VuZCA9IGNvcmRzLnRvcCAtIGNvbnRhaW5lclRvcCArIHk7XG4gICAgICAgICAgZWxlbUJvdHRvbUJvdW5kID0gZWxlbVRvcEJvdW5kICsgY29yZHMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldFkgPSB5IC0gX3RoaXMyLnByb3BzLm9mZnNldDtcbiAgICAgICAgdmFyIGlzSW5zaWRlID0gb2Zmc2V0WSA+PSBNYXRoLmZsb29yKGVsZW1Ub3BCb3VuZCkgJiYgb2Zmc2V0WSA8IE1hdGguZmxvb3IoZWxlbUJvdHRvbUJvdW5kKTtcbiAgICAgICAgdmFyIGlzT3V0c2lkZSA9IG9mZnNldFkgPCBNYXRoLmZsb29yKGVsZW1Ub3BCb3VuZCkgfHwgb2Zmc2V0WSA+PSBNYXRoLmZsb29yKGVsZW1Cb3R0b21Cb3VuZCk7XG4gICAgICAgIHZhciBhY3RpdmVMaW5rID0gc2Nyb2xsZXIuZ2V0QWN0aXZlTGluaygpO1xuXG4gICAgICAgIGlmIChpc091dHNpZGUpIHtcbiAgICAgICAgICBpZiAodG8gPT09IGFjdGl2ZUxpbmspIHtcbiAgICAgICAgICAgIHNjcm9sbGVyLnNldEFjdGl2ZUxpbmsodm9pZCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmhhc2hTcHkgJiYgc2Nyb2xsSGFzaC5nZXRIYXNoKCkgPT09IHRvKSB7XG4gICAgICAgICAgICBzY3JvbGxIYXNoLmNoYW5nZUhhc2goKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXMyLnByb3BzLnNweSAmJiBfdGhpczIuc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uU2V0SW5hY3RpdmUgJiYgX3RoaXMyLnByb3BzLm9uU2V0SW5hY3RpdmUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2Nyb2xsU3B5LnVwZGF0ZVN0YXRlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSW5zaWRlICYmIGFjdGl2ZUxpbmsgIT09IHRvKSB7XG4gICAgICAgICAgc2Nyb2xsZXIuc2V0QWN0aXZlTGluayh0byk7XG5cbiAgICAgICAgICBfdGhpczIucHJvcHMuaGFzaFNweSAmJiBzY3JvbGxIYXNoLmNoYW5nZUhhc2godG8pO1xuXG4gICAgICAgICAgaWYgKF90aGlzMi5wcm9wcy5zcHkpIHtcbiAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblNldEFjdGl2ZSAmJiBfdGhpczIucHJvcHMub25TZXRBY3RpdmUodG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc2Nyb2xsU3B5LnVwZGF0ZVN0YXRlcygpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG5cbiAgICA7XG5cbiAgICBTY3JvbGwucHJvcFR5cGVzID0gcHJvdG9UeXBlcztcblxuICAgIFNjcm9sbC5kZWZhdWx0UHJvcHMgPSB7IG9mZnNldDogMCB9O1xuXG4gICAgcmV0dXJuIFNjcm9sbDtcbiAgfSxcbiAgRWxlbWVudDogZnVuY3Rpb24gRWxlbWVudChDb21wb25lbnQpIHtcblxuICAgIGNvbnNvbGUud2FybihcIkhlbHBlcnMuRWxlbWVudCBpcyBkZXByZWNhdGVkIHNpbmNlIHYxLjcuMFwiKTtcblxuICAgIHZhciBFbGVtZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICAgICBfaW5oZXJpdHMoRWxlbWVudCwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gICAgICBmdW5jdGlvbiBFbGVtZW50KHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVtZW50KTtcblxuICAgICAgICB2YXIgX3RoaXMzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEVsZW1lbnQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihFbGVtZW50KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzMy5jaGlsZEJpbmRpbmdzID0ge1xuICAgICAgICAgIGRvbU5vZGU6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzMztcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbXModGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHByZXZQcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbXModGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHRTY3JvbGxlci51bnJlZ2lzdGVyKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJFbGVtcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckVsZW1zKG5hbWUpIHtcbiAgICAgICAgICBkZWZhdWx0U2Nyb2xsZXIucmVnaXN0ZXIobmFtZSwgdGhpcy5jaGlsZEJpbmRpbmdzLmRvbU5vZGUpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBwYXJlbnRCaW5kaW5nczogdGhpcy5jaGlsZEJpbmRpbmdzIH0pKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRWxlbWVudDtcbiAgICB9KFJlYWN0LkNvbXBvbmVudCk7XG5cbiAgICA7XG5cbiAgICBFbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH07XG5cbiAgICByZXR1cm4gRWxlbWVudDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIZWxwZXJzOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfc21vb3RoID0gcmVxdWlyZSgnLi9zbW9vdGgnKTtcblxudmFyIF9zbW9vdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc21vb3RoKTtcblxudmFyIF9jYW5jZWxFdmVudHMgPSByZXF1aXJlKCcuL2NhbmNlbC1ldmVudHMnKTtcblxudmFyIF9jYW5jZWxFdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FuY2VsRXZlbnRzKTtcblxudmFyIF9zY3JvbGxFdmVudHMgPSByZXF1aXJlKCcuL3Njcm9sbC1ldmVudHMnKTtcblxudmFyIF9zY3JvbGxFdmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsRXZlbnRzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcclxuICogR2V0cyB0aGUgZWFzaW5nIHR5cGUgZnJvbSB0aGUgc21vb3RoIHByb3Agd2l0aGluIG9wdGlvbnMuXHJcbiAqL1xudmFyIGdldEFuaW1hdGlvblR5cGUgPSBmdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9zbW9vdGgyLmRlZmF1bHRbb3B0aW9ucy5zbW9vdGhdIHx8IF9zbW9vdGgyLmRlZmF1bHQuZGVmYXVsdEVhc2luZztcbn07XG4vKlxyXG4gKiBGdW5jdGlvbiBoZWxwZXJcclxuICovXG52YXIgZnVuY3Rpb25XcmFwcGVyID0gZnVuY3Rpb24gZnVuY3Rpb25XcmFwcGVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuLypcclxuICogV3JhcHMgd2luZG93IHByb3BlcnRpZXMgdG8gYWxsb3cgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAqL1xudmFyIGN1cnJlbnRXaW5kb3dQcm9wZXJ0aWVzID0gZnVuY3Rpb24gY3VycmVudFdpbmRvd1Byb3BlcnRpZXMoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIH1cbn07XG5cbi8qXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBuZXZlciBleHRlbmQgNjBmcHMgb24gdGhlIHdlYnBhZ2UuXHJcbiAqL1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZUhlbHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGN1cnJlbnRXaW5kb3dQcm9wZXJ0aWVzKCkgfHwgZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50LCBkZWxheSkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSB8fCAxMDAwIC8gNjAsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgfTtcbn0oKTtcblxudmFyIG1ha2VEYXRhID0gZnVuY3Rpb24gbWFrZURhdGEoKSB7XG4gIHJldHVybiB7XG4gICAgY3VycmVudFBvc2l0aW9uWTogMCxcbiAgICBzdGFydFBvc2l0aW9uWTogMCxcbiAgICB0YXJnZXRQb3NpdGlvblk6IDAsXG4gICAgcHJvZ3Jlc3M6IDAsXG4gICAgZHVyYXRpb246IDAsXG4gICAgY2FuY2VsOiBmYWxzZSxcblxuICAgIHRhcmdldDogbnVsbCxcbiAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxuICAgIHRvOiBudWxsLFxuICAgIHN0YXJ0OiBudWxsLFxuICAgIGRlbHRhVG9wOiBudWxsLFxuICAgIHBlcmNlbnQ6IG51bGwsXG4gICAgZGVsYXlUaW1lb3V0OiBudWxsXG4gIH07XG59O1xuXG52YXIgY3VycmVudFBvc2l0aW9uWSA9IGZ1bmN0aW9uIGN1cnJlbnRQb3NpdGlvblkob3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyRWxlbWVudCA9IG9wdGlvbnMuZGF0YS5jb250YWluZXJFbGVtZW50O1xuICBpZiAoY29udGFpbmVyRWxlbWVudCAmJiBjb250YWluZXJFbGVtZW50ICE9PSBkb2N1bWVudCAmJiBjb250YWluZXJFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9IGVsc2Uge1xuICAgIHZhciBzdXBwb3J0UGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICAgIHZhciBpc0NTUzFDb21wYXQgPSAoZG9jdW1lbnQuY29tcGF0TW9kZSB8fCBcIlwiKSA9PT0gXCJDU1MxQ29tcGF0XCI7XG4gICAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICB9XG59O1xuXG52YXIgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gZnVuY3Rpb24gc2Nyb2xsQ29udGFpbmVySGVpZ2h0KG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRhaW5lckVsZW1lbnQgPSBvcHRpb25zLmRhdGEuY29udGFpbmVyRWxlbWVudDtcbiAgaWYgKGNvbnRhaW5lckVsZW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQgJiYgY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIHJldHVybiBjb250YWluZXJFbGVtZW50LnNjcm9sbEhlaWdodCAtIGNvbnRhaW5lckVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICB9IGVsc2Uge1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIHJldHVybiBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCwgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0ZVNjcm9sbCA9IGZ1bmN0aW9uIGFuaW1hdGVTY3JvbGwoZWFzaW5nLCBvcHRpb25zLCB0aW1lc3RhbXApIHtcbiAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgLy8gQ2FuY2VsIG9uIHNwZWNpZmljIGV2ZW50c1xuICBpZiAoIW9wdGlvbnMuaWdub3JlQ2FuY2VsRXZlbnRzICYmIGRhdGEuY2FuY2VsKSB7XG4gICAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10pIHtcbiAgICAgIF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10oZGF0YS50bywgZGF0YS50YXJnZXQsIGRhdGEuY3VycmVudFBvc2l0aW9uWSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcblxuICBkYXRhLmRlbHRhVG9wID0gTWF0aC5yb3VuZChkYXRhLnRhcmdldFBvc2l0aW9uWSAtIGRhdGEuc3RhcnRQb3NpdGlvblkpO1xuXG4gIGlmIChkYXRhLnN0YXJ0ID09PSBudWxsKSB7XG4gICAgZGF0YS5zdGFydCA9IHRpbWVzdGFtcDtcbiAgfVxuXG4gIGRhdGEucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBkYXRhLnN0YXJ0O1xuXG4gIGRhdGEucGVyY2VudCA9IGRhdGEucHJvZ3Jlc3MgPj0gZGF0YS5kdXJhdGlvbiA/IDEgOiBlYXNpbmcoZGF0YS5wcm9ncmVzcyAvIGRhdGEuZHVyYXRpb24pO1xuXG4gIGRhdGEuY3VycmVudFBvc2l0aW9uWSA9IGRhdGEuc3RhcnRQb3NpdGlvblkgKyBNYXRoLmNlaWwoZGF0YS5kZWx0YVRvcCAqIGRhdGEucGVyY2VudCk7XG5cbiAgaWYgKGRhdGEuY29udGFpbmVyRWxlbWVudCAmJiBkYXRhLmNvbnRhaW5lckVsZW1lbnQgIT09IGRvY3VtZW50ICYmIGRhdGEuY29udGFpbmVyRWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIGRhdGEuY29udGFpbmVyRWxlbWVudC5zY3JvbGxUb3AgPSBkYXRhLmN1cnJlbnRQb3NpdGlvblk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIGRhdGEuY3VycmVudFBvc2l0aW9uWSk7XG4gIH1cblxuICBpZiAoZGF0YS5wZXJjZW50IDwgMSkge1xuICAgIHZhciBlYXNlZEFuaW1hdGUgPSBhbmltYXRlU2Nyb2xsLmJpbmQobnVsbCwgZWFzaW5nLCBvcHRpb25zKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVIZWxwZXIuY2FsbCh3aW5kb3csIGVhc2VkQW5pbWF0ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10pIHtcbiAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKGRhdGEudG8sIGRhdGEudGFyZ2V0LCBkYXRhLmN1cnJlbnRQb3NpdGlvblkpO1xuICB9XG59O1xuXG52YXIgc2V0Q29udGFpbmVyID0gZnVuY3Rpb24gc2V0Q29udGFpbmVyKG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5kYXRhLmNvbnRhaW5lckVsZW1lbnQgPSAhb3B0aW9ucyA/IG51bGwgOiBvcHRpb25zLmNvbnRhaW5lcklkID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5jb250YWluZXJJZCkgOiBvcHRpb25zLmNvbnRhaW5lciAmJiBvcHRpb25zLmNvbnRhaW5lci5ub2RlVHlwZSA/IG9wdGlvbnMuY29udGFpbmVyIDogZG9jdW1lbnQ7XG59O1xuXG52YXIgYW5pbWF0ZVRvcFNjcm9sbCA9IGZ1bmN0aW9uIGFuaW1hdGVUb3BTY3JvbGwoeSwgb3B0aW9ucywgdG8sIHRhcmdldCkge1xuICBvcHRpb25zLmRhdGEgPSBvcHRpb25zLmRhdGEgfHwgbWFrZURhdGEoKTtcblxuICB3aW5kb3cuY2xlYXJUaW1lb3V0KG9wdGlvbnMuZGF0YS5kZWxheVRpbWVvdXQpO1xuXG4gIF9jYW5jZWxFdmVudHMyLmRlZmF1bHQuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICBvcHRpb25zLmRhdGEuY2FuY2VsID0gdHJ1ZTtcbiAgfSk7XG5cbiAgc2V0Q29udGFpbmVyKG9wdGlvbnMpO1xuXG4gIG9wdGlvbnMuZGF0YS5zdGFydCA9IG51bGw7XG4gIG9wdGlvbnMuZGF0YS5jYW5jZWwgPSBmYWxzZTtcbiAgb3B0aW9ucy5kYXRhLnN0YXJ0UG9zaXRpb25ZID0gY3VycmVudFBvc2l0aW9uWShvcHRpb25zKTtcbiAgb3B0aW9ucy5kYXRhLnRhcmdldFBvc2l0aW9uWSA9IG9wdGlvbnMuYWJzb2x1dGUgPyB5IDogeSArIG9wdGlvbnMuZGF0YS5zdGFydFBvc2l0aW9uWTtcblxuICBpZiAob3B0aW9ucy5kYXRhLnN0YXJ0UG9zaXRpb25ZID09PSBvcHRpb25zLmRhdGEudGFyZ2V0UG9zaXRpb25ZKSB7XG4gICAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10pIHtcbiAgICAgIF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnZW5kJ10ob3B0aW9ucy5kYXRhLnRvLCBvcHRpb25zLmRhdGEudGFyZ2V0LCBvcHRpb25zLmRhdGEuY3VycmVudFBvc2l0aW9uWSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMuZGF0YS5kZWx0YVRvcCA9IE1hdGgucm91bmQob3B0aW9ucy5kYXRhLnRhcmdldFBvc2l0aW9uWSAtIG9wdGlvbnMuZGF0YS5zdGFydFBvc2l0aW9uWSk7XG5cbiAgb3B0aW9ucy5kYXRhLmR1cmF0aW9uID0gZnVuY3Rpb25XcmFwcGVyKG9wdGlvbnMuZHVyYXRpb24pKG9wdGlvbnMuZGF0YS5kZWx0YVRvcCk7XG4gIG9wdGlvbnMuZGF0YS5kdXJhdGlvbiA9IGlzTmFOKHBhcnNlRmxvYXQob3B0aW9ucy5kYXRhLmR1cmF0aW9uKSkgPyAxMDAwIDogcGFyc2VGbG9hdChvcHRpb25zLmRhdGEuZHVyYXRpb24pO1xuICBvcHRpb25zLmRhdGEudG8gPSB0bztcbiAgb3B0aW9ucy5kYXRhLnRhcmdldCA9IHRhcmdldDtcblxuICB2YXIgZWFzaW5nID0gZ2V0QW5pbWF0aW9uVHlwZShvcHRpb25zKTtcbiAgdmFyIGVhc2VkQW5pbWF0ZSA9IGFuaW1hdGVTY3JvbGwuYmluZChudWxsLCBlYXNpbmcsIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZGVsYXkgPiAwKSB7XG4gICAgb3B0aW9ucy5kYXRhLmRlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2JlZ2luJ10pIHtcbiAgICAgICAgX3Njcm9sbEV2ZW50czIuZGVmYXVsdC5yZWdpc3RlcmVkWydiZWdpbiddKG9wdGlvbnMuZGF0YS50bywgb3B0aW9ucy5kYXRhLnRhcmdldCk7XG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVIZWxwZXIuY2FsbCh3aW5kb3csIGVhc2VkQW5pbWF0ZSk7XG4gICAgfSwgb3B0aW9ucy5kZWxheSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnYmVnaW4nXSkge1xuICAgIF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnYmVnaW4nXShvcHRpb25zLmRhdGEudG8sIG9wdGlvbnMuZGF0YS50YXJnZXQpO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZUhlbHBlci5jYWxsKHdpbmRvdywgZWFzZWRBbmltYXRlKTtcbn07XG5cbnZhciBwcm9jZWVkT3B0aW9ucyA9IGZ1bmN0aW9uIHByb2NlZWRPcHRpb25zKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcbiAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IG1ha2VEYXRhKCk7XG4gIG9wdGlvbnMuYWJzb2x1dGUgPSB0cnVlO1xuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbnZhciBzY3JvbGxUb1RvcCA9IGZ1bmN0aW9uIHNjcm9sbFRvVG9wKG9wdGlvbnMpIHtcbiAgYW5pbWF0ZVRvcFNjcm9sbCgwLCBwcm9jZWVkT3B0aW9ucyhvcHRpb25zKSk7XG59O1xuXG52YXIgc2Nyb2xsVG8gPSBmdW5jdGlvbiBzY3JvbGxUbyh0b1ksIG9wdGlvbnMpIHtcbiAgYW5pbWF0ZVRvcFNjcm9sbCh0b1ksIHByb2NlZWRPcHRpb25zKG9wdGlvbnMpKTtcbn07XG5cbnZhciBzY3JvbGxUb0JvdHRvbSA9IGZ1bmN0aW9uIHNjcm9sbFRvQm90dG9tKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHByb2NlZWRPcHRpb25zKG9wdGlvbnMpO1xuICBzZXRDb250YWluZXIob3B0aW9ucyk7XG4gIGFuaW1hdGVUb3BTY3JvbGwoc2Nyb2xsQ29udGFpbmVySGVpZ2h0KG9wdGlvbnMpLCBvcHRpb25zKTtcbn07XG5cbnZhciBzY3JvbGxNb3JlID0gZnVuY3Rpb24gc2Nyb2xsTW9yZSh0b1ksIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHByb2NlZWRPcHRpb25zKG9wdGlvbnMpO1xuICBzZXRDb250YWluZXIob3B0aW9ucyk7XG4gIGFuaW1hdGVUb3BTY3JvbGwoY3VycmVudFBvc2l0aW9uWShvcHRpb25zKSArIHRvWSwgb3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFuaW1hdGVUb3BTY3JvbGw6IGFuaW1hdGVUb3BTY3JvbGwsXG4gIGdldEFuaW1hdGlvblR5cGU6IGdldEFuaW1hdGlvblR5cGUsXG4gIHNjcm9sbFRvVG9wOiBzY3JvbGxUb1RvcCxcbiAgc2Nyb2xsVG9Cb3R0b206IHNjcm9sbFRvQm90dG9tLFxuICBzY3JvbGxUbzogc2Nyb2xsVG8sXG4gIHNjcm9sbE1vcmU6IHNjcm9sbE1vcmVcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Bhc3NpdmVFdmVudExpc3RlbmVycyA9IHJlcXVpcmUoJy4vcGFzc2l2ZS1ldmVudC1saXN0ZW5lcnMnKTtcblxudmFyIGV2ZW50cyA9IFsnbW91c2Vkb3duJywgJ21vdXNld2hlZWwnLCAndG91Y2htb3ZlJywgJ2tleWRvd24nXTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShjYW5jZWxFdmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuICgwLCBfcGFzc2l2ZUV2ZW50TGlzdGVuZXJzLmFkZFBhc3NpdmVFdmVudExpc3RlbmVyKShkb2N1bWVudCwgZXZlbnQsIGNhbmNlbEV2ZW50KTtcbiAgICB9KTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKlxyXG4gKiBUZWxsIHRoZSBicm93c2VyIHRoYXQgdGhlIGV2ZW50IGxpc3RlbmVyIHdvbid0IHByZXZlbnQgYSBzY3JvbGwuXHJcbiAqIEFsbG93aW5nIHRoZSBicm93c2VyIHRvIGNvbnRpbnVlIHNjcm9sbGluZyB3aXRob3V0IGhhdmluZyB0b1xyXG4gKiB0byB3YWl0IGZvciB0aGUgbGlzdGVuZXIgdG8gcmV0dXJuLlxyXG4gKi9cbnZhciBhZGRQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkUGFzc2l2ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRQYXNzaXZlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgc3VwcG9ydHNQYXNzaXZlT3B0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbjtcbiAgfSgpO1xuICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBzdXBwb3J0c1Bhc3NpdmVPcHRpb24gPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbn07XG5cbnZhciByZW1vdmVQYXNzaXZlRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMucmVtb3ZlUGFzc2l2ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVQYXNzaXZlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3Njcm9sbGVyID0gcmVxdWlyZSgnLi9zY3JvbGxlcicpO1xuXG52YXIgX3Njcm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbGVyKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICB2YXIgRWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRWxlbWVudChwcm9wcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEVsZW1lbnQpO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEVsZW1lbnQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF90aGlzLmNoaWxkQmluZGluZ3MgPSB7XG4gICAgICAgIGRvbU5vZGU6IG51bGxcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEVsZW1lbnQsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbXModGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubmFtZSAhPT0gcHJldlByb3BzLm5hbWUpIHtcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbXModGhpcy5wcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIF9zY3JvbGxlcjIuZGVmYXVsdC51bnJlZ2lzdGVyKHRoaXMucHJvcHMubmFtZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVnaXN0ZXJFbGVtcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJFbGVtcyhuYW1lKSB7XG4gICAgICAgIF9zY3JvbGxlcjIuZGVmYXVsdC5yZWdpc3RlcihuYW1lLCB0aGlzLmNoaWxkQmluZGluZ3MuZG9tTm9kZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHBhcmVudEJpbmRpbmdzOiB0aGlzLmNoaWxkQmluZGluZ3MgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBFbGVtZW50O1xuICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG4gIDtcblxuICBFbGVtZW50LnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmdcbiAgfTtcblxuICByZXR1cm4gRWxlbWVudDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHR2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBFdmVudHMgPSB7XG5cdHJlZ2lzdGVyZWQ6IHt9LFxuXHRzY3JvbGxFdmVudDoge1xuXHRcdHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcihldnROYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0RXZlbnRzLnJlZ2lzdGVyZWRbZXZ0TmFtZV0gPSBjYWxsYmFjaztcblx0XHR9LFxuXHRcdHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGV2dE5hbWUpIHtcblx0XHRcdEV2ZW50cy5yZWdpc3RlcmVkW2V2dE5hbWVdID0gbnVsbDtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50czsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gcmVxdWlyZSgnLi9wYXNzaXZlLWV2ZW50LWxpc3RlbmVycycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgX3V0aWxzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNjcm9sbEhhc2ggPSB7XG4gIG1vdW50RmxhZzogZmFsc2UsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgc2Nyb2xsZXI6IG51bGwsXG4gIGNvbnRhaW5lcnM6IHt9LFxuXG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChzY3JvbGxlcikge1xuICAgIHRoaXMuc2Nyb2xsZXIgPSBzY3JvbGxlcjtcblxuICAgIHRoaXMuaGFuZGxlSGFzaENoYW5nZSA9IHRoaXMuaGFuZGxlSGFzaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5oYW5kbGVIYXNoQ2hhbmdlKTtcblxuICAgIHRoaXMuaW5pdFN0YXRlRnJvbUhhc2goKTtcbiAgICB0aGlzLm1vdW50RmxhZyA9IHRydWU7XG4gIH0sXG4gIG1hcENvbnRhaW5lcjogZnVuY3Rpb24gbWFwQ29udGFpbmVyKHRvLCBjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lcnNbdG9dID0gY29udGFpbmVyO1xuICB9LFxuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VudEZsYWc7XG4gIH0sXG4gIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uIGlzSW5pdGlhbGl6ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6ZWQ7XG4gIH0sXG4gIGluaXRTdGF0ZUZyb21IYXNoOiBmdW5jdGlvbiBpbml0U3RhdGVGcm9tSGFzaCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGhhc2ggPSB0aGlzLmdldEhhc2goKTtcbiAgICBpZiAoaGFzaCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zY3JvbGxUbyhoYXNoLCB0cnVlKTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfSwgMTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHNjcm9sbFRvOiBmdW5jdGlvbiBzY3JvbGxUbyh0bywgaXNJbml0KSB7XG4gICAgdmFyIHNjcm9sbGVyID0gdGhpcy5zY3JvbGxlcjtcbiAgICB2YXIgZWxlbWVudCA9IHNjcm9sbGVyLmdldCh0byk7XG4gICAgaWYgKGVsZW1lbnQgJiYgKGlzSW5pdCB8fCB0byAhPT0gc2Nyb2xsZXIuZ2V0QWN0aXZlTGluaygpKSkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyc1t0b10gfHwgZG9jdW1lbnQ7XG4gICAgICBzY3JvbGxlci5zY3JvbGxUbyh0bywgeyBjb250YWluZXI6IGNvbnRhaW5lciB9KTtcbiAgICB9XG4gIH0sXG4gIGdldEhhc2g6IGZ1bmN0aW9uIGdldEhhc2goKSB7XG4gICAgcmV0dXJuIF91dGlsczIuZGVmYXVsdC5nZXRIYXNoKCk7XG4gIH0sXG4gIGNoYW5nZUhhc2g6IGZ1bmN0aW9uIGNoYW5nZUhhc2godG8pIHtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKCkgJiYgX3V0aWxzMi5kZWZhdWx0LmdldEhhc2goKSAhPT0gdG8pIHtcbiAgICAgIF91dGlsczIuZGVmYXVsdC5wdXNoSGFzaCh0byk7XG4gICAgfVxuICB9LFxuICBoYW5kbGVIYXNoQ2hhbmdlOiBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRIYXNoKCkpO1xuICB9LFxuICB1bm1vdW50OiBmdW5jdGlvbiB1bm1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsZXIgPSBudWxsO1xuICAgIHRoaXMuY29udGFpbmVycyA9IG51bGw7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmhhbmRsZUhhc2hDaGFuZ2UpO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBzY3JvbGxIYXNoOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Njcm9sbFNweSA9IHJlcXVpcmUoJy4vc2Nyb2xsLXNweScpO1xuXG52YXIgX3Njcm9sbFNweTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxTcHkpO1xuXG52YXIgX3Njcm9sbGVyID0gcmVxdWlyZSgnLi9zY3JvbGxlcicpO1xuXG52YXIgX3Njcm9sbGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbGVyKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfc2Nyb2xsSGFzaCA9IHJlcXVpcmUoJy4vc2Nyb2xsLWhhc2gnKTtcblxudmFyIF9zY3JvbGxIYXNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Njcm9sbEhhc2gpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBwcm90b1R5cGVzID0ge1xuICB0bzogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY29udGFpbmVySWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250YWluZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBhY3RpdmVDbGFzczogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHNweTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzbW9vdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG4gIG9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGRlbGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgaXNEeW5hbWljOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgZHVyYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSksXG4gIGFic29sdXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG9uU2V0QWN0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uU2V0SW5hY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgaWdub3JlQ2FuY2VsRXZlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhhc2hTcHk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKENvbXBvbmVudCwgY3VzdG9tU2Nyb2xsZXIpIHtcblxuICB2YXIgc2Nyb2xsZXIgPSBjdXN0b21TY3JvbGxlciB8fCBfc2Nyb2xsZXIyLmRlZmF1bHQ7XG5cbiAgdmFyIExpbmsgPSBmdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JFB1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGluay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExpbmspKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMaW5rLCBbe1xuICAgICAga2V5OiAnZ2V0U2Nyb2xsU3B5Q29udGFpbmVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTY3JvbGxTcHlDb250YWluZXIoKSB7XG4gICAgICAgIHZhciBjb250YWluZXJJZCA9IHRoaXMucHJvcHMuY29udGFpbmVySWQ7XG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLnByb3BzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZiAoY29udGFpbmVySWQgJiYgIWNvbnRhaW5lcikge1xuICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5ub2RlVHlwZSkge1xuICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zcHkgfHwgdGhpcy5wcm9wcy5oYXNoU3B5KSB7XG4gICAgICAgICAgdmFyIHNjcm9sbFNweUNvbnRhaW5lciA9IHRoaXMuZ2V0U2Nyb2xsU3B5Q29udGFpbmVyKCk7XG5cbiAgICAgICAgICBpZiAoIV9zY3JvbGxTcHkyLmRlZmF1bHQuaXNNb3VudGVkKHNjcm9sbFNweUNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIF9zY3JvbGxTcHkyLmRlZmF1bHQubW91bnQoc2Nyb2xsU3B5Q29udGFpbmVyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5oYXNoU3B5KSB7XG4gICAgICAgICAgICBpZiAoIV9zY3JvbGxIYXNoMi5kZWZhdWx0LmlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgICAgIF9zY3JvbGxIYXNoMi5kZWZhdWx0Lm1vdW50KHNjcm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zY3JvbGxIYXNoMi5kZWZhdWx0Lm1hcENvbnRhaW5lcih0aGlzLnByb3BzLnRvLCBzY3JvbGxTcHlDb250YWluZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9zY3JvbGxTcHkyLmRlZmF1bHQuYWRkU3B5SGFuZGxlcih0aGlzLnNweUhhbmRsZXIsIHNjcm9sbFNweUNvbnRhaW5lcik7XG5cbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogc2Nyb2xsU3B5Q29udGFpbmVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIF9zY3JvbGxTcHkyLmRlZmF1bHQudW5tb3VudCh0aGlzLnN0YXRlSGFuZGxlciwgdGhpcy5zcHlIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICBjbGFzc05hbWUgPSAoKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8IFwiXCIpICsgXCIgXCIgKyAodGhpcy5wcm9wcy5hY3RpdmVDbGFzcyB8fCBcImFjdGl2ZVwiKSkudHJpbSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcHJvdG9UeXBlcykge1xuICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgcHJvcHMub25DbGljayA9IHRoaXMuaGFuZGxlQ2xpY2s7XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBMaW5rO1xuICB9KF9yZWFjdDIuZGVmYXVsdC5QdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB0aGlzLnNjcm9sbFRvID0gZnVuY3Rpb24gKHRvLCBwcm9wcykge1xuICAgICAgc2Nyb2xsZXIuc2Nyb2xsVG8odG8sIF9leHRlbmRzKHt9LCBfdGhpczIuc3RhdGUsIHByb3BzKSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgLypcclxuICAgICAgICogZ2l2ZSB0aGUgcG9zaWJpbGl0eSB0byBvdmVycmlkZSBvbkNsaWNrXHJcbiAgICAgICAqL1xuXG4gICAgICBpZiAoX3RoaXMyLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKlxyXG4gICAgICAgKiBkb250IGJ1YmJsZSB0aGUgbmF2aWdhdGlvblxyXG4gICAgICAgKi9cblxuICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8qXHJcbiAgICAgICAqIGRvIHRoZSBtYWdpYyFcclxuICAgICAgICovXG4gICAgICBfdGhpczIuc2Nyb2xsVG8oX3RoaXMyLnByb3BzLnRvLCBfdGhpczIucHJvcHMpO1xuICAgIH07XG5cbiAgICB0aGlzLnNweUhhbmRsZXIgPSBmdW5jdGlvbiAoeSkge1xuXG4gICAgICB2YXIgc2Nyb2xsU3B5Q29udGFpbmVyID0gX3RoaXMyLmdldFNjcm9sbFNweUNvbnRhaW5lcigpO1xuXG4gICAgICBpZiAoX3Njcm9sbEhhc2gyLmRlZmF1bHQuaXNNb3VudGVkKCkgJiYgIV9zY3JvbGxIYXNoMi5kZWZhdWx0LmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0byA9IF90aGlzMi5wcm9wcy50bztcbiAgICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICAgIHZhciBlbGVtVG9wQm91bmQgPSAwO1xuICAgICAgdmFyIGVsZW1Cb3R0b21Cb3VuZCA9IDA7XG4gICAgICB2YXIgY29udGFpbmVyVG9wID0gMDtcblxuICAgICAgaWYgKHNjcm9sbFNweUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckNvcmRzID0gc2Nyb2xsU3B5Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb250YWluZXJUb3AgPSBjb250YWluZXJDb3Jkcy50b3A7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudCB8fCBfdGhpczIucHJvcHMuaXNEeW5hbWljKSB7XG4gICAgICAgIGVsZW1lbnQgPSBzY3JvbGxlci5nZXQodG8pO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29yZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBlbGVtVG9wQm91bmQgPSBjb3Jkcy50b3AgLSBjb250YWluZXJUb3AgKyB5O1xuICAgICAgICBlbGVtQm90dG9tQm91bmQgPSBlbGVtVG9wQm91bmQgKyBjb3Jkcy5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZzZXRZID0geSAtIF90aGlzMi5wcm9wcy5vZmZzZXQ7XG4gICAgICB2YXIgaXNJbnNpZGUgPSBvZmZzZXRZID49IE1hdGguZmxvb3IoZWxlbVRvcEJvdW5kKSAmJiBvZmZzZXRZIDwgTWF0aC5mbG9vcihlbGVtQm90dG9tQm91bmQpO1xuICAgICAgdmFyIGlzT3V0c2lkZSA9IG9mZnNldFkgPCBNYXRoLmZsb29yKGVsZW1Ub3BCb3VuZCkgfHwgb2Zmc2V0WSA+PSBNYXRoLmZsb29yKGVsZW1Cb3R0b21Cb3VuZCk7XG4gICAgICB2YXIgYWN0aXZlTGluayA9IHNjcm9sbGVyLmdldEFjdGl2ZUxpbmsoKTtcblxuICAgICAgaWYgKGlzT3V0c2lkZSkge1xuICAgICAgICBpZiAodG8gPT09IGFjdGl2ZUxpbmspIHtcbiAgICAgICAgICBzY3JvbGxlci5zZXRBY3RpdmVMaW5rKHZvaWQgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLmhhc2hTcHkgJiYgX3Njcm9sbEhhc2gyLmRlZmF1bHQuZ2V0SGFzaCgpID09PSB0bykge1xuICAgICAgICAgIF9zY3JvbGxIYXNoMi5kZWZhdWx0LmNoYW5nZUhhc2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpczIucHJvcHMuc3B5ICYmIF90aGlzMi5zdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyBhY3RpdmU6IGZhbHNlIH0pO1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vblNldEluYWN0aXZlICYmIF90aGlzMi5wcm9wcy5vblNldEluYWN0aXZlKHRvLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbnNpZGUgJiYgKGFjdGl2ZUxpbmsgIT09IHRvIHx8IF90aGlzMi5zdGF0ZS5hY3RpdmUgPT09IGZhbHNlKSkge1xuICAgICAgICBzY3JvbGxlci5zZXRBY3RpdmVMaW5rKHRvKTtcblxuICAgICAgICBfdGhpczIucHJvcHMuaGFzaFNweSAmJiBfc2Nyb2xsSGFzaDIuZGVmYXVsdC5jaGFuZ2VIYXNoKHRvKTtcblxuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLnNweSkge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25TZXRBY3RpdmUgJiYgX3RoaXMyLnByb3BzLm9uU2V0QWN0aXZlKHRvLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgO1xuXG4gIExpbmsucHJvcFR5cGVzID0gcHJvdG9UeXBlcztcblxuICBMaW5rLmRlZmF1bHRQcm9wcyA9IHsgb2Zmc2V0OiAwIH07XG5cbiAgcmV0dXJuIExpbms7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9sb2Rhc2ggPSByZXF1aXJlKCdsb2Rhc2gudGhyb3R0bGUnKTtcblxudmFyIF9sb2Rhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9kYXNoKTtcblxudmFyIF9wYXNzaXZlRXZlbnRMaXN0ZW5lcnMgPSByZXF1aXJlKCcuL3Bhc3NpdmUtZXZlbnQtbGlzdGVuZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFRoZSBldmVudEhhbmRsZXIgd2lsbCBleGVjdXRlIGF0IGEgcmF0ZSBvZiAxNWZwc1xudmFyIGV2ZW50VGhyb3R0bGVyID0gZnVuY3Rpb24gZXZlbnRUaHJvdHRsZXIoZXZlbnRIYW5kbGVyKSB7XG4gIHJldHVybiAoMCwgX2xvZGFzaDIuZGVmYXVsdCkoZXZlbnRIYW5kbGVyLCA2Nik7XG59O1xuXG52YXIgc2Nyb2xsU3B5ID0ge1xuXG4gIHNweUNhbGxiYWNrczogW10sXG4gIHNweVNldFN0YXRlOiBbXSxcbiAgc2Nyb2xsU3B5Q29udGFpbmVyczogW10sXG5cbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHNjcm9sbFNweUNvbnRhaW5lcikge1xuICAgIGlmIChzY3JvbGxTcHlDb250YWluZXIpIHtcbiAgICAgIHZhciBldmVudEhhbmRsZXIgPSBldmVudFRocm90dGxlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgc2Nyb2xsU3B5LnNjcm9sbEhhbmRsZXIoc2Nyb2xsU3B5Q29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgICAgc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnMucHVzaChzY3JvbGxTcHlDb250YWluZXIpO1xuICAgICAgKDAsIF9wYXNzaXZlRXZlbnRMaXN0ZW5lcnMuYWRkUGFzc2l2ZUV2ZW50TGlzdGVuZXIpKHNjcm9sbFNweUNvbnRhaW5lciwgJ3Njcm9sbCcsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICB9LFxuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIGlzTW91bnRlZChzY3JvbGxTcHlDb250YWluZXIpIHtcbiAgICByZXR1cm4gc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnMuaW5kZXhPZihzY3JvbGxTcHlDb250YWluZXIpICE9PSAtMTtcbiAgfSxcbiAgY3VycmVudFBvc2l0aW9uWTogZnVuY3Rpb24gY3VycmVudFBvc2l0aW9uWShzY3JvbGxTcHlDb250YWluZXIpIHtcbiAgICBpZiAoc2Nyb2xsU3B5Q29udGFpbmVyID09PSBkb2N1bWVudCkge1xuICAgICAgdmFyIHN1cHBvcnRQYWdlT2Zmc2V0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgaXNDU1MxQ29tcGF0ID0gKGRvY3VtZW50LmNvbXBhdE1vZGUgfHwgXCJcIikgPT09IFwiQ1NTMUNvbXBhdFwiO1xuICAgICAgcmV0dXJuIHN1cHBvcnRQYWdlT2Zmc2V0ID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2Nyb2xsU3B5Q29udGFpbmVyLnNjcm9sbFRvcDtcbiAgICB9XG4gIH0sXG4gIHNjcm9sbEhhbmRsZXI6IGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoc2Nyb2xsU3B5Q29udGFpbmVyKSB7XG4gICAgdmFyIGNhbGxiYWNrcyA9IHNjcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzW3Njcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzLmluZGV4T2Yoc2Nyb2xsU3B5Q29udGFpbmVyKV0uc3B5Q2FsbGJhY2tzIHx8IFtdO1xuICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYyhzY3JvbGxTcHkuY3VycmVudFBvc2l0aW9uWShzY3JvbGxTcHlDb250YWluZXIpKTtcbiAgICB9KTtcbiAgfSxcbiAgYWRkU3RhdGVIYW5kbGVyOiBmdW5jdGlvbiBhZGRTdGF0ZUhhbmRsZXIoaGFuZGxlcikge1xuICAgIHNjcm9sbFNweS5zcHlTZXRTdGF0ZS5wdXNoKGhhbmRsZXIpO1xuICB9LFxuICBhZGRTcHlIYW5kbGVyOiBmdW5jdGlvbiBhZGRTcHlIYW5kbGVyKGhhbmRsZXIsIHNjcm9sbFNweUNvbnRhaW5lcikge1xuICAgIHZhciBjb250YWluZXIgPSBzY3JvbGxTcHkuc2Nyb2xsU3B5Q29udGFpbmVyc1tzY3JvbGxTcHkuc2Nyb2xsU3B5Q29udGFpbmVycy5pbmRleE9mKHNjcm9sbFNweUNvbnRhaW5lcildO1xuXG4gICAgaWYgKCFjb250YWluZXIuc3B5Q2FsbGJhY2tzKSB7XG4gICAgICBjb250YWluZXIuc3B5Q2FsbGJhY2tzID0gW107XG4gICAgfVxuXG4gICAgY29udGFpbmVyLnNweUNhbGxiYWNrcy5wdXNoKGhhbmRsZXIpO1xuXG4gICAgaGFuZGxlcihzY3JvbGxTcHkuY3VycmVudFBvc2l0aW9uWShzY3JvbGxTcHlDb250YWluZXIpKTtcbiAgfSxcbiAgdXBkYXRlU3RhdGVzOiBmdW5jdGlvbiB1cGRhdGVTdGF0ZXMoKSB7XG4gICAgc2Nyb2xsU3B5LnNweVNldFN0YXRlLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzKCk7XG4gICAgfSk7XG4gIH0sXG4gIHVubW91bnQ6IGZ1bmN0aW9uIHVubW91bnQoc3RhdGVIYW5kbGVyLCBzcHlIYW5kbGVyKSB7XG4gICAgc2Nyb2xsU3B5LnNjcm9sbFNweUNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMuc3B5Q2FsbGJhY2tzICYmIGMuc3B5Q2FsbGJhY2tzLmxlbmd0aCAmJiBjLnNweUNhbGxiYWNrcy5zcGxpY2UoYy5zcHlDYWxsYmFja3MuaW5kZXhPZihzcHlIYW5kbGVyKSwgMSk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2Nyb2xsU3B5LnNweVNldFN0YXRlICYmIHNjcm9sbFNweS5zcHlTZXRTdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHNjcm9sbFNweS5zcHlTZXRTdGF0ZS5zcGxpY2Uoc2Nyb2xsU3B5LnNweVNldFN0YXRlLmluZGV4T2Yoc3RhdGVIYW5kbGVyKSwgMSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsU3B5LnNjcm9sbEhhbmRsZXIpO1xuICB9LFxuXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmV0dXJuIHNjcm9sbFNweS5zY3JvbGxTcHlDb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBzY3JvbGxTcHkuc2Nyb2xsSGFuZGxlcihjKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gc2Nyb2xsU3B5OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF91dGlsczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlscyk7XG5cbnZhciBfYW5pbWF0ZVNjcm9sbCA9IHJlcXVpcmUoJy4vYW5pbWF0ZS1zY3JvbGwnKTtcblxudmFyIF9hbmltYXRlU2Nyb2xsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuaW1hdGVTY3JvbGwpO1xuXG52YXIgX3Njcm9sbEV2ZW50cyA9IHJlcXVpcmUoJy4vc2Nyb2xsLWV2ZW50cycpO1xuXG52YXIgX3Njcm9sbEV2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY3JvbGxFdmVudHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX19tYXBwZWQgPSB7fTtcbnZhciBfX2FjdGl2ZUxpbmsgPSB2b2lkIDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICB1bm1vdW50OiBmdW5jdGlvbiB1bm1vdW50KCkge1xuICAgIF9fbWFwcGVkID0ge307XG4gIH0sXG5cbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGVsZW1lbnQpIHtcbiAgICBfX21hcHBlZFtuYW1lXSA9IGVsZW1lbnQ7XG4gIH0sXG5cbiAgdW5yZWdpc3RlcjogZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XG4gICAgZGVsZXRlIF9fbWFwcGVkW25hbWVdO1xuICB9LFxuXG4gIGdldDogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gX19tYXBwZWRbbmFtZV0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSkgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUobmFtZSlbMF0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lKVswXTtcbiAgfSxcblxuICBzZXRBY3RpdmVMaW5rOiBmdW5jdGlvbiBzZXRBY3RpdmVMaW5rKGxpbmspIHtcbiAgICByZXR1cm4gX19hY3RpdmVMaW5rID0gbGluaztcbiAgfSxcblxuICBnZXRBY3RpdmVMaW5rOiBmdW5jdGlvbiBnZXRBY3RpdmVMaW5rKCkge1xuICAgIHJldHVybiBfX2FjdGl2ZUxpbms7XG4gIH0sXG5cbiAgc2Nyb2xsVG86IGZ1bmN0aW9uIHNjcm9sbFRvKHRvLCBwcm9wcykge1xuXG4gICAgdmFyIHRhcmdldCA9IHRoaXMuZ2V0KHRvKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJ0YXJnZXQgRWxlbWVudCBub3QgZm91bmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgYWJzb2x1dGU6IGZhbHNlIH0pO1xuXG4gICAgdmFyIGNvbnRhaW5lcklkID0gcHJvcHMuY29udGFpbmVySWQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcjtcblxuICAgIHZhciBjb250YWluZXJFbGVtZW50ID0gdm9pZCAwO1xuICAgIGlmIChjb250YWluZXJJZCkge1xuICAgICAgY29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIubm9kZVR5cGUpIHtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICB9XG5cbiAgICBwcm9wcy5hYnNvbHV0ZSA9IHRydWU7XG5cbiAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gX3V0aWxzMi5kZWZhdWx0LnNjcm9sbE9mZnNldChjb250YWluZXJFbGVtZW50LCB0YXJnZXQpICsgKHByb3BzLm9mZnNldCB8fCAwKTtcblxuICAgIC8qXHJcbiAgICAgKiBpZiBhbmltYXRlIGlzIG5vdCBwcm92aWRlZCBqdXN0IHNjcm9sbCBpbnRvIHRoZSB2aWV3XHJcbiAgICAgKi9cbiAgICBpZiAoIXByb3BzLnNtb290aCkge1xuICAgICAgaWYgKF9zY3JvbGxFdmVudHMyLmRlZmF1bHQucmVnaXN0ZXJlZFsnYmVnaW4nXSkge1xuICAgICAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2JlZ2luJ10odG8sIHRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXJFbGVtZW50ID09PSBkb2N1bWVudCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsT2Zmc2V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBpZiAoX3Njcm9sbEV2ZW50czIuZGVmYXVsdC5yZWdpc3RlcmVkWydlbmQnXSkge1xuICAgICAgICBfc2Nyb2xsRXZlbnRzMi5kZWZhdWx0LnJlZ2lzdGVyZWRbJ2VuZCddKHRvLCB0YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLypcclxuICAgICAqIEFuaW1hdGUgc2Nyb2xsaW5nXHJcbiAgICAgKi9cblxuICAgIF9hbmltYXRlU2Nyb2xsMi5kZWZhdWx0LmFuaW1hdGVUb3BTY3JvbGwoc2Nyb2xsT2Zmc2V0LCBwcm9wcywgdG8sIHRhcmdldCk7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8qXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL29ibGFkb3IvYW5ndWxhci1zY3JvbGwgKGR1U2Nyb2xsRGVmYXVsdEVhc2luZylcclxuICAgKi9cbiAgZGVmYXVsdEVhc2luZzogZnVuY3Rpb24gZGVmYXVsdEVhc2luZyh4KSB7XG4gICAgaWYgKHggPCAwLjUpIHtcbiAgICAgIHJldHVybiBNYXRoLnBvdyh4ICogMiwgMikgLyAyO1xuICAgIH1cbiAgICByZXR1cm4gMSAtIE1hdGgucG93KCgxIC0geCkgKiAyLCAyKSAvIDI7XG4gIH0sXG4gIC8qXHJcbiAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ3JlLzE2NTAyOTRcclxuICAgKi9cbiAgLy8gbm8gZWFzaW5nLCBubyBhY2NlbGVyYXRpb25cbiAgbGluZWFyOiBmdW5jdGlvbiBsaW5lYXIoeCkge1xuICAgIHJldHVybiB4O1xuICB9LFxuICAvLyBhY2NlbGVyYXRpbmcgZnJvbSB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VJblF1YWQ6IGZ1bmN0aW9uIGVhc2VJblF1YWQoeCkge1xuICAgIHJldHVybiB4ICogeDtcbiAgfSxcbiAgLy8gZGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHlcbiAgZWFzZU91dFF1YWQ6IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHgpIHtcbiAgICByZXR1cm4geCAqICgyIC0geCk7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvblxuICBlYXNlSW5PdXRRdWFkOiBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHgpIHtcbiAgICByZXR1cm4geCA8IC41ID8gMiAqIHggKiB4IDogLTEgKyAoNCAtIDIgKiB4KSAqIHg7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHkgXG4gIGVhc2VJbkN1YmljOiBmdW5jdGlvbiBlYXNlSW5DdWJpYyh4KSB7XG4gICAgcmV0dXJuIHggKiB4ICogeDtcbiAgfSxcbiAgLy8gZGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHkgz4BcbiAgZWFzZU91dEN1YmljOiBmdW5jdGlvbiBlYXNlT3V0Q3ViaWMoeCkge1xuICAgIHJldHVybiAtLXggKiB4ICogeCArIDE7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvbiBcbiAgZWFzZUluT3V0Q3ViaWM6IGZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHgpIHtcbiAgICByZXR1cm4geCA8IC41ID8gNCAqIHggKiB4ICogeCA6ICh4IC0gMSkgKiAoMiAqIHggLSAyKSAqICgyICogeCAtIDIpICsgMTtcbiAgfSxcbiAgLy8gYWNjZWxlcmF0aW5nIGZyb20gemVybyB2ZWxvY2l0eSBcbiAgZWFzZUluUXVhcnQ6IGZ1bmN0aW9uIGVhc2VJblF1YXJ0KHgpIHtcbiAgICByZXR1cm4geCAqIHggKiB4ICogeDtcbiAgfSxcbiAgLy8gZGVjZWxlcmF0aW5nIHRvIHplcm8gdmVsb2NpdHkgXG4gIGVhc2VPdXRRdWFydDogZnVuY3Rpb24gZWFzZU91dFF1YXJ0KHgpIHtcbiAgICByZXR1cm4gMSAtIC0teCAqIHggKiB4ICogeDtcbiAgfSxcbiAgLy8gYWNjZWxlcmF0aW9uIHVudGlsIGhhbGZ3YXksIHRoZW4gZGVjZWxlcmF0aW9uXG4gIGVhc2VJbk91dFF1YXJ0OiBmdW5jdGlvbiBlYXNlSW5PdXRRdWFydCh4KSB7XG4gICAgcmV0dXJuIHggPCAuNSA/IDggKiB4ICogeCAqIHggKiB4IDogMSAtIDggKiAtLXggKiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGluZyBmcm9tIHplcm8gdmVsb2NpdHlcbiAgZWFzZUluUXVpbnQ6IGZ1bmN0aW9uIGVhc2VJblF1aW50KHgpIHtcbiAgICByZXR1cm4geCAqIHggKiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGRlY2VsZXJhdGluZyB0byB6ZXJvIHZlbG9jaXR5XG4gIGVhc2VPdXRRdWludDogZnVuY3Rpb24gZWFzZU91dFF1aW50KHgpIHtcbiAgICByZXR1cm4gMSArIC0teCAqIHggKiB4ICogeCAqIHg7XG4gIH0sXG4gIC8vIGFjY2VsZXJhdGlvbiB1bnRpbCBoYWxmd2F5LCB0aGVuIGRlY2VsZXJhdGlvbiBcbiAgZWFzZUluT3V0UXVpbnQ6IGZ1bmN0aW9uIGVhc2VJbk91dFF1aW50KHgpIHtcbiAgICByZXR1cm4geCA8IC41ID8gMTYgKiB4ICogeCAqIHggKiB4ICogeCA6IDEgKyAxNiAqIC0teCAqIHggKiB4ICogeCAqIHg7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgcHVzaEhhc2ggPSBmdW5jdGlvbiBwdXNoSGFzaChoYXNoKSB7XG4gIGhhc2ggPSBoYXNoID8gaGFzaC5pbmRleE9mKFwiI1wiKSA9PT0gMCA/IGhhc2ggOiBcIiNcIiArIGhhc2ggOiBcIlwiO1xuXG4gIGlmIChoaXN0b3J5LnB1c2hTdGF0ZSkge1xuICAgIHZhciBsb2MgPSB3aW5kb3cubG9jYXRpb247XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgaGFzaCA/IGxvYy5wYXRobmFtZSArIGxvYy5zZWFyY2ggKyBoYXNoIDogLy8gcmVtb3ZlIGhhc2hcbiAgICBsb2MucGF0aG5hbWUgKyBsb2Muc2VhcmNoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbi5oYXNoID0gaGFzaDtcbiAgfVxufTtcblxudmFyIGdldEhhc2ggPSBmdW5jdGlvbiBnZXRIYXNoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCBcIlwiKTtcbn07XG5cbnZhciBmaWx0ZXJFbGVtZW50SW5Db250YWluZXIgPSBmdW5jdGlvbiBmaWx0ZXJFbGVtZW50SW5Db250YWluZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBjb250YWluZXIuY29udGFpbnMgPyBjb250YWluZXIgIT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudCkgOiAhIShjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNik7XG4gIH07XG59O1xuXG52YXIgc2Nyb2xsT2Zmc2V0ID0gZnVuY3Rpb24gc2Nyb2xsT2Zmc2V0KGMsIHQpIHtcbiAgcmV0dXJuIGMgPT09IGRvY3VtZW50ID8gdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAod2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0KSA6IGdldENvbXB1dGVkU3R5bGUoYykucG9zaXRpb24gIT09IFwic3RhdGljXCIgPyB0Lm9mZnNldFRvcCA6IHQub2Zmc2V0VG9wIC0gYy5vZmZzZXRUb3A7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBwdXNoSGFzaDogcHVzaEhhc2gsXG4gIGdldEhhc2g6IGdldEhhc2gsXG4gIGZpbHRlckVsZW1lbnRJbkNvbnRhaW5lcjogZmlsdGVyRWxlbWVudEluQ29udGFpbmVyLFxuICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldFxufTsiXSwic291cmNlUm9vdCI6IiJ9