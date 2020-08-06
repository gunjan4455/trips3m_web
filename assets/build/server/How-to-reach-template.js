require("source-map-support").install();
exports.ids = ["How-to-reach-template"];
exports.modules = {

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

/***/ "./app-v2/screens/cityBlock/howToReach/HowToReachTemplate.js":
/*!*******************************************************************!*\
  !*** ./app-v2/screens/cityBlock/howToReach/HowToReachTemplate.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _htmlToReact = __webpack_require__(/*! html-to-react */ "html-to-react");

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _Heading = _interopRequireDefault(__webpack_require__(/*! modules/shared/Heading */ "./app-v2/modules/shared/Heading.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const parser = new _htmlToReact.Parser();

const SrcToDestList = _glamorous.default.ul({
  margin: '0',
  padding: '4px 0 0 0',
  '& li': {
    fontSize: '12px',
    lineHeight: '16px',
    borderRadius: '24px',
    padding: '3px 15px',
    display: 'inline-block',
    listStyle: 'none',
    border: '1px solid #d4d4d4',
    margin: '0 4px 4px 0'
  }
});

const ReachTypeGrp = _glamorous.default.div({
  '& .reachTypeItem': {
    flexGrow: '1'
  },
  '& .reachTypeItem:last-child': {
    marginRight: '0'
  },
  '& .reachTypeItemRadio': {
    display: 'none',
    '& + label + .reachTypeItemRadioData': {
      height: '0',
      margin: '0'
    },
    '&:checked + label + .reachTypeItemRadioData': {
      height: 'auto',
      marginTop: '8px'
    },
    '&:checked + label .arrowButton': {
      transform: 'rotate(180deg)'
    }
  }
});

const ReachIcon = _glamorous.default.span({
  minWidth: '24px',
  maxWidth: '24px',
  display: 'block',
  height: '20px'
});

const ReachType = _glamorous.default.div({
  display: 'block',
  position: 'relative',
  width: '100%',
  '& .iconBox': {
    width: '20px',
    height: '20px',
    '& svg': {
      display: 'block',
      maxWidth: '100%',
      width: '20px'
    }
  },
  '& .absolute-website>svg': {
    width: '20px !important',
    height: '12px !important'
  }
});

const ReachTypeData = _glamorous.default.div({});

const GArrowDownSpan = _glamorous.default.span({
  width: '30px',
  height: '30px',
  right: '10px',
  top: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  '& svg': {
    width: '10px !important',
    height: '10px !important'
  }
});

const IconMap = {
  'By Air': _react.default.createElement(_Icon.Flights, null),
  'By Road': _react.default.createElement(_Icon.TaxiCab, null),
  'By Train': _react.default.createElement(_Icon.Train, null),
  'By Sea': _react.default.createElement(_Icon.Ship, null)
};

const HowToReachTemplate = ({
  data,
  location
}) => {
  return data.transportModes ? _react.default.createElement("div", null, _react.default.createElement(_Heading.default, {
    data: {
      title: data.title,
      heading: 'Read about the best & quickest routes to save time & money, as suggested by our travelers'
    }
  }), _react.default.createElement(ReachTypeGrp, null, data.transportModes && data.transportModes.map((mode, i) => _react.default.createElement("div", {
    className: "reachTypeItem wfull mb15",
    key: i
  }, _react.default.createElement("input", {
    name: "reachTypeItems",
    defaultChecked: i === 0,
    id: `reachTypeItemRadio` + i,
    type: "checkbox",
    className: "reachTypeItemRadio"
  }), _react.default.createElement("label", {
    htmlFor: `reachTypeItemRadio` + i
  }, _react.default.createElement(ReachType, {
    className: "flex alignCenter spaceBetween"
  }, _react.default.createElement(ReachIcon, {
    className: "mr15"
  }, IconMap[mode.name]), _react.default.createElement("h3", {
    className: "pfc3 f14 fw9 flexFull"
  }, mode.name), _react.default.createElement(GArrowDownSpan, {
    className: "nblock ml8 flex alignCenter justifyCenter z2 arrowButton"
  }, _react.default.createElement(_Icon.DownArrow, null)))), _react.default.createElement(ReachTypeData, {
    className: "mt8 overflowh f14 dynamicTextInherit ellipsis_three"
  }, parser.parse(mode.description))))), _react.default.createElement("div", {
    className: "clearfix"
  }, data && data.distance && data.distance.length ? _react.default.createElement(SrcToDestList, null, data.distance.map((row, i) => _react.default.createElement("li", {
    key: i
  }, _react.default.createElement("h4", {
    className: "fw4"
  }, _react.default.createElement(_reactRouter.Link, {
    to: row.link
  }, row.from))))) : null, _react.default.createElement("div", {
    className: "readmore-btn text-right mt8"
  }, _react.default.createElement(_reactRouter.Link, {
    to: `${location.pathname.slice(0)}/how-to-reach`,
    className: "sfc1 f14 fw7 mt3 at_readmorebtn"
  }, "View Details")))) : null;
};

var _default = HowToReachTemplate;
exports.default = _default;
HowToReachTemplate.propTypes = {
  data: _propTypes.default.object.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvc2NyZWVucy9jaXR5QmxvY2svaG93VG9SZWFjaC9Ib3dUb1JlYWNoVGVtcGxhdGUuanMiXSwibmFtZXMiOlsiU3ViSGVhZGluZyIsImdsYW1vcm91cyIsInAiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJjb2xvciIsIm1hcmdpbiIsIkhlYWRpbmciLCJkYXRhIiwidGl0bGUiLCJoZWFkaW5nIiwic3R5bGVIZWFkaW5nIiwic3R5bGVTdWJIZWFkaW5nIiwidHlwZSIsImlzVmlld0FsbEhpZGRlbiIsImZvckhlYWRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIiwicGFyc2VyIiwiUGFyc2VyIiwiU3JjVG9EZXN0TGlzdCIsInVsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJsaXN0U3R5bGUiLCJib3JkZXIiLCJSZWFjaFR5cGVHcnAiLCJkaXYiLCJmbGV4R3JvdyIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwidHJhbnNmb3JtIiwiUmVhY2hJY29uIiwic3BhbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJSZWFjaFR5cGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiUmVhY2hUeXBlRGF0YSIsIkdBcnJvd0Rvd25TcGFuIiwicmlnaHQiLCJ0b3AiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbSIsIkljb25NYXAiLCJIb3dUb1JlYWNoVGVtcGxhdGUiLCJsb2NhdGlvbiIsInRyYW5zcG9ydE1vZGVzIiwibWFwIiwibW9kZSIsImkiLCJuYW1lIiwicGFyc2UiLCJkZXNjcmlwdGlvbiIsImRpc3RhbmNlIiwibGVuZ3RoIiwicm93IiwibGluayIsImZyb20iLCJwYXRobmFtZSIsInNsaWNlIiwiaXNSZXF1aXJlZCJdLCJtYXBw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QkQsSUFBSUUsSUFBekIsQ0FBcEIsQ0FBWixDQURELENBREgsQ0FERCxHQUtvQixJQU52QixFQVFFO0FBQUssZUFBVTtBQUFmLEtBQ0UsNkJBQUMsaUJBQUQ7QUFBTSxRQUFLLEdBQUVaLFNBQVNhLFFBQVQsQ0FBa0JDLEtBQWxCLENBQXdCLENBQXhCLENBQTJCLGVBQXhDO0FBQ00sZUFBVTtBQURoQixvQkFERixDQVJGLENBeEJGLENBREssR0F5Q0gsSUF6Q0o7QUEwQ0QsQ0EzQ0Q7O2VBNkNlZixrQjs7QUFFZkEsbUJBQW1CcEMsU0FBbkIsR0FBK0I7QUFDN0JSLFFBQU1TLG1CQUFVQyxNQUFWLENBQWlCa0QsVUFETTtBQUU3QmYsWUFBVXBDLG1CQUFVQyxNQUFWLENBQWlCa0Q7QUFGRSxDQUEvQixDIiwiZmlsZSI6Ikhvdy10by1yZWFjaC10ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5jb25zdCBTdWJIZWFkaW5nID0gZ2xhbW9yb3VzLnAoe1xuICBmb250U2l6ZTogJzE0cHgnLFxuICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gIGNvbG9yOiAnI2NiY2JjYicsXG4gIG1hcmdpbjogJzRweCAwIDAgMCcsXG59KTtcblxuY29uc3QgSGVhZGluZyA9ICh7IGRhdGEsIHRpdGxlLCBoZWFkaW5nLCBzdHlsZUhlYWRpbmcsIHN0eWxlU3ViSGVhZGluZywgdHlwZSwgaXNWaWV3QWxsSGlkZGVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4IG1iMTVcIj5cbiAgICAgIHtcbiAgICAgICAgdHlwZSA9PT0gJ21haW4taGVhZGluZycgP1xuICAgICAgICAgIDxoMiBzdHlsZT17c3R5bGVIZWFkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2lzVmlld0FsbEhpZGRlbiA/ICdwcjAgJyA6ICdwcjY0ICd9IGYxNiBwZmMxIGZ3OSBtMGB9PntkYXRhLnRpdGxlIHx8IHRpdGxlfXtkYXRhLmZvckhlYWRpbmcgPyBgIGZvciAke2RhdGEuZm9ySGVhZGluZ31gIDogbnVsbH08L2gyPlxuICAgICAgICAgIDogPGgyIHN0eWxlPXtzdHlsZUhlYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1ZpZXdBbGxIaWRkZW4gPyAncHIwICcgOiAncHI2NCAnfSBmMTYgcGZjMyBmd2IgbTBgfT57ZGF0YS50aXRsZSB8fCB0aXRsZX17ZGF0YS5mb3JIZWFkaW5nID8gYCBmb3IgJHtkYXRhLmZvckhlYWRpbmd9YCA6IG51bGx9PC9oMj5cbiAgICAgIH1cbiAgICAgIHtkYXRhLmhlYWRpbmcgfHwgaGVhZGluZyA/XG4gICAgICAgIDxTdWJIZWFkaW5nIHN0eWxlPXtzdHlsZVN1YkhlYWRpbmd9IGNsYXNzTmFtZT1cImYxNCBtdDQgZnc0XCI+e2RhdGEuaGVhZGluZyB8fCBoZWFkaW5nfTwvU3ViSGVhZGluZz4gOlxuICAgICAgICBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlSGVhZGluZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3R5bGVTdWJIZWFkaW5nOiBQcm9wVHlwZXMub2JqZWN0LFxuICBpc1ZpZXdBbGxIaWRkZW46IFByb3BUeXBlcy5ib29sXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YToge30sXG4gIHR5cGU6ICcnLFxuICB0aXRsZTogJycsXG4gIGhlYWRpbmc6ICcnLFxuICBzdHlsZUhlYWRpbmc6IHt9LFxuICBzdHlsZVN1YkhlYWRpbmc6IHt9LFxuICBpc1ZpZXdBbGxIaWRkZW46IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQge1BhcnNlcn0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL0hlYWRpbmcnO1xuaW1wb3J0IHtGbGlnaHRzLCBUYXhpQ2FiLCBUcmFpbiwgU2hpcCwgRG93bkFycm93fSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcblxuY29uc3QgU3JjVG9EZXN0TGlzdCA9IGdsYW1vcm91cy51bCh7XG4gIG1hcmdpbjogJzAnLFxuICBwYWRkaW5nOiAnNHB4IDAgMCAwJyxcbiAgJyYgbGknOiB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMjRweCcsXG4gICAgcGFkZGluZzogJzNweCAxNXB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2Q0ZDRkNCcsXG4gICAgbWFyZ2luOiAnMCA0cHggNHB4IDAnLFxuICB9LFxufSk7XG5jb25zdCBSZWFjaFR5cGVHcnAgPSBnbGFtb3JvdXMuZGl2KHtcbiAgJyYgLnJlYWNoVHlwZUl0ZW0nOiB7XG4gICAgZmxleEdyb3c6ICcxJyxcbiAgfSxcbiAgJyYgLnJlYWNoVHlwZUl0ZW06bGFzdC1jaGlsZCc6IHtcbiAgICBtYXJnaW5SaWdodDogJzAnLFxuICB9LFxuICAnJiAucmVhY2hUeXBlSXRlbVJhZGlvJzoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnJiArIGxhYmVsICsgLnJlYWNoVHlwZUl0ZW1SYWRpb0RhdGEnOiB7XG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgIH0sXG4gICAgJyY6Y2hlY2tlZCArIGxhYmVsICsgLnJlYWNoVHlwZUl0ZW1SYWRpb0RhdGEnOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblRvcDogJzhweCcsXG4gICAgfSxcbiAgICAnJjpjaGVja2VkICsgbGFiZWwgLmFycm93QnV0dG9uJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxuICAgIH0sXG4gIH0sXG59KTtcbmNvbnN0IFJlYWNoSWNvbiA9IGdsYW1vcm91cy5zcGFuKHtcbiAgbWluV2lkdGg6ICcyNHB4JyxcbiAgbWF4V2lkdGg6ICcyNHB4JyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgaGVpZ2h0OiAnMjBweCcsXG59KTtcbmNvbnN0IFJlYWNoVHlwZSA9IGdsYW1vcm91cy5kaXYoe1xuICBkaXNwbGF5OiAnYmxvY2snLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgJyYgLmljb25Cb3gnOiB7XG4gICAgd2lkdGg6ICcyMHB4JyxcbiAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgfSxcbiAgfSxcbiAgJyYgLmFic29sdXRlLXdlYnNpdGU+c3ZnJzoge1xuICAgIHdpZHRoOiAnMjBweCAhaW1wb3J0YW50JyxcbiAgICBoZWlnaHQ6ICcxMnB4ICFpbXBvcnRhbnQnLFxuICB9XG59KTtcbmNvbnN0IFJlYWNoVHlwZURhdGEgPSBnbGFtb3JvdXMuZGl2KHt9KTtcbmNvbnN0IEdBcnJvd0Rvd25TcGFuID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzMwcHgnLFxuICBoZWlnaHQ6ICczMHB4JyxcbiAgcmlnaHQ6ICcxMHB4JyxcbiAgdG9wOiAnMTBweCcsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBhbGlnbkl0ZW06ICdjZW50ZXInLFxuICAnJiBzdmcnOiB7XG4gICAgd2lkdGg6ICcxMHB4ICFpbXBvcnRhbnQnLFxuICAgIGhlaWdodDogJzEwcHggIWltcG9ydGFudCcsXG4gIH0sXG59KTtcblxuY29uc3QgSWNvbk1hcCA9IHtcbiAgJ0J5IEFpcic6IDxGbGlnaHRzLz4sXG4gICdCeSBSb2FkJzogPFRheGlDYWIvPixcbiAgJ0J5IFRyYWluJzogPFRyYWluLz4sXG4gICdCeSBTZWEnOiA8U2hpcC8+LFxufTtcblxuY29uc3QgSG93VG9SZWFjaFRlbXBsYXRlID0gKHtkYXRhLCBsb2NhdGlvbn0pID0+IHtcbiAgcmV0dXJuIGRhdGEudHJhbnNwb3J0TW9kZXMgP1xuICAgIDxkaXY+XG4gICAgICA8SGVhZGluZyBkYXRhPXt7XG4gICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICBoZWFkaW5nOiAnUmVhZCBhYm91dCB0aGUgYmVzdCAmIHF1aWNrZXN0IHJvdXRlcyB0byBzYXZlIHRpbWUgJiBtb25leSwgYXMgc3VnZ2VzdGVkIGJ5IG91ciB0cmF2ZWxlcnMnXG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxSZWFjaFR5cGVHcnA+XG4gICAgICAgIHtkYXRhLnRyYW5zcG9ydE1vZGVzICYmIGRhdGEudHJhbnNwb3J0TW9kZXMubWFwKChtb2RlLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFjaFR5cGVJdGVtIHdmdWxsIG1iMTVcIiBrZXk9e2l9PlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJyZWFjaFR5cGVJdGVtc1wiIGRlZmF1bHRDaGVja2VkPXtpID09PSAwfSBpZD17YHJlYWNoVHlwZUl0ZW1SYWRpb2AgKyBpfSB0eXBlPVwiY2hlY2tib3hcIiBjbGFzc05hbWU9XCJyZWFjaFR5cGVJdGVtUmFkaW9cIi8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHJlYWNoVHlwZUl0ZW1SYWRpb2AgKyBpfT5cbiAgICAgICAgICAgICAgPFJlYWNoVHlwZSBjbGFzc05hbWU9XCJmbGV4IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxSZWFjaEljb24gY2xhc3NOYW1lPVwibXIxNVwiPntJY29uTWFwW21vZGUubmFtZV19PC9SZWFjaEljb24+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBmYzMgZjE0IGZ3OSBmbGV4RnVsbFwiPnttb2RlLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8R0Fycm93RG93blNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5ibG9jayBtbDggZmxleCBhbGlnbkNlbnRlciBqdXN0aWZ5Q2VudGVyIHoyIGFycm93QnV0dG9uXCI+PERvd25BcnJvdy8+PC9HQXJyb3dEb3duU3Bhbj5cbiAgICAgICAgICAgICAgPC9SZWFjaFR5cGU+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPFJlYWNoVHlwZURhdGEgY2xhc3NOYW1lPVwibXQ4IG92ZXJmbG93aCBmMTQgZHluYW1pY1RleHRJbmhlcml0IGVsbGlwc2lzX3RocmVlXCI+XG4gICAgICAgICAgICAgIHtwYXJzZXIucGFyc2UobW9kZS5kZXNjcmlwdGlvbil9XG4gICAgICAgICAgICA8L1JlYWNoVHlwZURhdGE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9SZWFjaFR5cGVHcnA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIHtkYXRhICYmIGRhdGEuZGlzdGFuY2UgJiYgZGF0YS5kaXN0YW5jZS5sZW5ndGggP1xuICAgICAgICAgIDxTcmNUb0Rlc3RMaXN0PlxuICAgICAgICAgICAge2RhdGEuZGlzdGFuY2UubWFwKChyb3csIGkpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0+PGg0IGNsYXNzTmFtZT1cImZ3NFwiPjxMaW5rIHRvPXtyb3cubGlua30+e3Jvdy5mcm9tfTwvTGluaz48L2g0PjwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NyY1RvRGVzdExpc3Q+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZG1vcmUtYnRuIHRleHQtcmlnaHQgbXQ4XCI+XG4gICAgICAgICAgPExpbmsgdG89e2Ake2xvY2F0aW9uLnBhdGhuYW1lLnNsaWNlKDApfS9ob3ctdG8tcmVhY2hgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNmYzEgZjE0IGZ3NyBtdDMgYXRfcmVhZG1vcmVidG5cIj5cbiAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA6IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb3dUb1JlYWNoVGVtcGxhdGU7XG5cbkhvd1RvUmVhY2hUZW1wbGF0ZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==