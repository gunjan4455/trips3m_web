require("source-map-support").install();
exports.ids = ["city-block-entry-fees"];
exports.modules = {

/***/ "./app-v2/modules/cityBlock/EntryFees/EntryFeesDays.js":
/*!*************************************************************!*\
  !*** ./app-v2/modules/cityBlock/EntryFees/EntryFeesDays.js ***!
  \*************************************************************/
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

var _EntryFeesDaysData = _interopRequireDefault(__webpack_require__(/*! ./EntryFeesDaysData */ "./app-v2/modules/cityBlock/EntryFees/EntryFeesDaysData.js"));

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _Overview = _interopRequireDefault(__webpack_require__(/*! modules/shared/Overview */ "./app-v2/modules/shared/Overview.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const EntryFees = _glamorous.default.div({
  '& .tabs-data-main': {
    paddingTop: '15px !important',
    paddinghBottom: '15px !important'
  },
  '& .tabbed-label': {
    width: '50%',
    textAlign: 'center'
  },
  '& input:checked': {
    '.tabbed-data .tabbed-label': {
      background: '#fff'
    }
  }
});

const EntryFeesDays = ({
  data
}) => _react.default.createElement("div", {
  className: "row"
}, _react.default.createElement("div", {
  className: "col-md-12 sbcw p0 m8 mt0"
}, data.title ? _react.default.createElement("div", {
  className: "p15 pb0"
}, _react.default.createElement(_Heading.default, {
  title: data.title,
  type: "main-heading",
  isViewAllHidden: true
})) : null, _react.default.createElement(EntryFees, {
  className: "clearfix"
}, data.fees && data.fees.length && data.fees.map((fee, i) => _react.default.createElement("div", {
  className: "tabbed",
  key: i
}, _react.default.createElement("input", {
  name: "tabbed-filters",
  id: `${i}daySet`,
  type: "radio",
  defaultChecked: i == 0 ? true : false
}), _react.default.createElement("section", {
  className: "tabbed-data"
}, _react.default.createElement("label", {
  className: "tabbed-label",
  htmlFor: `${i}daySet`
}, _react.default.createElement("p", {
  className: "fw9 m0 f14"
}, fee.startDay, " to ", fee.endDay)), _react.default.createElement("div", {
  className: "tabs-data-main p15"
}, _react.default.createElement(_EntryFeesDaysData.default, _extends({}, fee, {
  uniqueId: fee.startDay
})))))))), data && data.description ? _react.default.createElement("div", {
  className: "col-md-12 sbcw p15 m8 mt0"
}, _react.default.createElement(_Heading.default, {
  title: data.title,
  isViewAllHidden: true
}), _react.default.createElement(_Overview.default, data)) : null);

EntryFeesDays.propTypes = {
  data: _propTypes.default.object.isRequired
};
var _default = EntryFeesDays;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/cityBlock/EntryFees/EntryFeesDaysData.js":
/*!*****************************************************************!*\
  !*** ./app-v2/modules/cityBlock/EntryFees/EntryFeesDaysData.js ***!
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

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TimeContainer = _glamorous.default.div({
  '& .entryFeesRadio': {
    display: 'none',
    '& + label': {
      display: 'inline-block',
      color: '#cbcbcb',
      border: '1px solid #cbcbcb',
      padding: '8px 15px',
      textAlign: 'center',
      marginRight: '8px',
      cursor: 'pointer',
      borderRadius: '2px'
    },
    '&:checked + label': {
      color: '#20a397',
      borderColor: '#20a397'
    }
  }
});

const TimeData = _glamorous.default.div({
  display: 'flex'
});

let EntryFeesDaysData = class EntryFeesDaysData extends _react.Component {
  constructor(props) {
    super(props);

    this.handleChange = (time, e) => {
      this.setState({
        tickets: time.tickets
      });
    };

    this.state = {
      tickets: props.timing[0].tickets || []
    };
  }

  render() {
    const {
      timing,
      uniqueId
    } = this.props;
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(TimeContainer, null, timing.map((time, i) => _react.default.createElement("div", {
      className: "iblock",
      key: i
    }, _react.default.createElement("input", {
      name: `entry-fees ${uniqueId}`,
      type: "radio",
      className: "entryFeesRadio",
      id: `${time.startTime}`,
      defaultChecked: i == 0 ? true : false,
      onChange: e => this.handleChange(time, e)
    }), _react.default.createElement("label", {
      htmlFor: `${time.startTime}`
    }, time.startTime, " - ", time.closeTime)))), _react.default.createElement(TimeData, {
      className: "clearfix pt15 flex spaceBetween"
    }, this.state.tickets.map((ticket, i) => _react.default.createElement("div", {
      className: "iblock flexFull",
      key: i
    }, _react.default.createElement("p", {
      className: "f12 m0 pfc4"
    }, " ", ticket.nationality === ticket.person ? ticket.nationality : `${ticket.nationality} ${ticket.person}`), _react.default.createElement("p", {
      className: "f14 fwb m0"
    }, ticket.ticket)))));
  }

};
EntryFeesDaysData.propTypes = {
  timing: _propTypes.default.array.isRequired,
  uniqueId: _propTypes.default.string
};
EntryFeesDaysData.defaultProps = {
  uniqueId: ''
};
var _default = EntryFeesDaysData;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Heading.js":
/*!******************************************!*\
  !*** ./app-v2/modules/shared/Heading.js ***!
  \******************************************/
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SubHeading = _glamorous.default.p({
  fontSize: '14px',
  lineHeight: '18px',
  color: '#cbcbcb',
  margin: '4px 0 0 0'
});

const Heading = ({
  data,
  title,
  heading,
  styleHeading,
  styleSubHeading,
  type,
  isViewAllHidden
}) => {
  return _react.default.createElement("div", {
    className: "clearfix mb15"
  }, type === 'main-heading' ? _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc1 fw9 m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null) : _react.default.createElement("h2", {
    style: styleHeading,
    className: `${isViewAllHidden ? 'pr0 ' : 'pr64 '} f16 pfc3 fwb m0`
  }, data.title || title, data.forHeading ? ` for ${data.forHeading}` : null), data.heading || heading ? _react.default.createElement(SubHeading, {
    style: styleSubHeading,
    className: "f14 mt4 fw4"
  }, data.heading || heading) : null);
};

