require("source-map-support").install();
exports.ids = ["mkt-section1"];
exports.modules = {

/***/ "./app-v2/modules/mkt/section1/Section1.js":
/*!*************************************************!*\
  !*** ./app-v2/modules/mkt/section1/Section1.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _isEmpty2 = _interopRequireDefault(__webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js"));

var _sectionOneCm = _interopRequireDefault(__webpack_require__(/*! ./sectionOne.cm.scss */ "./app-v2/modules/mkt/section1/sectionOne.cm.scss"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _PlaceHolder = _interopRequireDefault(__webpack_require__(/*! ./component/PlaceHolder */ "./app-v2/modules/mkt/section1/component/PlaceHolder.js"));

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Section1 = (_temp2 = _class = class Section1 extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showFormPlaceholder: true
    }, this.renderSequentialForm = () => {
      if (window.ReactReduxSequentialForm) {
        window.ReactReduxSequentialForm.render();
        const sequentialFormPlaceholder = document.querySelector('.sequential_form_placeholder_exp');

        if (sequentialFormPlaceholder) {
          sequentialFormPlaceholder.style.display = 'none';
        }
      }
    }, this.isGenericSection = () => {
      const {
        slug
      } = this.props;
      return slug.startsWith('tour-packages') || slug.startsWith('rct-tour-packages');
    }, _temp;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    this.renderSequentialForm();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.renderSequentialForm();
  }

  componentDidMount() {
    const check = setInterval(() => {
      if (window.ReactReduxSequentialForm) {
        this.setState({
          showFormPlaceholder: false
        }, () => {
          this.renderSequentialForm();
          clearInterval(check);
        });
      }
    }, 100);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(this.props.slug === nextProps.slug && this.state.showFormPlaceholder === nextState.showFormPlaceholder);
  }

  render() {
    const {
      data
    } = this.props;

    if ((0, _isEmpty2.default)(data)) {
      return null;
    }

    const {
      heading,
      subHeading
    } = data;
    return _react.default.createElement("div", null, _react.default.createElement("div", {
      className: "relative z1"
    }, _react.default.createElement("div", {
      className: _sectionOneCm.default.logoContainer
    }, _react.default.createElement(_reactRouter.Link, {
      to: "/"
    }, _react.default.createElement("img", {
      className: "img-responsive",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAQCAMAAADkmPf9AAAA/FBMVEUAAAD////////////////////////////////////////////////////////J//9WxMH////////////////////////7///b///////////////////////////////+///////////////////6/v7///////////////////9WxMH///////9WxMH///////////9YxcL8//////////////////9XxMH////9///+//9WxMH///9WxMH///////////9cyMJbycnT9vZWxMFXxMFWxMFWxMFXxMJYxcNZxcNWw8FXxMBXxMH///9Yw8BXx8H///9Ww8Cz3tLvAAAAUnRSTlMA+jWzTzd0K/UIhsbBtwsD+X4W696diiIB47x5X1hLQR3XjWpbJxOkkET38ebbrZVwZGEuEO3RzLWDOjHNyL2qoFMeFwb+wqSCbz816oqHXlEpB+chuQAAApJJREFUSMfN0dl2okAUheFdEAWNSouKiAlOUeM8RqMmnXnu8fD+79J1CmPiSlZftv3dILWow2+B92x/hB1L+ccVogF2yNWKniDmY3du92mtnQIMjU1QNgzDfnsGjciGgYbGDJQjU4RsTUml5Lb6LYC84fIhL8vgmzr/NhoALM2fWJA7+QbT9SDA7eezFEoCCJsuoPOlpyH0ME5l6dUBDogNEKc9hGrr/1Hii4gDCYoBKNI51NARsEdRoMRjKiuk6RDgNXYJ4CX4Wi+QMuR5jk5zJyIz0tEm9aD8CjrXS1rTITP0aDRqvMtYOg6ZTg0t8oaLAvlhhiUHayrDnKgMoy2qo1zWfsvw5KAVgMdAdnSJ1cGO6BiQGTZQkbOkm2/yGdchJWNzRhGMMzYoA8iMODCiYphxRQ41VYbopTijyceCGDYZ/LhyFgTB6SRDRFlsZbS0mpiDnQbSU2xG7AqcIUzT9D/JKNGl1tqnUpiROEklhc0ZRbrgjKxcTSeTg02GGiRH3twF3LGSHYPtDKkQgTQO2JffKyGXmlAZlWQyGfk0gzmWypjQbHhBac5wdfJkRo+mGFRE5S0jKweV1DtUh3ZC/nZGrRq+87oTKGdWUYZNgb9/FP1n18xDZeSIdS2ZgUaWKCpXFgC6lQ8fpR+E+stMajvDdhP8Fvc+WHu0zqmFMGOey+WqMuNc13V76zTicnZCncbU3M/n81U65AxoQmbkT8irejSTGXO5s7xHMzXI6gSvHWWEDkWVM0RDbio08PTlVeel7qxLBctiwZceQu0uZ4gFcClq8NqxoTgCUDY9JEwANTEE6klBZrOMopAKri/UFc+B0umPr/FvxGwLH3wPgruzH88Wduv+YXyD3XPxP/gDG3CSXKLbGNwAAAAASUVORK5CYII=",
      alt: "Travel Triangle"
    }))), _react.default.createElement("div", {
      className: "col-xs-12 p0 mt24"
    }, _react.default.createElement("div", {
      className: "row row-"
    }, _react.default.createElement("div", {
      className: `col-xs-12 p0 ${_sectionOneCm.default.headerForm}`
    }, _react.default.createElement("div", {
      className: `text-capitalize mb48 ${_sectionOneCm.default.HeaderTitleTxt} `
    }, _react.default.createElement("h2", {
      className: `${_sectionOneCm.default.heading} ${this.isGenericSection() ? _sectionOneCm.default.small : _sectionOneCm.default.large}`
    }, heading), _react.default.createElement("div", {
      className: _sectionOneCm.default.text
    }, _react.default.createElement("div", {
      className: _sectionOneCm.default.textBar
    }), _react.default.createElement("span", {
      className: `${_sectionOneCm.default.subHeading} ${this.isGenericSection() ? _sectionOneCm.default.smallFont : _sectionOneCm.default.bigFont}`
    }, subHeading), _react.default.createElement("div", {
      className: _sectionOneCm.default.textBar
    }))), _react.default.createElement("div", {
      id: "reactReduxSequentialForm",
      className: "col-xs-12 p0 main-form-container"
    }), this.state.showFormPlaceholder ? _react.default.createElement(_PlaceHolder.default, null) : null)))));
  }

}, _class.propTypes = {
  data: _propTypes.default.object,
  slug: _propTypes.default.string
}, _class.defaultProps = {
  data: {},
  slug: 'tour-packages'
}, _temp2);
exports.default = Section1;

