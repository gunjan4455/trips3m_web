require("source-map-support").install();
exports.ids = ["listing~package-detail"];
exports.modules = {

/***/ "./app-v2/modules/howItWorks/howitworks.cm.scss":
/*!******************************************************!*\
  !*** ./app-v2/modules/howItWorks/howitworks.cm.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tiles": "_2iZJllkylxQkNmiHGcwYk0",
	"worksBox": "_3Os0QG5UCG3jkMhD_9ssdL",
	"image": "_2HkGjf0yjVUNPN7jTNh8uj"
};

/***/ }),

/***/ "./app-v2/modules/richText/index.js":
/*!******************************************!*\
  !*** ./app-v2/modules/richText/index.js ***!
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

var _parsers = __webpack_require__(/*! helpers/parsers */ "./app/helpers/parsers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RichText = ({
  richText,
  rating,
  reviews,
  startingPrice,
  heading,
  isRatingSchemaEnabled
}) => {
  if (!reviews) {
    return null;
  }

  return _react.default.createElement("div", {
    className: "row row- p8 sbc5"
  }, _react.default.createElement("p", {
    className: "f12 at_package_count"
  }, _react.default.createElement("span", {
    className: `pfc4 ${richText ? "" : "block"}`
  }, richText ? richText : heading), _react.default.createElement("span", {
    property: isRatingSchemaEnabled ? "aggregateRating" : null,
    "typeof": isRatingSchemaEnabled ? "AggregateRating" : null
  }, _react.default.createElement("span", null, richText ? ': rated' : 'Rated', " "), _react.default.createElement("span", {
    property: isRatingSchemaEnabled ? "ratingValue" : null
  }, rating), "/5 (based on ", _react.default.createElement("span", {
    property: isRatingSchemaEnabled ? "reviewCount" : null
  }, reviews), " reviews)", startingPrice ? _react.default.createElement("span", null, " | Packages starting from ", (0, _parsers.parsePrice)({
    price: startingPrice
  })) : null)));
};

RichText.propTypes = {
  richText: _propTypes.default.string,
  rating: _propTypes.default.number,
  reviews: _propTypes.default.number,
  startingPrice: _propTypes.default.number,
  heading: _propTypes.default.string,
  isRatingSchemaEnabled: _propTypes.default.bool
};
RichText.defaultProps = {
  richText: 'Honeymoon in Kerala',
  rating: 4,
  startingPrice: 9600,
  heading: '',
  isRatingSchemaEnabled: false,
  reviews: null
};
var _default = RichText;
exports.default = _default;

/***/ }),

/***/ "./app/components/Breadcrumb/Breadcrumb.scss":
/*!***************************************************!*\
  !*** ./app/components/Breadcrumb/Breadcrumb.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"breadcrumb-list": "_WqUTI"
};

/***/ }),

/***/ "./app/components/Breadcrumb/BreadcrumbListing.js":
/*!********************************************************!*\
  !*** ./app/components/Breadcrumb/BreadcrumbListing.js ***!
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

__webpack_require__(/*! ./Breadcrumb.scss */ "./app/components/Breadcrumb/Breadcrumb.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BreadcrumbListing = ({
  breadcrumbs
}) => _react.default.createElement("div", {
  className: "row row- p8 sbc5"
}, _react.default.createElement("ol", {
  className: "breadcrumb-list",
  itemScope: true,
  itemType: "https://schema.org/BreadcrumbList"
}, breadcrumbs.map((breadcrumb, index, array) => _react.default.createElement("li", {
  key: `${breadcrumb.name}_${index}`,
  itemProp: "itemListElement",
  itemScope: true,
  itemType: "https://schema.org/ListItem"
}, breadcrumb.url ? _react.default.createElement(_reactRouter.Link, {
  to: breadcrumb.url,
  itemProp: "item",
  target: index === breadcrumbs.length - 1 ? '' : "_blank"
}, _react.default.createElement("span", {
  itemProp: "name"
}, breadcrumb.name)) : _react.default.createElement("span", {
  itemProp: "name"
}, breadcrumb.name), _react.default.createElement("meta", {
  itemProp: "position",
  content: index + 1
})))));

BreadcrumbListing.propTypes = {
  breadcrumbs: _propTypes.default.array.isRequired
};
var _default = BreadcrumbListing;
exports.default = _default;

/***/ }),

/***/ "./app/components/Common/SeoFooter.js":
/*!********************************************!*\
  !*** ./app/components/Common/SeoFooter.js ***!
  \********************************************/
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

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const GSeoFooterDiv = _glamorous.default.div({
  overflow: 'hidden',
  borderTop: '1px solid #3e3e3e',
  '& .tabsHeadings': {
    '& > div': {
      display: 'none',
      '&.selected-content': {
        display: 'block'
      }
    },
    '& .tabsHeadingsMain': {
      overflowX: 'scroll',
      '& .selected-heading': {
        background: '#fff',
        borderColor: '#aaa',
        color: 'black',
        border: '0 none',
        backgroundColor: '#f1f1f1',
        '&::before, &::after': {
          backgroundColor: '#3e3e3e'
        },
        '&::before': {
          transform: 'rotate(-45deg)'
        },
        '&::after': {
          transform: 'rotate(-135deg)'
        }
      },
      '& li': {
        whiteSpace: 'pre',
        height: '48px',
        padding: '0 30px 0 10px',
        alignItems: 'center',
        display: 'flex',
        '&::before, &::after': {
          content: '\' \'',
          position: 'absolute',
          width: '1px',
          height: '6px',
          background: '#fff',
          top: '22px'
        },
        '&::before': {
          transform: 'rotate(45deg)',
          right: '10px'
        },
        '&::after': {
          transform: 'rotate(135deg)',
          right: '13px'
        }
      }
    }
  }
});

let SeoFooter = class SeoFooter extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      selectedSeoFooterHeading: -1
    }, this.footerSectionHeadingHandler = i => {
      const {
        selectedSeoFooterHeading
      } = this.state;

      if (selectedSeoFooterHeading === i) {
        return this.setState({
          selectedSeoFooterHeading: -1
        });
      }

      this.setState({
        selectedSeoFooterHeading: i
      });
    }, _temp;
  }

  render() {
    const {
      footerSections
    } = this.props;
    const {
      selectedSeoFooterHeading
    } = this.state;
    return _react.default.createElement(GSeoFooterDiv, null, _react.default.createElement("div", {
      className: "tabsHeadings pbc3"
    }, _react.default.createElement("ul", {
      className: "tabsHeadingsMain flex"
    }, footerSections.map((footerSection, i) => _react.default.createElement("li", {
      onClick: () => this.footerSectionHeadingHandler(i),
      className: `alignCenter relative fw7 sfcw m0 f14 ${i === selectedSeoFooterHeading ? 'selected-heading' : ''}`,
      key: footerSection.name
    }, footerSection.name))), footerSections.map((footerSection, i) => _react.default.createElement("div", {
      className: `sbcw ${i === selectedSeoFooterHeading ? 'selected-content' : ''}`
    }, _react.default.createElement("div", {
      className: "p15"
    }, footerSection.footer_links.map(footerLink => _react.default.createElement(_reactRouter.Link, {
      className: "block pfc3 mb8",
      key: footerLink.url,
      to: footerLink.url
    }, footerLink.name)))))));
  }

};
SeoFooter.propTypes = {
  footerSections: _propTypes.default.array.isRequired
};
var _default = SeoFooter;
exports.default = _default;