Heading.propTypes = {
  data: _propTypes.default.object,
  type: _propTypes.default.string,
  title: _propTypes.default.string,
  heading: _propTypes.default.string,
  styleHeading: _propTypes.default.object,
  styleSubHeading: _propTypes.default.object,
  isViewAllHidden: _propTypes.default.bool
};
Heading.defaultProps = {
  data: {},
  type: '',
  title: '',
  heading: '',
  styleHeading: {},
  styleSubHeading: {},
  isViewAllHidden: false
};
var _default = Heading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/Overview.js":
/*!*******************************************!*\
  !*** ./app-v2/modules/shared/Overview.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _ShowMore = _interopRequireDefault(__webpack_require__(/*! ./ShowMore */ "./app-v2/modules/shared/ShowMore.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();

const overviewSplitAfterShowMore = overviewMoreText => {
  try {
    return overviewMoreText.replace(/<br \/>|<\/br>/g, '').replace('</span></p>\r\n', '');
  } catch (err) {
    return overviewMoreText;
  }
};

let Overview = class Overview extends _react.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.overviewContent = () => {
      const {
        description,
        footerDescription
      } = this.props;
      const desc = description && description.split('\r\n').filter(p => p.length) || [];

      if (!desc.length) {
        return null;
      }

      const footerDesc = footerDescription ? `<br>${footerDescription}` : '';
      return _react.default.createElement(_ShowMore.default, {
        wrapText: parser.parse(desc[0]),
        moreText: parser.parse(overviewSplitAfterShowMore(desc.slice(1).join('\n').concat(footerDesc)))
      });
    }, _temp;
  }

  render() {
    return _react.default.createElement("div", {
      className: "row row- row-mw"
    }, _react.default.createElement("div", {
      className: "read-more-box"
    }, this.overviewContent()));
  }

};
Overview.defaultProps = {
  footerDescription: '',
  description: ''
};
Overview.propTypes = {
  description: _propTypes.default.string,
  footerDescription: _propTypes.default.string
};
var _default = Overview;
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