/***/ }),

/***/ "./app-v2/modules/mkt/section1/component/PlaceHolder.js":
/*!**************************************************************!*\
  !*** ./app-v2/modules/mkt/section1/component/PlaceHolder.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamor = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _placeholderCm = _interopRequireDefault(__webpack_require__(/*! ./placeholder.cm.scss */ "./app-v2/modules/mkt/section1/component/placeholder.cm.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const glamorousAnimation = () => {
  const waveFull = _glamor.css.keyframes({
    '0%': {
      transform: 'rotate(0deg)'
    },
    '50%': {
      transform: 'rotate(40deg)'
    },
    'to': {
      transform: 'rotate(80deg)'
    }
  });

  return {
    position: 'relative',
    background: '#f7f7f7',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    '&::after': {
      content: ' ',
      display: 'block',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '100%',
      height: '100%',
      transform: 'translateX(0)',
      background: '#efefef',
      animation: `${waveFull} 1s ease-in-out infinite`
    }
  };
};

const AnimationController = (0, _glamorous.default)('div')(glamorousAnimation);
let PlaceHolder = class PlaceHolder extends _react.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

  render() {
    return _react.default.createElement("div", {
      id: "sequential-form-placeholder",
      className: `${_placeholderCm.default.formPlaceholder} sequential_form_placeholder_exp`
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.headerPlaceholder
    }, _react.default.createElement("h4", null, "Start Planning")), _react.default.createElement("div", {
      className: _placeholderCm.default.bannerImagePlaceholder
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.loads
    })), _react.default.createElement("div", {
      className: _placeholderCm.default.fieldContainer
    }, _react.default.createElement("p", null, "To"), _react.default.createElement("div", {
      className: _placeholderCm.default.inputContainerPlaceholder
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.loads
    }))), _react.default.createElement("div", {
      className: _placeholderCm.default.fieldContainer
    }, _react.default.createElement("p", null, "From"), _react.default.createElement("div", {
      className: `${_placeholderCm.default.inputContainerPlaceholder} ${_placeholderCm.default.from}`
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.loads
    }))), _react.default.createElement("div", {
      className: _placeholderCm.default.footerPlaceholder
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.footerPlaceholderButton
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.loads
    })), _react.default.createElement("div", {
      className: _placeholderCm.default.footerPlaceholderButton
    }, _react.default.createElement("div", {
      className: _placeholderCm.default.loads
    }))));
  }

};
var _default = PlaceHolder;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mkt/section1/component/placeholder.cm.scss":
/*!*******************************************************************!*\
  !*** ./app-v2/modules/mkt/section1/component/placeholder.cm.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bannerImagePlaceholder": "oL2I5HxGbwPATaBTyZAy2",
	"inputContainerPlaceholder": "_3uCdOjtW4HtZgupEa1JO-_",
	"from": "_3QCjuQlM0PY8x4as7w8yxv",
	"formPlaceholder": "_29PIMIhOFa_QqCi4zwb-AW",
	"fieldContainer": "_1a9m8x8WZ0JvMwivpYHM6g",
	"headerPlaceholder": "_37U366JPPqe40LRc8Jgj9q",
	"footerPlaceholder": "_25OMgh1Q77uLWWpiMNd_23",
	"footerPlaceholderButton": "_1HbxvyPgrtsCkNPLXKR8Iv",
	"placeholderBox": "_3r3aEzztTyrwOkNk29_Nd6",
	"wave-full": "_1AlcQozgNA7U8NOtBl7RA9",
	"loads": "MEjQ9gzf0kpV6veYNJkrp",
	"placeload": "_1SNoIX9eN90pEekeJZPm1v"
};

/***/ }),