/***/ }),

/***/ "./app/components/Faq/Faq.js":
/*!***********************************!*\
  !*** ./app/components/Faq/Faq.js ***!
  \***********************************/
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

__webpack_require__(/*! ./Faq.scss */ "./app/components/Faq/Faq.scss");

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _segmentEvents = __webpack_require__(/*! ../../actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _utils = __webpack_require__(/*! helpers/utils */ "./app/helpers/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const parser = new _htmlToReact.Parser();
let Faq = class Faq extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      visible: 6
    }, this._loadMore = () => {
      this.setState(prevState => {
        return {
          visible: prevState.visible + 3
        };
      });
    }, this.trackSegmentEvent = (event, index, title, destinationName, destinationId) => {
      (0, _segmentEvents.trackSegment)({
        event: event,
        section: 'FAQs Clicked',
        object: '',
        cta: title,
        value: _segmentEvents.DEFAULT_VALUE,
        category: `Destination:${destinationName}`,
        label: `Index:${index}`,
        destination_id: destinationId
      });
    }, _temp;
  }

  render() {
    const {
      faqs,
      destination,
      title,
      isMultiDestination,
      destinations
    } = this.props;

    if (!faqs.length) {
      return null;
    }

    return _react.default.createElement("div", {
      className: "row row- pl8 pr8 pt15 pb15 sbcw",
      itemScope: true,
      itemType: "http://schema.org/FAQPage"
    }, _react.default.createElement("h2", {
      className: "heading-common-center"
    }, (0, _utils.getListingItemsHeading)(title, destination.name, isMultiDestination, destinations), " "), _react.default.createElement("div", {
      className: "row row- faq-box"
    }, faqs instanceof Array && faqs.map((faq, index) => _react.default.createElement("div", {
      key: faq.id,
      className: `faq-element at_faq_questions ${index < this.state.visible ? 'show' : ''}`,
      itemType: "http://schema.org/Question",
      itemProp: "mainEntity",
      itemScope: true
    }, _react.default.createElement("input", {
      type: "radio",
      name: "faq-radio",
      id: `faq_${faq.id}`,
      className: "faq-input",
      onClick: () => this.trackSegmentEvent(_segmentEvents.FAQS_CLICKED, index, faq.question, destination.name)
    }), _react.default.createElement("label", {
      htmlFor: `faq_${faq.id}`
    }, _react.default.createElement("div", {
      className: "faq-question"
    }, _react.default.createElement("span", {
      className: "question-mark absolute l0 absolute-center-v iblock"
    }), _react.default.createElement("h3", {
      className: "f14p fw7",
      itemProp: "name"
    }, faq.question), _react.default.createElement("span", {
      className: "arrow-down smooth absolute r0 absolute-center-v iblock"
    }, _react.default.createElement(_Icon.DownArrow, null))), _react.default.createElement("div", {
      className: "faq-answer",
      itemType: "http://schema.org/Answer",
      itemProp: "acceptedAnswer",
      itemScope: true
    }, _react.default.createElement("div", {
      className: "f14p fw4",
      itemProp: "text"
    }, parser.parse(faq.answer)))))), this.state.visible < faqs.length ? _react.default.createElement("div", {
      className: "faqLoadMoreContainer relative flex alignCenter justifyCenter p8 pl0 pr0"
    }, _react.default.createElement("button", {
      onClick: this._loadMore,
      className: "z2 btn-sec-load wfull pl64 pr64"
    }, "Load More")) : null));
  }

};
Faq.propTypes = {
  faqs: _propTypes.default.array,
  destination: _propTypes.default.object,
  title: _propTypes.default.string,
  isMultiDestination: _propTypes.default.bool,
  destinations: _propTypes.default.array
};
Faq.defaultProps = {
  faqs: [],
  destination: null,
  title: 'FAQs',
  isMultiDestination: false,
  destinations: []
};
var _default = Faq;
exports.default = _default;

/***/ }),

/***/ "./app/components/Faq/Faq.scss":
/*!*************************************!*\
  !*** ./app/components/Faq/Faq.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"faq-element": "_2ujhW",
	"show": "_2ZzYy",
	"faq-input": "_20aNQ",
	"faq-question": "_10Vc7",
	"faq-answer": "_3DKYP",
	"question-mark": "_3iWHB",
	"arrow-down": "_34H2G",
	"faqLoadMoreContainer": "_24eaH"
};

/***/ }),

/***/ "./app/components/Listing/AboutListingDestination.scss":
/*!*************************************************************!*\
  !*** ./app/components/Listing/AboutListingDestination.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"guide-footer": "_311hD",
	"image-container": "_Bd-IY",
	"travelogues": "_34bAD",
	"accommodation": "_2P24h",
	"food": "_3Xmn1",
	"places-to-visit": "_f2-k9",
	"things-to-do": "_2UTSH",
	"essential-info": "_IftSd",
	"pro-tips": "_2fbnK",
	"scroll-to-packages-link-mobile": "_1KVWS",
	"sticky-outer-wrapper": "_tB4UY",
	"footer-navigation-container": "_1U2Oj",
	"navigation-tile": "_1bNQQ",
	"active": "_W7y8C",
	"scroll-to-packages-link": "_bL2mh",
	"navigation-logo-container": "_-nrb7",
	"dynamicTextInherit": "_Erja7",
	"footer-navigation-header": "_1RHnw",
	"scroll-to-packages-container": "_YmcrW",
	"make-sticky": "_1pFNJ",
	"heading-h2": "_1Jw6r",
	"expand--content": "_3gnxw",
	"expand": "_2vMpd",
	"expand--arrow": "_3s8bF",
	"interlinking-section-cms": "_Yn5zU",
	"interlinking-section-container": "_3DrnY",
	"links-wrapper-container": "_BjdLD",
	"links-wrapper": "_2Qdtx"
};

/***/ }),

