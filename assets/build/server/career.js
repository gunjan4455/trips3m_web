require("source-map-support").install();
exports.ids = ["career"];
exports.modules = {

/***/ "./app-v2/modules/header/HeaderTitle.js":
/*!**********************************************!*\
  !*** ./app-v2/modules/header/HeaderTitle.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTitle = exports.TripTypeList = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _destinations = __webpack_require__(/*! reducers/destinationListing/destinations */ "./app/reducers/destinationListing/destinations.js");

var _destinationListing = __webpack_require__(/*! actions/destinationListing */ "./app/actions/destinationListing.js");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _urlHelpers = __webpack_require__(/*! helpers/urlHelpers */ "./app/helpers/urlHelpers.js");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

__webpack_require__(/*! ./Header.scss */ "./app-v2/modules/header/Header.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const TripTypeList = ({
  selectionList,
  selectedItem,
  toggleSelection,
  trackCategoryClick
}) => _react.default.createElement("div", {
  className: "row row- absolute wfull category-list"
}, _react.default.createElement("ul", null, Object.keys(selectionList).map(item => _react.default.createElement("li", {
  key: item
}, _react.default.createElement(_reactRouter.Link, {
  to: selectionList[item].url,
  className: selectedItem === item ? 'selected-category' : '',
  onClick: e => {
    toggleSelection();

    if (selectionList[item].name === 'All') {
      (0, _segmentEvents.trackSegment)({
        event: _segmentEvents.DESTINATION_LIST_CLICK,
        section: 'Header Section',
        object: '',
        cta: selectionList[item].name,
        category: `Destination List: ${selectionList[item].name}`,
        destination_list: selectionList[item].name,
        destination_id: selectionList[item].name,
        value: _segmentEvents.DFEAULT_VALUE,
        label: `Destination Type: ${selectionList[item].name}`
      });
    } else {
      trackCategoryClick({
        section: 'Top Dropdown',
        object: '',
        cta: e.target.text,
        category: e.target.text
      });
    }
  }
}, selectionList[item].name)))), _react.default.createElement("div", {
  className: "fix-layer-suggestion",
  onClick: toggleSelection
}));

exports.TripTypeList = TripTypeList;
TripTypeList.propTypes = {
  selectionList: _propTypes.default.object.isRequired,
  selectedItem: _propTypes.default.string.isRequired,
  toggleSelection: _propTypes.default.func.isRequired,
  trackCategoryClick: _propTypes.default.func
};
TripTypeList.defaultProps = {
  trackCategoryClick: () => {}
};
let HeaderTitle = class HeaderTitle extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleScroll = () => {
      const {
        toggleSelection,
        selectionListVisible
      } = this.props;
      const scrollTop = window.scrollY;

      if (scrollTop > 100 && selectionListVisible) {
        toggleSelection();
      }
    }, this.dropDownTitle = (title, category) => {
      if (category) {
        if (title === 'All') {
          return 'Top Places';
        }

        return `Top Places - ${title}`;
      }

      return `Weekend Getaways - ${title}`;
    }, this.renderSubHeading = (showTitleAsH1, plpHeading, title, isRatingSchemaEnabled) => {
      if (plpHeading) {
        return _react.default.createElement("h2", {
          className: "fw4 flexFull"
        }, plpHeading);
      } else if (showTitleAsH1) {
        return _react.default.createElement("h1", {
          className: "fw4 flexFull",
          property: isRatingSchemaEnabled ? "name" : null
        }, title);
      } else {
        return _react.default.createElement("p", {
          className: "fw4 flexFull"
        }, title);
      }
    }, _temp;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {
      goBackState,
      selectionList,
      selectedItem,
      toggleSelection,
      selectionListVisible,
      title,
      tripTypeListShown,
      trackCategoryClick,
      category,
      backUrl,
      showShare,
      showBlackShare,
      heading,
      url,
      showTitleAsH1,
      plpHeading,
      isRatingSchemaEnabled
    } = this.props;
    let subHeader = null;

    if (tripTypeListShown) {
      subHeader = _react.default.createElement("div", {
        className: "button-drop-category flexFull"
      }, _react.default.createElement("button", {
        onClick: toggleSelection
      }, _react.default.createElement("h1", {
        className: "fw4 iblock"
      }, this.dropDownTitle(selectionList[selectedItem].name, category)), _react.default.createElement("span", {
        className: "down-arrow-destination"
      })), _react.default.createElement("div", {
        className: selectionListVisible ? '' : 'hide'
      }, _react.default.createElement(TripTypeList, {
        selectionList: selectionList,
        selectedItem: selectedItem,
        toggleSelection: toggleSelection,
        trackCategoryClick: trackCategoryClick
      })));
    } else {
      subHeader = this.renderSubHeading(showTitleAsH1, plpHeading, title, isRatingSchemaEnabled);
    }

    return _react.default.createElement("div", {
      className: "header-title"
    }, _react.default.createElement("div", {
      className: "f16 sfcw header-title-p flex alignCenter spaceBetween"
    }, _react.default.createElement("button", {
      onClick: () => goBackState(backUrl),
      className: "back-arrow"
    }, "go back"), subHeader, showShare ? _react.default.createElement("span", {
      className: "share-logo-right fright"
    }, _react.default.createElement("a", {
      href: (0, _urlHelpers.whatsappUrl)(heading, url)
    }, showBlackShare ? _react.default.createElement(_Icon.BlackShareIcon, {
      className: "absolute-center wfull"
    }) : _react.default.createElement(_Icon.WhiteShareIcon, {
      className: "absolute-center wfull"
    }))) : null));
  }

};
exports.HeaderTitle = HeaderTitle;
HeaderTitle.propTypes = {
  goBackState: _propTypes.default.func.isRequired,
  selectionList: _propTypes.default.object,
  selectedItem: _propTypes.default.string,
  toggleSelection: _propTypes.default.func,
  selectionListVisible: _propTypes.default.bool,
  title: _propTypes.default.string,
  tripTypeListShown: _propTypes.default.bool,
  trackCategoryClick: _propTypes.default.func,
  category: _propTypes.default.string,
  backUrl: _propTypes.default.string,
  showShare: _propTypes.default.bool,
  showBlackShare: _propTypes.default.bool,
  heading: _propTypes.default.string,
  url: _propTypes.default.string,
  showTitleAsH1: _propTypes.default.bool,
  plpHeading: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
HeaderTitle.defaultProps = {
  selectionList: {
    all: {
      name: 'All',
      url: '/All-Places'
    }
  },
  selectedItem: 'all',
  toggleSelection: () => {},
  selectionListVisible: false,
  title: '',
  tripTypeListShown: false,
  trackCategoryClick: () => {},
  category: '',
  backUrl: '',
  showShare: false,
  showBlackShare: false,
  heading: '',
  url: '',
  showTitleAsH1: true,
  plpHeading: '',
  isRatingSchemaEnabled: false
};

var _default = (0, _reactRedux.connect)(state => ({
  selectionList: (0, _destinations.getSelectionList)(state),
  selectedItem: state.destinationListing.destinationListing.selectedItem,
  selectionListVisible: (0, _destinations.isSelectionListVisible)(state),
  category: state.destinationListing.destinationListing.category,
  weekendDestination: state.destinationListing.destinationListing.weekendDestination
}), dispatch => ({
  goBackState: params => params ? dispatch((0, _reactRouterRedux.push)(params)) : dispatch((0, _reactRouterRedux.goBack)()),
  toggleSelection: () => dispatch((0, _destinationListing.toggleSelectionList)())
}))(HeaderTitle);

exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/BannerTrialist.js":
/*!**********************************************************!*\
  !*** ./app-v2/modules/shared/trialist/BannerTrialist.js ***!
  \**********************************************************/
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

var _Img = _interopRequireDefault(__webpack_require__(/*! components/Common/Img */ "./app/components/Common/Img.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BannerTrialistBox = _glamorous.default.div({
  height: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '& > img': {
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '100%',
    width: 'auto'
  }
});

const BannerTrialist = ({
  bannerPath,
  bannerAlt
}) => _react.default.createElement(BannerTrialistBox, null, _react.default.createElement(_Img.default, {
  width: 411,
  height: 154,
  ikSrc: bannerPath,
  alt: bannerAlt
}));

BannerTrialist.propTypes = {
  bannerPath: _propTypes.default.string,
  bannerAlt: _propTypes.default.string
};
BannerTrialist.defaultProps = {
  bannerPath: '',
  bannerAlt: ''
};
var _default = BannerTrialist;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/TrialistHeading.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/shared/trialist/TrialistHeading.js ***!
  \***********************************************************/
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

const TrialistHeading = ({
  heading,
  extraStyle
}) => _react.default.createElement("p", {
  className: "fw9 f24 m0",
  style: extraStyle
}, heading);

TrialistHeading.propTypes = {
  heading: _propTypes.default.string.isRequired,
  extraStyle: _propTypes.default.object
};
TrialistHeading.defaultProps = {
  extraStyle: {}
};
var _default = TrialistHeading;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/about/AboutText.js":
/*!***********************************************************!*\
  !*** ./app-v2/modules/shared/trialist/about/AboutText.js ***!
  \***********************************************************/
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

const AboutText = ({
  text
}) => _react.default.createElement("p", {
  className: "f16a fw4 m0 at_about_text"
}, text);

AboutText.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = AboutText;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/career/AccordionExpand.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/shared/trialist/career/AccordionExpand.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactCollapsible = _interopRequireDefault(__webpack_require__(/*! react-collapsible */ "react-collapsible"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GAccordianDiv = _glamorous.default.div({
  '& .Collapsible__trigger': {
    padding: '15px',
    display: 'block',
    position: 'relative',
    '&:after': {
      position: 'absolute',
      content: ' ',
      margin: 'auto',
      width: '8px',
      height: '8px',
      background: 'rgba(0,0,0,0)',
      border: '1px solid #3e3e3e',
      borderTop: '0',
      top: '7px',
      bottom: '10px',
      borderRight: '0',
      right: '12px',
      transform: 'rotate(-45deg)'
    }
  },
  '& .is-open': {
    color: '#0c9a8d',
    '&:after': {
      transform: 'rotate(135deg)',
      top: '14px'
    }
  }
});

const AccordionHiddenBoxChild = _glamorous.default.div({
  border: '1px solid #e4e4e4'
});

const OpenRolesCount = _glamorous.default.p({
  top: '18px',
  right: '50px'
});

const ListShowMain = _glamorous.default.p({
  lineHeight: '26px'
});

const AccordionExpand = ({
  list,
  name
}) => {
  return list && list.length && name ? _react.default.createElement(GAccordianDiv, {
    className: "clearfix relative border at_accordionExpand"
  }, _react.default.createElement("div", {
    className: "clearfix relative"
  }, _react.default.createElement(OpenRolesCount, {
    className: "m0 sfc1 f12 absolute"
  }, list.length, " Open Roles"), _react.default.createElement(_reactCollapsible.default, {
    trigger: name,
    className: "drop_down"
  }, _react.default.createElement("div", {
    className: "clearfix relative "
  }, list.map(job => _react.default.createElement("div", {
    key: `${name}_${job.id}`,
    className: "clearfix"
  }, _react.default.createElement(AccordionHiddenBoxChild, {
    className: "clearfix p15"
  }, _react.default.createElement("div", {
    className: "col-xs-12 row"
  }, _react.default.createElement("p", {
    className: "f16a sfc6 fw9 m0 pb8"
  }, job.subCategory), _react.default.createElement(ListShowMain, {
    className: "f14 m0"
  }, job.rolesAndResponsibities.replace(/●/g, ' ').replace(/•/g, ' '))), _react.default.createElement("div", {
    className: "col-xs-12 p0 pt15"
  }, _react.default.createElement(_reactRouter.Link, {
    to: `/career/${job.id}`,
    className: "btn-pri wfull fright radius2 pt8 pb8"
  }, "View Details"))))))))) : null;
};

AccordionExpand.propTypes = {
  list: _propTypes.default.array.isRequired,
  name: _propTypes.default.string.isRequired
};
var _default = AccordionExpand;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/career/Career.js":
/*!*********************************************************!*\
  !*** ./app-v2/modules/shared/trialist/career/Career.js ***!
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

var _AboutText = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/about/AboutText */ "./app-v2/modules/shared/trialist/about/AboutText.js"));

var _AccordionExpand = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/career/AccordionExpand */ "./app-v2/modules/shared/trialist/career/AccordionExpand.js"));