/***/ "./app-v2/modules/mkt/section1/index.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/mkt/section1/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _Section = _interopRequireDefault(__webpack_require__(/*! ./Section1 */ "./app-v2/modules/mkt/section1/Section1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const container = (0, _reactRedux.connect)(state => ({
  data: state.mkt.data.section1
}))(_Section.default);
var _default = {
  container,
  actions: {},
  defaultAction: null
};
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/mkt/section1/sectionOne.cm.scss":
/*!********************************************************!*\
  !*** ./app-v2/modules/mkt/section1/sectionOne.cm.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"logoContainer": "_1bRy7FNVdWWnm6a4UNUuaF",
	"HeaderTitleTxt": "_2Yh_MAe4Hn7wEo8iI96n1u",
	"text": "_37IWj8_OcQX3aw-A86bi4e",
	"textBar": "_19udidd_BPmrDJJqSRb1te",
	"heading": "_2B1tbSLIBbrf_LxrQRVFrq",
	"small": "_3uQCoxcJBmfaRqSK6FyuZr",
	"large": "_20DPz_6pE_JYwjAcxf4qsy",
	"subHeading": "_1k6zthaLZ3Dsh0CQe-GE-F",
	"bigFont": "_3VyrKc3I4bJjpprea6iaP6",
	"smallFont": "ZA1aRnYQBdaloxoTZFVtT"
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3Qvc2VjdGlvbjEvU2VjdGlvbjEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWt0L3NlY3Rpb24xL2NvbXBvbmVudC9QbGFjZUhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ta3Qvc2VjdGlvbjEvY29tcG9uZW50L3BsYWNlaG9sZGVyLmNtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvbWt0L3NlY3Rpb24xL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL21rdC9zZWN0aW9uMS9zZWN0aW9uT25lLmNtLnNjc3MiXSwibmFtZXMiOlsiU2VjdGlvbjEiLCJDb21wb25lbnQiLCJzdGF0ZSIsInNob3dGb3JtUGxhY2Vob2xkZXIiLCJyZW5kZXJTZXF1ZW50aWFsRm9ybSIsIndpbmRvdyIsIlJlYWN0UmVkdXhTZXF1ZW50aWFsRm9ybSIsInJlbmRlciIsInNlcXVlbnRpYWxGb3JtUGxhY2Vob2xkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJpc0dlbmVyaWNTZWN0aW9uIiwic2x1ZyIsInByb3BzIiwic3RhcnRzV2l0aCIsIlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwibmV4dENvbnRleHQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsImNvbXBvbmVudERpZE1vdW50IiwiY2hlY2siLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsInNob3VsZENvbXBvbmVudFVwZGF0ZSIsImRhdGEiLCJoZWFkaW5nIiwic3ViSGVhZGluZyIsInN0eWxlcyIsImxvZ29Db250YWluZXIiLCJoZWFkZXJGb3JtIiwiSGVhZGVyVGl0bGVUeHQiLCJzbWFsbCIsImxhcmdlIiwidGV4dCIsInRleHRCYXIiLCJzbWFsbEZvbnQiLCJiaWdGb250IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiZ2xhbW9yb3VzQW5pbWF0aW9uIiwid2F2ZUZ1bGwiLCJjc3MiLCJrZXlmcmFtZXMiLCJ0cmFuc2Zvcm0iLCJwb3NpdGlvbiIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwiY29udGVudCIsInRvcCIsImJvdHRvbSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbkNvbnRyb2xsZXIiLCJQbGFjZUhvbGRlciIsImZvcm1QbGFjZWhvbGRlciIsImhlYWRlclBsYWNlaG9sZGVyIiwiYmFubmVySW1hZ2VQbGFjZWhvbGRlciIsImxvYWRzIiwiZmllbGRDb250YWluZXIiLCJpbnB1dENvbnRhaW5lclBsYWNlaG9sZGVyIiwiZnJvbSIsImZvb3RlclBsYWNlaG9sZGVyIiwiZm9vdGVyUGxhY2Vob2xkZXJCdXR0b24iLCJjb250YWluZXIiLCJta3QiLCJzZWN0aW9uMSIsImFjdGlvbnMiLCJkZWZhdWx0QWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxRLHNCQUFOLE1BQU1BLFFBQU4sU0FBdUJDLGdCQUF2QixDQUFpQztBQUFBO0FBQUE7O0FBQUEsd0NBVzlDQyxLQVg4QyxHQVd0QztBQUNOQywyQkFBcUI7QUFEZixLQVhzQyxPQWU5Q0Msb0JBZjhDLEdBZXZCLE1BQU07QUFDM0IsVUFBSUMsT0FBT0Msd0JBQVgsRUFBcUM7QUFDbkNELGVBQU9DLHdCQUFQLENBQWdDQyxNQUFoQztBQUNBLGNBQU1DLDRCQUE0QkMsU0FBU0MsYUFBVCxDQUF1QixrQ0FBdkIsQ0FBbEM7O0FBRUEsWUFBSUYseUJBQUosRUFBK0I7QUFDN0JBLG9DQUEwQkcsS0FBMUIsQ0FBZ0NDLE9BQWhDLEdBQTBDLE1BQTFDO0FBQ0Q7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REYsRUFFRTtBQUFLLGlCQUFXbkMsdUJBQU9vQztBQUF2QixPQUNFO0FBQUssaUJBQVdwQyx1QkFBT2tDO0FBQXZCLE1BREYsQ0FGRixDQVBGLEVBYUU7QUFBSyxpQkFBV2xDLHVCQUFPbUM7QUFBdkIsT0FDRSwrQ0FERixFQUVFO0FBQUssaUJBQVksR0FBRW5DLHVCQUFPb0MseUJBQTBCLElBQUdwQyx1QkFBT3FDLElBQUs7QUFBbkUsT0FDRTtBQUFLLGlCQUFXckMsdUJBQU9rQztBQUF2QixNQURGLENBRkYsQ0FiRixFQW1CRTtBQUFLLGlCQUFXbEMsdUJBQU9zQztBQUF2QixPQUNFO0FBQUssaUJBQVd0Qyx1QkFBT3VDO0FBQXZCLE9BQ0U7QUFBSyxpQkFBV3ZDLHVCQUFPa0M7QUFBdkIsTUFERixDQURGLEVBSUU7QUFBSyxpQkFBV2xDLHVCQUFPdUM7QUFBdkIsT0FDRTtBQUFLLGlCQUFXdkMsdUJBQU9rQztBQUF2QixNQURGLENBSkYsQ0FuQkYsQ0FERjtBQThCRDs7QUF4Q2lDLEM7ZUEyQ3JCSixXOzs7Ozs7Ozs7Ozs7QUNoRmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7O0FBRUE7Ozs7QUFFQSxNQUFNVSxZQUFZLHlCQUNoQnhFLFVBQVU7QUFBRTZCLFFBQU03QixNQUFNeUUsR0FBTixDQUFVNUMsSUFBVixDQUFlNkM7QUFBdkIsQ0FBVixDQURnQixFQUVoQjVFLGdCQUZnQixDQUFsQjtlQUllO0FBQ2IwRSxXQURhO0FBRWJHLFdBQVMsRUFGSTtBQUdiQyxpQkFBZTtBQUhGLEM7Ozs7Ozs7Ozs7OztBQ1JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Im1rdC1zZWN0aW9uMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IF9pc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlY3Rpb25PbmUuY20uc2Nzcyc7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFBsYWNlSG9sZGVyIGZyb20gJy4vY29tcG9uZW50L1BsYWNlSG9sZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbjEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRhdGE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRhdGE6IHt9LFxuICAgIHNsdWc6ICd0b3VyLXBhY2thZ2VzJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93Rm9ybVBsYWNlaG9sZGVyOiB0cnVlXG4gIH07XG5cbiAgcmVuZGVyU2VxdWVudGlhbEZvcm0gPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5SZWFjdFJlZHV4U2VxdWVudGlhbEZvcm0pIHtcbiAgICAgIHdpbmRvdy5SZWFjdFJlZHV4U2VxdWVudGlhbEZvcm0ucmVuZGVyKCk7XG4gICAgICBjb25zdCBzZXF1ZW50aWFsRm9ybVBsYWNlaG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcXVlbnRpYWxfZm9ybV9wbGFjZWhvbGRlcl9leHAnKTtcblxuICAgICAgaWYgKHNlcXVlbnRpYWxGb3JtUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgc2VxdWVudGlhbEZvcm1QbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICB0aGlzLnJlbmRlclNlcXVlbnRpYWxGb3JtKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgdGhpcy5yZW5kZXJTZXF1ZW50aWFsRm9ybSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2hlY2sgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LlJlYWN0UmVkdXhTZXF1ZW50aWFsRm9ybSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Zvcm1QbGFjZWhvbGRlcjogZmFsc2UgfSwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyU2VxdWVudGlhbEZvcm0oKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGNoZWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGlzR2VuZXJpY1NlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBzbHVnLnN0YXJ0c1dpdGgoJ3RvdXItcGFja2FnZXMnKSB8fCBzbHVnLnN0YXJ0c1dpdGgoJ3JjdC10b3VyLXBhY2thZ2VzJyk7XG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgIHJldHVybiAhKHRoaXMucHJvcHMuc2x1ZyA9PT0gbmV4dFByb3BzLnNsdWcgJiYgdGhpcy5zdGF0ZS5zaG93Rm9ybVBsYWNlaG9sZGVyID09PSBuZXh0U3RhdGUuc2hvd0Zvcm1QbGFjZWhvbGRlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKF9pc0VtcHR5KGRhdGEpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGhlYWRpbmcsIHN1YkhlYWRpbmcgfSA9IGRhdGE7XG5cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHoxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlZQUFBQVFDQU1BQUFEa21QZjlBQUFBL0ZCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL0ovLzlXeE1ILy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vNy8vL2IvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKy8vLy8vLy8vLy8vLy8vLy8vLy82L3Y3Ly8vLy8vLy8vLy8vLy8vLy8vLzlXeE1ILy8vLy8vLzlXeE1ILy8vLy8vLy8vLy85WXhjTDgvLy8vLy8vLy8vLy8vLy8vLy85WHhNSC8vLy85Ly8vKy8vOVd4TUgvLy85V3hNSC8vLy8vLy8vLy8vOWN5TUpieWNuVDl2Wld4TUZYeE1GV3hNRld4TUZYeE1KWXhjTlp4Y05XdzhGWHhNQlh4TUgvLy85WXc4Qlh4OEgvLy85V3c4Q3ozdEx2QUFBQVVuUlNUbE1BK2pXelR6ZDBLL1VJaHNiQnR3c0QrWDRXNjk2ZGlpSUI0N3g1WDFoTFFSM1hqV3BiSnhPa2tFVDM4ZWJiclpWd1pHRXVFTzNSekxXRE9qSE55TDJxb0ZNZUZ3Yit3cVNDYno4MTZvcUhYbEVwQitjaHVRQUFBcEpKUkVGVVNNZk4wZGwyb2tBVWhlRmRFQVdOU291S2lBbE9VZU04UnFNbW5YbnU4ZkQrNzlKMUNtUGlTbFpmdHYzZElMV293MitCOTJ4L2hCMUwrY2NWb2dGMnlOV0tuaURtWTNkdTkybXRuUUlNalUxUU5nekRmbnNHamNpR2dZYkdESlFqVTRSc1RVbWw1TGI2TFlDODRmSWhMOHZnbXpyL05ob0FMTTJmV0pBNytRYlQ5U0RBN2VlekZFb0NDSnN1b1BPbHB5SDBNRTVsNmRVQkRvZ05FS2M5aEdyci8xSGlpNGdEQ1lvQktOSTUxTkFSc0VkUm9NUmpLaXVrNlJEZ05YWUo0Q1g0V2krUU11UjVqazV6SnlJejB0RW05YUQ4Q2pyWFMxclRJVFAwYURScXZNdFlPZzZaVGcwdDhvYUxBdmxoaGlVSGF5ckRuS2dNb3kycW8xeldmc3Z3NUtBVmdNZEFkblNKMWNHTzZCaVFHVFpRa2JPa20yL3lHZGNoSldOelJoR01NellvQThpTU9EQ2lZcGh4UlE0MVZZYm9wVGlqeWNlQ0dEWVovTGh5RmdUQjZTUkRSRmxzWmJTMG1waURuUWJTVTJ4RzdBcWNJVXpUOUQvSktOR2wxdHFuVXBpUk9Fa2xoYzBaUmJyZ2pLeGNUU2VUZzAyR0dpUkgzdHdGM0xHU0hZUHRES2tRZ1RRTzJKZmZLeUdYbWxBWmxXUXlHZmswZ3ptV3lwalFiSGhCYWM1d2RmSmtSbyttR0ZSRTVTMGpLd2VWMUR0VWgzWkMvblpHclJxKzg3b1RLR2RXVVlaTmdiOS9GUDFuMTh4RFplU0lkUzJaZ1VhV0tDcFhGZ0M2bFE4ZnBSK0Urc3RNYWp2RGRoUDhGdmMrV0h1MHpxbUZNR09leStXcU11TmMxM1Y3NnpUaWNuWkNuY2JVM00vbjgxVTY1QXhvUW1ia1Q4aXJlalNUR1hPNXM3eEhNelhJNmdTdkhXV0VEa1dWTTBSRGJpbzA4UFRsVmVlbDdxeExCY3Rpd1pjZVF1MHVaNGdGY0NscThOcXhvVGdDVURZOUpFd0FOVEVFNmtsQlpyT01vcEFLcmkvVUZjK0IwdW1Qci9GdnhHd0xIM3dQZ3J1ekg4OFdkdXYrWVh5RDNYUHhQL2dERzNDU1hLTGJHTndBQUFBQVNVVk9SSzVDWUlJPVwiXG4gICAgICAgICAgICAgICAgICAgYWx0PVwiVHJhdmVsIFRyaWFuZ2xlXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwMCBtdDI0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLXhzLTEyIHAwICR7c3R5bGVzLmhlYWRlckZvcm19YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0ZXh0LWNhcGl0YWxpemUgbWI0OCAke3N0eWxlcy5IZWFkZXJUaXRsZVR4dH0gYH0+XG4gICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGluZ30gJHt0aGlzLmlzR2VuZXJpY1NlY3Rpb24oKSA/IHN0eWxlcy5zbWFsbCA6IHN0eWxlcy5sYXJnZX1gfT57aGVhZGluZ308L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0QmFyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnN1YkhlYWRpbmd9ICR7dGhpcy5pc0dlbmVyaWNTZWN0aW9uKCkgPyBzdHlsZXMuc21hbGxGb250IDogc3R5bGVzLmJpZ0ZvbnR9YH0+e3N1YkhlYWRpbmd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRCYXJ9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicmVhY3RSZWR1eFNlcXVlbnRpYWxGb3JtXCIgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHAwIG1haW4tZm9ybS1jb250YWluZXJcIiAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dGb3JtUGxhY2Vob2xkZXIgPyA8UGxhY2VIb2xkZXIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGxhY2Vob2xkZXIuY20uc2Nzcyc7XG5cbmNvbnN0IGdsYW1vcm91c0FuaW1hdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgd2F2ZUZ1bGwgPSBjc3Mua2V5ZnJhbWVzKHtcbiAgICAnMCUnOiB7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSxcbiAgICAnNTAlJzogeyB0cmFuc2Zvcm06ICdyb3RhdGUoNDBkZWcpJyB9LFxuICAgICd0byc6IHsgdHJhbnNmb3JtOiAncm90YXRlKDgwZGVnKScgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2Y3ZjdmNycsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG5cbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnICcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG4gICAgICBiYWNrZ3JvdW5kOiAnI2VmZWZlZicsXG4gICAgICBhbmltYXRpb246IGAke3dhdmVGdWxsfSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZWBcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBBbmltYXRpb25Db250cm9sbGVyID0gZ2xhbW9yb3VzKCdkaXYnKShnbGFtb3JvdXNBbmltYXRpb24pO1xuXG5jbGFzcyBQbGFjZUhvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInNlcXVlbnRpYWwtZm9ybS1wbGFjZWhvbGRlclwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZvcm1QbGFjZWhvbGRlcn0gc2VxdWVudGlhbF9mb3JtX3BsYWNlaG9sZGVyX2V4cGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclBsYWNlaG9sZGVyfT5cbiAgICAgICAgICA8aDQ+U3RhcnQgUGxhbm5pbmc8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYW5uZXJJbWFnZVBsYWNlaG9sZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRzfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRDb250YWluZXJ9PlxuICAgICAgICAgIDxwPlRvPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJQbGFjZWhvbGRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRzfT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRDb250YWluZXJ9PlxuICAgICAgICAgIDxwPkZyb208L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dENvbnRhaW5lclBsYWNlaG9sZGVyfSAke3N0eWxlcy5mcm9tfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2Fkc30+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclBsYWNlaG9sZGVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclBsYWNlaG9sZGVyQnV0dG9ufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZHN9PjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyUGxhY2Vob2xkZXJCdXR0b259PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2Fkc30+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZUhvbGRlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhbm5lckltYWdlUGxhY2Vob2xkZXJcIjogXCJvTDJJNUh4R2J3UEFUYUJUeVpBeTJcIixcblx0XCJpbnB1dENvbnRhaW5lclBsYWNlaG9sZGVyXCI6IFwiXzN1Q2RPanRXNEh0Wmd1cEVhMUpPLV9cIixcblx0XCJmcm9tXCI6IFwiXzNRQ2p1UWxNMFBZOHg0YXM3dzh5eHZcIixcblx0XCJmb3JtUGxhY2Vob2xkZXJcIjogXCJfMjlQSU1JaE9GYV9RcUNpNHp3Yi1BV1wiLFxuXHRcImZpZWxkQ29udGFpbmVyXCI6IFwiXzFhOW04eDhXWjBKdk13aXZwWUhNNmdcIixcblx0XCJoZWFkZXJQbGFjZWhvbGRlclwiOiBcIl8zN1UzNjZKUFBxZTQwTFJjOEpnajlxXCIsXG5cdFwiZm9vdGVyUGxhY2Vob2xkZXJcIjogXCJfMjVPTWdoMVE3N3VMV1dwaU1OZF8yM1wiLFxuXHRcImZvb3RlclBsYWNlaG9sZGVyQnV0dG9uXCI6IFwiXzFIYnh2eVBncnRzQ2tOUExYS1I4SXZcIixcblx0XCJwbGFjZWhvbGRlckJveFwiOiBcIl8zcjNhRXp6dFR5cndPa05rMjlfTmQ2XCIsXG5cdFwid2F2ZS1mdWxsXCI6IFwiXzFBbGNRb3pnTkE3VThOT3RCbDdSQTlcIixcblx0XCJsb2Fkc1wiOiBcIk1FalE5Z3pmMGtwVjZ2ZVlOSmtycFwiLFxuXHRcInBsYWNlbG9hZFwiOiBcIl8xU05vSVg5ZU45MHBFZWtlSlpQbTF2XCJcbn07IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFNlY3Rpb24xIGZyb20gJy4vU2VjdGlvbjEnO1xuXG5jb25zdCBjb250YWluZXIgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoeyBkYXRhOiBzdGF0ZS5ta3QuZGF0YS5zZWN0aW9uMSwgfSlcbikoU2VjdGlvbjEpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnRhaW5lcixcbiAgYWN0aW9uczoge30sXG4gIGRlZmF1bHRBY3Rpb246IG51bGwsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9nb0NvbnRhaW5lclwiOiBcIl8xYlJ5N0ZOVmRXV25tNmE0VU5VdWFGXCIsXG5cdFwiSGVhZGVyVGl0bGVUeHRcIjogXCJfMlloX01BZTRIbjd3RW84aUk5Nm4xdVwiLFxuXHRcInRleHRcIjogXCJfMzdJV2o4X09jUVgzYXctQTg2Ymk0ZVwiLFxuXHRcInRleHRCYXJcIjogXCJfMTl1ZGlkZF9CUG1yREpKcVNSYjF0ZVwiLFxuXHRcImhlYWRpbmdcIjogXCJfMkIxdGJTTElCYnJmX0x4clFSVkZycVwiLFxuXHRcInNtYWxsXCI6IFwiXzN1UUNveGNKQm1mYVJxU0s2Rnl1WnJcIixcblx0XCJsYXJnZVwiOiBcIl8yMERQel82cEVfSll3akFjeGY0cXN5XCIsXG5cdFwic3ViSGVhZGluZ1wiOiBcIl8xazZ6dGhhTFozRHNoMENRZS1HRS1GXCIsXG5cdFwiYmlnRm9udFwiOiBcIl8zVnlyS2MzSTRiSmpwcHJlYTZpYVA2XCIsXG5cdFwic21hbGxGb250XCI6IFwiWkExYVJuWVFCZGFsb3hvVFpGVnRUXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==