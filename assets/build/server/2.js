require("source-map-support").install();
exports.ids = [2];
exports.modules = {

/***/ "./app-v2/modules/shared/GenericModal.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/GenericModal.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ "react-modal"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIt = _glamorous.default.button({
  position: 'absolute',
  right: '5px',
  top: '0px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '2',
  overflow: 'hidden'
});

const CloseItLeft = _glamorous.default.button({
  position: 'fixed',
  left: '5px',
  top: '3px',
  width: '36px',
  height: '36px',
  padding: '12px',
  zIndex: '6',
  overflow: 'hidden'
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    borderRadius: '0',
    width: '94%',
    maxWidth: '600px',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};
const customStylesFullView = {
  content: {
    right: 'auto',
    overflow: 'auto',
    bottom: 'auto',
    zIndex: '101',
    padding: '0',
    top: 0,
    left: 0,
    borderRadius: '0',
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '50px'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    backgroundColor: 'rgba(0, 0, 0, 1)'
  }
};
let ModalComponent = (_temp = _class = class ModalComponent extends _react.default.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.state.isOpen && nextProps.isOpen) {
      this.openModal();
    }

    if (this.state.isOpen && nextProps.customCloseTrigger) {
      this.closeModal();
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });

    if (this.props.onRequestCloseCustom) {
      this.props.onRequestCloseCustom();
    }

    document.body.style.overflow = '';
  }

  afterOpenModal() {
    this.props.onAfterModalOpen();
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    this.closeModal();
  }

  render() {
    const {
      fullView,
      hasCustomClose,
      hasNoClose,
      isWhiteIcon,
      isTriggerFullView,
      customClass
    } = this.props;
    return _react.default.createElement("div", {
      className: isTriggerFullView ? 'wfull' : ''
    }, !this.props.isOpen ? _react.default.createElement("span", {
      className: "block wfull",
      onClick: this.openModal
    }, this.props.trigger) : null, _react.default.createElement(_reactModal.default, {
      isOpen: this.state.isOpen,
      onAfterOpen: this.afterOpenModal,
      onRequestClose: this.closeModal,
      style: fullView ? customStylesFullView : customStyles,
      contentLabel: "Travel Triangle Modal",
      ariaHideApp: false,
      shouldCloseOnOverlayClick: true,
      className: customClass
    }, hasCustomClose ? _react.default.createElement(CloseItLeft, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })) : _react.default.createElement(CloseIt, {
      onClick: this.closeModal,
      className: `at_close ${hasNoClose ? 'nblock' : ''}`
    }, isWhiteIcon ? _react.default.createElement(_Icon.CloseWhite, {
      className: "block wfull hfull"
    }) : _react.default.createElement(_Icon.CloseDark, {
      className: "block wfull hfull"
    })), this.props.children));
  }

}, _class.propTypes = {
  trigger: _propTypes.default.node,
  children: _propTypes.default.node.isRequired,
  onAfterModalOpen: _propTypes.default.func,
  onRequestCloseCustom: _propTypes.default.func,
  customCloseTrigger: _propTypes.default.bool,
  fullView: _propTypes.default.bool,
  hasCustomClose: _propTypes.default.bool,
  hasNoClose: _propTypes.default.bool,
  isWhiteIcon: _propTypes.default.bool,
  isTriggerFullView: _propTypes.default.bool,
  customClass: _propTypes.default.string
}, _class.defaultProps = {
  onAfterModalOpen: () => {},
  onRequestCloseCustom: () => {},
  customCloseTrigger: false,
  trigger: _react.default.createElement("button", null, "Please supply a custom trigger component"),
  fullView: false,
  hasCustomClose: false,
  hasNoClose: false,
  isWhiteIcon: false,
  isTriggerFullView: false,
  customClass: ''
}, _temp);
var _default = ModalComponent;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvR2VuZXJpY01vZGFsLmpzIl0sIm5hbWVzIjpbIkNsb3NlSXQiLCJnbGFtb3JvdXMiLCJidXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJDbG9zZUl0TGVmdCIsImxlZnQiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwiYm90dG9tIiwiYm9yZGVyUmFkaXVzIiwibWF4V2lkdGgiLCJ0cmFuc2Zvcm0iLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiY3VzdG9tU3R5bGVzRnVsbFZpZXciLCJwYWRkaW5nVG9wIiwiTW9kYWxDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJpc09wZW4iLCJvcGVuTW9kYWwiLCJiaW5kIiwiY2xvc2VNb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwiVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJjdXN0b21DbG9zZVRyaWdnZXIiLCJzZXRTdGF0ZSIsInByb3BzIiwib25SZXF1ZXN0Q2xvc2VDdXN0b20iLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm9uQWZ0ZXJNb2RhbE9wZW4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImZ1bGxWaWV3IiwiaGFzQ3VzdG9tQ2xvc2UiLCJoYXNOb0Nsb3NlIiwiaXNXaGl0ZUljb24iLCJpc1RyaWdnZXJGdWxsVmlldyIsImN1c3RvbUNsYXNzIiwidHJpZ2dlciIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztB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S2pCLFVBQXZCO0FBQW1DLGlCQUFZLFlBQVdnQixhQUFhLFFBQWIsR0FBd0IsRUFBRztBQUFyRixPQUNHQyxjQUFjLDZCQUFDLGdCQUFEO0FBQVksaUJBQVU7QUFBdEIsTUFBZCxHQUE2RCw2QkFBQyxlQUFEO0FBQVcsaUJBQVU7QUFBckIsTUFEaEUsQ0FmTixFQW1CRyxLQUFLWCxLQUFMLENBQVdlLFFBbkJkLENBUEYsQ0FERjtBQStCRDs7QUE5RzBDLEMsU0FFcENDLFMsR0FBWTtBQUNqQkYsV0FBU0csbUJBQVVDLElBREY7QUFFakJILFlBQVVFLG1CQUFVQyxJQUFWLENBQWVDLFVBRlI7QUFHakJkLG9CQUFrQlksbUJBQVVHLElBSFg7QUFJakJuQix3QkFBc0JnQixtQkFBVUcsSUFKZjtBQUtqQnRCLHNCQUFvQm1CLG1CQUFVSSxJQUxiO0FBTWpCYixZQUFVUyxtQkFBVUksSUFOSDtBQU9qQlosa0JBQWdCUSxtQkFBVUksSUFQVDtBQVFqQlgsY0FBWU8sbUJBQVVJLElBUkw7QUFTakJWLGVBQWFNLG1CQUFVSSxJQVROO0FBVWpCVCxxQkFBbUJLLG1CQUFVSSxJQVZaO0FBV2pCUixlQUFhSSxtQkFBVUs7QUFYTixDLFNBY1pDLFksR0FBZTtBQUNwQmxCLG9CQUFrQixNQUFNLENBQ3ZCLENBRm1CO0FBR3BCSix3QkFBc0IsTUFBTSxDQUMzQixDQUptQjtBQUtwQkgsc0JBQW9CLEtBTEE7QUFNcEJnQixXQUFTLHdGQU5XO0FBT3BCTixZQUFVLEtBUFU7QUFRcEJDLGtCQUFnQixLQVJJO0FBU3BCQyxjQUFZLEtBVFE7QUFVcEJDLGVBQWEsS0FWTztBQVdwQkMscUJBQW1CLEtBWEM7QUFZcEJDLGVBQWE7QUFaTyxDO2VBaUdUM0IsYyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgQ2xvc2VEYXJrLCBDbG9zZVdoaXRlfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmNvbnN0IENsb3NlSXQgPSBnbGFtb3JvdXMuYnV0dG9uKHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHJpZ2h0OiAnNXB4JyxcbiAgdG9wOiAnMHB4JyxcbiAgd2lkdGg6ICczNnB4JyxcbiAgaGVpZ2h0OiAnMzZweCcsXG4gIHBhZGRpbmc6ICcxMnB4JyxcbiAgekluZGV4OiAnMicsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pO1xuXG5jb25zdCBDbG9zZUl0TGVmdCA9IGdsYW1vcm91cy5idXR0b24oe1xuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgbGVmdDogJzVweCcsXG4gIHRvcDogJzNweCcsXG4gIHdpZHRoOiAnMzZweCcsXG4gIGhlaWdodDogJzM2cHgnLFxuICBwYWRkaW5nOiAnMTJweCcsXG4gIHpJbmRleDogJzYnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG59KTtcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgY29udGVudDoge1xuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgcmlnaHQ6ICdhdXRvJyxcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIHpJbmRleDogJzEwMScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIGJvcmRlclJhZGl1czogJzAnLFxuICAgIHdpZHRoOiAnOTQlJyxcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gIH0sXG4gIG92ZXJsYXk6IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgekluZGV4OiAxMDAxLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43NSknXG4gIH0sXG59O1xuY29uc3QgY3VzdG9tU3R5bGVzRnVsbFZpZXcgPSB7XG4gIGNvbnRlbnQ6IHtcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgekluZGV4OiAnMTAxJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyUmFkaXVzOiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6ICc1MHB4J1xuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHpJbmRleDogMTAwMSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDEpJ1xuICB9LFxufTtcblxuY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgb25BZnRlck1vZGFsT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZXF1ZXN0Q2xvc2VDdXN0b206IFByb3BUeXBlcy5mdW5jLFxuICAgIGN1c3RvbUNsb3NlVHJpZ2dlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBoYXNOb0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc1doaXRlSWNvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IFByb3BUeXBlcy5ib29sLFxuICAgIGN1c3RvbUNsYXNzOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkFmdGVyTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgfSxcbiAgICBvblJlcXVlc3RDbG9zZUN1c3RvbTogKCkgPT4ge1xuICAgIH0sXG4gICAgY3VzdG9tQ2xvc2VUcmlnZ2VyOiBmYWxzZSxcbiAgICB0cmlnZ2VyOiA8YnV0dG9uPlBsZWFzZSBzdXBwbHkgYSBjdXN0b20gdHJpZ2dlciBjb21wb25lbnQ8L2J1dHRvbj4sXG4gICAgZnVsbFZpZXc6IGZhbHNlLFxuICAgIGhhc0N1c3RvbUNsb3NlOiBmYWxzZSxcbiAgICBoYXNOb0Nsb3NlOiBmYWxzZSxcbiAgICBpc1doaXRlSWNvbjogZmFsc2UsXG4gICAgaXNUcmlnZ2VyRnVsbFZpZXc6IGZhbHNlLFxuICAgIGN1c3RvbUNsYXNzOiAnJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VNb2RhbCA9IHRoaXMuY2xvc2VNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWZ0ZXJPcGVuTW9kYWwgPSB0aGlzLmFmdGVyT3Blbk1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNPcGVuICYmIG5leHRQcm9wcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmlzT3BlbiAmJiBuZXh0UHJvcHMuY3VzdG9tQ2xvc2VUcmlnZ2VyKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc09wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSkge1xuICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZUN1c3RvbSgpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gIH1cblxuICBhZnRlck9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uQWZ0ZXJNb2RhbE9wZW4oKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZ1bGxWaWV3LCBoYXNDdXN0b21DbG9zZSwgaGFzTm9DbG9zZSwgaXNXaGl0ZUljb24sIGlzVHJpZ2dlckZ1bGxWaWV3LCBjdXN0b21DbGFzcyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVHJpZ2dlckZ1bGxWaWV3ID8gJ3dmdWxsJzogJyd9PlxuICAgICAgICB7IXRoaXMucHJvcHMuaXNPcGVuID9cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB3ZnVsbFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnRyaWdnZXJ9XG4gICAgICAgICAgPC9zcGFuPiA6XG4gICAgICAgICAgbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59XG4gICAgICAgICAgb25BZnRlck9wZW49e3RoaXMuYWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICAgICBzdHlsZT17ZnVsbFZpZXcgPyBjdXN0b21TdHlsZXNGdWxsVmlldyA6IGN1c3RvbVN0eWxlc31cbiAgICAgICAgICBjb250ZW50TGFiZWw9XCJUcmF2ZWwgVHJpYW5nbGUgTW9kYWxcIlxuICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y3VzdG9tQ2xhc3N9XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBoYXNDdXN0b21DbG9zZSA/XG4gICAgICAgICAgICAgIDxDbG9zZUl0TGVmdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0TGVmdD4gOlxuICAgICAgICAgICAgICA8Q2xvc2VJdCBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9IGNsYXNzTmFtZT17YGF0X2Nsb3NlICR7aGFzTm9DbG9zZSA/ICduYmxvY2snIDogJyd9YH0+XG4gICAgICAgICAgICAgICAge2lzV2hpdGVJY29uID8gPENsb3NlV2hpdGUgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPiA6IDxDbG9zZURhcmsgY2xhc3NOYW1lPVwiYmxvY2sgd2Z1bGwgaGZ1bGxcIiAvPn1cbiAgICAgICAgICAgICAgPC9DbG9zZUl0PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9