var _TrialistHeading = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/TrialistHeading */ "./app-v2/modules/shared/trialist/TrialistHeading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CAREER_LIST = {
  salesAndOperations: 'Sales & Operations',
  development: 'Development',
  technology: 'Development',
  digitalMarketing: 'Digital Marketing'
};

const Career = ({
  careers
}) => _react.default.createElement("div", null, _react.default.createElement("div", {
  className: "clearfix p24 mb32"
}, _react.default.createElement("div", {
  className: "mb24 at_heading1"
}, _react.default.createElement(_TrialistHeading.default, {
  heading: "Solving Holiday Woes"
})), _react.default.createElement(_AboutText.default, {
  text: "Holiday planning is a mix of gathering information from multiple channels, talking to several service providers and constantly turning into device to plan and pay for small things. Ever thought how relaxed a traveler will be if all the answers are provided at one place without any hassle? Welcome to TravelTriangle where we are solving real time complex problems and building the biggest holiday eco-system."
})), _react.default.createElement("div", {
  className: "clearfix p8 mb32"
}, _react.default.createElement("div", {
  className: "mb24 at_heading2"
}, _react.default.createElement(_TrialistHeading.default, {
  heading: "Current Openings",
  extraStyle: {
    textAlign: 'center'
  }
})), _react.default.createElement("div", {
  className: "at_text2"
}, careers && Object.keys(careers).map(key => _react.default.createElement(_AccordionExpand.default, {
  key: key,
  name: CAREER_LIST[key] || '',
  list: careers[key]
})))));

Career.propTypes = {
  careers: _propTypes.default.object.isRequired
};
var _default = Career;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/jobDescription/JobDescription.js":
/*!*************************************************************************!*\
  !*** ./app-v2/modules/shared/trialist/jobDescription/JobDescription.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.jobDetailInfo = exports.JobDescribe = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _JobForm = _interopRequireDefault(__webpack_require__(/*! ./JobForm */ "./app-v2/modules/shared/trialist/jobDescription/JobForm.js"));

var _HeaderTitle = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderTitle */ "./app-v2/modules/header/HeaderTitle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ListStyle = _glamorous.default.ul({
  '& li': {
    lineHeight: '24px',
    whiteSpace: 'pre-line',
    listStyle: 'none'
  }
});

const JobDescribe = ({
  title,
  description
}) => {
  return _react.default.createElement("div", {
    className: "clearfix mb24"
  }, _react.default.createElement("p", {
    className: "f16 fw9 sfc6 m0 mb15"
  }, title), _react.default.createElement(ListStyle, null, _react.default.createElement("li", {
    className: "f14p mb5 relative block pl0 sfc6"
  }, description)));
};

exports.JobDescribe = JobDescribe;

const jobDetailInfo = selectedJd => {
  return {
    'Job Roles & Responsibilities': selectedJd.rolesAndResponsibities,
    'Required Skills': selectedJd.skills,
    'Good to have': selectedJd.goodToHave,
    'What You Get': selectedJd.whatYouGet
  };
};

exports.jobDetailInfo = jobDetailInfo;
let JobDescription = class JobDescription extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      showApply: true
    }, this.handleScrollToFormCareer = e => {
      e.preventDefault();

      _reactScroll.scroller.scrollTo('section__formcareer', {
        duration: 800,
        smooth: true
      });
    }, this.handleShowApply = () => {
      this.setState({
        showApply: false
      });
    }, _temp;
  }

  render() {
    const {
      selectedJd,
      jobDescription,
      careerApply
    } = this.props;
    const jobDetail = selectedJd && jobDetailInfo(selectedJd);
    return _react.default.createElement("div", {
      className: "row ml0 mr0 pl0 pr0"
    }, _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "container pl0 pr0"
    }, _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-md-8 pl0"
    }, _react.default.createElement(_HeaderTitle.default, {
      title: 'career',
      backUrl: '/career'
    }))), _react.default.createElement("div", {
      className: "clearfix p15"
    }, _react.default.createElement("div", {
      className: "m0 pb24 sfc6 fw9 f24"
    }, selectedJd.subCategory, _react.default.createElement("span", {
      className: "block fw4 pfc4 f12 pt8"
    }, "at TravelTriangle, ", selectedJd.location)), _react.default.createElement("div", {
      className: "mb24"
    }, _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-md-5 p0 sfc6"
    }, _react.default.createElement("div", {
      className: "col-md-5 iblock p0 fw7 "
    }, "Experience ", _react.default.createElement("span", {
      className: "pl5 pr5"
    }, ":")), _react.default.createElement("div", {
      className: "col-md-7 iblock"
    }, selectedJd.experience))), _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-md-5 p0 sfc6"
    }, _react.default.createElement("div", {
      className: "col-md-5 iblock fw7 p0 "
    }, "Job Location ", _react.default.createElement("span", {
      className: "pl5 pr5"
    }, ":")), _react.default.createElement("div", {
      className: "col-md-7 iblock"
    }, selectedJd.location)))), Object.keys(jobDetail).map((title, i) => {
      return jobDetail[title] ? _react.default.createElement(JobDescribe, {
        key: i,
        title: title,
        description: jobDetail[title]
      }) : null;
    })))), this.state.showApply ? _react.default.createElement("div", {
      className: "col-md-4 clearfix p8 sbc5 sticky b0"
    }, _react.default.createElement("button", {
      onClick: this.handleScrollToFormCareer,
      className: "btn-filled-pri-large ripple wfull fright at_formfunction"
    }, _react.default.createElement("span", {
      className: "wave"
    }), "Apply Now")) : null, _react.default.createElement(_reactScroll.Element, {
      name: "section__formcareer"
    }, _react.default.createElement("div", {
      className: "container p24"
    }, _react.default.createElement(_JobForm.default, {
      jobDescription: jobDescription,
      careerApply: careerApply,
      showApply: this.handleShowApply
    }))));
  }

};
JobDescription.propTypes = {
  selectedJd: _propTypes.default.object.isRequired,
  jobDescription: _propTypes.default.object.isRequired,
  careerApply: _propTypes.default.func.isRequired
};
JobDescribe.propTypes = {
  title: _propTypes.default.string.isRequired,
  description: _propTypes.default.string.isRequired
};
var _default = JobDescription;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/shared/trialist/jobDescription/JobForm.js":
/*!******************************************************************!*\
  !*** ./app-v2/modules/shared/trialist/jobDescription/JobForm.js ***!
  \******************************************************************/
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

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _reactScroll = __webpack_require__(/*! react-scroll */ "react-scroll");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const CustomUpload = _glamorous.default.div({
  '& .button--custom': {
    width: '160px'
  },
  '& input': {
    width: '160px',
    opacity: '0'
  }
});

const SelectDesignation = _glamorous.default.div({
  '& .selectCareerOption': {
    border: '1px solid #b2b2b2',
    padding: '12px 30px 12px 12px',
    paddingBottom: '13px'
  },
  '& .downArrow': {
    border: 'solid #3e3e3e',
    borderWidth: '0 1px 1px 0',
    transform: 'rotate(45deg)',
    width: '8px',
    height: '8px',
    top: '38%'
  }
});

const GSuccessIllustrations = _glamorous.default.div({
  width: '200px',
  margin: '0 auto'
});

const StatusSuccess = _glamorous.default.span({
  width: '11px',
  height: '8px'
});