/***/ "./app-v2/screens/cityBlock/entryFees/EntryFees.js":
/*!*********************************************************!*\
  !*** ./app-v2/screens/cityBlock/entryFees/EntryFees.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _EntryFeesDays = _interopRequireDefault(__webpack_require__(/*! ../../../modules/cityBlock/EntryFees/EntryFeesDays */ "./app-v2/modules/cityBlock/EntryFees/EntryFeesDays.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EntryFees = ({
  data,
  exitIntent
}) => {
  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement(_EntryFeesDays.default, {
    data: data
  }), exitIntent);
};

var _default = EntryFees;
exports.default = _default;
EntryFees.propTypes = {
  data: _propTypes.default.object.isRequired,
  exitIntent: _propTypes.default.object.isRequired
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9jaXR5QmxvY2svRW50cnlGZWVzL0VudHJ5RmVlc0RheXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvY2l0eUJsb2NrL0VudHJ5RmVlcy9FbnRyeUZlZXNEYXlzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL1Nob3dNb3JlLmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL2NpdHlCbG9jay9lbnRyeUZlZXMvRW50cnlGZWVzLmpzIl0sIm5hbWVzIjpbIkVudHJ5RmVlcyIsImdsYW1vcm91cyIsImRpdiIsInBhZGRpbmdUb3AiLCJwYWRkaW5naEJvdHRvbSIsIndpZHRoIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsIkVudHJ5RmVlc0RheXMiLCJkYXRhIiwidGl0bGUiLCJmZWVzIiwibGVuZ3RoIiwibWFwIiwiZmVlIiwiaSIsInN0YXJ0RGF5IiwiZW5kRGF5IiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiVGltZUNvbnRhaW5lciIsImRpc3BsYXkiLCJjb2xvciIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW5SaWdodCIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiVGltZURhdGEiLCJFbnRyeUZlZXNEYXlzRGF0YSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJ0aW1lIiwiZSIsInNldFN0YXRlIiwidGlja2V0cyIsInN0YXRlIiwidGltaW5nIiwicmVuZGVyIiwidW5pcXVlSWQiLCJzdGFydFRpbWUiLCJjbG9zZVRpbWUiLCJ0aWNrZXQiLCJuYXRpb25hbGl0eSIsInBlcnNvbiIsImFycmF5Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiU3ViSGVhZGluZyIsInAiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJtYXJnaW4iLCJIZWFkaW5nIiwiaGVhZGluZyIsInN0eWxlSGVhZGluZyIsInN0eWxlU3ViSGVhZGluZyIsInR5cGUiLCJpc1ZpZXdBbGxIaWRkZW4iLCJmb3JIZWFkaW5nIiwiYm9vbCIsInBhcnNlciIsIlBhcnNlciIsIm92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlIiwib3ZlcnZpZXdNb3JlVGV4dCIsInJlcGxhY2UiLCJlcnIiLCJPdmVydmlldyIsIlB1cmVDb21wb25lbnQiLCJvdmVydmlld0NvbnRlbnQiLCJmb290ZXJEZXNjcmlwdGlvbiIsImRlc2MiLCJzcGxpdCIsImZpbHRlciIsImZvb3RlckRlc2MiLCJwYXJzZSIsInNsaWNlIiwiam9pbiIsImNvbmNhdCIsIkdyZWFkbW9yZUxhYmVsIiwibGFiZWwiLCJHRG93bkFycm93U3BhbiIsInNwYW4iLCJoZWlnaHQiLCJ0b3AiLCJTaG93TW9yZSIsIlJlYWN0IiwiY2hlY2tlZCIsImRlZmF1bHRPcGVuIiwiYmluZCIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicHJldmVudERlZmF1bHQiLCJ0cmFja1NlZ21lbnQiLCJjdGEiLCJ0ZXh0TGVuZ3RoIiwiaXNEZWZhdWx0U2hvd01vcmUiLCJhcHBlbmRUZXh0Iiwid3JhcFRleHQiLCJtb3JlVGV4dCIsInNob3dMZXNzVGV4dCIsInNob3dNb3JlVGV4dCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJleGl0SW50ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLFlBQVlDLG1CQUFVQyxHQUFWLENBQWM7QUFDOUIsdUJBQXFCO0FBQ25CQyxnQkFBWSxpQkFETztBQUVuQkMsb0JB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aEMsbUJBQVVDLE1BSGtCLENBQXBCLENBTlM7QUFXbkJzRixnQkFBY3ZGLG1CQUFVZ0MsTUFYTDtBQVluQnNELGdCQUFjdEYsbUJBQVVnQyxNQVpMO0FBYW5CMEMsZUFBYTFFLG1CQUFVOEMsSUFiSjtBQWNuQm9DLHFCQUFtQmxGLG1CQUFVOEMsSUFkVjtBQWVuQmlDLGdCQUFjL0UsbUJBQVV5RixJQWZMO0FBZ0JuQk4sY0FBWW5GLG1CQUFVZ0M7QUFoQkgsQ0FBckI7QUFvQkF1QyxTQUFTdEMsWUFBVCxHQUF3QjtBQUN0Qm1ELFlBQVUsRUFEWTtBQUV0QkMsWUFBVSxFQUZZO0FBR3RCRSxnQkFBYyxXQUhRO0FBSXRCRCxnQkFBYyxXQUpRO0FBS3RCWixlQUFhLEtBTFM7QUFNdEJRLHFCQUFtQixJQU5HO0FBT3RCSCxnQkFBYyxNQUFNLENBQ25CO0FBUnFCLENBQXhCO2VBV2VSLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEhmOztBQUNBOztBQUVBOzs7O0FBRUEsTUFBTTNGLFlBQVksQ0FBQztBQUFFUyxNQUFGO0FBQVFxRztBQUFSLENBQUQsS0FBMEI7QUFDMUMsU0FDRTtBQUFLLGVBQVU7QUFBZixLQUNFLDZCQUFDLHNCQUFEO0FBQWUsVUFBTXJHO0FBQXJCLElBREYsRUFFR3FHLFVBRkgsQ0FERjtBQU1ELENBUEQ7O2VBU2U5RyxTOztBQUVmQSxVQUFVbUIsU0FBVixHQUFzQjtBQUNwQlYsUUFBTVcsbUJBQVVDLE1BQVYsQ0FBaUJDLFVBREg7QUFFcEJ3RixjQUFZMUYsbUJBQVVDLE1BQVYsQ0FBaUJDO0FBRlQsQ0FBdEIsQyIsImZpbGUiOiJjaXR5LWJsb2NrLWVudHJ5LWZlZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuaW1wb3J0IEVudHJ5RmVlc0RheXNEYXRhIGZyb20gJy4vRW50cnlGZWVzRGF5c0RhdGEnO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvSGVhZGluZyc7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSAnbW9kdWxlcy9zaGFyZWQvT3ZlcnZpZXcnO1xuXG5jb25zdCBFbnRyeUZlZXMgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLnRhYnMtZGF0YS1tYWluJzoge1xuICAgIHBhZGRpbmdUb3A6ICcxNXB4ICFpbXBvcnRhbnQnLFxuICAgIHBhZGRpbmdoQm90dG9tOiAnMTVweCAhaW1wb3J0YW50JyxcbiAgfSxcbiAgJyYgLnRhYmJlZC1sYWJlbCc6IHtcbiAgICB3aWR0aDogJzUwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgJyYgaW5wdXQ6Y2hlY2tlZCc6IHtcbiAgICAnLnRhYmJlZC1kYXRhIC50YWJiZWQtbGFiZWwnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgfSxcbiAgfVxufSk7XG5cbmNvbnN0IEVudHJ5RmVlc0RheXMgPSAoeyBkYXRhIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBzYmN3IHAwIG04IG10MFwiPlxuICAgICAge1xuICAgICAgICBkYXRhLnRpdGxlID8gPGRpdiBjbGFzc05hbWU9XCJwMTUgcGIwXCI+PEhlYWRpbmcgdGl0bGU9e2RhdGEudGl0bGV9IHR5cGU9XCJtYWluLWhlYWRpbmdcIiBpc1ZpZXdBbGxIaWRkZW49e3RydWV9IC8+PC9kaXY+IDogbnVsbFxuICAgICAgfVxuICAgICAgPEVudHJ5RmVlcyBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICB7ZGF0YS5mZWVzICYmIGRhdGEuZmVlcy5sZW5ndGggJiYgZGF0YS5mZWVzLm1hcCgoZmVlLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJiZWRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJ0YWJiZWQtZmlsdGVyc1wiIGlkPXtgJHtpfWRheVNldGB9IHR5cGU9XCJyYWRpb1wiIGRlZmF1bHRDaGVja2VkPXtpPT0wID8gdHJ1ZTpmYWxzZX0gLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhYmJlZC1kYXRhXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0YWJiZWQtbGFiZWxcIiBodG1sRm9yPXtgJHtpfWRheVNldGB9PjxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnc5IG0wIGYxNFwiPntmZWUuc3RhcnREYXl9IHRvIHtmZWUuZW5kRGF5fTwvcD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLWRhdGEtbWFpbiBwMTVcIj5cbiAgICAgICAgICAgICAgICA8RW50cnlGZWVzRGF5c0RhdGEgey4uLmZlZX0gdW5pcXVlSWQ9e2ZlZS5zdGFydERheX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L0VudHJ5RmVlcz5cbiAgICA8L2Rpdj5cbiAgICB7XG4gICAgICBkYXRhICYmIGRhdGEuZGVzY3JpcHRpb24gP1xuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgc2JjdyBwMTUgbTggbXQwXCI+XG4gICAgICAgIDxIZWFkaW5nIHRpdGxlPXtkYXRhLnRpdGxlfSBpc1ZpZXdBbGxIaWRkZW49e3RydWV9IC8+XG4gICAgICAgIDxPdmVydmlldyB7Li4uZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgOiBudWxsXG4gICAgfVxuICA8L2Rpdj5cbik7XG5cbkVudHJ5RmVlc0RheXMucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5RmVlc0RheXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgVGltZUNvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuZW50cnlGZWVzUmFkaW8nOiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgICcmICsgbGFiZWwnOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGNvbG9yOiAnI2NiY2JjYicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2NiY2JjYicsXG4gICAgICBwYWRkaW5nOiAnOHB4IDE1cHgnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4JyxcbiAgICB9LFxuICAgICcmOmNoZWNrZWQgKyBsYWJlbCc6IHtcbiAgICAgIGNvbG9yOiAnIzIwYTM5NycsXG4gICAgICBib3JkZXJDb2xvcjogJyMyMGEzOTcnLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgVGltZURhdGEgPSBnbGFtb3JvdXMuZGl2KHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxufSk7XG5cbmNsYXNzIEVudHJ5RmVlc0RheXNEYXRhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpY2tldHM6IHByb3BzLnRpbWluZ1swXS50aWNrZXRzIHx8IFtdXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9ICh0aW1lLCBlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGlja2V0czogdGltZS50aWNrZXRzfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGltaW5nLCB1bmlxdWVJZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8VGltZUNvbnRhaW5lcj5cbiAgICAgICAgICB7dGltaW5nLm1hcCgodGltZSwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpYmxvY2tcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT17YGVudHJ5LWZlZXMgJHt1bmlxdWVJZH1gfSB0eXBlPVwicmFkaW9cIiBjbGFzc05hbWU9XCJlbnRyeUZlZXNSYWRpb1wiIGlkPXtgJHt0aW1lLnN0YXJ0VGltZX1gfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtpID09IDAgPyB0cnVlIDogZmFsc2V9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UodGltZSwgZSl9IC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgJHt0aW1lLnN0YXJ0VGltZX1gfT57dGltZS5zdGFydFRpbWV9IC0ge3RpbWUuY2xvc2VUaW1lfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UaW1lQ29udGFpbmVyPlxuICAgICAgICA8VGltZURhdGEgY2xhc3NOYW1lPVwiY2xlYXJmaXggcHQxNSBmbGV4IHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnRpY2tldHMubWFwKCh0aWNrZXQsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWJsb2NrIGZsZXhGdWxsXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIG0wIHBmYzRcIj4ge3RpY2tldC5uYXRpb25hbGl0eSA9PT0gdGlja2V0LnBlcnNvbiA/XG4gICAgICAgICAgICAgICAgdGlja2V0Lm5hdGlvbmFsaXR5IDogYCR7dGlja2V0Lm5hdGlvbmFsaXR5fSAke3RpY2tldC5wZXJzb259YH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImYxNCBmd2IgbTBcIj57dGlja2V0LnRpY2tldH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UaW1lRGF0YT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRW50cnlGZWVzRGF5c0RhdGEucHJvcFR5cGVzID0ge1xuICB0aW1pbmc6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB1bmlxdWVJZDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuRW50cnlGZWVzRGF5c0RhdGEuZGVmYXVsdFByb3BzID0ge1xuICB1bmlxdWVJZDogJydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5RmVlc0RheXNEYXRhO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IFN1YkhlYWRpbmcgPSBnbGFtb3JvdXMucCh7XG4gIGZvbnRTaXplOiAnMTRweCcsXG4gIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgY29sb3I6ICcjY2JjYmNiJyxcbiAgbWFyZ2luOiAnNHB4IDAgMCAwJyxcbn0pO1xuXG5jb25zdCBIZWFkaW5nID0gKHsgZGF0YSwgdGl0bGUsIGhlYWRpbmcsIHN0eWxlSGVhZGluZywgc3R5bGVTdWJIZWFkaW5nLCB0eXBlLCBpc1ZpZXdBbGxIaWRkZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggbWIxNVwiPlxuICAgICAge1xuICAgICAgICB0eXBlID09PSAnbWFpbi1oZWFkaW5nJyA/XG4gICAgICAgICAgPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aXNWaWV3QWxsSGlkZGVuID8gJ3ByMCAnIDogJ3ByNjQgJ30gZjE2IHBmYzEgZnc5IG0wYH0+e2RhdGEudGl0bGUgfHwgdGl0bGV9e2RhdGEuZm9ySGVhZGluZyA/IGAgZm9yICR7ZGF0YS5mb3JIZWFkaW5nfWAgOiBudWxsfTwvaDI+XG4gICAgICAgICAgOiA8aDIgc3R5bGU9e3N0eWxlSGVhZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMzIGZ3YiBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgfVxuICAgICAge2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nID9cbiAgICAgICAgPFN1YkhlYWRpbmcgc3R5bGU9e3N0eWxlU3ViSGVhZGluZ30gY2xhc3NOYW1lPVwiZjE0IG10NCBmdzRcIj57ZGF0YS5oZWFkaW5nIHx8IGhlYWRpbmd9PC9TdWJIZWFkaW5nPiA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZVN1YkhlYWRpbmc6IFByb3BUeXBlcy5vYmplY3QsXG4gIGlzVmlld0FsbEhpZGRlbjogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiB7fSxcbiAgdHlwZTogJycsXG4gIHRpdGxlOiAnJyxcbiAgaGVhZGluZzogJycsXG4gIHN0eWxlSGVhZGluZzoge30sXG4gIHN0eWxlU3ViSGVhZGluZzoge30sXG4gIGlzVmlld0FsbEhpZGRlbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICdodG1sLXRvLXJlYWN0JztcblxuaW1wb3J0IFNob3dNb3JlIGZyb20gJy4vU2hvd01vcmUnO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNvbnN0IG92ZXJ2aWV3U3BsaXRBZnRlclNob3dNb3JlID0gKG92ZXJ2aWV3TW9yZVRleHQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gb3ZlcnZpZXdNb3JlVGV4dC5yZXBsYWNlKC88YnIgXFwvPnw8XFwvYnI+L2csICcnKS5yZXBsYWNlKCc8L3NwYW4+PC9wPlxcclxcbicsICcnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIG92ZXJ2aWV3TW9yZVRleHQ7XG4gIH1cbn07XG5cbmNsYXNzIE92ZXJ2aWV3IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIG92ZXJ2aWV3Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBmb290ZXJEZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjID0gZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24uc3BsaXQoJ1xcclxcbicpLmZpbHRlcihwID0+IHAubGVuZ3RoKSB8fCBbXTtcblxuICAgIGlmICghZGVzYy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGZvb3RlckRlc2MgPSBmb290ZXJEZXNjcmlwdGlvbiA/IGA8YnI+JHtmb290ZXJEZXNjcmlwdGlvbn1gIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNob3dNb3JlXG4gICAgICAgIHdyYXBUZXh0PXtwYXJzZXIucGFyc2UoZGVzY1swXSl9XG4gICAgICAgIG1vcmVUZXh0PXtwYXJzZXIucGFyc2Uob3ZlcnZpZXdTcGxpdEFmdGVyU2hvd01vcmUoZGVzYy5zbGljZSgxKS5qb2luKCdcXG4nKS5jb25jYXQoZm9vdGVyRGVzYykpKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcm93LW13XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1tb3JlLWJveFwiPlxuICAgICAgICAgIHt0aGlzLm92ZXJ2aWV3Q29udGVudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuT3ZlcnZpZXcuZGVmYXVsdFByb3BzID0ge1xuICBmb290ZXJEZXNjcmlwdGlvbjogJycsXG4gIGRlc2NyaXB0aW9uOiAnJ1xufTtcblxuT3ZlcnZpZXcucHJvcFR5cGVzID0ge1xuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9vdGVyRGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuXG5pbXBvcnQgeyBCbHVlRG93bkFycm93IH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgT1JHQU5JU01fQ0xJQ0tFRCB9IGZyb20gJ2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5cbmNvbnN0IEdyZWFkbW9yZUxhYmVsID0gZ2xhbW9yb3VzLmxhYmVsKHtcbiAgJyYgYnV0dG9uLnJlYWQtbW9yZS1idXR0b24nOiB7XG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBHRG93bkFycm93U3BhbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgd2lkdGg6ICcxMHB4JyxcbiAgaGVpZ2h0OiAnNnB4JyxcbiAgJyYgc3ZnJzoge1xuICAgIHdpZHRoOiAnMTBweCcsXG4gICAgaGVpZ2h0OiAnNnB4JyxcbiAgICB0b3A6ICcxcHgnXG4gIH1cbn0pO1xuXG5jbGFzcyBTaG93TW9yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5kZWZhdWx0T3BlblxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja2VkOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoZWNrZWQ6ICF0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlLmNoZWNrZWQgJiYgdGhpcy5wcm9wcy50cmFja1NlZ21lbnQoeyBjdGE6ICdSZWFkIE1vcmUnIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRleHRMZW5ndGggPSAxOTU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gdGV4dC1sZWZ0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtc3RhdGVcIiBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IGlkPVwicG9zdC0xXCIgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHJlYWQtbW9yZS13cmFwICR7dGhpcy5wcm9wcy5pc0RlZmF1bHRTaG93TW9yZSA/ICdwLWxhc3Qtbm8tbWFyZ2luIHBmYzMgZjE0cCBkeW5hbWljVGV4dEluaGVyaXQnIDogJyd9YH0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgIC8vIFRPRE86IGZpbmQgYSBiZXR0ZXIgd2F5IGZvciB0cnVuY2F0ZSB0aGUgc3RyaW5nXG4gICAgICAgICAgICAhdGhpcy5zdGF0ZS5jaGVja2VkICYmIHRoaXMucHJvcHMuYXBwZW5kVGV4dCAmJiB0aGlzLnByb3BzLndyYXBUZXh0Lmxlbmd0aCA+PSB0ZXh0TGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5wcm9wcy53cmFwVGV4dCArIHRoaXMucHJvcHMuYXBwZW5kVGV4dFxuICAgICAgICAgICAgICA6IHRoaXMucHJvcHMud3JhcFRleHRcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVhZC1tb3JlLXRhcmdldFwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubW9yZVRleHR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMucHJvcHMubW9yZVRleHQubGVuZ3RoID4gMCB8fCAhX2lzRW1wdHkodGhpcy5wcm9wcy5tb3JlVGV4dCkgP1xuICAgICAgICAgICAgPEdyZWFkbW9yZUxhYmVsIGh0bWxGb3I9XCJwb3N0LTFcIiBjbGFzc05hbWU9XCJyZWFkLW1vcmUtdHJpZ2dlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWQtbW9yZS1idXR0b24gZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW4gcmVsYXRpdmUgZjEyIGZ3N1wiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXhGdWxsIGYxNCBmdzdcIj5cbiAgICAgICAgICAgICAgICAgIHsodGhpcy5zdGF0ZS5jaGVja2VkKSA/IHRoaXMucHJvcHMuc2hvd0xlc3NUZXh0IDogdGhpcy5wcm9wcy5zaG93TW9yZVRleHR9XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jaGVja2VkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8R0Rvd25BcnJvd1NwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWw4IHJlbGF0aXZlIGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXJcIj48Qmx1ZURvd25BcnJvdyAvPjwvR0Rvd25BcnJvd1NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmVhZG1vcmVMYWJlbD5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TaG93TW9yZS5wcm9wVHlwZXMgPSB7XG4gIHdyYXBUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLmlzUmVxdWlyZWQsXG4gIG1vcmVUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0XG4gIF0pLFxuICBzaG93TW9yZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNob3dMZXNzVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdE9wZW46IFByb3BUeXBlcy5ib29sLFxuICBpc0RlZmF1bHRTaG93TW9yZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrU2VnbWVudDogUHJvcFR5cGVzLmZ1bmMsXG4gIGFwcGVuZFRleHQ6IFByb3BUeXBlcy5zdHJpbmdcblxufTtcblxuU2hvd01vcmUuZGVmYXVsdFByb3BzID0ge1xuICB3cmFwVGV4dDogJycsXG4gIG1vcmVUZXh0OiAnJyxcbiAgc2hvd01vcmVUZXh0OiAnUmVhZCBNb3JlJyxcbiAgc2hvd0xlc3NUZXh0OiAnUmVhZCBMZXNzJyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBpc0RlZmF1bHRTaG93TW9yZTogdHJ1ZSxcbiAgdHJhY2tTZWdtZW50OiAoKSA9PiB7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dNb3JlO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBFbnRyeUZlZXNEYXlzIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY2l0eUJsb2NrL0VudHJ5RmVlcy9FbnRyeUZlZXNEYXlzJztcblxuY29uc3QgRW50cnlGZWVzID0gKHsgZGF0YSwgZXhpdEludGVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxFbnRyeUZlZXNEYXlzIGRhdGE9e2RhdGF9IC8+XG4gICAgICB7ZXhpdEludGVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5RmVlcztcblxuRW50cnlGZWVzLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBleGl0SW50ZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==