/***/ "./app/helpers/seoHelpers.js":
/*!***********************************!*\
  !*** ./app/helpers/seoHelpers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderMetaTags = exports.createHelmetBanner = exports.createHelmet = exports.getCanonical = exports.getDescription = exports.getTitle = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const getTitle = (title, metaTags) => {
  const tags = metaTags;
  let newTitle = title;

  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const titleList = tags.filter(tag => tag.property === 'og:title');
    newTitle = titleList.length > 0 && titleList[0].content;
  }

  return newTitle;
};

exports.getTitle = getTitle;

const getDescription = (description, metaTags) => {
  const tags = metaTags;
  let newDescription = description;

  if (typeof tags !== 'undefined' && tags.length !== 0) {
    const descriptionList = tags.filter(tag => tag.name && tag.name.toLowerCase() === 'description' || tag.property && tag.property.toLowerCase() === 'og:description');
    newDescription = descriptionList.length ? descriptionList[0].content : '';
  }

  return newDescription;
};

exports.getDescription = getDescription;

const getCanonical = name => {
  if (name[name.length - 1] === '/') {
    name = name.substring(0, name.lastIndexOf('/'));
  }

  return `https://traveltriangle.com${name}`;
};

exports.getCanonical = getCanonical;

const createHelmet = (tags = [], canonicalUrl, pathname) => {
  let hasDescription = false;
  const helmets = tags.map((tag, i) => {
    if (tag.keyword === 'title' || tag.keyword === 'og:title') {
      return _react.default.createElement("title", null, tag.value ? tag.value : '');
    }

    if (tag.keyword === 'description') {
      hasDescription = true;
      return _react.default.createElement("meta", {
        name: tag.keyword,
        content: tag.value,
        key: i
      });
    }

    if (tag.keyword === 'next' || tag.keyword === 'prev') {
      return _react.default.createElement("link", {
        rel: tag.keyword,
        content: `https://traveltriangle.com${tag.value}`,
        key: i
      });
    }

    return _react.default.createElement("meta", {
      name: tag.keyword,
      content: tag.value,
      key: i
    });
  });

  if (!hasDescription) {
    helmets.push(_react.default.createElement("meta", {
      name: "description",
      content: ""
    }));
  }

  helmets.push(_react.default.createElement("link", {
    rel: "canonical",
    href: canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)
  }));
  return helmets;
}; // TODO: Method refactor after BE work
// Refactor createHelmetBanner and createHelmet method to be single method
// after getting fix all the values from BE as content and property.


exports.createHelmet = createHelmet;

const createHelmetBanner = (tags = [], canonicalUrl, pathname) => {
  const helmets = tags.map((tag, i) => {
    if (tag.name === 'title') {
      return _react.default.createElement("title", null, tag.content ? tag.content : '');
    }

    if (tag.name === 'description') {
      return _react.default.createElement("meta", {
        name: tag.name,
        content: tag.content,
        key: i
      });
    }

    if (tag.name === 'next' || tag.name === 'prev') {
      return;
    }

    return _react.default.createElement("meta", {
      property: tag.property,
      content: tag.content,
      key: i
    });
  });
  helmets.push(_react.default.createElement("link", {
    key: "canonical",
    rel: "canonical",
    href: canonicalUrl ? getCanonical(canonicalUrl) : getCanonical(pathname)
  }));
  return helmets;
};

exports.createHelmetBanner = createHelmetBanner;

const renderMetaTags = metaTagsArray => {
  const metaTagsWithoutIosUrl = metaTagsArray.filter(item => !(item.property && (item.property.toLowerCase().includes('al:ios:url') || item.property.toLowerCase().includes('al:android:url') || item.property.toLowerCase().includes('description') || item.property.toLowerCase() === 'title') || item.name && (item.name.toLowerCase().includes('description') || item.name.toLowerCase() === 'title')));

  if (metaTagsWithoutIosUrl) {
    return metaTagsWithoutIosUrl.map((metaTag, index) => _react.default.createElement("meta", _extends({}, metaTag, {
      key: `meta_${index}`
    })));
  }

  return '';
};

exports.renderMetaTags = renderMetaTags;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9ob3dJdFdvcmtzL2hvd2l0d29ya3MuY20uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9yaWNoVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9CcmVhZGNydW1iL0JyZWFkY3J1bWIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9CcmVhZGNydW1iL0JyZWFkY3J1bWJMaXN0aW5nLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0NvbW1vbi9TZW9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRmFxL0ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9GYXEvRmFxLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvTGlzdGluZy9BYm91dExpc3RpbmdEZXN0aW5hdGlvbi5zY3NzIiwid2VicGFjazovLy8uL2FwcC9oZWxwZXJzL3Nlb0hlbHBlcnMuanMiXSwibmFtZXMiOlsiUmljaFRleHQiLCJyaWNoVGV4dCIsInJhdGluZyIsInJldmlld3MiLCJzdGFydGluZ1ByaWNlIiwiaGVhZGluZyIsImlzUmF0aW5nU2NoZW1hRW5hYmxlZCIsInByaWNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIkJyZWFkY3J1bWJMaXN0aW5nIiwiYnJlYWRjcnVtYnMiLCJtYXAiLCJicmVhZGNydW1iIiwiaW5kZXgiLCJhcnJheSIsIm5hbWUiLCJ1cmwiLCJsZW5ndGgiLCJpc1JlcXVpcmVkIiwiR1Nlb0Zvb3RlckRpdiIsImdsYW1vcm91cyIsImRpdiIsIm92ZXJmbG93IiwiYm9yZGVyVG9wIiwiZGlzcGxheSIsIm92ZXJmbG93WCIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNmb3JtIiwid2hpdGVTcGFjZSIsImhlaWdodCIsInBhZGRpbmciLCJhbGlnbkl0ZW1zIiwiY29udGVudCIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b3AiLCJyaWdodCIsIlNlb0Zvb3RlciIsIkNvbXBvbmVudCIsInN0YXRlIiwic2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nIiwiZm9vdGVyU2VjdGlvbkhlYWRpbmdIYW5kbGVyIiwiaSIsInNldFN0YXRlIiwicmVuZGVyIiwiZm9vdGVyU2VjdGlvbnMiLCJwcm9wcyIsImZvb3RlclNlY3Rpb24iLCJmb290ZXJfbGlua3MiLCJmb290ZXJMaW5rIiwicGFyc2VyIiwiUGFyc2VyIiwiRmFxIiwidmlzaWJsZSIsIl9sb2FkTW9yZSIsInByZXZTdGF0ZSIsInRyYWNrU2VnbWVudEV2ZW50IiwiZXZlbnQiLCJ0aXRsZSIsImRlc3RpbmF0aW9uTmFtZSIsImRlc3RpbmF0aW9uSWQiLCJzZWN0aW9uIiwib2JqZWN0IiwiY3RhIiwidmFsdWUiLCJERUZBVUxUX1ZBTFVFIiwiY2F0ZWdvcnkiLCJsYWJlbCIsImRlc3RpbmF0aW9uX2lkIiwiZmFxcyIsImRlc3RpbmF0aW9uIiwiaXNNdWx0aURlc3RpbmF0aW9uIiwiZGVzdGluYXRpb25zIiwiQXJyYXkiLCJmYXEiLCJpZCIsIkZBUVNfQ0xJQ0tFRCIsInF1ZXN0aW9uIiwicGFyc2UiLCJhbnN3ZXIiLCJnZXRUaXRsZSIsIm1ldGFUYWdzIiwidGFncyIsIm5ld1RpdGxlIiwidGl0bGVMaXN0IiwiZmlsdGVyIiwidGFnIiwicHJvcGVydHkiLCJnZXREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwibmV3RGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbkxpc3QiLCJ0b0xvd2VyQ2FzZSIsImdldENhbm9uaWNhbCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiY3JlYXRlSGVsbWV0IiwiY2Fub25pY2FsVXJsIiwicGF0aG5hbWUiLCJoYXNEZXNjcmlwdGlvbiIsImhlbG1ldHMiLCJrZXl3b3JkIiwicHVzaCIsImNyZWF0ZUhlbG1ldEJhbm5lciIsInJlbmRlck1ldGFUYWdzIiwibWV0YVRhZ3NBcnJheSIsIm1ldGFUYWdzV2l0aG91dElvc1VybCIsIml0ZW0iLCJpbmNsdWRlcyIsIm1ldGFUYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxNQUFNQSxXQUFXLENBQ2Y7QUFDRUMsVUFERjtBQUVFQyxRQUZGO0FBR0VDLFNBSEY7QUFJRUMsZUFKRjtBQUtFQyxTQUxGO0FBTUVDO0FBTkYsQ0FEZSxLQVNaO0FBQ0gsTUFBSSxDQUFDSCxPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUNFO0FBQUssZUFBVTtBQUFmLEtBQ0U7QUFBRyxlQUFVO0FBQWIsS0FDRTtBQUFNLGVBQWEsUUFBT0YsV0FBVyxFQUFYLEdBQWdCLE9BQVE7QUFBbEQsS0FDSUEsV0FBV0EsUUFBWCxHQUFzQkksT0FEMUIsQ0FERixFQUlFO0FBQU0sY0FBV0Msd0JBQXdCLGlCQUF4QixHQUE0QyxJQUE3RDtBQUFtRSxjQUFRQSx3QkFBd0IsaUJBQXhCLEdBQTRDO0FBQXZILEtBQ0UsMkNBQU9MLFdBQVcsU0FBWCxHQUF1QixPQUE5QixNQURGLEVBRUU7QUFBTSxjQUFVSyx3QkFBd0IsYUFBeEIsR0FBd0M7QUFBeEQsS0FBK0RKLE1BQS9ELENBRkYsbUJBRTRGO0FBQU0sY0FBVUksd0JBQXdCLGFBQXhCLEdBQXdDO0FBQXhELEtBQStESCxPQUEvRCxDQUY1RixlQUlJQyxnQkFDRSx5RUFBaUMseUJBQVc7QUFBQ0csV0FBT0g7QUFBUixHQUFYLENBQWpDLENBREYsR0FHRSxJQVBOLENBSkYsQ0FERixDQURGO0FBbUJELENBaENEOztBQWtDQUosU0FBU1EsU0FBVCxHQUFxQjtBQUNuQlAsWUFBVVEsbUJBQVVDLE1BREQ7QUFFbkJSLFVBQVFPLG1CQUFVRSxNQUZDO0FBR25CUixXQUFTTSxt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S0FBS3BCLFFBQUwsS0FDRW9CLEtBQUtwQixRQUFMLENBQWNLLFdBQWQsR0FBNEJnQixRQUE1QixDQUFxQyxZQUFyQyxLQUNBRCxLQUFLcEIsUUFBTCxDQUFjSyxXQUFkLEdBQTRCZ0IsUUFBNUIsQ0FBcUMsZ0JBQXJDLENBREEsSUFFQUQsS0FBS3BCLFFBQUwsQ0FBY0ssV0FBZCxHQUE0QmdCLFFBQTVCLENBQXFDLGFBQXJDLENBRkEsSUFHQUQsS0FBS3BCLFFBQUwsQ0FBY0ssV0FBZCxPQUFnQyxPQUpsQyxLQUtLZSxLQUFLaEcsSUFBTCxLQUNIZ0csS0FBS2hHLElBQUwsQ0FBVWlGLFdBQVYsR0FBd0JnQixRQUF4QixDQUFpQyxhQUFqQyxLQUNBRCxLQUFLaEcsSUFBTCxDQUFVaUYsV0FBVixPQUE0QixPQUZ6QixDQU5QLENBRDRCLENBQTlCOztBQVlBLE1BQUljLHFCQUFKLEVBQTJCO0FBQ3pCLFdBQU9BLHNCQUFzQm5HLEdBQXRCLENBQTBCLENBQUNzRyxPQUFELEVBQVVwRyxLQUFWLEtBQy9CLGtEQUFVb0csT0FBVjtBQUFtQixXQUFNLFFBQU9wRyxLQUFNO0FBQXRDLE9BREssQ0FBUDtBQUdEOztBQUNELFNBQU8sRUFBUDtBQUNELENBbkJEIiwiZmlsZSI6Imxpc3Rpbmd+cGFja2FnZS1kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aWxlc1wiOiBcIl8yaVpKbGxreWx4UWtObWlIR2N3WWswXCIsXG5cdFwid29ya3NCb3hcIjogXCJfM09zMFFHNVVDRzNqa01oRF85c3NkTFwiLFxuXHRcImltYWdlXCI6IFwiXzJIa0dqZjB5alZVTlBON2pUTmg4dWpcIlxufTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgcGFyc2VQcmljZSB9IGZyb20gJ2hlbHBlcnMvcGFyc2Vycyc7XG5cbmNvbnN0IFJpY2hUZXh0ID0gKFxuICB7XG4gICAgcmljaFRleHQsXG4gICAgcmF0aW5nLFxuICAgIHJldmlld3MsXG4gICAgc3RhcnRpbmdQcmljZSxcbiAgICBoZWFkaW5nLFxuICAgIGlzUmF0aW5nU2NoZW1hRW5hYmxlZFxuICB9XG4pID0+IHtcbiAgaWYgKCFyZXZpZXdzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0gcDggc2JjNVwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZjEyIGF0X3BhY2thZ2VfY291bnRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgYHBmYzQgJHtyaWNoVGV4dCA/IFwiXCIgOiBcImJsb2NrXCJ9YH0+XG4gICAgICAgICAgeyByaWNoVGV4dCA/IHJpY2hUZXh0IDogaGVhZGluZyB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gcHJvcGVydHk9eyBpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcImFnZ3JlZ2F0ZVJhdGluZ1wiIDogbnVsbH0gdHlwZW9mPXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcIkFnZ3JlZ2F0ZVJhdGluZ1wiIDogbnVsbH0+XG4gICAgICAgICAgPHNwYW4+e3JpY2hUZXh0ID8gJzogcmF0ZWQnIDogJ1JhdGVkJ30gPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHByb3BlcnR5PXtpc1JhdGluZ1NjaGVtYUVuYWJsZWQgPyBcInJhdGluZ1ZhbHVlXCIgOiBudWxsfT57cmF0aW5nfTwvc3Bhbj4vNSAoYmFzZWQgb24gPHNwYW4gcHJvcGVydHk9e2lzUmF0aW5nU2NoZW1hRW5hYmxlZCA/IFwicmV2aWV3Q291bnRcIiA6IG51bGx9PntyZXZpZXdzfTwvc3Bhbj4gcmV2aWV3cylcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFydGluZ1ByaWNlID9cbiAgICAgICAgICAgICAgPHNwYW4+IHwgUGFja2FnZXMgc3RhcnRpbmcgZnJvbSB7cGFyc2VQcmljZSh7cHJpY2U6IHN0YXJ0aW5nUHJpY2UgfSl9PC9zcGFuPlxuICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblJpY2hUZXh0LnByb3BUeXBlcyA9IHtcbiAgcmljaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgcmV2aWV3czogUHJvcFR5cGVzLm51bWJlcixcbiAgc3RhcnRpbmdQcmljZTogUHJvcFR5cGVzLm51bWJlcixcbiAgaGVhZGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNSYXRpbmdTY2hlbWFFbmFibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUmljaFRleHQuZGVmYXVsdFByb3BzID0ge1xuICByaWNoVGV4dDogJ0hvbmV5bW9vbiBpbiBLZXJhbGEnLFxuICByYXRpbmc6IDQsXG4gIHN0YXJ0aW5nUHJpY2U6IDk2MDAsXG4gIGhlYWRpbmc6ICcnLFxuICBpc1JhdGluZ1NjaGVtYUVuYWJsZWQ6IGZhbHNlLFxuICByZXZpZXdzOiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dDtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJyZWFkY3J1bWItbGlzdFwiOiBcIl9XcVVUSVwiXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCAnLi9CcmVhZGNydW1iLnNjc3MnO1xuXG5jb25zdCBCcmVhZGNydW1iTGlzdGluZyA9ICh7IGJyZWFkY3J1bWJzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHA4IHNiYzUnPlxuICAgIDxvbCBjbGFzc05hbWU9J2JyZWFkY3J1bWItbGlzdCcgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL0JyZWFkY3J1bWJMaXN0XCI+XG4gICAgICB7XG4gICAgICAgIGJyZWFkY3J1bWJzLm1hcCgoYnJlYWRjcnVtYiwgaW5kZXgsIGFycmF5KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17YCR7YnJlYWRjcnVtYi5uYW1lfV8ke2luZGV4fWB9XG4gICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiaXRlbUxpc3RFbGVtZW50XCJcbiAgICAgICAgICAgICAgaXRlbVNjb3BlIGl0ZW1UeXBlPVwiaHR0cHM6Ly9zY2hlbWEub3JnL0xpc3RJdGVtXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJyZWFkY3J1bWIudXJsID9cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YnJlYWRjcnVtYi51cmx9IGl0ZW1Qcm9wPVwiaXRlbVwiIHRhcmdldD17aW5kZXggPT09IGJyZWFkY3J1bWJzLmxlbmd0aC0xID8gJycgOiBcIl9ibGFua1wifT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGl0ZW1Qcm9wPVwibmFtZVwiPnticmVhZGNydW1iLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA6IDxzcGFuIGl0ZW1Qcm9wPVwibmFtZVwiPnticmVhZGNydW1iLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJwb3NpdGlvblwiIGNvbnRlbnQ9e2luZGV4ICsgMX0gLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvb2w+XG4gIDwvZGl2PlxuKTtcblxuQnJlYWRjcnVtYkxpc3RpbmcucHJvcFR5cGVzID0ge1xuICBicmVhZGNydW1iczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iTGlzdGluZztcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IEdTZW9Gb290ZXJEaXYgPSBnbGFtb3JvdXMuZGl2KHtcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBib3JkZXJUb3A6ICcxcHggc29saWQgIzNlM2UzZScsXG4gICcmIC50YWJzSGVhZGluZ3MnOiB7XG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICBkaXNwbGF5Oidub25lJyxcbiAgICAgICcmLnNlbGVjdGVkLWNvbnRlbnQnIDoge1xuICAgICAgICBkaXNwbGF5OidibG9jaydcbiAgICAgIH1cbiAgICB9LFxuICAgICcmIC50YWJzSGVhZGluZ3NNYWluJzoge1xuICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgICcmIC5zZWxlY3RlZC1oZWFkaW5nJzoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlckNvbG9yOiAnI2FhYScsXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBib3JkZXI6ICcwIG5vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjFmMWYxJyxcbiAgICAgICAgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzNlM2UzZSdcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKScsXG4gICAgICAgIH0sXG4gICAgICAgICcmOjphZnRlcic6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTEzNWRlZyknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICcmIGxpJzoge1xuICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJyxcbiAgICAgICAgaGVpZ2h0OiAnNDhweCcsXG4gICAgICAgIHBhZGRpbmc6ICcwIDMwcHggMCAxMHB4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgJyY6OmJlZm9yZSwgJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgY29udGVudDogJ1xcJyBcXCcnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICc2cHgnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgICB0b3A6ICcyMnB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcbiAgICAgICAgICByaWdodDogJzEwcHgnLFxuICAgICAgICB9LFxuICAgICAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDEzNWRlZyknLFxuICAgICAgICAgIHJpZ2h0OiAnMTNweCcsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuY2xhc3MgU2VvRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc2VsZWN0ZWRTZW9Gb290ZXJIZWFkaW5nOiAtMVxuICB9O1xuXG4gIGZvb3RlclNlY3Rpb25IZWFkaW5nSGFuZGxlciA9IChpKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZFNlb0Zvb3RlckhlYWRpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyA9PT0gaSApe1xuICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFNlb0Zvb3RlckhlYWRpbmc6IC0xIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzZWxlY3RlZFNlb0Zvb3RlckhlYWRpbmc6IGl9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb290ZXJTZWN0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEdTZW9Gb290ZXJEaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJzSGVhZGluZ3MgcGJjMyc+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0ndGFic0hlYWRpbmdzTWFpbiBmbGV4Jz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZm9vdGVyU2VjdGlvbnMubWFwKChmb290ZXJTZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmZvb3RlclNlY3Rpb25IZWFkaW5nSGFuZGxlcihpKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFsaWduQ2VudGVyIHJlbGF0aXZlIGZ3NyBzZmN3IG0wIGYxNCAke2kgPT09IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyA/ICdzZWxlY3RlZC1oZWFkaW5nJyA6ICcnIH1gfSBrZXk9e2Zvb3RlclNlY3Rpb24ubmFtZX0+e2Zvb3RlclNlY3Rpb24ubmFtZX08L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZm9vdGVyU2VjdGlvbnMubWFwKChmb290ZXJTZWN0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2JjdyAke2kgPT09IHNlbGVjdGVkU2VvRm9vdGVySGVhZGluZyA/ICdzZWxlY3RlZC1jb250ZW50JyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwMTUnPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXJTZWN0aW9uLmZvb3Rlcl9saW5rcy5tYXAoZm9vdGVyTGluayA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPSdibG9jayBwZmMzIG1iOCcga2V5PXtmb290ZXJMaW5rLnVybH0gdG89e2Zvb3RlckxpbmsudXJsfT57Zm9vdGVyTGluay5uYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0dTZW9Gb290ZXJEaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblNlb0Zvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIGZvb3RlclNlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlb0Zvb3RlcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnaHRtbC10by1yZWFjdCc7XG5cbmltcG9ydCAnLi9GYXEuc2Nzcyc7XG5pbXBvcnQgeyBEb3duQXJyb3cgfSBmcm9tICdoZWxwZXJzL0ljb24vSWNvbic7XG5pbXBvcnQgeyBGQVFTX0NMSUNLRUQsIHRyYWNrU2VnbWVudCwgREVGQVVMVF9WQUxVRSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvc2VnbWVudEV2ZW50cyc7XG5pbXBvcnQgeyBnZXRMaXN0aW5nSXRlbXNIZWFkaW5nIH0gZnJvbSAnaGVscGVycy91dGlscyc7XG5jb25zdCBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG5cbmNsYXNzIEZhcSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHZpc2libGU6IDYsXG4gIH07XG5cbiAgX2xvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHt2aXNpYmxlOiBwcmV2U3RhdGUudmlzaWJsZSArIDN9O1xuICAgIH0pO1xuICB9O1xuXG4gIHRyYWNrU2VnbWVudEV2ZW50ID0gKGV2ZW50LCBpbmRleCwgdGl0bGUsIGRlc3RpbmF0aW9uTmFtZSwgZGVzdGluYXRpb25JZCkgPT4ge1xuICAgIHRyYWNrU2VnbWVudCh7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBzZWN0aW9uOiAnRkFRcyBDbGlja2VkJyxcbiAgICAgIG9iamVjdDogJycsXG4gICAgICBjdGE6IHRpdGxlLFxuICAgICAgdmFsdWU6IERFRkFVTFRfVkFMVUUsXG4gICAgICBjYXRlZ29yeTogYERlc3RpbmF0aW9uOiR7ZGVzdGluYXRpb25OYW1lfWAsXG4gICAgICBsYWJlbDogYEluZGV4OiR7aW5kZXh9YCxcbiAgICAgIGRlc3RpbmF0aW9uX2lkOiBkZXN0aW5hdGlvbklkXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBmYXFzLCBkZXN0aW5hdGlvbiwgdGl0bGUsIGlzTXVsdGlEZXN0aW5hdGlvbiwgZGVzdGluYXRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghZmFxcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctIHBsOCBwcjggcHQxNSBwYjE1IHNiY3cnIGl0ZW1TY29wZSBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0ZBUVBhZ2VcIj5cbiAgICAgIDxoMlxuICAgICAgICBjbGFzc05hbWU9J2hlYWRpbmctY29tbW9uLWNlbnRlcic+e2dldExpc3RpbmdJdGVtc0hlYWRpbmcodGl0bGUsIGRlc3RpbmF0aW9uLm5hbWUsIGlzTXVsdGlEZXN0aW5hdGlvbiwgZGVzdGluYXRpb25zKX0gPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgcm93LSBmYXEtYm94Jz5cbiAgICAgICAge1xuICAgICAgICAgIGZhcXMgaW5zdGFuY2VvZiBBcnJheSAmJiBmYXFzLm1hcCgoZmFxLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgIGtleT17ZmFxLmlkfVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmFxLWVsZW1lbnQgYXRfZmFxX3F1ZXN0aW9ucyAke2luZGV4IDwgdGhpcy5zdGF0ZS52aXNpYmxlID8gJ3Nob3cnOiAnJyB9YH1cbiAgICAgICAgICAgICAgIGl0ZW1UeXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgaXRlbVByb3A9XCJtYWluRW50aXR5XCJcbiAgICAgICAgICAgICAgIGl0ZW1TY29wZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZhcS1yYWRpb1wiIGlkPXtgZmFxXyR7ZmFxLmlkfWB9IGNsYXNzTmFtZT0nZmFxLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50cmFja1NlZ21lbnRFdmVudChGQVFTX0NMSUNLRUQsIGluZGV4LCAgZmFxLnF1ZXN0aW9uLCBkZXN0aW5hdGlvbi5uYW1lKX0gLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BmYXFfJHtmYXEuaWR9YH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZhcS1xdWVzdGlvbic+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3F1ZXN0aW9uLW1hcmsgYWJzb2x1dGUgbDAgYWJzb2x1dGUtY2VudGVyLXYgaWJsb2NrJyAvPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZjE0cCBmdzcnIGl0ZW1Qcm9wPVwibmFtZVwiPntmYXEucXVlc3Rpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXJyb3ctZG93biBzbW9vdGggYWJzb2x1dGUgcjAgYWJzb2x1dGUtY2VudGVyLXYgaWJsb2NrJz48RG93bkFycm93IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZhcS1hbnN3ZXInXG4gICAgICAgICAgICAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiYWNjZXB0ZWRBbnN3ZXJcIlxuICAgICAgICAgICAgICAgICAgIGl0ZW1TY29wZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmMTRwIGZ3NCcgaXRlbVByb3A9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZXIucGFyc2UoZmFxLmFuc3dlcil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS52aXNpYmxlIDwgZmFxcy5sZW5ndGggP1xuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXFMb2FkTW9yZUNvbnRhaW5lciByZWxhdGl2ZSBmbGV4IGFsaWduQ2VudGVyIGp1c3RpZnlDZW50ZXIgcDggcGwwIHByMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2xvYWRNb3JlfSBjbGFzc05hbWU9XCJ6MiBidG4tc2VjLWxvYWQgd2Z1bGwgcGw2NCBwcjY0XCI+TG9hZCBNb3JlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuRmFxLnByb3BUeXBlcyA9IHtcbiAgZmFxczogUHJvcFR5cGVzLmFycmF5LFxuICBkZXN0aW5hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzTXVsdGlEZXN0aW5hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGRlc3RpbmF0aW9uczogUHJvcFR5cGVzLmFycmF5XG59O1xuXG5GYXEuZGVmYXVsdFByb3BzID0ge1xuICBmYXFzOiBbXSxcbiAgZGVzdGluYXRpb246IG51bGwsXG4gIHRpdGxlOiAnRkFRcycsXG4gIGlzTXVsdGlEZXN0aW5hdGlvbjogZmFsc2UsXG4gIGRlc3RpbmF0aW9uczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhcTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZhcS1lbGVtZW50XCI6IFwiXzJ1amhXXCIsXG5cdFwic2hvd1wiOiBcIl8yWnpZeVwiLFxuXHRcImZhcS1pbnB1dFwiOiBcIl8yMGFOUVwiLFxuXHRcImZhcS1xdWVzdGlvblwiOiBcIl8xMFZjN1wiLFxuXHRcImZhcS1hbnN3ZXJcIjogXCJfM0RLWVBcIixcblx0XCJxdWVzdGlvbi1tYXJrXCI6IFwiXzNpV0hCXCIsXG5cdFwiYXJyb3ctZG93blwiOiBcIl8zNEgyR1wiLFxuXHRcImZhcUxvYWRNb3JlQ29udGFpbmVyXCI6IFwiXzI0ZWFIXCJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZ3VpZGUtZm9vdGVyXCI6IFwiXzMxMWhEXCIsXG5cdFwiaW1hZ2UtY29udGFpbmVyXCI6IFwiX0JkLUlZXCIsXG5cdFwidHJhdmVsb2d1ZXNcIjogXCJfMzRiQURcIixcblx0XCJhY2NvbW1vZGF0aW9uXCI6IFwiXzJQMjRoXCIsXG5cdFwiZm9vZFwiOiBcIl8zWG1uMVwiLFxuXHRcInBsYWNlcy10by12aXNpdFwiOiBcIl9mMi1rOVwiLFxuXHRcInRoaW5ncy10by1kb1wiOiBcIl8yVVRTSFwiLFxuXHRcImVzc2VudGlhbC1pbmZvXCI6IFwiX0lmdFNkXCIsXG5cdFwicHJvLXRpcHNcIjogXCJfMmZibktcIixcblx0XCJzY3JvbGwtdG8tcGFja2FnZXMtbGluay1tb2JpbGVcIjogXCJfMUtWV1NcIixcblx0XCJzdGlja3ktb3V0ZXItd3JhcHBlclwiOiBcIl90QjRVWVwiLFxuXHRcImZvb3Rlci1uYXZpZ2F0aW9uLWNvbnRhaW5lclwiOiBcIl8xVTJPalwiLFxuXHRcIm5hdmlnYXRpb24tdGlsZVwiOiBcIl8xYk5RUVwiLFxuXHRcImFjdGl2ZVwiOiBcIl9XN3k4Q1wiLFxuXHRcInNjcm9sbC10by1wYWNrYWdlcy1saW5rXCI6IFwiX2JMMm1oXCIsXG5cdFwibmF2aWdhdGlvbi1sb2dvLWNvbnRhaW5lclwiOiBcIl8tbnJiN1wiLFxuXHRcImR5bmFtaWNUZXh0SW5oZXJpdFwiOiBcIl9FcmphN1wiLFxuXHRcImZvb3Rlci1uYXZpZ2F0aW9uLWhlYWRlclwiOiBcIl8xUkhud1wiLFxuXHRcInNjcm9sbC10by1wYWNrYWdlcy1jb250YWluZXJcIjogXCJfWW1jcldcIixcblx0XCJtYWtlLXN0aWNreVwiOiBcIl8xcEZOSlwiLFxuXHRcImhlYWRpbmctaDJcIjogXCJfMUp3NnJcIixcblx0XCJleHBhbmQtLWNvbnRlbnRcIjogXCJfM2dueHdcIixcblx0XCJleHBhbmRcIjogXCJfMnZNcGRcIixcblx0XCJleHBhbmQtLWFycm93XCI6IFwiXzNzOGJGXCIsXG5cdFwiaW50ZXJsaW5raW5nLXNlY3Rpb24tY21zXCI6IFwiX1luNXpVXCIsXG5cdFwiaW50ZXJsaW5raW5nLXNlY3Rpb24tY29udGFpbmVyXCI6IFwiXzNEcm5ZXCIsXG5cdFwibGlua3Mtd3JhcHBlci1jb250YWluZXJcIjogXCJfQmpkTERcIixcblx0XCJsaW5rcy13cmFwcGVyXCI6IFwiXzJRZHR4XCJcbn07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2V0VGl0bGUgPSAodGl0bGUsIG1ldGFUYWdzKSA9PiB7XG4gIGNvbnN0IHRhZ3MgPSBtZXRhVGFncztcbiAgbGV0IG5ld1RpdGxlID0gdGl0bGU7XG4gIGlmICh0eXBlb2YgdGFncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGFncy5sZW5ndGggIT09IDApIHtcbiAgICBjb25zdCB0aXRsZUxpc3QgPSB0YWdzLmZpbHRlcih0YWcgPT4gKFxuICAgICAgdGFnLnByb3BlcnR5ID09PSAnb2c6dGl0bGUnXG4gICAgKSk7XG4gICAgbmV3VGl0bGUgPSAodGl0bGVMaXN0Lmxlbmd0aCA+IDApICYmIHRpdGxlTGlzdFswXS5jb250ZW50O1xuICB9XG4gIHJldHVybiBuZXdUaXRsZTtcbn07XG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKGRlc2NyaXB0aW9uLCBtZXRhVGFncykgPT4ge1xuICBjb25zdCB0YWdzID0gbWV0YVRhZ3M7XG4gIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBpZiAodHlwZW9mIHRhZ3MgIT09ICd1bmRlZmluZWQnICYmIHRhZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MaXN0ID0gdGFncy5maWx0ZXIodGFnID0+IChcbiAgICAgICh0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGVzY3JpcHRpb24nKSB8fFxuICAgICAgKHRhZy5wcm9wZXJ0eSAmJiB0YWcucHJvcGVydHkudG9Mb3dlckNhc2UoKSA9PT0gJ29nOmRlc2NyaXB0aW9uJylcbiAgICApKTtcbiAgICBuZXdEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uTGlzdC5sZW5ndGggPyBkZXNjcmlwdGlvbkxpc3RbMF0uY29udGVudCA6ICcnO1xuICB9XG4gIHJldHVybiBuZXdEZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGdldENhbm9uaWNhbCA9IChuYW1lKSA9PiB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcvJykge1xuICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCBuYW1lLmxhc3RJbmRleE9mKCcvJykpO1xuICB9XG4gIHJldHVybiBgaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20ke25hbWV9YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUhlbG1ldCA9ICh0YWdzID0gW10sIGNhbm9uaWNhbFVybCwgcGF0aG5hbWUpID0+IHtcbiAgbGV0IGhhc0Rlc2NyaXB0aW9uID0gZmFsc2U7XG4gIGNvbnN0IGhlbG1ldHMgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgaWYgKHRhZy5rZXl3b3JkID09PSAndGl0bGUnIHx8IHRhZy5rZXl3b3JkID09PSAnb2c6dGl0bGUnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8dGl0bGU+e3RhZy52YWx1ZSA/IHRhZy52YWx1ZSA6ICcnfTwvdGl0bGU+XG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGFnLmtleXdvcmQgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgIGhhc0Rlc2NyaXB0aW9uID0gdHJ1ZTtcbiAgICAgIHJldHVybiA8bWV0YSBuYW1lPXt0YWcua2V5d29yZH0gY29udGVudD17dGFnLnZhbHVlfSBrZXk9e2l9IC8+O1xuICAgIH1cbiAgICBpZiAodGFnLmtleXdvcmQgPT09ICduZXh0JyB8fCB0YWcua2V5d29yZCA9PT0gJ3ByZXYnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD17dGFnLmtleXdvcmR9XG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vdHJhdmVsdHJpYW5nbGUuY29tJHt0YWcudmFsdWV9YH1cbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPG1ldGEgbmFtZT17dGFnLmtleXdvcmR9IGNvbnRlbnQ9e3RhZy52YWx1ZX0ga2V5PXtpfSAvPjtcbiAgfSk7XG4gIGlmICghaGFzRGVzY3JpcHRpb24pIHtcbiAgICBoZWxtZXRzLnB1c2goPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+KTtcbiAgfVxuICBoZWxtZXRzLnB1c2goXG4gICAgPGxpbmtcbiAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICBocmVmPXtjYW5vbmljYWxVcmwgPyBnZXRDYW5vbmljYWwoY2Fub25pY2FsVXJsKSA6IGdldENhbm9uaWNhbChwYXRobmFtZSl9XG4gICAgLz5cbiAgKTtcbiAgcmV0dXJuIGhlbG1ldHM7XG59O1xuXG4vLyBUT0RPOiBNZXRob2QgcmVmYWN0b3IgYWZ0ZXIgQkUgd29ya1xuLy8gUmVmYWN0b3IgY3JlYXRlSGVsbWV0QmFubmVyIGFuZCBjcmVhdGVIZWxtZXQgbWV0aG9kIHRvIGJlIHNpbmdsZSBtZXRob2Rcbi8vIGFmdGVyIGdldHRpbmcgZml4IGFsbCB0aGUgdmFsdWVzIGZyb20gQkUgYXMgY29udGVudCBhbmQgcHJvcGVydHkuXG5jb25zdCBjcmVhdGVIZWxtZXRCYW5uZXIgPSAodGFncyA9IFtdLCBjYW5vbmljYWxVcmwsIHBhdGhuYW1lKSA9PiB7XG4gIGNvbnN0IGhlbG1ldHMgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgaWYgKHRhZy5uYW1lID09PSAndGl0bGUnKSB7XG4gICAgICByZXR1cm4gKDx0aXRsZT57dGFnLmNvbnRlbnQgPyB0YWcuY29udGVudCA6ICcnfTwvdGl0bGU+KTtcbiAgICB9XG4gICAgaWYgKHRhZy5uYW1lID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICByZXR1cm4gKDxtZXRhIG5hbWU9e3RhZy5uYW1lfSBjb250ZW50PXt0YWcuY29udGVudH0ga2V5PXtpfSAvPik7XG4gICAgfVxuICAgIGlmICh0YWcubmFtZSA9PT0gJ25leHQnIHx8IHRhZy5uYW1lID09PSAncHJldicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIDxtZXRhIHByb3BlcnR5PXt0YWcucHJvcGVydHl9IGNvbnRlbnQ9e3RhZy5jb250ZW50fSBrZXk9e2l9IC8+O1xuICB9KTtcblxuICBoZWxtZXRzLnB1c2goXG4gICAgPGxpbmtcbiAgICAgIGtleT1cImNhbm9uaWNhbFwiXG4gICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgaHJlZj17Y2Fub25pY2FsVXJsID8gZ2V0Q2Fub25pY2FsKGNhbm9uaWNhbFVybCkgOiBnZXRDYW5vbmljYWwocGF0aG5hbWUpfVxuICAgIC8+XG4gICk7XG4gIHJldHVybiBoZWxtZXRzO1xufTtcblxuY29uc3QgcmVuZGVyTWV0YVRhZ3MgPSAobWV0YVRhZ3NBcnJheSkgPT4ge1xuICBjb25zdCBtZXRhVGFnc1dpdGhvdXRJb3NVcmwgPSBtZXRhVGFnc0FycmF5LmZpbHRlcihpdGVtID0+XG4gICAgISgoXG4gICAgICBpdGVtLnByb3BlcnR5ICYmIChcbiAgICAgICAgaXRlbS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhbDppb3M6dXJsJykgfHxcbiAgICAgICAgaXRlbS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhbDphbmRyb2lkOnVybCcpIHx8XG4gICAgICAgIGl0ZW0ucHJvcGVydHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnZGVzY3JpcHRpb24nKSB8fFxuICAgICAgICBpdGVtLnByb3BlcnR5LnRvTG93ZXJDYXNlKCkgPT09ICd0aXRsZSdcbiAgICAgICkgfHwgaXRlbS5uYW1lICYmIChcbiAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2Rlc2NyaXB0aW9uJykgfHxcbiAgICAgICAgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0aXRsZSdcbiAgICAgIClcbiAgICApKSk7XG4gIGlmIChtZXRhVGFnc1dpdGhvdXRJb3NVcmwpIHtcbiAgICByZXR1cm4gbWV0YVRhZ3NXaXRob3V0SW9zVXJsLm1hcCgobWV0YVRhZywgaW5kZXgpID0+IChcbiAgICAgIDxtZXRhIHsuLi5tZXRhVGFnfSBrZXk9e2BtZXRhXyR7aW5kZXh9YH0gLz5cbiAgICApKTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnQge1xuICBnZXRUaXRsZSxcbiAgZ2V0RGVzY3JpcHRpb24sXG4gIGdldENhbm9uaWNhbCxcbiAgY3JlYXRlSGVsbWV0LFxuICBjcmVhdGVIZWxtZXRCYW5uZXIsXG4gIHJlbmRlck1ldGFUYWdzXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9