let JobForm = (_temp = _class = class JobForm extends _react.Component {
  constructor(props) {
    super(props);

    this.handleScrollToFormCareer = () => {
      _reactScroll.scroller.scrollTo('section__formsuccess', {
        duration: 1000,
        smooth: true,
        offset: -30
      });
    };

    this.handleError = error => {
      this.setState({
        error: true,
        submitting: false,
        errors: {
          form: (error.errors || []).toString() || 'Something went wrong. Please try again.'
        }
      });
    };

    this.handleSuccess = () => {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "f24 pfc1 m0 pb8 fw9 text-center section__formsuccess"
      }, "Application Submitted!"), _react.default.createElement("div", {
        className: "text-center mb24"
      }, _react.default.createElement("div", null, "Someone from the hiring team will", _react.default.createElement("br", null), "get back to you shortly")), _react.default.createElement(GSuccessIllustrations, null, _react.default.createElement(_Icon.SuccessIllustration, null)));
    };

    const careers = this.props.jobDescription && this.props.jobDescription.careers || {};
    const designationKeys = [];
    Object.values(careers).forEach(value => {
      if (value) {
        designationKeys.push(...value.map(e => e.subCategory || ''));
      }
    });
    this.state = {
      values: {
        pdf: {}
      },
      error: false,
      errors: {},
      submitted: false,
      submitting: false,
      designationKeys
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  componentDidUpdate(prevState) {
    if (this.state.submitted) {
      this.handleScrollToFormCareer();
    }
  }

  handleChange(target) {
    return e => {
      const values = _objectSpread({}, this.state.values);

      values[target] = e.target.value;
      this.setState({
        values
      });
    };
  }

  handleFileChange(e) {
    this.setState({
      values: _objectSpread({}, this.state.values, {
        pdf: e.target.files[0] || {}
      })
    });
  }

  validateForm() {
    //TODO: Prashant, Use separate library for form validations
    const requiredFields = ['first_name', 'email', 'pdf'];
    const errors = {};
    requiredFields.forEach(key => {
      if (key === 'pdf' && !this.state.values[key].size || !this.state.values[key]) {
        errors[key] = 'This is required';
      }
    });
    const error = Object.keys(errors).length !== 0;
    this.setState({
      error,
      errors
    });
    return error;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.validateForm()) {
      this.setState({
        submitting: true
      });
      const formData = new FormData();
      Object.keys(this.state.values).forEach(key => formData.append(`candidate_detail[${key}]`, this.state.values[key])); // TODO: Prashant: will use redux-thunk for async actions

      this.props.careerApply({
        data: formData
      }).then((success = {}) => {
        if (success && success.success) {
          this.props.showApply();
          this.setState({
            submitted: true,
            submitting: false
          });
        } else {
          this.handleError('');
        }
      }).catch(error => {
        this.handleError(error);
      });
    }
  }

  render() {
    if (this.state.submitted) {
      return this.handleSuccess();
    }

    const {
      mobile_number
    } = this.state.values;
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("p", {
      className: "f24 pfc1 m0 pb24 fw9"
    }, "Apply Here"), _react.default.createElement("form", {
      onSubmit: this.handleSubmit,
      className: 'at_formSubmit'
    }, _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 mb15"
    }, _react.default.createElement("label", {
      className: "f14 m0 fw7 mb5 sfc6",
      htmlFor: "jd-apply-first-name"
    }, "First Name", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("input", {
      id: "jd-apply-first-name",
      type: "text",
      className: "input at_firstName mt8",
      placeholder: "Enter Your First Name",
      value: this.state.values.first_name || '',
      onChange: this.handleChange('first_name')
    }), _react.default.createElement("div", {
      className: "input-error-text"
    }, this.state.error && this.state.errors.first_name)), _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 mb15"
    }, _react.default.createElement("label", {
      className: "f14 m0 fw7 mb5 sfc6",
      htmlFor: "jd-apply-last-name"
    }, "Last Name"), _react.default.createElement("input", {
      id: "jd-apply-last-name",
      type: "text",
      className: "input mt8",
      placeholder: "Enter Your Last Name",
      value: this.state.values.last_name || '',
      onChange: this.handleChange('last_name')
    }), this.state.error && this.state.errors.last_name), _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 mb15"
    }, _react.default.createElement("label", {
      className: "f14 m0 fw7 mb5 sfc6",
      htmlFor: "jd-apply-email"
    }, "Email ID", _react.default.createElement("em", {
      className: "pfc2"
    }, "*")), _react.default.createElement("input", {
      id: "jd-apply-email",
      type: "text",
      className: "input mt8",
      placeholder: "Enter Your Email Id",
      value: this.state.values.email || '',
      onChange: this.handleChange('email')
    }), _react.default.createElement("div", {
      className: "input-error-text"
    }, this.state.error && this.state.errors.email)), _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 mb15"
    }, _react.default.createElement("label", {
      className: "f14 block wfull m0 fw7 sfc6 mb5",
      htmlFor: "last-name"
    }, "Phone No"), _react.default.createElement("div", {
      className: " pr0 relative"
    }, _react.default.createElement("input", {
      id: "jd-apply-phone",
      type: "text",
      className: "input",
      value: mobile_number || '',
      onChange: this.handleChange('mobile_number')
    })))), _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(SelectDesignation, {
      className: "col-xs-12 pl0 pr0 mb15"
    }, _react.default.createElement("label", {
      className: "f14 m0 fw7 mb5 sfc6",
      htmlFor: "first-name"
    }, "Select Designation"), _react.default.createElement("div", {
      className: "relative"
    }, _react.default.createElement("select", {
      value: this.state.values.designation || '',
      onChange: this.handleChange('designation'),
      className: "selectCareerOption mt8 block input select webkitAppearance _selectCareerOption"
    }, this.state.designationKeys.map((e, i) => _react.default.createElement("option", {
      key: i,
      value: e
    }, e))), _react.default.createElement("span", {
      className: "downArrow r10 absolute p3"
    }))), _react.default.createElement("div", {
      className: "col-xs-12 pl0 pr0 mb15 relative"
    }, _react.default.createElement("div", {
      className: "file-input-wrapper"
    }, _react.default.createElement("label", {
      className: "btn-file-input f14 m0 fw7 mb5 sfc6  "
    }, "Upload CV"), _react.default.createElement(CustomUpload, null, _react.default.createElement("div", {
      className: "button__wrap block relative overflowh mt8"
    }, _react.default.createElement("button", {
      className: "button--custom sbc5 sfc1 p10"
    }, "Choose File"), _react.default.createElement("input", {
      type: "file",
      name: "pdf",
      className: "at_pdfChange absolute p10 t0 l0",
      accept: "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      onChange: this.handleFileChange
    })))), _react.default.createElement("p", {
      className: "absolute errorDisplayMsg "
    }, this.state.values.pdf.name || 'No file choosen'), _react.default.createElement("p", {
      className: "pdfErrorDisplay input-error-text pt24"
    }, this.state.error && this.state.errors.pdf))), _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement("div", {
      className: "col-xs-12"
    }, "\xA0"), _react.default.createElement("div", {
      className: "col-xs-12"
    }, _react.default.createElement("button", {
      type: "submit",
      disabled: this.state.submitting,
      className: "btn-filled-pri-large ripple radius2 wfull"
    }, _react.default.createElement("span", {
      className: "wave"
    }), "Submit Application")), this.state.error && this.state.errors.form, _react.default.createElement("div", {
      className: "col-xs-12"
    }, "\xA0")))));
  }

}, _class.propTypes = {
  careerApply: _propTypes.default.func.isRequired,
  jobDescription: _propTypes.default.object.isRequired,
  showApply: _propTypes.default.func.isRequired
}, _temp);
var _default = JobForm;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/career/CareerAsync.js":
/*!**********************************************!*\
  !*** ./app-v2/screens/career/CareerAsync.js ***!
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

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _JobDescription = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/jobDescription/JobDescription */ "./app-v2/modules/shared/trialist/jobDescription/JobDescription.js"));

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _Career = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/career/Career */ "./app-v2/modules/shared/trialist/career/Career.js"));

var _BannerTrialist = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/BannerTrialist */ "./app-v2/modules/shared/trialist/BannerTrialist.js"));

var _HeaderTrialist = _interopRequireDefault(__webpack_require__(/*! modules/shared/trialist/HeaderTrialist */ "./app-v2/modules/shared/trialist/HeaderTrialist.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Career = ({
  params,
  loaded,
  jobDescription,
  jobApply,
  location
}) => {
  (0, _segmentEvents.initializeScroller)();

  if (!loaded) {
    return _react.default.createElement("div", {
      className: "clearfix"
    }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
      charSet: "utf-8"
    }), _react.default.createElement("title", null, "Career"), _react.default.createElement("link", {
      rel: "canonical",
      href: "https://traveltriangle.com/career"
    })));
  }

  const bannerImage = "https://d29m6q8e2acg44.cloudfront.net/public-product/Trialist/Job+Opening/Jobopening_Cover.png";
  const jdId = [];
  Object.keys(jobDescription.careers || {}).forEach(key => {
    jdId.push(...jobDescription.careers[key].filter(e => parseInt(e.id, 10) === (parseInt(params.id, 10) || 0)));
  });
  const selectedJd = jdId.length ? jdId[0] : {};
  return _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
    charSet: "utf-8"
  }), _react.default.createElement("title", null, "Career"), _react.default.createElement("link", {
    rel: "canonical",
    href: "https://traveltriangle.com/career"
  })), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_reactScrollPercentage.ScrollPercentage, {
    onChange: _segmentEvents.onScroll
  }, params.id && jdId.length ? _react.default.createElement(_JobDescription.default, {
    selectedJd: selectedJd,
    jobDescription: jobDescription,
    careerApply: jobApply
  }) : _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement(_HeaderTrialist.default, {
    path: location.pathname
  }), _react.default.createElement("div", {
    className: "clearfix"
  }, _react.default.createElement(_BannerTrialist.default, {
    bannerPath: bannerImage,
    bannerAlt: "career banner"
  })), _react.default.createElement(_Career.default, {
    careers: jobDescription.careers || {}
  }))), _react.default.createElement("div", {
    className: "row row- pb8 pt0"
  }, _react.default.createElement(_Footer.default, null)));
};

Career.propTypes = {
  params: _propTypes.default.object.isRequired,
  jobDescription: _propTypes.default.object.isRequired,
  loaded: _propTypes.default.bool.isRequired,
  jobApply: _propTypes.default.func.isRequired,
  location: _propTypes.default.object.isRequired
};
var _default = Career;
exports.default = _default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L0Jhbm5lclRyaWFsaXN0LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3NoYXJlZC90cmlhbGlzdC9UcmlhbGlzdEhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L2Fib3V0L0Fib3V0VGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvdHJpYWxpc3QvY2FyZWVyL0FjY29yZGlvbkV4cGFuZC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvdHJpYWxpc3QvY2FyZWVyL0NhcmVlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvdHJpYWxpc3Qvam9iRGVzY3JpcHRpb24vSm9iRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L2pvYkRlc2NyaXB0aW9uL0pvYkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXYyL3NjcmVlbnMvY2FyZWVyL0NhcmVlckFzeW5jLmpzIl0sIm5hbWVzIjpbIlRyaXBUeXBlTGlzdCIsInNlbGVjdGlvbkxpc3QiLCJzZWxlY3RlZEl0ZW0iLCJ0b2dnbGVTZWxlY3Rpb24iLCJ0cmFja0NhdGVnb3J5Q2xpY2siLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaXRlbSIsInVybCIsImUiLCJuYW1lIiwiZXZlbnQiLCJERVNUSU5BVElPTl9MSVNUX0NMSUNLIiwic2VjdGlvbiIsIm9iamVjdCIsImN0YSIsImNhdGVnb3J5IiwiZGVzdGluYXRpb25fbGlzdCIsImRlc3RpbmF0aW9uX2lkIiwidmFsdWUiLCJERkVBVUxUX1ZBTFVFIiwibGFiZWwiLCJ0YXJnZXQiLCJ0ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJIZWFkZXJUaXRsZSIsIkNvbXBvbmVudCIsImhhbmRsZVNjcm9sbCIsInNlbGVjdGlvbkxpc3RWaXNpYmxlIiwicHJvcHMiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZHJvcERvd25UaXRsZSIsInRpdGxlIiwicmVuZGVyU3ViSGVhZGluZyIsInNob3dUaXRsZUFzSDEiLCJwbHBIZWFkaW5nIiwiaXNSYXRpbmdTY2hlbWFFbmFibGVkIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwiZ29CYWNrU3RhdGUiLCJ0cmlwVHlwZUxpc3RTaG93biIsImJhY2tVcmwiLCJzaG93U2hhcmUiLCJzaG93QmxhY2tTaGFyZSIsImhlYWRpbmciLCJzdWJIZWFkZXIiLCJib29sIiwiYWxsIiwic3RhdGUiLCJkZXN0aW5hdGlvbkxpc3RpbmciLCJ3ZWVrZW5kRGVzdGluYXRpb24iLCJkaXNwYXRjaCIsInBhcmFtcyIsIkJhbm5lclRyaWFsaXN0Qm94IiwiZ2xhbW9yb3VzIiwiZGl2IiwiaGVpZ2h0IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJ3aWR0aCIsIkJhbm5lclRyaWFsaXN0IiwiYmFubmVyUGF0aCIsImJhbm5lckFsdCIsIlRyaWFsaXN0SGVhZGluZyIsImV4dHJhU3R5bGUiLCJBYm91dFRleHQiLCJHQWNjb3JkaWFuRGl2IiwicGFkZGluZyIsImRpc3BsYXkiLCJjb250ZW50IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclRvcCIsInRvcCIsImJvdHRvbSIsImJvcmRlclJpZ2h0IiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJjb2xvciIsIkFjY29yZGlvbkhpZGRlbkJveENoaWxkIiwiT3BlblJvbGVzQ291bnQiLCJwIiwiTGlzdFNob3dNYWluIiwibGluZUhlaWdodCIsIkFjY29yZGlvbkV4cGFuZCIsImxpc3QiLCJsZW5ndGgiLCJqb2IiLCJpZCIsInN1YkNhdGVnb3J5Iiwicm9sZXNBbmRSZXNwb25zaWJpdGllcyIsInJlcGxhY2UiLCJhcnJheSIsIkNBUkVFUl9MSVNUIiwic2FsZXNBbmRPcGVyYXRpb25zIiwiZGV2ZWxvcG1lbnQiLCJ0ZWNobm9sb2d5IiwiZGlnaXRhbE1hcmtldGluZyIsIkNhcmVlciIsImNhcmVlcnMiLCJ0ZXh0QWxpZ24iLCJrZXkiLCJMaXN0U3R5bGUiLCJ1bCIsIndoaXRlU3BhY2UiLCJsaXN0U3R5bGUiLCJKb2JEZXNjcmliZSIsImRlc2NyaXB0aW9uIiwiam9iRGV0YWlsSW5mbyIsInNlbGVjdGVkSmQiLCJza2lsbHMiLCJnb29kVG9IYXZlIiwid2hhdFlvdUdldCIsIkpvYkRlc2NyaXB0aW9uIiwic2hvd0FwcGx5IiwiaGFuZGxlU2Nyb2xsVG9Gb3JtQ2FyZWVyIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGxlciIsInNjcm9sbFRvIiwiZHVyYXRpb24iLCJzbW9vdGgiLCJoYW5kbGVTaG93QXBwbHkiLCJzZXRTdGF0ZSIsImpvYkRlc2NyaXB0aW9uIiwiY2FyZWVyQXBwbHkiLCJqb2JEZXRhaWwiLCJsb2NhdGlvbiIsImV4cGVyaWVuY2UiLCJpIiwiQ3VzdG9tVXBsb2FkIiwib3BhY2l0eSIsIlNlbGVjdERlc2lnbmF0aW9uIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlcldpZHRoIiwiR1N1Y2Nlc3NJbGx1c3RyYXRpb25zIiwiU3RhdHVzU3VjY2VzcyIsInNwYW4iLCJKb2JGb3JtIiwiY29uc3RydWN0b3IiLCJvZmZzZXQiLCJoYW5kbGVFcnJvciIsImVycm9yIiwic3VibWl0dGluZyIsImVycm9ycyIsImZvcm0iLCJ0b1N0cmluZyIsImhhbmRsZVN1Y2Nlc3MiLCJkZXNpZ25hdGlvbktleXMiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicHVzaCIsInBkZiIsInN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZmlsZXMiLCJ2YWxpZGF0ZUZvcm0iLCJyZXF1aXJlZEZpZWxkcyIsInNpemUiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZGF0YSIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJtb2JpbGVfbnVtYmVyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiZGVzaWduYXRpb24iLCJsb2FkZWQiLCJqb2JBcHBseSIsImJhbm5lckltYWdlIiwiamRJZCIsImZpbHRlciIsInBhcnNlSW50Iiwib25TY3JvbGwiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7QUFFTyxNQUFNQSxlQUFlLENBQUM7QUFDM0JDLGVBRDJCO0FBRTNCQyxjQUYyQjtBQUczQkMsaUJBSDJCO0FBSTNCQztBQUoyQixDQUFELEtBTTFCO0FBQUssYUFBVTtBQUFmLEdBQ0UseUNBQ0dDLE9BQU9DLElBQVAsQ0FBWUwsYUFBWixFQUEyQk0sR0FBM0IsQ0FBK0JDLFFBQzlCO0FBQUksT0FBS0E7QUFBVCxHQUFlLDZCQUFDLGlCQUFEO0FBQ2IsTUFBSVAsY0FBY08sSUFBZCxFQUFvQkMsR0FEWDtBQUViLGFBQVlQLGlCQUFpQk0sSUFBbEIsR0FBMEIsbUJBQTFCLEdBQWdELEVBRjlDO0FBR2IsV0FBVUUsQ0FBRCxJQUFPO0FBQ2RQOztBQUNBLFFBQUlGLGNBQWNPLElBQWQsRUFBb0JHLElBQXBCLEtBQTZCLEtBQWpDLEVBQXdDO0FBQ3RDLHVDQUFhO0FBQ1hDLGVBQU9DLHFDQURJO0FBRVhDLGlCQUFTLGdCQUZFO0FBR1hDLGdCQUFRLEVBSEc7QUFJWEMsYUFB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YTBGLEtBQUs1RixNQUFsQixHQUNFLDZCQUFDLHVCQUFEO0FBQWdCLGdCQUFZdUIsVUFBNUI7QUFBd0Msb0JBQWdCYyxjQUF4RDtBQUF3RSxpQkFBYXFEO0FBQXJGLElBREYsR0FFRTtBQUFLLGVBQVU7QUFBZixLQUNFLDZCQUFDLHVCQUFEO0FBQWdCLFVBQU1sRCxTQUFTd0Q7QUFBL0IsSUFERixFQUVFO0FBQUssZUFBVTtBQUFmLEtBQ0UsNkJBQUMsdUJBQUQ7QUFDRSxnQkFBWUwsV0FEZDtBQUVFLGVBQVU7QUFGWixJQURGLENBRkYsRUFPRSw2QkFBQyxlQUFEO0FBQVksYUFBU3RELGVBQWV4QixPQUFmLElBQTBCO0FBQS9DLElBUEYsQ0FKTixDQVBGLEVBc0JFO0FBQUssZUFBVTtBQUFmLEtBQ0UsNkJBQUMsZUFBRCxPQURGLENBdEJGLENBREY7QUE0QkQsQ0FwREQ7O0FBc0RBRCxPQUFPeEYsU0FBUCxHQUFtQjtBQUNqQnNDLFVBQVFyQyxtQkFBVVgsTUFBVixDQUFpQlksVUFEUjtBQUVqQitHLGtCQUFnQmhILG1CQUFVWCxNQUFWLENBQWlCWSxVQUZoQjtBQUdqQm1LLFVBQVFwSyxtQkFBVStCLElBQVYsQ0FBZTlCLFVBSE47QUFJakJvSyxZQUFVckssbUJBQVVHLElBQVYsQ0FBZUYsVUFKUjtBQUtqQmtILFlBQVVuSCxtQkFBVVgsTUFBVixDQUFpQlk7QUFMVixDQUFuQjtlQVFlc0YsTSIsImZpbGUiOiJjYXJlZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZ29CYWNrLCBwdXNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7XG4gIGdldFNlbGVjdGlvbkxpc3QsXG4gIGlzU2VsZWN0aW9uTGlzdFZpc2libGVcbn0gZnJvbSAncmVkdWNlcnMvZGVzdGluYXRpb25MaXN0aW5nL2Rlc3RpbmF0aW9ucyc7XG5pbXBvcnQgeyB0b2dnbGVTZWxlY3Rpb25MaXN0IH0gZnJvbSAnYWN0aW9ucy9kZXN0aW5hdGlvbkxpc3RpbmcnO1xuaW1wb3J0IHsgREVTVElOQVRJT05fTElTVF9DTElDSywgREZFQVVMVF9WQUxVRSwgdHJhY2tTZWdtZW50IH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcbmltcG9ydCB7IHdoYXRzYXBwVXJsIH0gZnJvbSAnaGVscGVycy91cmxIZWxwZXJzJztcbmltcG9ydCB7IFdoaXRlU2hhcmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgQmxhY2tTaGFyZUljb24gfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5cbmltcG9ydCAnLi9IZWFkZXIuc2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBUcmlwVHlwZUxpc3QgPSAoe1xuICBzZWxlY3Rpb25MaXN0LFxuICBzZWxlY3RlZEl0ZW0sXG4gIHRvZ2dsZVNlbGVjdGlvbixcbiAgdHJhY2tDYXRlZ29yeUNsaWNrLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctIGFic29sdXRlIHdmdWxsIGNhdGVnb3J5LWxpc3RcIj5cbiAgICA8dWw+XG4gICAgICB7T2JqZWN0LmtleXMoc2VsZWN0aW9uTGlzdCkubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtfT48TGlua1xuICAgICAgICAgIHRvPXtzZWxlY3Rpb25MaXN0W2l0ZW1dLnVybH1cbiAgICAgICAgICBjbGFzc05hbWU9eyhzZWxlY3RlZEl0ZW0gPT09IGl0ZW0pID8gJ3NlbGVjdGVkLWNhdGVnb3J5JyA6ICcnfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25MaXN0W2l0ZW1dLm5hbWUgPT09ICdBbGwnKSB7XG4gICAgICAgICAgICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IERFU1RJTkFUSU9OX0xJU1RfQ0xJQ0ssXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogJ0hlYWRlciBTZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBvYmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgIGN0YTogc2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBgRGVzdGluYXRpb24gTGlzdDogJHtzZWxlY3Rpb25MaXN0W2l0ZW1dLm5hbWV9YCxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbl9saXN0OiBzZWxlY3Rpb25MaXN0W2l0ZW1dLm5hbWUsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25faWQ6IHNlbGVjdGlvbkxpc3RbaXRlbV0ubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogREZFQVVMVF9WQUxVRSxcbiAgICAgICAgICAgICAgICBsYWJlbDogYERlc3RpbmF0aW9uIFR5cGU6ICR7c2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lfWBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cmFja0NhdGVnb3J5Q2xpY2soe1xuICAgICAgICAgICAgICAgIHNlY3Rpb246ICdUb3AgRHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIG9iamVjdDogJycsXG4gICAgICAgICAgICAgICAgY3RhOiBlLnRhcmdldC50ZXh0LFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBlLnRhcmdldC50ZXh0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c2VsZWN0aW9uTGlzdFtpdGVtXS5uYW1lfVxuICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4LWxheWVyLXN1Z2dlc3Rpb25cIiBvbkNsaWNrPXt0b2dnbGVTZWxlY3Rpb259Lz5cbiAgPC9kaXY+XG4gICk7XG5cblRyaXBUeXBlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIHNlbGVjdGlvbkxpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZVNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhY2tDYXRlZ29yeUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRyaXBUeXBlTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHRyYWNrQ2F0ZWdvcnlDbGljazogKCkgPT4ge31cbn07XG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJUaXRsZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b2dnbGVTZWxlY3Rpb24sc2VsZWN0aW9uTGlzdFZpc2libGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFk7XG4gICAgaWYgKHNjcm9sbFRvcCA+IDEwMCAmJiBzZWxlY3Rpb25MaXN0VmlzaWJsZSkge1xuICAgICAgdG9nZ2xlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIGRyb3BEb3duVGl0bGUgPSAodGl0bGUsIGNhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5KSB7XG4gICAgICBpZiAodGl0bGUgPT09ICdBbGwnKSB7XG4gICAgICAgIHJldHVybiAnVG9wIFBsYWNlcyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gYFRvcCBQbGFjZXMgLSAke3RpdGxlfWA7XG4gICAgfVxuICAgIHJldHVybiBgV2Vla2VuZCBHZXRhd2F5cyAtICR7dGl0bGV9YDtcbiAgfTtcblxuICByZW5kZXJTdWJIZWFkaW5nID0gKHNob3dUaXRsZUFzSDEsIHBscEhlYWRpbmcsIHRpdGxlLCBpc1JhdGluZ1NjaGVtYUVuYWJsZWQpID0+IHtcbiAgICBpZiAocGxwSGVhZGluZykge1xuICAgICAgcmV0dXJuIDxoMiBjbGFzc05hbWU9XCJmdzQgZmxleEZ1bGxcIj57cGxwSGVhZGluZ308L2gyPjtcbiAgICB9IGVsc2UgaWYgKHNob3dUaXRsZUFzSDEpIHtcbiAgICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwiZnc0IGZsZXhGdWxsXCIgcHJvcGVydHk9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZCA/IFwibmFtZVwiIDogbnVsbH0+e3RpdGxlfTwvaDE+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZnc0IGZsZXhGdWxsXCI+e3RpdGxlfTwvcD47XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBnb0JhY2tTdGF0ZSxcbiAgICAgIHNlbGVjdGlvbkxpc3QsXG4gICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICB0b2dnbGVTZWxlY3Rpb24sXG4gICAgICBzZWxlY3Rpb25MaXN0VmlzaWJsZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdHJpcFR5cGVMaXN0U2hvd24sXG4gICAgICB0cmFja0NhdGVnb3J5Q2xpY2ssXG4gICAgICBjYXRlZ29yeSwgYmFja1VybCxcbiAgICAgIHNob3dTaGFyZSxcbiAgICAgIHNob3dCbGFja1NoYXJlLFxuICAgICAgaGVhZGluZywgdXJsLFxuICAgICAgc2hvd1RpdGxlQXNIMSxcbiAgICAgIHBscEhlYWRpbmcsXG4gICAgICBpc1JhdGluZ1NjaGVtYUVuYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdWJIZWFkZXIgPSBudWxsO1xuICAgIGlmICh0cmlwVHlwZUxpc3RTaG93bikge1xuICAgICAgc3ViSGVhZGVyID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1kcm9wLWNhdGVnb3J5IGZsZXhGdWxsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVTZWxlY3Rpb259PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZ3NCBpYmxvY2tcIj5cbiAgICAgICAgICAgICAge3RoaXMuZHJvcERvd25UaXRsZShzZWxlY3Rpb25MaXN0W3NlbGVjdGVkSXRlbV0ubmFtZSwgY2F0ZWdvcnkpfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvd24tYXJyb3ctZGVzdGluYXRpb25cIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsoc2VsZWN0aW9uTGlzdFZpc2libGUpID8gJycgOiAnaGlkZSd9PlxuICAgICAgICAgICAgPFRyaXBUeXBlTGlzdFxuICAgICAgICAgICAgICBzZWxlY3Rpb25MaXN0PXtzZWxlY3Rpb25MaXN0fVxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX1cbiAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uPXt0b2dnbGVTZWxlY3Rpb259XG4gICAgICAgICAgICAgIHRyYWNrQ2F0ZWdvcnlDbGljaz17dHJhY2tDYXRlZ29yeUNsaWNrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJIZWFkZXIgPSB0aGlzLnJlbmRlclN1YkhlYWRpbmcoc2hvd1RpdGxlQXNIMSwgcGxwSGVhZGluZywgdGl0bGUsIGlzUmF0aW5nU2NoZW1hRW5hYmxlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXRpdGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE2IHNmY3cgaGVhZGVyLXRpdGxlLXAgZmxleCBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdvQmFja1N0YXRlKGJhY2tVcmwpfSBjbGFzc05hbWU9XCJiYWNrLWFycm93XCI+Z28gYmFjazwvYnV0dG9uPlxuICAgICAgICAgIHtzdWJIZWFkZXJ9XG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvd1NoYXJlID9cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtbG9nby1yaWdodCBmcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17d2hhdHNhcHBVcmwoaGVhZGluZywgdXJsKX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc2hvd0JsYWNrU2hhcmUgPyAgPEJsYWNrU2hhcmVJY29uIGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlciB3ZnVsbFwiLz4gOiAgPFdoaXRlU2hhcmVJY29uIGNsYXNzTmFtZT1cImFic29sdXRlLWNlbnRlciB3ZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyVGl0bGUucHJvcFR5cGVzID0ge1xuICBnb0JhY2tTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uTGlzdDogUHJvcFR5cGVzLm9iamVjdCxcbiAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3Rpb25MaXN0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0cmlwVHlwZUxpc3RTaG93bjogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYWNrQ2F0ZWdvcnlDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWNrVXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93U2hhcmU6IFByb3BUeXBlcy5ib29sLFxuICBzaG93QmxhY2tTaGFyZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVybDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd1RpdGxlQXNIMTogUHJvcFR5cGVzLmJvb2wsXG4gIHBscEhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzUmF0aW5nU2NoZW1hRW5hYmxlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkhlYWRlclRpdGxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0aW9uTGlzdDogeyBhbGw6IHsgbmFtZTogJ0FsbCcsIHVybDogJy9BbGwtUGxhY2VzJyB9IH0sXG4gIHNlbGVjdGVkSXRlbTogJ2FsbCcsXG4gIHRvZ2dsZVNlbGVjdGlvbjogKCkgPT4ge30sXG4gIHNlbGVjdGlvbkxpc3RWaXNpYmxlOiBmYWxzZSxcbiAgdGl0bGU6ICcnLFxuICB0cmlwVHlwZUxpc3RTaG93bjogZmFsc2UsXG4gIHRyYWNrQ2F0ZWdvcnlDbGljazogKCkgPT4ge30sXG4gIGNhdGVnb3J5OiAnJyxcbiAgYmFja1VybDogJycsXG4gIHNob3dTaGFyZTogZmFsc2UsXG4gIHNob3dCbGFja1NoYXJlOiBmYWxzZSxcbiAgaGVhZGluZzogJycsXG4gIHVybDogJycsXG4gIHNob3dUaXRsZUFzSDE6IHRydWUsXG4gIHBscEhlYWRpbmc6ICcnLFxuICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2VsZWN0aW9uTGlzdDogZ2V0U2VsZWN0aW9uTGlzdChzdGF0ZSksXG4gICAgICBzZWxlY3RlZEl0ZW06IHN0YXRlLmRlc3RpbmF0aW9uTGlzdGluZy5kZXN0aW5hdGlvbkxpc3Rpbmcuc2VsZWN0ZWRJdGVtLFxuICAgICAgc2VsZWN0aW9uTGlzdFZpc2libGU6IGlzU2VsZWN0aW9uTGlzdFZpc2libGUoc3RhdGUpLFxuICAgICAgY2F0ZWdvcnk6IHN0YXRlLmRlc3RpbmF0aW9uTGlzdGluZy5kZXN0aW5hdGlvbkxpc3RpbmcuY2F0ZWdvcnksXG4gICAgICB3ZWVrZW5kRGVzdGluYXRpb246IHN0YXRlLmRlc3RpbmF0aW9uTGlzdGluZy5kZXN0aW5hdGlvbkxpc3Rpbmcud2Vla2VuZERlc3RpbmF0aW9uLFxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKHtcbiAgICBnb0JhY2tTdGF0ZTogKHBhcmFtcykgPT4gcGFyYW1zID8gZGlzcGF0Y2gocHVzaChwYXJhbXMpKSA6IGRpc3BhdGNoKGdvQmFjaygpKSxcbiAgICB0b2dnbGVTZWxlY3Rpb246ICgpID0+IGRpc3BhdGNoKHRvZ2dsZVNlbGVjdGlvbkxpc3QoKSlcbiAgfSlcbikoSGVhZGVyVGl0bGUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCBJbWcgZnJvbSAnY29tcG9uZW50cy9Db21tb24vSW1nJztcblxuY29uc3QgQmFubmVyVHJpYWxpc3RCb3ggPSBnbGFtb3JvdXMuZGl2KHtcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICcmID4gaW1nJzoge1xuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICB3aWR0aDogJ2F1dG8nLFxuICB9LFxufSk7XG5cbmNvbnN0IEJhbm5lclRyaWFsaXN0ID0gKHsgYmFubmVyUGF0aCwgYmFubmVyQWx0IH0pID0+IChcbiAgPEJhbm5lclRyaWFsaXN0Qm94PlxuICAgIDxJbWcgd2lkdGg9ezQxMX0gaGVpZ2h0PXsxNTR9IGlrU3JjPXtiYW5uZXJQYXRofSBhbHQ9e2Jhbm5lckFsdH0gLz5cbiAgPC9CYW5uZXJUcmlhbGlzdEJveD5cbik7XG5cbkJhbm5lclRyaWFsaXN0LnByb3BUeXBlcyA9IHtcbiAgYmFubmVyUGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYmFubmVyQWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQmFubmVyVHJpYWxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBiYW5uZXJQYXRoOiAnJyxcbiAgYmFubmVyQWx0OiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclRyaWFsaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFRyaWFsaXN0SGVhZGluZyA9ICh7IGhlYWRpbmcsIGV4dHJhU3R5bGUgfSkgPT4gKFxuICA8cCBjbGFzc05hbWU9XCJmdzkgZjI0IG0wXCIgc3R5bGU9e2V4dHJhU3R5bGV9PntoZWFkaW5nfTwvcD5cbik7XG5cblRyaWFsaXN0SGVhZGluZy5wcm9wVHlwZXMgPSB7XG4gIGhlYWRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXh0cmFTdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuVHJpYWxpc3RIZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXh0cmFTdHlsZToge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFsaXN0SGVhZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBBYm91dFRleHQgPSAoeyB0ZXh0IH0pID0+IChcbiAgPHAgY2xhc3NOYW1lPVwiZjE2YSBmdzQgbTAgYXRfYWJvdXRfdGV4dFwiPnt0ZXh0fTwvcD5cbik7XG5cbkFib3V0VGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0VGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29sbGFwc2libGUgZnJvbSAncmVhY3QtY29sbGFwc2libGUnO1xuXG5jb25zdCBHQWNjb3JkaWFuRGl2ID0gZ2xhbW9yb3VzLmRpdih7XG4gICcmIC5Db2xsYXBzaWJsZV9fdHJpZ2dlcic6IHtcbiAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICcmOmFmdGVyJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnICcsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnOHB4JyxcbiAgICAgIGhlaWdodDogJzhweCcsXG4gICAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzNlM2UzZScsXG4gICAgICBib3JkZXJUb3A6ICcwJyxcbiAgICAgIHRvcDogJzdweCcsXG4gICAgICBib3R0b206ICcxMHB4JyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnMCcsXG4gICAgICByaWdodDogJzEycHgnLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxuXG5cbiAgICB9LFxuICB9LFxuICAnJiAuaXMtb3Blbic6IHtcbiAgICBjb2xvcjogJyMwYzlhOGQnLFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTM1ZGVnKScsXG4gICAgICB0b3A6ICcxNHB4JyxcbiAgICB9XG4gIH1cbn0pO1xuXG5jb25zdCBBY2NvcmRpb25IaWRkZW5Cb3hDaGlsZCA9IGdsYW1vcm91cy5kaXYoe1xuICBib3JkZXI6ICcxcHggc29saWQgI2U0ZTRlNCcsXG59KTtcblxuY29uc3QgT3BlblJvbGVzQ291bnQgPSBnbGFtb3JvdXMucCh7XG4gIHRvcDogJzE4cHgnLFxuICByaWdodDogJzUwcHgnLFxufSk7XG5cbmNvbnN0IExpc3RTaG93TWFpbiA9IGdsYW1vcm91cy5wKHtcbiAgbGluZUhlaWdodDogJzI2cHgnLFxufSk7XG5cbmNvbnN0IEFjY29yZGlvbkV4cGFuZCA9ICh7IGxpc3QsIG5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIGxpc3QgJiYgbGlzdC5sZW5ndGggJiYgbmFtZSA/XG4gICAgICA8R0FjY29yZGlhbkRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCByZWxhdGl2ZSBib3JkZXIgYXRfYWNjb3JkaW9uRXhwYW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmVcIj5cbiAgICAgICAgICA8T3BlblJvbGVzQ291bnQgY2xhc3NOYW1lPVwibTAgc2ZjMSBmMTIgYWJzb2x1dGVcIj57bGlzdC5sZW5ndGh9IE9wZW4gUm9sZXM8L09wZW5Sb2xlc0NvdW50PlxuICAgICAgICAgIDxDb2xsYXBzaWJsZSB0cmlnZ2VyPXtuYW1lfSBjbGFzc05hbWU9XCJkcm9wX2Rvd25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcmVsYXRpdmUgXCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsaXN0Lm1hcChqb2IgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake25hbWV9XyR7am9iLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyZml4XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkhpZGRlbkJveENoaWxkIGNsYXNzTmFtZT1cImNsZWFyZml4IHAxNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZjE2YSBzZmM2IGZ3OSBtMCBwYjhcIj57am9iLnN1YkNhdGVnb3J5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0U2hvd01haW4gY2xhc3NOYW1lPVwiZjE0IG0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2Iucm9sZXNBbmRSZXNwb25zaWJpdGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL+KXjy9nLCAnICcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgv4oCiL2csICcgJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0U2hvd01haW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcDAgcHQxNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvY2FyZWVyLyR7am9iLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmkgd2Z1bGwgZnJpZ2h0IHJhZGl1czIgcHQ4IHBiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgRGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkhpZGRlbkJveENoaWxkPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dBY2NvcmRpYW5EaXY+IDogbnVsbFxuICApO1xufTtcblxuQWNjb3JkaW9uRXhwYW5kLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uRXhwYW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBBYm91dFRleHQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvdHJpYWxpc3QvYWJvdXQvQWJvdXRUZXh0JztcbmltcG9ydCBBY2NvcmRpb25FeHBhbmQgZnJvbSAnbW9kdWxlcy9zaGFyZWQvdHJpYWxpc3QvY2FyZWVyL0FjY29yZGlvbkV4cGFuZCc7XG5pbXBvcnQgVHJpYWxpc3RIZWFkaW5nIGZyb20gJ21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L1RyaWFsaXN0SGVhZGluZyc7XG5cbmNvbnN0IENBUkVFUl9MSVNUID0ge1xuICBzYWxlc0FuZE9wZXJhdGlvbnM6ICdTYWxlcyAmIE9wZXJhdGlvbnMnLFxuICBkZXZlbG9wbWVudDogJ0RldmVsb3BtZW50JyxcbiAgdGVjaG5vbG9neTogJ0RldmVsb3BtZW50JyxcbiAgZGlnaXRhbE1hcmtldGluZzogJ0RpZ2l0YWwgTWFya2V0aW5nJ1xufTtcblxuY29uc3QgQ2FyZWVyID0gKHsgY2FyZWVycyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMjQgbWIzMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0IGF0X2hlYWRpbmcxXCI+XG4gICAgICAgIDxUcmlhbGlzdEhlYWRpbmcgaGVhZGluZz1cIlNvbHZpbmcgSG9saWRheSBXb2VzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFib3V0VGV4dFxuICAgICAgICB0ZXh0PVwiSG9saWRheSBwbGFubmluZyBpcyBhIG1peCBvZiBnYXRoZXJpbmcgaW5mb3JtYXRpb24gZnJvbSBtdWx0aXBsZSBjaGFubmVscyxcbiAgICAgICAgIHRhbGtpbmcgdG8gc2V2ZXJhbCBzZXJ2aWNlIHByb3ZpZGVycyBhbmQgY29uc3RhbnRseSB0dXJuaW5nIGludG8gZGV2aWNlIHRvIHBsYW5cbiAgICAgICAgICBhbmQgcGF5IGZvciBzbWFsbCB0aGluZ3MuIEV2ZXIgdGhvdWdodCBob3cgcmVsYXhlZCBhIHRyYXZlbGVyIHdpbGwgYmUgaWYgYWxsXG4gICAgICAgICAgdGhlIGFuc3dlcnMgYXJlIHByb3ZpZGVkIGF0IG9uZSBwbGFjZSB3aXRob3V0IGFueSBoYXNzbGU/IFdlbGNvbWUgdG8gVHJhdmVsVHJpYW5nbGVcbiAgICAgICAgd2hlcmUgd2UgYXJlIHNvbHZpbmcgcmVhbCB0aW1lIGNvbXBsZXggcHJvYmxlbXMgYW5kIGJ1aWxkaW5nIHRoZSBiaWdnZXN0IGhvbGlkYXlcbiAgICAgICAgZWNvLXN5c3RlbS5cIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcDggbWIzMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0IGF0X2hlYWRpbmcyXCI+XG4gICAgICAgIDxUcmlhbGlzdEhlYWRpbmdcbiAgICAgICAgICBoZWFkaW5nPVwiQ3VycmVudCBPcGVuaW5nc1wiXG4gICAgICAgICAgZXh0cmFTdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXRfdGV4dDJcIj5cbiAgICAgICAge1xuICAgICAgICAgIGNhcmVlcnMgJiYgT2JqZWN0LmtleXMoY2FyZWVycykubWFwKGtleSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uRXhwYW5kXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBuYW1lPXtDQVJFRVJfTElTVFtrZXldIHx8ICcnfVxuICAgICAgICAgICAgICBsaXN0PXtjYXJlZXJzW2tleV19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhcmVlci5wcm9wVHlwZXMgPSB7XG4gIGNhcmVlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZWVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JvbGxlciwgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmltcG9ydCBKb2JGb3JtIGZyb20gJy4vSm9iRm9ybSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlclRpdGxlIH0gZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVyVGl0bGUnO1xuXG5jb25zdCBMaXN0U3R5bGUgPSBnbGFtb3JvdXMudWwoe1xuICAnJiBsaSc6IHtcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgd2hpdGVTcGFjZTogJ3ByZS1saW5lJyxcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCBKb2JEZXNjcmliZSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBtYjI0XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmMTYgZnc5IHNmYzYgbTAgbWIxNVwiPnt0aXRsZX08L3A+XG4gICAgICA8TGlzdFN0eWxlPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZjE0cCBtYjUgcmVsYXRpdmUgYmxvY2sgcGwwIHNmYzZcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvbGk+XG4gICAgICA8L0xpc3RTdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBqb2JEZXRhaWxJbmZvID0gKHNlbGVjdGVkSmQpID0+IHtcbiAgcmV0dXJuICh7XG4gICAgJ0pvYiBSb2xlcyAmIFJlc3BvbnNpYmlsaXRpZXMnOiBzZWxlY3RlZEpkLnJvbGVzQW5kUmVzcG9uc2liaXRpZXMsXG4gICAgJ1JlcXVpcmVkIFNraWxscyc6IHNlbGVjdGVkSmQuc2tpbGxzLFxuICAgICdHb29kIHRvIGhhdmUnOiBzZWxlY3RlZEpkLmdvb2RUb0hhdmUsXG4gICAgJ1doYXQgWW91IEdldCc6IHNlbGVjdGVkSmQud2hhdFlvdUdldFxuICB9KTtcbn07XG5cbmNsYXNzIEpvYkRlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBzaG93QXBwbHk6IHRydWVcbiAgfTtcblxuICBoYW5kbGVTY3JvbGxUb0Zvcm1DYXJlZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzY3JvbGxlci5zY3JvbGxUbygnc2VjdGlvbl9fZm9ybWNhcmVlcicsIHtcbiAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICBzbW9vdGg6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2hvd0FwcGx5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QXBwbHk6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSmQsIGpvYkRlc2NyaXB0aW9uLCBjYXJlZXJBcHBseSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBqb2JEZXRhaWwgPSBzZWxlY3RlZEpkICYmIGpvYkRldGFpbEluZm8oc2VsZWN0ZWRKZCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWwwIG1yMCBwbDAgcHIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwbDAgcHIwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggcGwwXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRlclRpdGxlIHRpdGxlPXsnY2FyZWVyJ30gYmFja1VybD17Jy9jYXJlZXInfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBwMTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtMCBwYjI0IHNmYzYgZnc5IGYyNFwiPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZEpkLnN1YkNhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIGZ3NCBwZmM0IGYxMiBwdDhcIj5hdCBUcmF2ZWxUcmlhbmdsZSwge3NlbGVjdGVkSmQubG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBwMCBzZmM2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTUgaWJsb2NrIHAwIGZ3NyBcIj5FeHBlcmllbmNlIDxzcGFuIGNsYXNzTmFtZT1cInBsNSBwcjVcIj46PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03IGlibG9ja1wiPntzZWxlY3RlZEpkLmV4cGVyaWVuY2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01IHAwIHNmYzZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBpYmxvY2sgZnc3IHAwIFwiPkpvYiBMb2NhdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJwbDUgcHI1XCI+Ojwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNyBpYmxvY2tcIj57c2VsZWN0ZWRKZC5sb2NhdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGpvYkRldGFpbCkubWFwKCh0aXRsZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgam9iRGV0YWlsW3RpdGxlXSA/XG4gICAgICAgICAgICAgICAgICAgICAgPEpvYkRlc2NyaWJlIGtleT17aX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17am9iRGV0YWlsW3RpdGxlXX0gLz4gOiBudWxsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0FwcGx5ID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY2xlYXJmaXggcDggc2JjNSBzdGlja3kgYjBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNjcm9sbFRvRm9ybUNhcmVlcn1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSByaXBwbGUgd2Z1bGwgZnJpZ2h0IGF0X2Zvcm1mdW5jdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhdmVcIiAvPkFwcGx5IE5vd1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8RWxlbWVudCBuYW1lPVwic2VjdGlvbl9fZm9ybWNhcmVlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAyNFwiPlxuICAgICAgICAgICAgPEpvYkZvcm1cbiAgICAgICAgICAgICAgam9iRGVzY3JpcHRpb249e2pvYkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBjYXJlZXJBcHBseT17Y2FyZWVyQXBwbHl9XG4gICAgICAgICAgICAgIHNob3dBcHBseT17dGhpcy5oYW5kbGVTaG93QXBwbHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0VsZW1lbnQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuSm9iRGVzY3JpcHRpb24ucHJvcFR5cGVzID0ge1xuICBzZWxlY3RlZEpkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGpvYkRlc2NyaXB0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNhcmVlckFwcGx5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5Kb2JEZXNjcmliZS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpvYkRlc2NyaXB0aW9uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7IFN0YXR1c1N1Y2Nlc3NJY29uLCBTdWNjZXNzSWxsdXN0cmF0aW9uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuaW1wb3J0IHsgc2Nyb2xsZXIgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5cbmNvbnN0IEN1c3RvbVVwbG9hZCA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuYnV0dG9uLS1jdXN0b20nOiB7XG4gICAgd2lkdGg6ICcxNjBweCcsXG4gIH0sXG4gICcmIGlucHV0Jzoge1xuICAgIHdpZHRoOiAnMTYwcHgnLFxuICAgIG9wYWNpdHk6ICcwJyxcbiAgfSxcbn0pO1xuXG5jb25zdCBTZWxlY3REZXNpZ25hdGlvbiA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuc2VsZWN0Q2FyZWVyT3B0aW9uJzoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjYjJiMmIyJyxcbiAgICBwYWRkaW5nOiAnMTJweCAzMHB4IDEycHggMTJweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEzcHgnLFxuICB9LFxuICAnJiAuZG93bkFycm93Jzoge1xuICAgIGJvcmRlcjogJ3NvbGlkICMzZTNlM2UnLFxuICAgIGJvcmRlcldpZHRoOiAnMCAxcHggMXB4IDAnLFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxuICAgIHdpZHRoOiAnOHB4JyxcbiAgICBoZWlnaHQ6ICc4cHgnLFxuICAgIHRvcDogJzM4JScsXG4gIH0sXG59KTtcblxuY29uc3QgR1N1Y2Nlc3NJbGx1c3RyYXRpb25zID0gZ2xhbW9yb3VzLmRpdih7XG4gIHdpZHRoOiAnMjAwcHgnLFxuICBtYXJnaW46ICcwIGF1dG8nLFxufSk7XG5cbmNvbnN0IFN0YXR1c1N1Y2Nlc3MgPSBnbGFtb3JvdXMuc3Bhbih7XG4gIHdpZHRoOiAnMTFweCcsXG4gIGhlaWdodDogJzhweCcsXG59KTtcblxuY2xhc3MgSm9iRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2FyZWVyQXBwbHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgam9iRGVzY3JpcHRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzaG93QXBwbHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBjYXJlZXJzID0gKHRoaXMucHJvcHMuam9iRGVzY3JpcHRpb24gJiYgdGhpcy5wcm9wcy5qb2JEZXNjcmlwdGlvbi5jYXJlZXJzKSB8fCB7fTtcbiAgICBjb25zdCBkZXNpZ25hdGlvbktleXMgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKGNhcmVlcnMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZGVzaWduYXRpb25LZXlzLnB1c2goLi4udmFsdWUubWFwKGUgPT4gKGUuc3ViQ2F0ZWdvcnkgfHwgJycpKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWVzOiB7IHBkZjoge30gfSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBkZXNpZ25hdGlvbktleXNcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsZUNoYW5nZSA9IHRoaXMuaGFuZGxlRmlsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2Nyb2xsVG9Gb3JtQ2FyZWVyID0gKCkgPT4ge1xuICAgIHNjcm9sbGVyLnNjcm9sbFRvKCdzZWN0aW9uX19mb3Jtc3VjY2VzcycsIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgc21vb3RoOiB0cnVlLFxuICAgICAgb2Zmc2V0OiAtMzBcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc3VibWl0dGVkKSB7XG4gICAgICB0aGlzLmhhbmRsZVNjcm9sbFRvRm9ybUNhcmVlcigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh0YXJnZXQpIHtcbiAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHsgLi4udGhpcy5zdGF0ZS52YWx1ZXMgfTtcbiAgICAgIHZhbHVlc1t0YXJnZXRdID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVzIH0pO1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVGaWxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlczoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnZhbHVlcyxcbiAgICAgICAgcGRmOiBlLnRhcmdldC5maWxlc1swXSB8fCB7fVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgc3VibWl0dGluZzogZmFsc2UsXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgZm9ybTogKGVycm9yLmVycm9ycyB8fCBbXSkudG9TdHJpbmcoKSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJ1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICAvL1RPRE86IFByYXNoYW50LCBVc2Ugc2VwYXJhdGUgbGlicmFyeSBmb3IgZm9ybSB2YWxpZGF0aW9uc1xuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gWydmaXJzdF9uYW1lJywgJ2VtYWlsJywgJ3BkZiddO1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgIHJlcXVpcmVkRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKChrZXkgPT09ICdwZGYnICYmICF0aGlzLnN0YXRlLnZhbHVlc1trZXldLnNpemUpIHx8ICF0aGlzLnN0YXRlLnZhbHVlc1trZXldKSB7XG4gICAgICAgIGVycm9yc1trZXldID0gJ1RoaXMgaXMgcmVxdWlyZWQnO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggIT09IDA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBlcnJvcnMgfSk7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3VibWl0dGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zdGF0ZS52YWx1ZXMpLmZvckVhY2goa2V5ID0+XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICBgY2FuZGlkYXRlX2RldGFpbFske2tleX1dYCxcbiAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlc1trZXldXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICAvLyBUT0RPOiBQcmFzaGFudDogd2lsbCB1c2UgcmVkdXgtdGh1bmsgZm9yIGFzeW5jIGFjdGlvbnNcbiAgICAgIHRoaXMucHJvcHMuY2FyZWVyQXBwbHkoeyBkYXRhOiBmb3JtRGF0YSB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoc3VjY2VzcyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3VjY2VzcyAmJiBzdWNjZXNzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG93QXBwbHkoKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZjI0IHBmYzEgbTAgcGI4IGZ3OSB0ZXh0LWNlbnRlciBzZWN0aW9uX19mb3Jtc3VjY2Vzc1wiPkFwcGxpY2F0aW9uIFN1Ym1pdHRlZCE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYjI0XCI+XG4gICAgICAgICAgPGRpdj5Tb21lb25lIGZyb20gdGhlIGhpcmluZyB0ZWFtIHdpbGw8YnIgLz5cbiAgICAgICAgICAgIGdldCBiYWNrIHRvIHlvdSBzaG9ydGx5XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8R1N1Y2Nlc3NJbGx1c3RyYXRpb25zPlxuICAgICAgICAgIDxTdWNjZXNzSWxsdXN0cmF0aW9uIC8+XG4gICAgICAgIDwvR1N1Y2Nlc3NJbGx1c3RyYXRpb25zPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zdWJtaXR0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1vYmlsZV9udW1iZXIgfSA9IHRoaXMuc3RhdGUudmFsdWVzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImYyNCBwZmMxIG0wIHBiMjQgZnc5XCI+QXBwbHkgSGVyZTwvcD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9eydhdF9mb3JtU3VibWl0J30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcGwwIHByMCBtYjE1XCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImYxNCBtMCBmdzcgbWI1IHNmYzZcIlxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJqZC1hcHBseS1maXJzdC1uYW1lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEZpcnN0IE5hbWU8ZW0gY2xhc3NOYW1lPVwicGZjMlwiPio8L2VtPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImpkLWFwcGx5LWZpcnN0LW5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBhdF9maXJzdE5hbWUgbXQ4XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzLmZpcnN0X25hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdmaXJzdF9uYW1lJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3ItdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JzLmZpcnN0X25hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBwbDAgcHIwIG1iMTVcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZjE0IG0wIGZ3NyBtYjUgc2ZjNlwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImpkLWFwcGx5LWxhc3QtbmFtZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJqZC1hcHBseS1sYXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBtdDhcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlcy5sYXN0X25hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdsYXN0X25hbWUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgdGhpcy5zdGF0ZS5lcnJvcnMubGFzdF9uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjAgbWIxNVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmMTQgbTAgZnc3IG1iNSBzZmM2XCIgaHRtbEZvcj1cImpkLWFwcGx5LWVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBJRDxlbSBjbGFzc05hbWU9XCJwZmMyXCI+KjwvZW0+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwiamQtYXBwbHktZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgbXQ4XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbCBJZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZXMuZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWVycm9yLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgcGwwIHByMCBtYjE1XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmMTQgYmxvY2sgd2Z1bGwgbTAgZnc3IHNmYzYgbWI1XCJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJsYXN0LW5hbWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBob25lIE5vXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBwcjAgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD1cImpkLWFwcGx5LXBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttb2JpbGVfbnVtYmVyIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ21vYmlsZV9udW1iZXInKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgPFNlbGVjdERlc2lnbmF0aW9uIGNsYXNzTmFtZT1cImNvbC14cy0xMiBwbDAgcHIwIG1iMTVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZjE0IG0wIGZ3NyBtYjUgc2ZjNlwiIGh0bWxGb3I9XCJmaXJzdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICBTZWxlY3QgRGVzaWduYXRpb25cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVzLmRlc2lnbmF0aW9uIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rlc2lnbmF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdENhcmVlck9wdGlvbiBtdDggYmxvY2sgaW5wdXQgc2VsZWN0IHdlYmtpdEFwcGVhcmFuY2UgX3NlbGVjdENhcmVlck9wdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRlc2lnbmF0aW9uS2V5cy5tYXAoKGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aX0gdmFsdWU9e2V9PntlfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG93bkFycm93IHIxMCBhYnNvbHV0ZSBwM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvU2VsZWN0RGVzaWduYXRpb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIHBsMCBwcjAgbWIxNSByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYnRuLWZpbGUtaW5wdXQgZjE0IG0wIGZ3NyBtYjUgc2ZjNiAgXCI+VXBsb2FkIENWPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxDdXN0b21VcGxvYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX193cmFwIGJsb2NrIHJlbGF0aXZlIG92ZXJmbG93aCBtdDhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tY3VzdG9tIHNiYzUgc2ZjMSBwMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBGaWxlXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImF0X3BkZkNoYW5nZSBhYnNvbHV0ZSBwMTAgdDAgbDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9wZGYsIGFwcGxpY2F0aW9uL21zd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0N1c3RvbVVwbG9hZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBlcnJvckRpc3BsYXlNc2cgXCI+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS52YWx1ZXMucGRmLm5hbWUgfHwgJ05vIGZpbGUgY2hvb3Nlbid9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBkZkVycm9yRGlzcGxheSBpbnB1dC1lcnJvci10ZXh0IHB0MjRcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JzLnBkZn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnN1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tZmlsbGVkLXByaS1sYXJnZSByaXBwbGUgcmFkaXVzMiB3ZnVsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2F2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICBTdWJtaXQgQXBwbGljYXRpb25cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIHRoaXMuc3RhdGUuZXJyb3JzLmZvcm19XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyXCI+Jm5ic3A7PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2JGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IHsgU2Nyb2xsUGVyY2VudGFnZSB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wZXJjZW50YWdlJztcblxuaW1wb3J0IEpvYkRlc2NyaXB0aW9uIGZyb20gJ21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L2pvYkRlc2NyaXB0aW9uL0pvYkRlc2NyaXB0aW9uJztcbmltcG9ydCBIZWFkZXJDb21tb24gZnJvbSAnbW9kdWxlcy9oZWFkZXIvSGVhZGVyQ29tbW9uJztcbmltcG9ydCBDYXJlZXJNYWluIGZyb20gJ21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L2NhcmVlci9DYXJlZXInO1xuaW1wb3J0IEJhbm5lclRyaWFsaXN0IGZyb20gJ21vZHVsZXMvc2hhcmVkL3RyaWFsaXN0L0Jhbm5lclRyaWFsaXN0JztcbmltcG9ydCBIZWFkZXJUcmlhbGlzdCBmcm9tICdtb2R1bGVzL3NoYXJlZC90cmlhbGlzdC9IZWFkZXJUcmlhbGlzdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0Zvb3Rlcic7XG5pbXBvcnQgeyBpbml0aWFsaXplU2Nyb2xsZXIsIG9uU2Nyb2xsIH0gZnJvbSAnYWN0aW9ucy9zZWdtZW50RXZlbnRzJztcblxuY29uc3QgQ2FyZWVyID0gKHsgcGFyYW1zLCBsb2FkZWQsIGpvYkRlc2NyaXB0aW9uLCBqb2JBcHBseSwgbG9jYXRpb24gfSkgPT4ge1xuICBpbml0aWFsaXplU2Nyb2xsZXIoKTtcbiAgaWYgKCFsb2FkZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPHRpdGxlPkNhcmVlcjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2NhcmVlclwiIC8+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb25zdCBiYW5uZXJJbWFnZSA9IFwiaHR0cHM6Ly9kMjltNnE4ZTJhY2c0NC5jbG91ZGZyb250Lm5ldC9wdWJsaWMtcHJvZHVjdC9UcmlhbGlzdC9Kb2IrT3BlbmluZy9Kb2JvcGVuaW5nX0NvdmVyLnBuZ1wiO1xuICBjb25zdCBqZElkID0gW107XG4gIE9iamVjdC5rZXlzKGpvYkRlc2NyaXB0aW9uLmNhcmVlcnMgfHwge30pXG4gICAgLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgamRJZC5wdXNoKFxuICAgICAgICAuLi5qb2JEZXNjcmlwdGlvbi5jYXJlZXJzW2tleV1cbiAgICAgICAgICAuZmlsdGVyKGUgPT4gcGFyc2VJbnQoZS5pZCwgMTApID09PSAocGFyc2VJbnQocGFyYW1zLmlkLCAxMCkgfHwgMCkpXG4gICAgICApO1xuICAgIH0pO1xuICBjb25zdCBzZWxlY3RlZEpkID0gamRJZC5sZW5ndGggPyBqZElkWzBdIDoge307XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+Q2FyZWVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tL2NhcmVlclwiIC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgIDxTY3JvbGxQZXJjZW50YWdlIG9uQ2hhbmdlPXtvblNjcm9sbH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXMuaWQgJiYgamRJZC5sZW5ndGggP1xuICAgICAgICAgICAgPEpvYkRlc2NyaXB0aW9uIHNlbGVjdGVkSmQ9e3NlbGVjdGVkSmR9IGpvYkRlc2NyaXB0aW9uPXtqb2JEZXNjcmlwdGlvbn0gY2FyZWVyQXBwbHk9e2pvYkFwcGx5fSAvPiA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XG4gICAgICAgICAgICAgIDxIZWFkZXJUcmlhbGlzdCBwYXRoPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIDxCYW5uZXJUcmlhbGlzdFxuICAgICAgICAgICAgICAgICAgYmFubmVyUGF0aD17YmFubmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICBiYW5uZXJBbHQ9XCJjYXJlZXIgYmFubmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDYXJlZXJNYWluIGNhcmVlcnM9e2pvYkRlc2NyaXB0aW9uLmNhcmVlcnMgfHwge319IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9TY3JvbGxQZXJjZW50YWdlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LSBwYjggcHQwXCI+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FyZWVyLnByb3BUeXBlcyA9IHtcbiAgcGFyYW1zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGpvYkRlc2NyaXB0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGxvYWRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgam9iQXBwbHk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmVlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=