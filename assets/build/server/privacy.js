require("source-map-support").install();
exports.ids = ["privacy"];
exports.modules = {

/***/ "./app-v2/modules/shared/Footer/index.js":
/*!***********************************************!*\
  !*** ./app-v2/modules/shared/Footer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _FooterLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/FooterLinks */ "./app/components/Footer/FooterLinks.js"));

var _AddressTT = _interopRequireDefault(__webpack_require__(/*! components/Footer/AddressTT */ "./app/components/Footer/AddressTT.js"));

var _CopyRight = _interopRequireDefault(__webpack_require__(/*! components/Footer/CopyRight */ "./app/components/Footer/CopyRight.js"));

var _SocialLinks = _interopRequireDefault(__webpack_require__(/*! components/Footer/SocialLinks */ "./app/components/Footer/SocialLinks.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoveIconCon = _glamorous.default.span({
  width: '20px',
  height: '20px',
  margin: '0 8px',
  display: 'inline-block'
});

const MadeWith = _glamorous.default.div({
  height: '20px',
  lineHeight: '20px',
  fontSize: '12px',
  textAlign: 'center',
  color: '#ffffff',
  '& > p': {
    height: '20px',
    lineHeight: '20px',
    verticalAlign: 'top'
  }
});

const Index = () => _react.default.createElement("div", {
  className: "at_footer pbc3 p8 m8"
}, _react.default.createElement("div", {
  className: "pt0 pb0"
}, _react.default.createElement(_FooterLinks.default, null)), _react.default.createElement("div", {
  className: "pt8 mb24"
}, _react.default.createElement(_AddressTT.default, null)), _react.default.createElement("div", {
  className: "mb24"
}, _react.default.createElement(_SocialLinks.default, null)), _react.default.createElement("div", {
  className: "flex spaceBetween alignCenter"
}, _react.default.createElement(MadeWith, {
  className: "flex alignCenter flexFull"
}, _react.default.createElement("p", {
  className: "m0 f12 iblock at_madelove"
}, "Made with"), _react.default.createElement(LoveIconCon, {
  className: "relative"
}, _react.default.createElement(_Icon.LoveIcon, null)), _react.default.createElement("p", {
  className: "m0 f12 iblock"
}, "in India")), _react.default.createElement("div", {
  className: "flexFull text-right"
}, _react.default.createElement(_CopyRight.default, null))));

var _default = Index;
exports.default = _default;

/***/ }),

/***/ "./app-v2/modules/static/privacy/index.js":
/*!************************************************!*\
  !*** ./app-v2/modules/static/privacy/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Privacy = () => _react.default.createElement("div", {
  className: "clearfix p24"
}, _react.default.createElement("h1", {
  className: "f24 fw9 mb15 pb8"
}, "TravelTriangle Privacy Policy"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Holiday Triangle Travel Private Limited ", _react.default.createElement("span", {
  className: "fw7"
}, "(\u201Cwe/ us/ our/ TT\u201D)"), " values the trust which a customer ", _react.default.createElement("span", {
  className: "fw7"
}, "(\u201Cyou/ your\u201D) "), " places in TT and our website,traveltriangle.com ", _react.default.createElement("span", {
  className: "fw7"
}, "(\u201CWebsite\u201D)"), ". Hence, we insist upon the highest standard of practices to ensure security of transactions and utmost privacy of customer information. We respect your need to understand how information furnished by you is being collected, used, disclosed, transferred and stored by us. In this regard, please read this privacy policy ", _react.default.createElement("span", {
  className: "fw7"
}, "(\u201CPolicy\u201D)"), " to get familiarized about our information gathering and dissemination practice."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We assure you of our firm commitment to your privacy and the protection of your priceless information. The Policy contains information about the Website and the 'Travel Triangle' android and iOS app (such applications are collectively referred as the ", _react.default.createElement("span", {
  className: "fw7"
}, "\u201CApp\u201D"), "). In order to endow you with the uninterrupted use of our services, we may collect and, in some circumstances, disclose information about you."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "If you do not agree to the terms in this Policy, we kindly ask you to leave the site."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "If you have any questions or concerns, regarding this privacy policy, you should contact our Customer Support Desk at support@TravelTriangle.com."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "As you may know, a new European privacy regulation called General Data Protection Regulation (\"GDPR\") has come into effect on May 25, 2018. GDPR is designed to unify the current data protection privacy laws throughout the EU, and to enhance the rights of European residents to protect their personal information. The GDPR also applies to any business that offers its products or services to European residents."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We collect and use your personal information when you avail our services. For the purpose of the General Data Protection Regulation (\u201CGDPR\u201D), we are the \u2018data controller\u2019. Our data protection officer can be contacted at dpo@traveltriangle.com."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "By accessing our Websites and utilizing our services, you acknowledge that you have read and understood this Privacy Policy and the information collection and handling practices outlined in it."), _react.default.createElement("h1", {
  className: "f24 fw7 mb15"
}, "Overview"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "This Privacy Policy describes in detail our policy and practices regarding our collection, use and disclosure of your personal data."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We understand that providing information online involves a great deal of trust on your part. We take this trust very seriously, and make it a high priority to ensure the security and confidentiality of the personal data you provide us when you visit our Website or use our services."), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#personalDataCollection"
}, "1. Collection of your personal data")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#personalDataUse",
  className: "f14p mb15"
}, "2. How we use your personal data")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#demographicData",
  className: "f14p mb15"
}, "3. Use of Demographic and profile data")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#withWhom",
  className: "f14p mb15"
}, "4. With whom we share your personal Information")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#howLong",
  className: "f14p mb15"
}, "5. How long we keep your personal data")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#cookies",
  className: "f14p mb15"
}, "6. Cookies")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#dataProtection",
  className: "f14p mb15"
}, "7. How we protect your personal data")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#notificationChanges",
  className: "f14p mb15"
}, "8. Notifications of modifications and changes to the policy")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#sharingPhotos",
  className: "f14p mb15"
}, "9. Sharing of traveler\u2019s photos and videos")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#securityPrecautions",
  className: "f14p mb15"
}, "10. Security precautions")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#optOut",
  className: "f14p mb15"
}, "11. Choice to opt out")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#advertiseMent",
  className: "f14p mb15"
}, "12. Advertisement on website")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#informationOverseas",
  className: "f14p mb15"
}, "13. Transfer of information overseas")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#euData",
  className: "f14p mb15"
}, "14. EU data subject rights")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#confidentiality",
  className: "f14p mb15"
}, "15. Confidentiality")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#disclaimer",
  className: "f14p mb15"
}, "16. Disclaimer")), _react.default.createElement("p", {
  className: "f14p mb8"
}, _react.default.createElement("a", {
  href: "#grievance",
  className: "f14p mb15"
}, "17. Grievance officer")), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "personalDataCollection"
}, "1. Collection of your personal data"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Personal data means any information about an individual from which that person can be identified, addresses, date of birth, password and payment information. It does not include data where the identity has been removed or otherwise anonymized (anonymous data)."), _react.default.createElement("div", {
  className: "f14p mb15 pl24"
}, _react.default.createElement("ol", null, _react.default.createElement("li", {
  className: "mb8"
}, "We collect your personally identifiable information including but not limited to your (i) name; (ii) e-mail address; (iii) contact number; (iv) residential address; (v) credit/debit/bank account details; (vi) internet protocol (\u201CIP\u201D) address, in the following circumstances:"), _react.default.createElement("li", {
  className: "mb8"
}, "When you make a reservation, or opt for a package from our Website or App or through the aid of our customer service team;"), _react.default.createElement("li", {
  className: "mb8"
}, "When you register with us, make a requisition for information pertaining to holiday packages, subscribe to our newsletters, enter competitions, share with us your experience or provide any other details in relation to a holiday package availed by you, send us queries or register for promotions;"), _react.default.createElement("li", {
  className: "mb8"
}, "When you set up a free account on our Website or App or participate in surveys or provide us your feedback; and"), _react.default.createElement("li", {
  className: "mb8"
}, "When you engage with us in any online or offline event or portray your interest on any page hosted by us on a third-party platform or location or voluntarily provide your details for our promotions."), _react.default.createElement("li", {
  className: "mb8"
}, "While you can browse certain sections of our Website or App, prior to registering as a member, certain activities (such as placing an order) requires mandatory registration1. We may use your contact information for sending you (i) offers based on your previous orders and your interests, (ii) payment reminder notices, (iii) travel vouchers and (iv) updates on the travel sector through our newsletters. In the event, you do not wish to receive such information, you may unsubscribe through the facility in the email message you receive."))), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "personalDataUse"
}, "2. How we use personal data"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We use personal information to provide the services that you request. To the extent we use your information including personal information to market our services to you, we will provide you the ability to opt-out of such uses."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We may use your personal information for the following purposes, including but not limited to: (i) resolve disputes; (ii) troubleshoot problems; (iii) promote a safe service; (iv) collect fees owed to us; (v) cater to consumer interests while providing our services, (vi) inform you about online and offline offers, products, services, and updates; (vii) customize your experience; (viii) detect and protect us against error, fraud and other criminal activity; (ix) enforce our terms and conditions; (x) conduct research and analysis for improvising customer experience; (xi) to conduct periodical audit; (xii) contact you to send important information or notices etc. and as otherwise described to you at the time of collection."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8"
}, "Marketing Promotions:"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Marketing promotions, research and programs help us to identify your preferences, develop programs and improve user experience. TT frequently sponsors promotions to give its Users the opportunity to win great travel and travel related prizes. Personal Information collected by us for such activities may include contact information and survey questions. We use such Personal Information to notify contest winners and survey information to develop promotions and product improvements."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "demographicData"
}, "3. Use of Demographic and Profile Data"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "In our efforts to continually improve our product and service offerings, we may, from time to time, collect and analyses demographic and profile data about your activity on our Website and App. We identify and use your IP address to help diagnose problems with our server, and to administer our Website and App. Your IP address is also used to help identify you and to gather broad demographic information. We may occasionally ask you to complete optional online surveys, which may require you to provide your contact information and demographic information (like zip code, age, or income level). We use this data to tailor your experience at our Website and App, providing you with content that we think you might be interested in and to display the relevant content according to your preferences."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "withWhom"
}, "4. With whom we share your Personal Information"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We may share the personal information, obtained from you, with our other corporate entities and affiliates to:"), _react.default.createElement("div", {
  className: "f14p mb15 pl24"
}, _react.default.createElement("ol", null, _react.default.createElement("li", {
  className: "mb8"
}, "help detect and prevent identity theft,"), _react.default.createElement("li", {
  className: "mb8"
}, "fraud and other potentially illegal acts;"), _react.default.createElement("li", {
  className: "mb8"
}, "co-relate related or multiple accounts to prevent abuse of our services;"), _react.default.createElement("li", {
  className: "mb8"
}, "to facilitate joint or co-branded services that you request where such services are provided by more than one corporate entity."))), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Those entities and affiliates may not market to you as a result of such sharing of personal information by us, unless you explicitly opt-in. We may disclose personal information in the following circumstances:"), _react.default.createElement("div", {
  className: "f14p mb15 pl24"
}, _react.default.createElement("ol", null, _react.default.createElement("li", {
  className: "mb8"
}, "if required to do so by law or by law enforcement offices for investigating any civil or criminal offences; or"), _react.default.createElement("li", {
  className: "mb8"
}, "if such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process."), _react.default.createElement("li", {
  className: "mb8"
}, "to legal, financial or other professional advisors of TT, or"), _react.default.createElement("li", {
  className: "mb8"
}, "to enforce our terms of the Policy;"), _react.default.createElement("li", {
  className: "mb8"
}, "to respond to claims that an advertisement, posting or other content violates the rights of a third party; or"), _react.default.createElement("li", {
  className: "mb8"
}, "to protect the rights, property or personal safety of the users of our Website and App, or the general public."))), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We may share our data, including personally identifiable information about you, with our parent and/or subsidiaries or business partners that are committed to serving your online needs and related services, throughout the world. Such data will be shared for the sole purpose of enhancing your browsing experience. To the extent that these entities have access to your information, they will treat it as protectively as they treat information they obtain from their other members. You should expect that we would share some or all of your information in order to continue to provide the service and the entity with which such information is being shared, will be required to follow this Policy with respect to your personal information."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "howLong"
}, "5. How long we keep your personal data"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting or statutory reporting requirements."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure or your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means and the applicable legal requirements."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We may retain certain information subsequent to the closing of your account, for example if it is necessary to fulfil our legal obligations or to exercise, to maintain security, to prevent fraud and abuse and to defend or enforce our rights."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "cookies"
}, "6. Cookies"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We use our as well as third parties data collection devices such as cookies on certain pages of our Website and App. Cookies are small files stored on your hard drive that assist us in providing services customized to your requirements, interests and preferences. We also offer certain features which are only available through the use of a cookie. Cookies may be used whether you choose to register with us or not. Third party vendors such as www.google.com (Google) may use cookies to serve advertisements based on your visits to this website. You may visit the website of the third party and choose to opt out of the use of cookies for interest-based advertising, if the third party offers such an option. We place both permanent and temporary cookies in your computer's hard drive. However, such cookies do not contain any of your personally identifiable information."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "dataProtection"
}, "7. How we protect your personal data"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "TT takes the protection of your Customer Data seriously but, unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Customer Data, we cannot guarantee the security of your Customer Data transmitted through any channel, such as the Website; any transmission is at your own risk."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "notificationChanges"
}, "8. Notification of Modifications and Changes to the Policy"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We reserve the right to change the terms of the Policy from time to time, as seem fit, without any intimation to you, and your continued use of the Website or App will signify your acceptance of any amendment to these terms. You are therefore advised to re-read the terms of the Policy on a regular basis. Should it be that you do not accept any of the modifications or amendments to the terms of the Policy, you may terminate your use of our services immediately."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "sharingPhotos"
}, "9. Sharing of travelers\u2019 photos and videos"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "By voluntarily submitting your travel photos or videos to TT after availing our services, either on our Website or App or through email or any other medium of communication to us, you grant to TT, a non-exclusive, perpetual, worldwide, royalty-free, transferable, and sub-licensable, license to edit, telecast, re-run, reproduce, use, syndicate, print and distribute the materials you submit, or any portion thereof, in or in connection with TT and any of its affiliates\u2019 websites, programming, platforms and/or App (the manner, mode and extent of which are subject to change without notice to you), in any manner, and in any medium or forum. You represent and warrant to TT that you have the full legal right, power and authority to grant the aforementioned license to TT. You further agree that your submission(s), and the exercise of the rights granted herein, pursuant to the aforesaid terms, do not and will not violate any applicable laws or regulations, or cause a breach of any agreement(s) entered by you with any third parties, and that none of the submission(s) will infringe any copyright, invade any right of privacy, right of publicity, contain any libelous or slanderous material, or infringe or violate any other intellectual property right or other right (including common law rights) of any other person or entity."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "securityPrecautions"
}, "10. Security Precautions"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Our Website and App have stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access. As soon as the you declare the intent to avail any of the"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "services offered by us on the Website or App, the Website or App, as the case may be, shall transfer the control to a specified and authentic payment gateway [PayU, Citrus, EBS, PayTm ] that takes your credit card or debit card or other banking information and processes the payment transaction."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "optOut"
}, "11. Choice to Opt-Out"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "If you so desire, you may opt-out of receiving non-essential (promotional, marketing- related) communications from us on behalf of our partners, and from us, in general, after setting up an account. You may also contact us, at support@TravelTriangle.com, to unsubscribe to our newsletters, publications or any other material."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "Further, please note that all information, including personal information provided by you is voluntary in nature. You may, at any time, withdraw your consent, in accordance with this Policy. However, in the event you withdraw consent to provide information, including personal information, you agree that you will no longer be permitted to use our services."), _react.default.createElement("p", {
  className: "f14p mb15"
}, "You can also access, modify, correct and eliminate information provided by you which has been collected by us. We will not retain any personal information for a longer period than is required for the purposes for which the personal information may lawfully be used or is otherwise required under any other law for the time being in force. In the event you are not agreeable to the terms and conditions under this Policy and you are presently availing our services, we request you to kindly withdraw your consent or modify your information, by writing to us, at support@traveltriangle.com, and uninstall our App through which you may be availing our services."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "advertiseMent"
}, "12. Advertisement on website"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "We may use third-party advertising websites to serve advertisements when you visit our Website and App. Such websites may use information including your personal information in order to provide advertisements regarding goods and services that may be of interest to you. We cannot confirm or guarantee or take responsibility for the privacy practices or policies of such third-party advertising websites. We disclaim any liability towards any losses due to privacy infringement or other causes that you may suffer pursuant to access of such third-party advertising websites. We encourage you to read the privacy policies of the relevant third-party advertising websites prior to accessing them."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "informationOverseas"
}, "13. Transfer of information overseas"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "TT\u2019s Corporate Office is based in Gurgaon, Haryana, India. It is the place from where it carries its operations. Accordingly, Customer Data will be accessible to TT\u2019s offices and appointed agents based out of India. This means that Customer Data will be transferred to, and stored at, a destination outside of your country and outside the European Economic Area (\"EEA\"). If you are an EU resident, and we transfer Customer Data outside the EEA, this is done on the basis that it is necessary in discharge of the services rendered to you by TT or its agents."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "euData"
}, "14. EU data subject rights"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "If you are a resident in the EU, you may have certain rights in relation to the Customer Data we hold about you, which we detail below. Some of these only apply in certain circumstances where TT is holding authority of the data and legally/contractually allowed as per the local laws as set out in more detail below. We also set out how to exercise those rights."), _react.default.createElement("div", {
  className: "f14p mb15 pl24"
}, _react.default.createElement("ol", null, _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to information"), " - including contact details to the DPO, the purposes for processing Personal Information and the rights of the individual."), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to access"), " the Personal Information that are processed"), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to erasure"), " (\u201D Right to be forgotten\u201D)"), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to rectification")), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to restriction of processing")), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to data portability"), " of the Personal Information supplied to TT by the EU resident"), _react.default.createElement("li", {
  className: "mb8"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Right to object (opt-out)"), " to processing (unless TT otherwise has compelling legitimate grounds)"))), _react.default.createElement("p", {
  className: "f14p mb15"
}, "EU residents can exercise these rights by raising a request directly at dpo@traveltriangle.com ."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "confidentiality"
}, "15. Confidentiality"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "You further acknowledge that we may provide you certain information (apart from information available on the Website and App, which is under public domain) which is designated confidential by us. You agree that you shall not disclose such confidential information without our prior written consent. Further, your information shall be regarded as confidential and therefore, will not be divulged to any third party, unless if legally required to do so to the appropriate authorities or otherwise permitted in terms of this Policy."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "disclaimer"
}, "16. Disclaimer"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "As a user of the Website and App, you understand and agree that you assume all responsibility and risk for your use of the Website and App, the internet generally, and the documents you post or access and for your conduct on and off the Website and App. Your use of site is subjected to our Policy. If you do not agree to this, we kindly request you not to use this portal."), _react.default.createElement("h1", {
  className: "f18 fw7 pt8 pb8",
  id: "grievance"
}, "17. Grievance Officer"), _react.default.createElement("p", {
  className: "f14p mb15"
}, "In case you have any grievance, please feel free to write to our Grievance Officer, are provided below:"), _react.default.createElement("p", {
  className: "f14p"
}, "Mr. Abhirup Saha"), _react.default.createElement("p", {
  className: "f14p"
}, "Holiday Triangle Travel Private Limited"), _react.default.createElement("p", {
  className: "f14p"
}, "3rd Floor & 4th Floor, Dynamic House,"), _react.default.createElement("p", {
  className: "f14p"
}, "Plot no-29, Sector-18,"), _react.default.createElement("p", {
  className: "f14p"
}, "Gurugram-122015, Haryana, India"), _react.default.createElement("p", {
  className: "f14p"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Contact:"), " 1800 123 5555"), _react.default.createElement("p", {
  className: "f14p"
}, _react.default.createElement("span", {
  className: "fw7"
}, "Email:"), " customercare@traveltriangle.com"));

var _default = Privacy;
exports.default = _default;

/***/ }),

/***/ "./app-v2/screens/privacy/PrivacyAsync.js":
/*!************************************************!*\
  !*** ./app-v2/screens/privacy/PrivacyAsync.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactScrollPercentage = __webpack_require__(/*! react-scroll-percentage */ "react-scroll-percentage");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _segmentEvents = __webpack_require__(/*! actions/segmentEvents */ "./app/actions/segmentEvents.js");

var _privacy = _interopRequireDefault(__webpack_require__(/*! modules/static/privacy */ "./app-v2/modules/static/privacy/index.js"));

var _HeaderCommon = _interopRequireDefault(__webpack_require__(/*! modules/header/HeaderCommon */ "./app-v2/modules/header/HeaderCommon.js"));

var _Footer = _interopRequireDefault(__webpack_require__(/*! modules/shared/Footer */ "./app-v2/modules/shared/Footer/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PrivacyPage = () => {
  (0, _segmentEvents.initializeScroller)();
  return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("meta", {
    charSet: "utf-8"
  }), _react.default.createElement("title", null, "Privacy Policy - TravelTriangle"), _react.default.createElement("link", {
    rel: "canonical",
    href: "https://traveltriangle.com/privacy"
  })), _react.default.createElement(_HeaderCommon.default, null), _react.default.createElement(_reactScrollPercentage.ScrollPercentage, {
    onChange: _segmentEvents.onScroll
  }, _react.default.createElement(_privacy.default, null)), _react.default.createElement(_Footer.default, null));
};

var _default = PrivacyPage;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/AddressTT.js":
/*!********************************************!*\
  !*** ./app/components/Footer/AddressTT.js ***!
  \********************************************/
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

const AddressTT = ({
  isHomePage
}) => {
  return _react.default.createElement("div", {
    className: "row row- sfcw text-center",
    itemProp: isHomePage ? "address" : null,
    itemScope: isHomePage ? "itemscope" : null,
    itemType: isHomePage ? "https://schema.org/PostalAddress" : null
  }, _react.default.createElement("p", {
    className: "fw9 f14 m0 mb15 sfc6 text-uppercase "
  }, "Corporate Office"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "name" : null
  }, "Holiday Triangle Travel Private Limited"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "streetAddress" : null
  }, "Plot No - 29 , 3rd & 4th Floor, "), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "addressLocality" : null
  }, "Dynamic House, Maruti Industrial Complex,"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "AddressRegion" : null
  }, "Sector 18 , Gurugram - ", _react.default.createElement("span", {
    itemProp: "postalCode"
  }, "122015 "), ", Haryana"), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "telephone" : null
  }, "Landline: ", _react.default.createElement("a", {
    href: "tel:18001235555"
  }, "1800 123 5555")), _react.default.createElement("p", {
    className: "f12 m0",
    itemProp: isHomePage ? "email" : null
  }, "Email: ", _react.default.createElement("a", {
    rel: "nofollow",
    href: "mailto:customercare@traveltriangle.com"
  }, "customercare@traveltriangle.com")));
};

AddressTT.propTypes = {
  isHomePage: _propTypes.default.bool
};
AddressTT.defaultProps = {
  isHomePage: false
};
var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/CopyRight.js":
/*!********************************************!*\
  !*** ./app/components/Footer/CopyRight.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AddressTT = () => _react.default.createElement("p", {
  className: "f12 pfc4"
}, "All rights reserved \xA9 2020");

var _default = AddressTT;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/FooterLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

__webpack_require__(/*! ./FooterLinks.scss */ "./app/components/Footer/FooterLinks.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FooterLinks = () => _react.default.createElement("div", {
  className: "row row-"
}, _react.default.createElement("ul", {
  className: "flex alignCenter flexWrap justifyCenter footer-links-menu"
}, _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/aboutus"
}, "About Us")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/career"
}, "We Are Hiring!")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/team"
}, "Team")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/blog"
}, "Blog")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/testimonials"
}, "Testimonials")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/tnc"
}, "T&C")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/privacy"
}, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/cancellation"
}, "Cancellation")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/FAQs"
}, "FAQs")), _react.default.createElement("li", null, _react.default.createElement("a", {
  href: "/contact_us"
}, "Contact Us"))));

var _default = FooterLinks;
exports.default = _default;

/***/ }),

/***/ "./app/components/Footer/FooterLinks.scss":
/*!************************************************!*\
  !*** ./app/components/Footer/FooterLinks.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer-links-menu": "_1xegl"
};

/***/ }),

/***/ "./app/components/Footer/SocialLinks.js":
/*!**********************************************!*\
  !*** ./app/components/Footer/SocialLinks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _glamorous = _interopRequireDefault(__webpack_require__(/*! glamorous */ "./node_modules/glamorous/dist/glamorous.esm.js"));

var _Icon = __webpack_require__(/*! helpers/Icon/Icon */ "./app/helpers/Icon/Icon.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const SocialIconsContainer = _glamorous.default.div({
  '& .facebookIcon': {
    '& svg': {
      width: '10px',
      height: '19px'
    }
  },
  '& .twitterIcon': {
    '& svg': {
      width: '17px',
      height: '14px'
    }
  },
  '& .pintrestIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  },
  '& .googleIcon': {
    '& svg': {
      width: '21px',
      height: '13px'
    }
  },
  '& .instaIcon': {
    '& svg': {
      width: '20px',
      height: '20px'
    }
  }
});

const ConnectIcons = _glamorous.default.a({
  minWidth: '30px',
  maxWidth: '30px',
  height: '30px',
  display: 'inline-block',
  marginRight: '10px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:last-child': {
    marginRight: '0'
  }
});

let SocialLinks = class SocialLinks extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "wfull"
    }, _react.default.createElement(SocialIconsContainer, {
      className: "at_socialicons flex alignCenter wfull justifyCenter"
    }, _react.default.createElement(ConnectIcons, {
      className: "facebookIcon",
      href: "https://www.facebook.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.FBIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "twitterIcon",
      href: "https://twitter.com/traveltriangle",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Twitter, null)), _react.default.createElement(ConnectIcons, {
      className: "pintrestIcon",
      href: "https://www.pinterest.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.PinterestIcon, null)), _react.default.createElement(ConnectIcons, {
      className: "googleIcon",
      href: "https://plus.google.com/+traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.GoogleIconWhite, null)), _react.default.createElement(ConnectIcons, {
      className: "instaIcon",
      href: "https://www.instagram.com/traveltriangle/",
      target: "_blank",
      rel: "nofollow"
    }, _react.default.createElement(_Icon.Instagram, null))));
  }

};
exports.default = SocialLinks;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAtdjIvbW9kdWxlcy9zaGFyZWQvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9tb2R1bGVzL3N0YXRpYy9wcml2YWN5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC12Mi9zY3JlZW5zL3ByaXZhY3kvUHJpdmFjeUFzeW5jLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9BZGRyZXNzVFQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0NvcHlSaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbExpbmtzLmpzIl0sIm5hbWVzIjpbIkxvdmVJY29uQ29uIiwiZ2xhbW9yb3VzIiwic3BhbiIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsIk1hZGVXaXRoIiwiZGl2IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiY29sb3IiLCJ2ZXJ0aWNhbEFsaWduIiwiSW5kZXgiLCJQcml2YWN5IiwiUHJpdmFjeVBhZ2UiLCJvblNjcm9sbCIsIkFkZHJlc3NUVCIsImlzSG9tZVBhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiRm9vdGVyTGlua3MiLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbm5lY3RJY29ucyIsImEiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWFyZ2luUmlnaHQiLCJwb3NpdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIlNvY2lhbExpbmtzIiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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RFQ7QUFDa0IsV0FBSTtBQUR0QixPQUNpQyw2QkFBQyxtQkFBRCxPQURqQyxDQVBGLEVBVUUsNkJBQUMsWUFBRDtBQUFjLGlCQUFVLFlBQXhCO0FBQXFDLFlBQUssMENBQTFDO0FBQ0UsY0FBTyxRQURUO0FBQ2tCLFdBQUk7QUFEdEIsT0FDaUMsNkJBQUMscUJBQUQsT0FEakMsQ0FWRixFQWFFLDZCQUFDLFlBQUQ7QUFBYyxpQkFBVSxXQUF4QjtBQUFvQyxZQUFLLDJDQUF6QztBQUNFLGNBQU8sUUFEVDtBQUNrQixXQUFJO0FBRHRCLE9BQ2lDLDZCQUFDLGVBQUQsT0FEakMsQ0FiRixDQURGLENBREY7QUFxQkQ7O0FBdkJnRCxDIiwiZmlsZSI6InByaXZhY3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmtzJztcbmltcG9ydCBBZGRyZXNzVFQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQWRkcmVzc1RUJztcbmltcG9ydCBDb3B5UmlnaHQgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvQ29weVJpZ2h0JztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxMaW5rcyc7XG5cbmltcG9ydCB7IExvdmVJY29uIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmNvbnN0IExvdmVJY29uQ29uID0gZ2xhbW9yb3VzLnNwYW4oe1xuICB3aWR0aDogJzIwcHgnLFxuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbWFyZ2luOiAnMCA4cHgnLFxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbn0pO1xuXG5jb25zdCBNYWRlV2l0aCA9IGdsYW1vcm91cy5kaXYoe1xuICBoZWlnaHQ6ICcyMHB4JyxcbiAgbGluZUhlaWdodDogJzIwcHgnLFxuICBmb250U2l6ZTogJzEycHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICBjb2xvcjogJyNmZmZmZmYnLFxuICAnJiA+IHAnOiB7XG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICB9XG59KTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdhdF9mb290ZXIgcGJjMyBwOCBtOCc+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0MCBwYjAnPlxuICAgICAgPEZvb3RlckxpbmtzIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J3B0OCBtYjI0Jz5cbiAgICAgIDxBZGRyZXNzVFQgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjRcIj5cbiAgICAgIDxTb2NpYWxMaW5rcyAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlclwiPlxuICAgICAgPE1hZGVXaXRoIGNsYXNzTmFtZT1cImZsZXggYWxpZ25DZW50ZXIgZmxleEZ1bGxcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9jayBhdF9tYWRlbG92ZVwiPk1hZGUgd2l0aDwvcD5cbiAgICAgICAgPExvdmVJY29uQ29uIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+PExvdmVJY29uIC8+PC9Mb3ZlSWNvbkNvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibTAgZjEyIGlibG9ja1wiPmluIEluZGlhPC9wPlxuICAgICAgPC9NYWRlV2l0aD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEZ1bGwgdGV4dC1yaWdodFwiPjxDb3B5UmlnaHQgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFByaXZhY3kgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggcDI0XCI+XG4gICAgPGgxIGNsYXNzTmFtZT1cImYyNCBmdzkgbWIxNSBwYjhcIj5UcmF2ZWxUcmlhbmdsZSBQcml2YWN5IFBvbGljeTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgSG9saWRheSBUcmlhbmdsZSBUcmF2ZWwgUHJpdmF0ZSBMaW1pdGVkIDxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPijigJx3ZS8gdXMvIG91ci8gVFTigJ0pPC9zcGFuPiB2YWx1ZXNcbiAgICB0aGUgdHJ1c3Qgd2hpY2ggYSBjdXN0b21lciA8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj4o4oCceW91LyB5b3Vy4oCdKSA8L3NwYW4+IHBsYWNlcyBpbiBUVCBhbmQgb3VyXG4gICAgd2Vic2l0ZSx0cmF2ZWx0cmlhbmdsZS5jb20gPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+KOKAnFdlYnNpdGXigJ0pPC9zcGFuPi4gSGVuY2UsIHdlIGluc2lzdCB1cG9uIHRoZVxuICAgIGhpZ2hlc3Qgc3RhbmRhcmQgb2YgcHJhY3RpY2VzIHRvIGVuc3VyZSBzZWN1cml0eSBvZiB0cmFuc2FjdGlvbnMgYW5kIHV0bW9zdFxuICAgIHByaXZhY3kgb2YgY3VzdG9tZXIgaW5mb3JtYXRpb24uIFdlIHJlc3BlY3QgeW91ciBuZWVkIHRvIHVuZGVyc3RhbmQgaG93XG4gICAgaW5mb3JtYXRpb24gZnVybmlzaGVkIGJ5IHlvdSBpcyBiZWluZyBjb2xsZWN0ZWQsIHVzZWQsIGRpc2Nsb3NlZCxcbiAgICB0cmFuc2ZlcnJlZCBhbmQgc3RvcmVkIGJ5IHVzLiBJbiB0aGlzIHJlZ2FyZCwgcGxlYXNlIHJlYWQgdGhpcyBwcml2YWN5XG4gICAgcG9saWN5IDxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPijigJxQb2xpY3nigJ0pPC9zcGFuPiB0byBnZXQgZmFtaWxpYXJpemVkIGFib3V0IG91ciBpbmZvcm1hdGlvbiBnYXRoZXJpbmdcbiAgICBhbmQgZGlzc2VtaW5hdGlvbiBwcmFjdGljZS5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgV2UgYXNzdXJlIHlvdSBvZiBvdXIgZmlybSBjb21taXRtZW50IHRvIHlvdXIgcHJpdmFjeSBhbmQgdGhlIHByb3RlY3Rpb24gb2ZcbiAgICB5b3VyIHByaWNlbGVzcyBpbmZvcm1hdGlvbi4gVGhlIFBvbGljeSBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGVcbiAgICBXZWJzaXRlIGFuZCB0aGUgJ1RyYXZlbCBUcmlhbmdsZScgYW5kcm9pZCBhbmQgaU9TIGFwcCAoc3VjaCBhcHBsaWNhdGlvbnMgYXJlXG4gICAgY29sbGVjdGl2ZWx5IHJlZmVycmVkIGFzIHRoZSA8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj7igJxBcHDigJ08L3NwYW4+KS4gSW4gb3JkZXIgdG8gZW5kb3cgeW91IHdpdGggdGhlXG4gICAgdW5pbnRlcnJ1cHRlZCB1c2Ugb2Ygb3VyIHNlcnZpY2VzLCB3ZSBtYXkgY29sbGVjdCBhbmQsIGluIHNvbWVcbiAgICBjaXJjdW1zdGFuY2VzLCBkaXNjbG9zZSBpbmZvcm1hdGlvbiBhYm91dCB5b3UuXG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGhlIHRlcm1zIGluIHRoaXMgUG9saWN5LCB3ZSBraW5kbHkgYXNrIHlvdSB0byBsZWF2ZVxuICAgIHRoZSBzaXRlLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBJZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zLCByZWdhcmRpbmcgdGhpcyBwcml2YWN5IHBvbGljeSwgeW91XG4gICAgc2hvdWxkIGNvbnRhY3Qgb3VyIEN1c3RvbWVyIFN1cHBvcnQgRGVzayBhdCBzdXBwb3J0QFRyYXZlbFRyaWFuZ2xlLmNvbS5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgQXMgeW91IG1heSBrbm93LCBhIG5ldyBFdXJvcGVhbiBwcml2YWN5IHJlZ3VsYXRpb24gY2FsbGVkIEdlbmVyYWwgRGF0YVxuICAgIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoXCJHRFBSXCIpIGhhcyBjb21lIGludG8gZWZmZWN0IG9uIE1heSAyNSwgMjAxOC4gR0RQUiBpc1xuICAgIGRlc2lnbmVkIHRvIHVuaWZ5IHRoZSBjdXJyZW50IGRhdGEgcHJvdGVjdGlvbiBwcml2YWN5IGxhd3MgdGhyb3VnaG91dCB0aGVcbiAgICBFVSwgYW5kIHRvIGVuaGFuY2UgdGhlIHJpZ2h0cyBvZiBFdXJvcGVhbiByZXNpZGVudHMgdG8gcHJvdGVjdCB0aGVpclxuICAgIHBlcnNvbmFsIGluZm9ybWF0aW9uLiBUaGUgR0RQUiBhbHNvIGFwcGxpZXMgdG8gYW55IGJ1c2luZXNzIHRoYXQgb2ZmZXJzIGl0c1xuICAgIHByb2R1Y3RzIG9yIHNlcnZpY2VzIHRvIEV1cm9wZWFuIHJlc2lkZW50cy5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgV2UgY29sbGVjdCBhbmQgdXNlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gd2hlbiB5b3UgYXZhaWwgb3VyIHNlcnZpY2VzLlxuICAgIEZvciB0aGUgcHVycG9zZSBvZiB0aGUgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAo4oCcR0RQUuKAnSksIHdlIGFyZVxuICAgIHRoZSDigJhkYXRhIGNvbnRyb2xsZXLigJkuIE91ciBkYXRhIHByb3RlY3Rpb24gb2ZmaWNlciBjYW4gYmUgY29udGFjdGVkIGF0XG4gICAgZHBvQHRyYXZlbHRyaWFuZ2xlLmNvbS5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgQnkgYWNjZXNzaW5nIG91ciBXZWJzaXRlcyBhbmQgdXRpbGl6aW5nIG91ciBzZXJ2aWNlcywgeW91IGFja25vd2xlZGdlIHRoYXRcbiAgICB5b3UgaGF2ZSByZWFkIGFuZCB1bmRlcnN0b29kIHRoaXMgUHJpdmFjeSBQb2xpY3kgYW5kIHRoZSBpbmZvcm1hdGlvblxuICAgIGNvbGxlY3Rpb24gYW5kIGhhbmRsaW5nIHByYWN0aWNlcyBvdXRsaW5lZCBpbiBpdC5cbiAgICA8L3A+XG4gICAgPGgxIGNsYXNzTmFtZT1cImYyNCBmdzcgbWIxNVwiPk92ZXJ2aWV3PC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5UaGlzIFByaXZhY3kgUG9saWN5IGRlc2NyaWJlcyBpbiBkZXRhaWwgb3VyIHBvbGljeSBhbmQgcHJhY3RpY2VzIHJlZ2FyZGluZ1xuICAgIG91ciBjb2xsZWN0aW9uLCB1c2UgYW5kIGRpc2Nsb3N1cmUgb2YgeW91ciBwZXJzb25hbCBkYXRhLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSB1bmRlcnN0YW5kIHRoYXQgcHJvdmlkaW5nIGluZm9ybWF0aW9uIG9ubGluZSBpbnZvbHZlcyBhIGdyZWF0IGRlYWwgb2ZcbiAgICB0cnVzdCBvbiB5b3VyIHBhcnQuIFdlIHRha2UgdGhpcyB0cnVzdCB2ZXJ5IHNlcmlvdXNseSwgYW5kIG1ha2UgaXQgYSBoaWdoXG4gICAgcHJpb3JpdHkgdG8gZW5zdXJlIHRoZSBzZWN1cml0eSBhbmQgY29uZmlkZW50aWFsaXR5IG9mIHRoZSBwZXJzb25hbCBkYXRhIHlvdVxuICAgIHByb3ZpZGUgdXMgd2hlbiB5b3UgdmlzaXQgb3VyIFdlYnNpdGUgb3IgdXNlIG91ciBzZXJ2aWNlcy5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI3BlcnNvbmFsRGF0YUNvbGxlY3Rpb25cIj5cbiAgICAxLiBDb2xsZWN0aW9uIG9mIHlvdXIgcGVyc29uYWwgZGF0YVxuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI3BlcnNvbmFsRGF0YVVzZVwiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDIuIEhvdyB3ZSB1c2UgeW91ciBwZXJzb25hbCBkYXRhXG4gICAgPC9hPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iOFwiPlxuICAgIDxhIGhyZWY9XCIjZGVtb2dyYXBoaWNEYXRhXCIgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgMy4gVXNlIG9mIERlbW9ncmFwaGljIGFuZCBwcm9maWxlIGRhdGFcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiN3aXRoV2hvbVwiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDQuIFdpdGggd2hvbSB3ZSBzaGFyZSB5b3VyIHBlcnNvbmFsIEluZm9ybWF0aW9uXG4gICAgPC9hPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iOFwiPlxuICAgIDxhIGhyZWY9XCIjaG93TG9uZ1wiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDUuIEhvdyBsb25nIHdlIGtlZXAgeW91ciBwZXJzb25hbCBkYXRhXG4gICAgPC9hPlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iOFwiPlxuICAgIDxhIGhyZWY9XCIjY29va2llc1wiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDYuIENvb2tpZXNcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNkYXRhUHJvdGVjdGlvblwiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDcuIEhvdyB3ZSBwcm90ZWN0IHlvdXIgcGVyc29uYWwgZGF0YVxuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI25vdGlmaWNhdGlvbkNoYW5nZXNcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICA4LiBOb3RpZmljYXRpb25zIG9mIG1vZGlmaWNhdGlvbnMgYW5kIGNoYW5nZXMgdG8gdGhlIHBvbGljeVxuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI3NoYXJpbmdQaG90b3NcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICA5LiBTaGFyaW5nIG9mIHRyYXZlbGVy4oCZcyBwaG90b3MgYW5kIHZpZGVvc1xuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI3NlY3VyaXR5UHJlY2F1dGlvbnNcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICAxMC4gU2VjdXJpdHkgcHJlY2F1dGlvbnNcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNvcHRPdXRcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICAxMS4gQ2hvaWNlIHRvIG9wdCBvdXRcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNhZHZlcnRpc2VNZW50XCIgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgMTIuIEFkdmVydGlzZW1lbnQgb24gd2Vic2l0ZVxuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI2luZm9ybWF0aW9uT3ZlcnNlYXNcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICAxMy4gVHJhbnNmZXIgb2YgaW5mb3JtYXRpb24gb3ZlcnNlYXNcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNldURhdGFcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICAxNC4gRVUgZGF0YSBzdWJqZWN0IHJpZ2h0c1xuICAgIDwvYT5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjhcIj5cbiAgICA8YSBocmVmPVwiI2NvbmZpZGVudGlhbGl0eVwiIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIDE1LiBDb25maWRlbnRpYWxpdHlcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNkaXNjbGFpbWVyXCIgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgMTYuIERpc2NsYWltZXJcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWI4XCI+XG4gICAgPGEgaHJlZj1cIiNncmlldmFuY2VcIiBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICAxNy4gR3JpZXZhbmNlIG9mZmljZXJcbiAgICA8L2E+XG4gICAgPC9wPlxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cInBlcnNvbmFsRGF0YUNvbGxlY3Rpb25cIj4xLiBDb2xsZWN0aW9uIG9mIHlvdXIgcGVyc29uYWwgZGF0YTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgUGVyc29uYWwgZGF0YSBtZWFucyBhbnkgaW5mb3JtYXRpb24gYWJvdXQgYW4gaW5kaXZpZHVhbCBmcm9tIHdoaWNoIHRoYXRcbiAgICBwZXJzb24gY2FuIGJlIGlkZW50aWZpZWQsIGFkZHJlc3NlcywgZGF0ZSBvZiBiaXJ0aCwgcGFzc3dvcmQgYW5kIHBheW1lbnRcbiAgICBpbmZvcm1hdGlvbi4gSXQgZG9lcyBub3QgaW5jbHVkZSBkYXRhIHdoZXJlIHRoZSBpZGVudGl0eSBoYXMgYmVlbiByZW1vdmVkIG9yXG4gICAgb3RoZXJ3aXNlIGFub255bWl6ZWQgKGFub255bW91cyBkYXRhKS5cbiAgICA8L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmMTRwIG1iMTUgcGwyNFwiPlxuICAgIDxvbD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgV2UgY29sbGVjdCB5b3VyIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIGluY2x1ZGluZyBidXQgbm90XG4gICAgICAgIGxpbWl0ZWQgdG8geW91ciAoaSkgbmFtZTsgKGlpKSBlLW1haWwgYWRkcmVzczsgKGlpaSkgY29udGFjdCBudW1iZXI7XG4gICAgICAgIChpdikgcmVzaWRlbnRpYWwgYWRkcmVzczsgKHYpIGNyZWRpdC9kZWJpdC9iYW5rIGFjY291bnQgZGV0YWlsczsgKHZpKVxuICAgICAgICBpbnRlcm5ldCBwcm90b2NvbCAo4oCcSVDigJ0pIGFkZHJlc3MsIGluIHRoZSBmb2xsb3dpbmcgY2lyY3Vtc3RhbmNlczpcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgIFdoZW4geW91IG1ha2UgYSByZXNlcnZhdGlvbiwgb3Igb3B0IGZvciBhIHBhY2thZ2UgZnJvbSBvdXIgV2Vic2l0ZSBvclxuICAgICAgICBBcHAgb3IgdGhyb3VnaCB0aGUgYWlkIG9mIG91ciBjdXN0b21lciBzZXJ2aWNlIHRlYW07XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICBXaGVuIHlvdSByZWdpc3RlciB3aXRoIHVzLCBtYWtlIGEgcmVxdWlzaXRpb24gZm9yIGluZm9ybWF0aW9uIHBlcnRhaW5pbmdcbiAgICAgICAgdG8gaG9saWRheSBwYWNrYWdlcywgc3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVycywgZW50ZXIgY29tcGV0aXRpb25zLFxuICAgICAgICBzaGFyZSB3aXRoIHVzIHlvdXIgZXhwZXJpZW5jZSBvciBwcm92aWRlIGFueSBvdGhlciBkZXRhaWxzIGluIHJlbGF0aW9uXG4gICAgICAgIHRvIGEgaG9saWRheSBwYWNrYWdlIGF2YWlsZWQgYnkgeW91LCBzZW5kIHVzIHF1ZXJpZXMgb3IgcmVnaXN0ZXIgZm9yXG4gICAgICAgIHByb21vdGlvbnM7XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICBXaGVuIHlvdSBzZXQgdXAgYSBmcmVlIGFjY291bnQgb24gb3VyIFdlYnNpdGUgb3IgQXBwIG9yIHBhcnRpY2lwYXRlIGluXG4gICAgICAgIHN1cnZleXMgb3IgcHJvdmlkZSB1cyB5b3VyIGZlZWRiYWNrOyBhbmRcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgIFdoZW4geW91IGVuZ2FnZSB3aXRoIHVzIGluIGFueSBvbmxpbmUgb3Igb2ZmbGluZSBldmVudCBvciBwb3J0cmF5IHlvdXJcbiAgICAgICAgaW50ZXJlc3Qgb24gYW55IHBhZ2UgaG9zdGVkIGJ5IHVzIG9uIGEgdGhpcmQtcGFydHkgcGxhdGZvcm0gb3IgbG9jYXRpb25cbiAgICAgICAgb3Igdm9sdW50YXJpbHkgcHJvdmlkZSB5b3VyIGRldGFpbHMgZm9yIG91ciBwcm9tb3Rpb25zLlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgV2hpbGUgeW91IGNhbiBicm93c2UgY2VydGFpbiBzZWN0aW9ucyBvZiBvdXIgV2Vic2l0ZSBvciBBcHAsIHByaW9yIHRvXG4gICAgICAgIHJlZ2lzdGVyaW5nIGFzIGEgbWVtYmVyLCBjZXJ0YWluIGFjdGl2aXRpZXMgKHN1Y2ggYXMgcGxhY2luZyBhbiBvcmRlcilcbiAgICAgICAgcmVxdWlyZXMgbWFuZGF0b3J5IHJlZ2lzdHJhdGlvbjEuIFdlIG1heSB1c2UgeW91ciBjb250YWN0IGluZm9ybWF0aW9uXG4gICAgICAgIGZvciBzZW5kaW5nIHlvdSAoaSkgb2ZmZXJzIGJhc2VkIG9uIHlvdXIgcHJldmlvdXMgb3JkZXJzIGFuZCB5b3VyXG4gICAgICAgIGludGVyZXN0cywgKGlpKSBwYXltZW50IHJlbWluZGVyIG5vdGljZXMsIChpaWkpIHRyYXZlbCB2b3VjaGVycyBhbmQgKGl2KVxuICAgICAgICB1cGRhdGVzIG9uIHRoZSB0cmF2ZWwgc2VjdG9yIHRocm91Z2ggb3VyIG5ld3NsZXR0ZXJzLiBJbiB0aGUgZXZlbnQsIHlvdVxuICAgICAgICBkbyBub3Qgd2lzaCB0byByZWNlaXZlIHN1Y2ggaW5mb3JtYXRpb24sIHlvdSBtYXkgdW5zdWJzY3JpYmUgdGhyb3VnaCB0aGVcbiAgICAgICAgZmFjaWxpdHkgaW4gdGhlIGVtYWlsIG1lc3NhZ2UgeW91IHJlY2VpdmUuXG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gICAgPC9kaXY+XG4gICAgPGgxIGNsYXNzTmFtZT1cImYxOCBmdzcgcHQ4IHBiOFwiIGlkPVwicGVyc29uYWxEYXRhVXNlXCI+Mi4gSG93IHdlIHVzZSBwZXJzb25hbCBkYXRhPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSB1c2UgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gcHJvdmlkZSB0aGUgc2VydmljZXMgdGhhdCB5b3UgcmVxdWVzdC4gVG8gdGhlXG4gICAgZXh0ZW50IHdlIHVzZSB5b3VyIGluZm9ybWF0aW9uIGluY2x1ZGluZyBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBtYXJrZXQgb3VyXG4gICAgc2VydmljZXMgdG8geW91LCB3ZSB3aWxsIHByb3ZpZGUgeW91IHRoZSBhYmlsaXR5IHRvIG9wdC1vdXQgb2Ygc3VjaCB1c2VzLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSBtYXkgdXNlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gZm9yIHRoZSBmb2xsb3dpbmcgcHVycG9zZXMsIGluY2x1ZGluZ1xuICAgIGJ1dCBub3QgbGltaXRlZCB0bzogKGkpIHJlc29sdmUgZGlzcHV0ZXM7IChpaSkgdHJvdWJsZXNob290IHByb2JsZW1zOyAoaWlpKVxuICAgIHByb21vdGUgYSBzYWZlIHNlcnZpY2U7IChpdikgY29sbGVjdCBmZWVzIG93ZWQgdG8gdXM7ICh2KSBjYXRlciB0byBjb25zdW1lclxuICAgIGludGVyZXN0cyB3aGlsZSBwcm92aWRpbmcgb3VyIHNlcnZpY2VzLCAodmkpIGluZm9ybSB5b3UgYWJvdXQgb25saW5lIGFuZFxuICAgIG9mZmxpbmUgb2ZmZXJzLCBwcm9kdWN0cywgc2VydmljZXMsIGFuZCB1cGRhdGVzOyAodmlpKSBjdXN0b21pemUgeW91clxuICAgIGV4cGVyaWVuY2U7ICh2aWlpKSBkZXRlY3QgYW5kIHByb3RlY3QgdXMgYWdhaW5zdCBlcnJvciwgZnJhdWQgYW5kIG90aGVyXG4gICAgY3JpbWluYWwgYWN0aXZpdHk7IChpeCkgZW5mb3JjZSBvdXIgdGVybXMgYW5kIGNvbmRpdGlvbnM7ICh4KSBjb25kdWN0XG4gICAgcmVzZWFyY2ggYW5kIGFuYWx5c2lzIGZvciBpbXByb3Zpc2luZyBjdXN0b21lciBleHBlcmllbmNlOyAoeGkpIHRvIGNvbmR1Y3RcbiAgICBwZXJpb2RpY2FsIGF1ZGl0OyAoeGlpKSBjb250YWN0IHlvdSB0byBzZW5kIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvciBub3RpY2VzXG4gICAgZXRjLiBhbmQgYXMgb3RoZXJ3aXNlIGRlc2NyaWJlZCB0byB5b3UgYXQgdGhlIHRpbWUgb2YgY29sbGVjdGlvbi5cbiAgICA8L3A+XG4gICAgPGgxIGNsYXNzTmFtZT1cImYxOCBmdzcgcHQ4IHBiOFwiPk1hcmtldGluZyBQcm9tb3Rpb25zOjwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgTWFya2V0aW5nIHByb21vdGlvbnMsIHJlc2VhcmNoIGFuZCBwcm9ncmFtcyBoZWxwIHVzIHRvIGlkZW50aWZ5IHlvdXJcbiAgICBwcmVmZXJlbmNlcywgZGV2ZWxvcCBwcm9ncmFtcyBhbmQgaW1wcm92ZSB1c2VyIGV4cGVyaWVuY2UuIFRUIGZyZXF1ZW50bHlcbiAgICBzcG9uc29ycyBwcm9tb3Rpb25zIHRvIGdpdmUgaXRzIFVzZXJzIHRoZSBvcHBvcnR1bml0eSB0byB3aW4gZ3JlYXQgdHJhdmVsXG4gICAgYW5kIHRyYXZlbCByZWxhdGVkIHByaXplcy4gUGVyc29uYWwgSW5mb3JtYXRpb24gY29sbGVjdGVkIGJ5IHVzIGZvciBzdWNoXG4gICAgYWN0aXZpdGllcyBtYXkgaW5jbHVkZSBjb250YWN0IGluZm9ybWF0aW9uIGFuZCBzdXJ2ZXkgcXVlc3Rpb25zLiBXZSB1c2Ugc3VjaFxuICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uIHRvIG5vdGlmeSBjb250ZXN0IHdpbm5lcnMgYW5kIHN1cnZleSBpbmZvcm1hdGlvbiB0b1xuICAgIGRldmVsb3AgcHJvbW90aW9ucyBhbmQgcHJvZHVjdCBpbXByb3ZlbWVudHMuXG4gICAgPC9wPlxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImRlbW9ncmFwaGljRGF0YVwiPjMuIFVzZSBvZiBEZW1vZ3JhcGhpYyBhbmQgUHJvZmlsZSBEYXRhPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBJbiBvdXIgZWZmb3J0cyB0byBjb250aW51YWxseSBpbXByb3ZlIG91ciBwcm9kdWN0IGFuZCBzZXJ2aWNlIG9mZmVyaW5ncywgd2VcbiAgICBtYXksIGZyb20gdGltZSB0byB0aW1lLCBjb2xsZWN0IGFuZCBhbmFseXNlcyBkZW1vZ3JhcGhpYyBhbmQgcHJvZmlsZSBkYXRhXG4gICAgYWJvdXQgeW91ciBhY3Rpdml0eSBvbiBvdXIgV2Vic2l0ZSBhbmQgQXBwLiBXZSBpZGVudGlmeSBhbmQgdXNlIHlvdXIgSVBcbiAgICBhZGRyZXNzIHRvIGhlbHAgZGlhZ25vc2UgcHJvYmxlbXMgd2l0aCBvdXIgc2VydmVyLCBhbmQgdG8gYWRtaW5pc3RlciBvdXJcbiAgICBXZWJzaXRlIGFuZCBBcHAuIFlvdXIgSVAgYWRkcmVzcyBpcyBhbHNvIHVzZWQgdG8gaGVscCBpZGVudGlmeSB5b3UgYW5kIHRvXG4gICAgZ2F0aGVyIGJyb2FkIGRlbW9ncmFwaGljIGluZm9ybWF0aW9uLiBXZSBtYXkgb2NjYXNpb25hbGx5IGFzayB5b3UgdG9cbiAgICBjb21wbGV0ZSBvcHRpb25hbCBvbmxpbmUgc3VydmV5cywgd2hpY2ggbWF5IHJlcXVpcmUgeW91IHRvIHByb3ZpZGUgeW91clxuICAgIGNvbnRhY3QgaW5mb3JtYXRpb24gYW5kIGRlbW9ncmFwaGljIGluZm9ybWF0aW9uIChsaWtlIHppcCBjb2RlLCBhZ2UsIG9yXG4gICAgaW5jb21lIGxldmVsKS4gV2UgdXNlIHRoaXMgZGF0YSB0byB0YWlsb3IgeW91ciBleHBlcmllbmNlIGF0IG91ciBXZWJzaXRlIGFuZFxuICAgIEFwcCwgcHJvdmlkaW5nIHlvdSB3aXRoIGNvbnRlbnQgdGhhdCB3ZSB0aGluayB5b3UgbWlnaHQgYmUgaW50ZXJlc3RlZCBpbiBhbmRcbiAgICB0byBkaXNwbGF5IHRoZSByZWxldmFudCBjb250ZW50IGFjY29yZGluZyB0byB5b3VyIHByZWZlcmVuY2VzLlxuICAgIDwvcD5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZjE4IGZ3NyBwdDggcGI4XCIgaWQ9XCJ3aXRoV2hvbVwiPjQuIFdpdGggd2hvbSB3ZSBzaGFyZSB5b3VyIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSBtYXkgc2hhcmUgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uLCBvYnRhaW5lZCBmcm9tIHlvdSwgd2l0aCBvdXIgb3RoZXJcbiAgICBjb3Jwb3JhdGUgZW50aXRpZXMgYW5kIGFmZmlsaWF0ZXMgdG86XG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZjE0cCBtYjE1IHBsMjRcIj5cbiAgICA8b2w+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+aGVscCBkZXRlY3QgYW5kIHByZXZlbnQgaWRlbnRpdHkgdGhlZnQsPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5mcmF1ZCBhbmQgb3RoZXIgcG90ZW50aWFsbHkgaWxsZWdhbCBhY3RzOzwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgIGNvLXJlbGF0ZSByZWxhdGVkIG9yIG11bHRpcGxlIGFjY291bnRzIHRvIHByZXZlbnQgYWJ1c2Ugb2Ygb3VyIHNlcnZpY2VzO1xuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgdG8gZmFjaWxpdGF0ZSBqb2ludCBvciBjby1icmFuZGVkIHNlcnZpY2VzIHRoYXQgeW91IHJlcXVlc3Qgd2hlcmUgc3VjaFxuICAgICAgICBzZXJ2aWNlcyBhcmUgcHJvdmlkZWQgYnkgbW9yZSB0aGFuIG9uZSBjb3Jwb3JhdGUgZW50aXR5LlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIFRob3NlIGVudGl0aWVzIGFuZCBhZmZpbGlhdGVzIG1heSBub3QgbWFya2V0IHRvIHlvdSBhcyBhIHJlc3VsdCBvZiBzdWNoXG4gICAgc2hhcmluZyBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBieSB1cywgdW5sZXNzIHlvdSBleHBsaWNpdGx5IG9wdC1pbi4gV2UgbWF5XG4gICAgZGlzY2xvc2UgcGVyc29uYWwgaW5mb3JtYXRpb24gaW4gdGhlIGZvbGxvd2luZyBjaXJjdW1zdGFuY2VzOlxuICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImYxNHAgbWIxNSBwbDI0XCI+XG4gICAgPG9sPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICBpZiByZXF1aXJlZCB0byBkbyBzbyBieSBsYXcgb3IgYnkgbGF3IGVuZm9yY2VtZW50IG9mZmljZXMgZm9yXG4gICAgICAgIGludmVzdGlnYXRpbmcgYW55IGNpdmlsIG9yIGNyaW1pbmFsIG9mZmVuY2VzOyBvclxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgaWYgc3VjaCBkaXNjbG9zdXJlIGlzIHJlYXNvbmFibHkgbmVjZXNzYXJ5IHRvIHJlc3BvbmQgdG8gc3VicG9lbmFzLFxuICAgICAgICBjb3VydCBvcmRlcnMsIG9yIG90aGVyIGxlZ2FsIHByb2Nlc3MuXG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPnRvIGxlZ2FsLCBmaW5hbmNpYWwgb3Igb3RoZXIgcHJvZmVzc2lvbmFsIGFkdmlzb3JzIG9mIFRULCBvcjwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+dG8gZW5mb3JjZSBvdXIgdGVybXMgb2YgdGhlIFBvbGljeTs8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICB0byByZXNwb25kIHRvIGNsYWltcyB0aGF0IGFuIGFkdmVydGlzZW1lbnQsIHBvc3Rpbmcgb3Igb3RoZXIgY29udGVudFxuICAgICAgICB2aW9sYXRlcyB0aGUgcmlnaHRzIG9mIGEgdGhpcmQgcGFydHk7IG9yXG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICB0byBwcm90ZWN0IHRoZSByaWdodHMsIHByb3BlcnR5IG9yIHBlcnNvbmFsIHNhZmV0eSBvZiB0aGUgdXNlcnMgb2Ygb3VyXG4gICAgICAgIFdlYnNpdGUgYW5kIEFwcCwgb3IgdGhlIGdlbmVyYWwgcHVibGljLlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICAgIDwvZGl2PlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIFdlIG1heSBzaGFyZSBvdXIgZGF0YSwgaW5jbHVkaW5nIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uIGFib3V0XG4gICAgeW91LCB3aXRoIG91ciBwYXJlbnQgYW5kL29yIHN1YnNpZGlhcmllcyBvciBidXNpbmVzcyBwYXJ0bmVycyB0aGF0IGFyZVxuICAgIGNvbW1pdHRlZCB0byBzZXJ2aW5nIHlvdXIgb25saW5lIG5lZWRzIGFuZCByZWxhdGVkIHNlcnZpY2VzLCB0aHJvdWdob3V0IHRoZVxuICAgIHdvcmxkLiBTdWNoIGRhdGEgd2lsbCBiZSBzaGFyZWQgZm9yIHRoZSBzb2xlIHB1cnBvc2Ugb2YgZW5oYW5jaW5nIHlvdXJcbiAgICBicm93c2luZyBleHBlcmllbmNlLiBUbyB0aGUgZXh0ZW50IHRoYXQgdGhlc2UgZW50aXRpZXMgaGF2ZSBhY2Nlc3MgdG8geW91clxuICAgIGluZm9ybWF0aW9uLCB0aGV5IHdpbGwgdHJlYXQgaXQgYXMgcHJvdGVjdGl2ZWx5IGFzIHRoZXkgdHJlYXQgaW5mb3JtYXRpb25cbiAgICB0aGV5IG9idGFpbiBmcm9tIHRoZWlyIG90aGVyIG1lbWJlcnMuIFlvdSBzaG91bGQgZXhwZWN0IHRoYXQgd2Ugd291bGQgc2hhcmVcbiAgICBzb21lIG9yIGFsbCBvZiB5b3VyIGluZm9ybWF0aW9uIGluIG9yZGVyIHRvIGNvbnRpbnVlIHRvIHByb3ZpZGUgdGhlIHNlcnZpY2VcbiAgICBhbmQgdGhlIGVudGl0eSB3aXRoIHdoaWNoIHN1Y2ggaW5mb3JtYXRpb24gaXMgYmVpbmcgc2hhcmVkLCB3aWxsIGJlIHJlcXVpcmVkXG4gICAgdG8gZm9sbG93IHRoaXMgUG9saWN5IHdpdGggcmVzcGVjdCB0byB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgIDwvcD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImhvd0xvbmdcIj41LiBIb3cgbG9uZyB3ZSBrZWVwIHlvdXIgcGVyc29uYWwgZGF0YTwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgV2Ugd2lsbCBvbmx5IHJldGFpbiB5b3VyIHBlcnNvbmFsIGRhdGEgZm9yIGFzIGxvbmcgYXMgbmVjZXNzYXJ5IHRvIGZ1bGZpbFxuICAgIHRoZSBwdXJwb3NlcyB3ZSBjb2xsZWN0ZWQgaXQgZm9yLCBpbmNsdWRpbmcgZm9yIHRoZSBwdXJwb3NlcyBvZiBzYXRpc2Z5aW5nXG4gICAgYW55IGxlZ2FsLCBhY2NvdW50aW5nIG9yIHN0YXR1dG9yeSByZXBvcnRpbmcgcmVxdWlyZW1lbnRzLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBUbyBkZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIHJldGVudGlvbiBwZXJpb2QgZm9yIHBlcnNvbmFsIGRhdGEsIHdlIGNvbnNpZGVyXG4gICAgdGhlIGFtb3VudCwgbmF0dXJlIGFuZCBzZW5zaXRpdml0eSBvZiB0aGUgcGVyc29uYWwgZGF0YSwgdGhlIHBvdGVudGlhbCByaXNrXG4gICAgb2YgaGFybSBmcm9tIHVuYXV0aG9yaXplZCB1c2Ugb3IgZGlzY2xvc3VyZSBvciB5b3VyIHBlcnNvbmFsIGRhdGEsIHRoZVxuICAgIHB1cnBvc2VzIGZvciB3aGljaCB3ZSBwcm9jZXNzIHlvdXIgcGVyc29uYWwgZGF0YSBhbmQgd2hldGhlciB3ZSBjYW4gYWNoaWV2ZVxuICAgIHRob3NlIHB1cnBvc2VzIHRocm91Z2ggb3RoZXIgbWVhbnMgYW5kIHRoZSBhcHBsaWNhYmxlIGxlZ2FsIHJlcXVpcmVtZW50cy5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgV2UgbWF5IHJldGFpbiBjZXJ0YWluIGluZm9ybWF0aW9uIHN1YnNlcXVlbnQgdG8gdGhlIGNsb3Npbmcgb2YgeW91ciBhY2NvdW50LFxuICAgIGZvciBleGFtcGxlIGlmIGl0IGlzIG5lY2Vzc2FyeSB0byBmdWxmaWwgb3VyIGxlZ2FsIG9ibGlnYXRpb25zIG9yIHRvXG4gICAgZXhlcmNpc2UsIHRvIG1haW50YWluIHNlY3VyaXR5LCB0byBwcmV2ZW50IGZyYXVkIGFuZCBhYnVzZSBhbmQgdG8gZGVmZW5kIG9yXG4gICAgZW5mb3JjZSBvdXIgcmlnaHRzLlxuICAgIDwvcD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImNvb2tpZXNcIj42LiBDb29raWVzPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSB1c2Ugb3VyIGFzIHdlbGwgYXMgdGhpcmQgcGFydGllcyBkYXRhIGNvbGxlY3Rpb24gZGV2aWNlcyBzdWNoIGFzIGNvb2tpZXNcbiAgICBvbiBjZXJ0YWluIHBhZ2VzIG9mIG91ciBXZWJzaXRlIGFuZCBBcHAuIENvb2tpZXMgYXJlIHNtYWxsIGZpbGVzIHN0b3JlZCBvblxuICAgIHlvdXIgaGFyZCBkcml2ZSB0aGF0IGFzc2lzdCB1cyBpbiBwcm92aWRpbmcgc2VydmljZXMgY3VzdG9taXplZCB0byB5b3VyXG4gICAgcmVxdWlyZW1lbnRzLCBpbnRlcmVzdHMgYW5kIHByZWZlcmVuY2VzLiBXZSBhbHNvIG9mZmVyIGNlcnRhaW4gZmVhdHVyZXNcbiAgICB3aGljaCBhcmUgb25seSBhdmFpbGFibGUgdGhyb3VnaCB0aGUgdXNlIG9mIGEgY29va2llLiBDb29raWVzIG1heSBiZSB1c2VkXG4gICAgd2hldGhlciB5b3UgY2hvb3NlIHRvIHJlZ2lzdGVyIHdpdGggdXMgb3Igbm90LiBUaGlyZCBwYXJ0eSB2ZW5kb3JzIHN1Y2ggYXNcbiAgICB3d3cuZ29vZ2xlLmNvbSAoR29vZ2xlKSBtYXkgdXNlIGNvb2tpZXMgdG8gc2VydmUgYWR2ZXJ0aXNlbWVudHMgYmFzZWQgb25cbiAgICB5b3VyIHZpc2l0cyB0byB0aGlzIHdlYnNpdGUuIFlvdSBtYXkgdmlzaXQgdGhlIHdlYnNpdGUgb2YgdGhlIHRoaXJkIHBhcnR5XG4gICAgYW5kIGNob29zZSB0byBvcHQgb3V0IG9mIHRoZSB1c2Ugb2YgY29va2llcyBmb3IgaW50ZXJlc3QtYmFzZWQgYWR2ZXJ0aXNpbmcsXG4gICAgaWYgdGhlIHRoaXJkIHBhcnR5IG9mZmVycyBzdWNoIGFuIG9wdGlvbi4gV2UgcGxhY2UgYm90aCBwZXJtYW5lbnQgYW5kXG4gICAgdGVtcG9yYXJ5IGNvb2tpZXMgaW4geW91ciBjb21wdXRlcidzIGhhcmQgZHJpdmUuIEhvd2V2ZXIsIHN1Y2ggY29va2llcyBkb1xuICAgIG5vdCBjb250YWluIGFueSBvZiB5b3VyIHBlcnNvbmFsbHkgaWRlbnRpZmlhYmxlIGluZm9ybWF0aW9uLlxuICAgIDwvcD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImRhdGFQcm90ZWN0aW9uXCI+Ny4gSG93IHdlIHByb3RlY3QgeW91ciBwZXJzb25hbCBkYXRhPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBUVCB0YWtlcyB0aGUgcHJvdGVjdGlvbiBvZiB5b3VyIEN1c3RvbWVyIERhdGEgc2VyaW91c2x5IGJ1dCwgdW5mb3J0dW5hdGVseSxcbiAgICB0aGUgdHJhbnNtaXNzaW9uIG9mIGluZm9ybWF0aW9uIHZpYSB0aGUgaW50ZXJuZXQgaXMgbm90IGNvbXBsZXRlbHkgc2VjdXJlLlxuICAgIEFsdGhvdWdoIHdlIHdpbGwgZG8gb3VyIGJlc3QgdG8gcHJvdGVjdCB5b3VyIEN1c3RvbWVyIERhdGEsIHdlIGNhbm5vdFxuICAgIGd1YXJhbnRlZSB0aGUgc2VjdXJpdHkgb2YgeW91ciBDdXN0b21lciBEYXRhIHRyYW5zbWl0dGVkIHRocm91Z2ggYW55XG4gICAgY2hhbm5lbCwgc3VjaCBhcyB0aGUgV2Vic2l0ZTsgYW55IHRyYW5zbWlzc2lvbiBpcyBhdCB5b3VyIG93biByaXNrLlxuICAgIDwvcD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cIm5vdGlmaWNhdGlvbkNoYW5nZXNcIj44LiBOb3RpZmljYXRpb24gb2YgTW9kaWZpY2F0aW9ucyBhbmQgQ2hhbmdlcyB0byB0aGUgUG9saWN5PC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSByZXNlcnZlIHRoZSByaWdodCB0byBjaGFuZ2UgdGhlIHRlcm1zIG9mIHRoZSBQb2xpY3kgZnJvbSB0aW1lIHRvIHRpbWUsIGFzXG4gICAgc2VlbSBmaXQsIHdpdGhvdXQgYW55IGludGltYXRpb24gdG8geW91LCBhbmQgeW91ciBjb250aW51ZWQgdXNlIG9mIHRoZVxuICAgIFdlYnNpdGUgb3IgQXBwIHdpbGwgc2lnbmlmeSB5b3VyIGFjY2VwdGFuY2Ugb2YgYW55IGFtZW5kbWVudCB0byB0aGVzZSB0ZXJtcy5cbiAgICBZb3UgYXJlIHRoZXJlZm9yZSBhZHZpc2VkIHRvIHJlLXJlYWQgdGhlIHRlcm1zIG9mIHRoZSBQb2xpY3kgb24gYSByZWd1bGFyXG4gICAgYmFzaXMuIFNob3VsZCBpdCBiZSB0aGF0IHlvdSBkbyBub3QgYWNjZXB0IGFueSBvZiB0aGUgbW9kaWZpY2F0aW9ucyBvclxuICAgIGFtZW5kbWVudHMgdG8gdGhlIHRlcm1zIG9mIHRoZSBQb2xpY3ksIHlvdSBtYXkgdGVybWluYXRlIHlvdXIgdXNlIG9mIG91clxuICAgIHNlcnZpY2VzIGltbWVkaWF0ZWx5LlxuICAgIDwvcD5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZjE4IGZ3NyBwdDggcGI4XCIgaWQ9XCJzaGFyaW5nUGhvdG9zXCI+OS4gU2hhcmluZyBvZiB0cmF2ZWxlcnPigJkgcGhvdG9zIGFuZCB2aWRlb3M8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIEJ5IHZvbHVudGFyaWx5IHN1Ym1pdHRpbmcgeW91ciB0cmF2ZWwgcGhvdG9zIG9yIHZpZGVvcyB0byBUVCBhZnRlciBhdmFpbGluZ1xuICAgIG91ciBzZXJ2aWNlcywgZWl0aGVyIG9uIG91ciBXZWJzaXRlIG9yIEFwcCBvciB0aHJvdWdoIGVtYWlsIG9yIGFueSBvdGhlclxuICAgIG1lZGl1bSBvZiBjb21tdW5pY2F0aW9uIHRvIHVzLCB5b3UgZ3JhbnQgdG8gVFQsIGEgbm9uLWV4Y2x1c2l2ZSwgcGVycGV0dWFsLFxuICAgIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCB0cmFuc2ZlcmFibGUsIGFuZCBzdWItbGljZW5zYWJsZSwgbGljZW5zZSB0byBlZGl0LFxuICAgIHRlbGVjYXN0LCByZS1ydW4sIHJlcHJvZHVjZSwgdXNlLCBzeW5kaWNhdGUsIHByaW50IGFuZCBkaXN0cmlidXRlIHRoZVxuICAgIG1hdGVyaWFscyB5b3Ugc3VibWl0LCBvciBhbnkgcG9ydGlvbiB0aGVyZW9mLCBpbiBvciBpbiBjb25uZWN0aW9uIHdpdGggVFRcbiAgICBhbmQgYW55IG9mIGl0cyBhZmZpbGlhdGVz4oCZIHdlYnNpdGVzLCBwcm9ncmFtbWluZywgcGxhdGZvcm1zIGFuZC9vciBBcHAgKHRoZVxuICAgIG1hbm5lciwgbW9kZSBhbmQgZXh0ZW50IG9mIHdoaWNoIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG5vdGljZSB0b1xuICAgIHlvdSksIGluIGFueSBtYW5uZXIsIGFuZCBpbiBhbnkgbWVkaXVtIG9yIGZvcnVtLiBZb3UgcmVwcmVzZW50IGFuZCB3YXJyYW50XG4gICAgdG8gVFQgdGhhdCB5b3UgaGF2ZSB0aGUgZnVsbCBsZWdhbCByaWdodCwgcG93ZXIgYW5kIGF1dGhvcml0eSB0byBncmFudCB0aGVcbiAgICBhZm9yZW1lbnRpb25lZCBsaWNlbnNlIHRvIFRULiBZb3UgZnVydGhlciBhZ3JlZSB0aGF0IHlvdXIgc3VibWlzc2lvbihzKSwgYW5kXG4gICAgdGhlIGV4ZXJjaXNlIG9mIHRoZSByaWdodHMgZ3JhbnRlZCBoZXJlaW4sIHB1cnN1YW50IHRvIHRoZSBhZm9yZXNhaWQgdGVybXMsXG4gICAgZG8gbm90IGFuZCB3aWxsIG5vdCB2aW9sYXRlIGFueSBhcHBsaWNhYmxlIGxhd3Mgb3IgcmVndWxhdGlvbnMsIG9yIGNhdXNlIGFcbiAgICBicmVhY2ggb2YgYW55IGFncmVlbWVudChzKSBlbnRlcmVkIGJ5IHlvdSB3aXRoIGFueSB0aGlyZCBwYXJ0aWVzLCBhbmQgdGhhdFxuICAgIG5vbmUgb2YgdGhlIHN1Ym1pc3Npb24ocykgd2lsbCBpbmZyaW5nZSBhbnkgY29weXJpZ2h0LCBpbnZhZGUgYW55IHJpZ2h0IG9mXG4gICAgcHJpdmFjeSwgcmlnaHQgb2YgcHVibGljaXR5LCBjb250YWluIGFueSBsaWJlbG91cyBvciBzbGFuZGVyb3VzIG1hdGVyaWFsLCBvclxuICAgIGluZnJpbmdlIG9yIHZpb2xhdGUgYW55IG90aGVyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodCBvciBvdGhlciByaWdodFxuICAgIChpbmNsdWRpbmcgY29tbW9uIGxhdyByaWdodHMpIG9mIGFueSBvdGhlciBwZXJzb24gb3IgZW50aXR5LlxuICAgIDwvcD5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZjE4IGZ3NyBwdDggcGI4XCIgaWQ9XCJzZWN1cml0eVByZWNhdXRpb25zXCI+MTAuIFNlY3VyaXR5IFByZWNhdXRpb25zPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBPdXIgV2Vic2l0ZSBhbmQgQXBwIGhhdmUgc3RyaW5nZW50IHNlY3VyaXR5IG1lYXN1cmVzIGluIHBsYWNlIHRvIHByb3RlY3QgdGhlXG4gICAgbG9zcywgbWlzdXNlLCBhbmQgYWx0ZXJhdGlvbiBvZiB0aGUgaW5mb3JtYXRpb24gdW5kZXIgb3VyIGNvbnRyb2wuIFdoZW5ldmVyXG4gICAgeW91IGNoYW5nZSBvciBhY2Nlc3MgeW91ciBhY2NvdW50IGluZm9ybWF0aW9uLCB3ZSBvZmZlciB0aGUgdXNlIG9mIGEgc2VjdXJlXG4gICAgc2VydmVyLiBPbmNlIHlvdXIgaW5mb3JtYXRpb24gaXMgaW4gb3VyIHBvc3Nlc3Npb24sIHdlIGFkaGVyZSB0byBzdHJpY3RcbiAgICBzZWN1cml0eSBndWlkZWxpbmVzLCBwcm90ZWN0aW5nIGl0IGFnYWluc3QgdW5hdXRob3JpemVkIGFjY2Vzcy4gQXMgc29vbiBhc1xuICAgIHRoZSB5b3UgZGVjbGFyZSB0aGUgaW50ZW50IHRvIGF2YWlsIGFueSBvZiB0aGVcbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgc2VydmljZXMgb2ZmZXJlZCBieSB1cyBvbiB0aGUgV2Vic2l0ZSBvciBBcHAsIHRoZSBXZWJzaXRlIG9yIEFwcCwgYXMgdGhlXG4gICAgY2FzZSBtYXkgYmUsIHNoYWxsIHRyYW5zZmVyIHRoZSBjb250cm9sIHRvIGEgc3BlY2lmaWVkIGFuZCBhdXRoZW50aWMgcGF5bWVudFxuICAgIGdhdGV3YXkgW1BheVUsIENpdHJ1cywgRUJTLCBQYXlUbSBdIHRoYXQgdGFrZXMgeW91ciBjcmVkaXQgY2FyZCBvciBkZWJpdFxuICAgIGNhcmQgb3Igb3RoZXIgYmFua2luZyBpbmZvcm1hdGlvbiBhbmQgcHJvY2Vzc2VzIHRoZSBwYXltZW50IHRyYW5zYWN0aW9uLlxuICAgIDwvcD5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZjE4IGZ3NyBwdDggcGI4XCIgaWQ9XCJvcHRPdXRcIj4xMS4gQ2hvaWNlIHRvIE9wdC1PdXQ8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIElmIHlvdSBzbyBkZXNpcmUsIHlvdSBtYXkgb3B0LW91dCBvZiByZWNlaXZpbmcgbm9uLWVzc2VudGlhbCAocHJvbW90aW9uYWwsXG4gICAgbWFya2V0aW5nLSByZWxhdGVkKSBjb21tdW5pY2F0aW9ucyBmcm9tIHVzIG9uIGJlaGFsZiBvZiBvdXIgcGFydG5lcnMsIGFuZFxuICAgIGZyb20gdXMsIGluIGdlbmVyYWwsIGFmdGVyIHNldHRpbmcgdXAgYW4gYWNjb3VudC4gWW91IG1heSBhbHNvIGNvbnRhY3QgdXMsXG4gICAgYXQgc3VwcG9ydEBUcmF2ZWxUcmlhbmdsZS5jb20sIHRvIHVuc3Vic2NyaWJlIHRvIG91ciBuZXdzbGV0dGVycyxcbiAgICBwdWJsaWNhdGlvbnMgb3IgYW55IG90aGVyIG1hdGVyaWFsLlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIiA+XG4gICAgRnVydGhlciwgcGxlYXNlIG5vdGUgdGhhdCBhbGwgaW5mb3JtYXRpb24sIGluY2x1ZGluZyBwZXJzb25hbCBpbmZvcm1hdGlvblxuICAgIHByb3ZpZGVkIGJ5IHlvdSBpcyB2b2x1bnRhcnkgaW4gbmF0dXJlLiBZb3UgbWF5LCBhdCBhbnkgdGltZSwgd2l0aGRyYXcgeW91clxuICAgIGNvbnNlbnQsIGluIGFjY29yZGFuY2Ugd2l0aCB0aGlzIFBvbGljeS4gSG93ZXZlciwgaW4gdGhlIGV2ZW50IHlvdSB3aXRoZHJhd1xuICAgIGNvbnNlbnQgdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiwgaW5jbHVkaW5nIHBlcnNvbmFsIGluZm9ybWF0aW9uLCB5b3UgYWdyZWVcbiAgICB0aGF0IHlvdSB3aWxsIG5vIGxvbmdlciBiZSBwZXJtaXR0ZWQgdG8gdXNlIG91ciBzZXJ2aWNlcy5cbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgWW91IGNhbiBhbHNvIGFjY2VzcywgbW9kaWZ5LCBjb3JyZWN0IGFuZCBlbGltaW5hdGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnlcbiAgICB5b3Ugd2hpY2ggaGFzIGJlZW4gY29sbGVjdGVkIGJ5IHVzLiBXZSB3aWxsIG5vdCByZXRhaW4gYW55IHBlcnNvbmFsXG4gICAgaW5mb3JtYXRpb24gZm9yIGEgbG9uZ2VyIHBlcmlvZCB0aGFuIGlzIHJlcXVpcmVkIGZvciB0aGUgcHVycG9zZXMgZm9yIHdoaWNoXG4gICAgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uIG1heSBsYXdmdWxseSBiZSB1c2VkIG9yIGlzIG90aGVyd2lzZSByZXF1aXJlZCB1bmRlclxuICAgIGFueSBvdGhlciBsYXcgZm9yIHRoZSB0aW1lIGJlaW5nIGluIGZvcmNlLiBJbiB0aGUgZXZlbnQgeW91IGFyZSBub3RcbiAgICBhZ3JlZWFibGUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIHVuZGVyIHRoaXMgUG9saWN5IGFuZCB5b3UgYXJlXG4gICAgcHJlc2VudGx5IGF2YWlsaW5nIG91ciBzZXJ2aWNlcywgd2UgcmVxdWVzdCB5b3UgdG8ga2luZGx5IHdpdGhkcmF3IHlvdXJcbiAgICBjb25zZW50IG9yIG1vZGlmeSB5b3VyIGluZm9ybWF0aW9uLCBieSB3cml0aW5nIHRvIHVzLCBhdFxuICAgIHN1cHBvcnRAdHJhdmVsdHJpYW5nbGUuY29tLCBhbmQgdW5pbnN0YWxsIG91ciBBcHAgdGhyb3VnaCB3aGljaCB5b3UgbWF5IGJlXG4gICAgYXZhaWxpbmcgb3VyIHNlcnZpY2VzLlxuICAgIDwvcD5cblxuICAgIDxoMSBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImFkdmVydGlzZU1lbnRcIj4xMi4gQWR2ZXJ0aXNlbWVudCBvbiB3ZWJzaXRlPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBXZSBtYXkgdXNlIHRoaXJkLXBhcnR5IGFkdmVydGlzaW5nIHdlYnNpdGVzIHRvIHNlcnZlIGFkdmVydGlzZW1lbnRzIHdoZW4geW91XG4gICAgdmlzaXQgb3VyIFdlYnNpdGUgYW5kIEFwcC4gU3VjaCB3ZWJzaXRlcyBtYXkgdXNlIGluZm9ybWF0aW9uIGluY2x1ZGluZyB5b3VyXG4gICAgcGVyc29uYWwgaW5mb3JtYXRpb24gaW4gb3JkZXIgdG8gcHJvdmlkZSBhZHZlcnRpc2VtZW50cyByZWdhcmRpbmcgZ29vZHMgYW5kXG4gICAgc2VydmljZXMgdGhhdCBtYXkgYmUgb2YgaW50ZXJlc3QgdG8geW91LiBXZSBjYW5ub3QgY29uZmlybSBvciBndWFyYW50ZWUgb3JcbiAgICB0YWtlIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgcHJpdmFjeSBwcmFjdGljZXMgb3IgcG9saWNpZXMgb2Ygc3VjaFxuICAgIHRoaXJkLXBhcnR5IGFkdmVydGlzaW5nIHdlYnNpdGVzLiBXZSBkaXNjbGFpbSBhbnkgbGlhYmlsaXR5IHRvd2FyZHMgYW55XG4gICAgbG9zc2VzIGR1ZSB0byBwcml2YWN5IGluZnJpbmdlbWVudCBvciBvdGhlciBjYXVzZXMgdGhhdCB5b3UgbWF5IHN1ZmZlclxuICAgIHB1cnN1YW50IHRvIGFjY2VzcyBvZiBzdWNoIHRoaXJkLXBhcnR5IGFkdmVydGlzaW5nIHdlYnNpdGVzLiBXZSBlbmNvdXJhZ2VcbiAgICB5b3UgdG8gcmVhZCB0aGUgcHJpdmFjeSBwb2xpY2llcyBvZiB0aGUgcmVsZXZhbnQgdGhpcmQtcGFydHkgYWR2ZXJ0aXNpbmdcbiAgICB3ZWJzaXRlcyBwcmlvciB0byBhY2Nlc3NpbmcgdGhlbS5cbiAgICA8L3A+XG5cbiAgICA8aDEgIGNsYXNzTmFtZT1cImYxOCBmdzcgcHQ4IHBiOFwiIGlkPVwiaW5mb3JtYXRpb25PdmVyc2Vhc1wiPjEzLiBUcmFuc2ZlciBvZiBpbmZvcm1hdGlvbiBvdmVyc2VhczwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cCBtYjE1XCI+XG4gICAgVFTigJlzIENvcnBvcmF0ZSBPZmZpY2UgaXMgYmFzZWQgaW4gR3VyZ2FvbiwgSGFyeWFuYSwgSW5kaWEuIEl0IGlzIHRoZSBwbGFjZVxuICAgIGZyb20gd2hlcmUgaXQgY2FycmllcyBpdHMgb3BlcmF0aW9ucy4gQWNjb3JkaW5nbHksIEN1c3RvbWVyIERhdGEgd2lsbCBiZVxuICAgIGFjY2Vzc2libGUgdG8gVFTigJlzIG9mZmljZXMgYW5kIGFwcG9pbnRlZCBhZ2VudHMgYmFzZWQgb3V0IG9mIEluZGlhLiBUaGlzXG4gICAgbWVhbnMgdGhhdCBDdXN0b21lciBEYXRhIHdpbGwgYmUgdHJhbnNmZXJyZWQgdG8sIGFuZCBzdG9yZWQgYXQsIGFcbiAgICBkZXN0aW5hdGlvbiBvdXRzaWRlIG9mIHlvdXIgY291bnRyeSBhbmQgb3V0c2lkZSB0aGUgRXVyb3BlYW4gRWNvbm9taWMgQXJlYVxuICAgICgmcXVvdDtFRUEmcXVvdDspLiBJZiB5b3UgYXJlIGFuIEVVIHJlc2lkZW50LCBhbmQgd2UgdHJhbnNmZXIgQ3VzdG9tZXIgRGF0YVxuICAgIG91dHNpZGUgdGhlIEVFQSwgdGhpcyBpcyBkb25lIG9uIHRoZSBiYXNpcyB0aGF0IGl0IGlzIG5lY2Vzc2FyeSBpbiBkaXNjaGFyZ2VcbiAgICBvZiB0aGUgc2VydmljZXMgcmVuZGVyZWQgdG8geW91IGJ5IFRUIG9yIGl0cyBhZ2VudHMuXG4gICAgPC9wPlxuXG4gICAgPGgxICBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImV1RGF0YVwiPjE0LiBFVSBkYXRhIHN1YmplY3QgcmlnaHRzPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBJZiB5b3UgYXJlIGEgcmVzaWRlbnQgaW4gdGhlIEVVLCB5b3UgbWF5IGhhdmUgY2VydGFpbiByaWdodHMgaW4gcmVsYXRpb24gdG9cbiAgICB0aGUgQ3VzdG9tZXIgRGF0YSB3ZSBob2xkIGFib3V0IHlvdSwgd2hpY2ggd2UgZGV0YWlsIGJlbG93LiBTb21lIG9mIHRoZXNlXG4gICAgb25seSBhcHBseSBpbiBjZXJ0YWluIGNpcmN1bXN0YW5jZXMgd2hlcmUgVFQgaXMgaG9sZGluZyBhdXRob3JpdHkgb2YgdGhlXG4gICAgZGF0YSBhbmQgbGVnYWxseS9jb250cmFjdHVhbGx5IGFsbG93ZWQgYXMgcGVyIHRoZSBsb2NhbCBsYXdzIGFzIHNldCBvdXQgaW5cbiAgICBtb3JlIGRldGFpbCBiZWxvdy4gV2UgYWxzbyBzZXQgb3V0IGhvdyB0byBleGVyY2lzZSB0aG9zZSByaWdodHMuXG4gICAgPC9wPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmMTRwIG1iMTUgcGwyNFwiPlxuICAgIDxvbD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+UmlnaHQgdG8gaW5mb3JtYXRpb248L3NwYW4+IC0gaW5jbHVkaW5nIGNvbnRhY3QgZGV0YWlscyB0byB0aGUgRFBPLCB0aGVcbiAgICAgICAgcHVycG9zZXMgZm9yIHByb2Nlc3NpbmcgUGVyc29uYWwgSW5mb3JtYXRpb24gYW5kIHRoZSByaWdodHMgb2YgdGhlXG4gICAgICAgIGluZGl2aWR1YWwuXG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj5SaWdodCB0byBhY2Nlc3M8L3NwYW4+IHRoZSBQZXJzb25hbCBJbmZvcm1hdGlvbiB0aGF0IGFyZSBwcm9jZXNzZWRcbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPlJpZ2h0IHRvIGVyYXN1cmU8L3NwYW4+ICjigJ0gUmlnaHQgdG8gYmUgZm9yZ290dGVu4oCdKVxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+UmlnaHQgdG8gcmVjdGlmaWNhdGlvbjwvc3Bhbj5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibWI4XCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZ3N1wiPlJpZ2h0IHRvIHJlc3RyaWN0aW9uIG9mIHByb2Nlc3Npbmc8L3NwYW4+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj5SaWdodCB0byBkYXRhIHBvcnRhYmlsaXR5PC9zcGFuPiBvZiB0aGUgUGVyc29uYWwgSW5mb3JtYXRpb24gc3VwcGxpZWQgdG9cbiAgICAgICAgVFQgYnkgdGhlIEVVIHJlc2lkZW50XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmdzdcIj5SaWdodCB0byBvYmplY3QgKG9wdC1vdXQpPC9zcGFuPiB0byBwcm9jZXNzaW5nICh1bmxlc3MgVFQgb3RoZXJ3aXNlIGhhc1xuICAgICAgICBjb21wZWxsaW5nIGxlZ2l0aW1hdGUgZ3JvdW5kcylcbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgICA8L2Rpdj5cblxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIEVVIHJlc2lkZW50cyBjYW4gZXhlcmNpc2UgdGhlc2UgcmlnaHRzIGJ5IHJhaXNpbmcgYSByZXF1ZXN0IGRpcmVjdGx5IGF0XG4gICAgZHBvQHRyYXZlbHRyaWFuZ2xlLmNvbSAuPC9wPlxuXG4gICAgPGgxICBjbGFzc05hbWU9XCJmMTggZnc3IHB0OCBwYjhcIiBpZD1cImNvbmZpZGVudGlhbGl0eVwiPjE1LiBDb25maWRlbnRpYWxpdHk8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIFlvdSBmdXJ0aGVyIGFja25vd2xlZGdlIHRoYXQgd2UgbWF5IHByb3ZpZGUgeW91IGNlcnRhaW4gaW5mb3JtYXRpb24gKGFwYXJ0XG4gICAgZnJvbSBpbmZvcm1hdGlvbiBhdmFpbGFibGUgb24gdGhlIFdlYnNpdGUgYW5kIEFwcCwgd2hpY2ggaXMgdW5kZXIgcHVibGljXG4gICAgZG9tYWluKSB3aGljaCBpcyBkZXNpZ25hdGVkIGNvbmZpZGVudGlhbCBieSB1cy4gWW91IGFncmVlIHRoYXQgeW91IHNoYWxsIG5vdFxuICAgIGRpc2Nsb3NlIHN1Y2ggY29uZmlkZW50aWFsIGluZm9ybWF0aW9uIHdpdGhvdXQgb3VyIHByaW9yIHdyaXR0ZW4gY29uc2VudC5cbiAgICBGdXJ0aGVyLCB5b3VyIGluZm9ybWF0aW9uIHNoYWxsIGJlIHJlZ2FyZGVkIGFzIGNvbmZpZGVudGlhbCBhbmQgdGhlcmVmb3JlLFxuICAgIHdpbGwgbm90IGJlIGRpdnVsZ2VkIHRvIGFueSB0aGlyZCBwYXJ0eSwgdW5sZXNzIGlmIGxlZ2FsbHkgcmVxdWlyZWQgdG8gZG8gc29cbiAgICB0byB0aGUgYXBwcm9wcmlhdGUgYXV0aG9yaXRpZXMgb3Igb3RoZXJ3aXNlIHBlcm1pdHRlZCBpbiB0ZXJtcyBvZiB0aGlzXG4gICAgUG9saWN5LlxuICAgIDwvcD5cbiAgICA8aDEgIGNsYXNzTmFtZT1cImYxOCBmdzcgcHQ4IHBiOFwiIGlkPVwiZGlzY2xhaW1lclwiPjE2LiBEaXNjbGFpbWVyPC9oMT5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwIG1iMTVcIj5cbiAgICBBcyBhIHVzZXIgb2YgdGhlIFdlYnNpdGUgYW5kIEFwcCwgeW91IHVuZGVyc3RhbmQgYW5kIGFncmVlIHRoYXQgeW91IGFzc3VtZVxuICAgIGFsbCByZXNwb25zaWJpbGl0eSBhbmQgcmlzayBmb3IgeW91ciB1c2Ugb2YgdGhlIFdlYnNpdGUgYW5kIEFwcCwgdGhlXG4gICAgaW50ZXJuZXQgZ2VuZXJhbGx5LCBhbmQgdGhlIGRvY3VtZW50cyB5b3UgcG9zdCBvciBhY2Nlc3MgYW5kIGZvciB5b3VyXG4gICAgY29uZHVjdCBvbiBhbmQgb2ZmIHRoZSBXZWJzaXRlIGFuZCBBcHAuIFlvdXIgdXNlIG9mIHNpdGUgaXMgc3ViamVjdGVkIHRvIG91clxuICAgIFBvbGljeS4gSWYgeW91IGRvIG5vdCBhZ3JlZSB0byB0aGlzLCB3ZSBraW5kbHkgcmVxdWVzdCB5b3Ugbm90IHRvIHVzZSB0aGlzXG4gICAgcG9ydGFsLlxuICAgIDwvcD5cbiAgICA8aDEgY2xhc3NOYW1lPVwiZjE4IGZ3NyBwdDggcGI4XCIgaWQ9XCJncmlldmFuY2VcIj4xNy4gR3JpZXZhbmNlIE9mZmljZXI8L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHAgbWIxNVwiPlxuICAgIEluIGNhc2UgeW91IGhhdmUgYW55IGdyaWV2YW5jZSwgcGxlYXNlIGZlZWwgZnJlZSB0byB3cml0ZSB0byBvdXIgR3JpZXZhbmNlXG4gICAgT2ZmaWNlciwgYXJlIHByb3ZpZGVkIGJlbG93OlxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgTXIuIEFiaGlydXAgU2FoYVxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgSG9saWRheSBUcmlhbmdsZSBUcmF2ZWwgUHJpdmF0ZSBMaW1pdGVkXG4gICAgPC9wPlxuICAgIDxwIGNsYXNzTmFtZT1cImYxNHBcIj5cbiAgICAzcmQgRmxvb3IgJmFtcDsgNHRoIEZsb29yLCBEeW5hbWljIEhvdXNlLFxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgUGxvdCBuby0yOSwgU2VjdG9yLTE4LFxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgR3VydWdyYW0tMTIyMDE1LCBIYXJ5YW5hLCBJbmRpYVxuICAgIDwvcD5cbiAgICA8cCBjbGFzc05hbWU9XCJmMTRwXCI+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+Q29udGFjdDo8L3NwYW4+IDE4MDAgMTIzIDU1NTVcbiAgICA8L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiZjE0cFwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnc3XCI+RW1haWw6PC9zcGFuPiBjdXN0b21lcmNhcmVAdHJhdmVsdHJpYW5nbGUuY29tXG4gICAgPC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3k7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsUGVyY2VudGFnZSB9IGZyb20gJ3JlYWN0LXNjcm9sbC1wZXJjZW50YWdlJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCB7IGluaXRpYWxpemVTY3JvbGxlciwgb25TY3JvbGwgfSBmcm9tICdhY3Rpb25zL3NlZ21lbnRFdmVudHMnO1xuaW1wb3J0IFByaXZhY3kgZnJvbSAnbW9kdWxlcy9zdGF0aWMvcHJpdmFjeSc7XG5pbXBvcnQgSGVhZGVyQ29tbW9uIGZyb20gJ21vZHVsZXMvaGVhZGVyL0hlYWRlckNvbW1vbic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ21vZHVsZXMvc2hhcmVkL0Zvb3Rlcic7XG5cbmNvbnN0IFByaXZhY3lQYWdlID0gKCkgPT4ge1xuICBpbml0aWFsaXplU2Nyb2xsZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPHRpdGxlPlByaXZhY3kgUG9saWN5IC0gVHJhdmVsVHJpYW5nbGU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly90cmF2ZWx0cmlhbmdsZS5jb20vcHJpdmFjeVwiIC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxIZWFkZXJDb21tb24gLz5cbiAgICAgIDxTY3JvbGxQZXJjZW50YWdlIG9uQ2hhbmdlPXtvblNjcm9sbH0+XG4gICAgICAgIDxQcml2YWN5IC8+XG4gICAgICA8L1Njcm9sbFBlcmNlbnRhZ2U+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBBZGRyZXNzVFQgPSAoeyBpc0hvbWVQYWdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHJvdy0gc2ZjdyB0ZXh0LWNlbnRlcicgaXRlbVByb3A9e2lzSG9tZVBhZ2UgPyBcImFkZHJlc3NcIiA6IG51bGx9IGl0ZW1TY29wZT17aXNIb21lUGFnZSA/IFwiaXRlbXNjb3BlXCIgOiBudWxsfSAgaXRlbVR5cGU9e2lzSG9tZVBhZ2UgPyBcImh0dHBzOi8vc2NoZW1hLm9yZy9Qb3N0YWxBZGRyZXNzXCIgOiBudWxsfT5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZnc5IGYxNCBtMCBtYjE1IHNmYzYgdGV4dC11cHBlcmNhc2UgJz5Db3Jwb3JhdGUgT2ZmaWNlPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgbTAnIGl0ZW1Qcm9wPXsgaXNIb21lUGFnZSA/IFwibmFtZVwiIDogbnVsbH0+SG9saWRheSBUcmlhbmdsZSBUcmF2ZWwgUHJpdmF0ZSBMaW1pdGVkPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPSdmMTIgbTAnIGl0ZW1Qcm9wPXtpc0hvbWVQYWdlID8gXCJzdHJlZXRBZGRyZXNzXCIgOiBudWxsfT5QbG90IE5vIC0gMjkgLCAzcmQgJiA0dGggRmxvb3IsIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwiYWRkcmVzc0xvY2FsaXR5XCIgOiBudWxsfT5EeW5hbWljIEhvdXNlLCBNYXJ1dGkgSW5kdXN0cmlhbCBDb21wbGV4LDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwiQWRkcmVzc1JlZ2lvblwiIDogbnVsbH0+U2VjdG9yIDE4ICwgR3VydWdyYW0gLSA8c3BhbiBpdGVtUHJvcD1cInBvc3RhbENvZGVcIj4xMjIwMTUgPC9zcGFuPiwgSGFyeWFuYTwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT0nZjEyIG0wJyBpdGVtUHJvcD17aXNIb21lUGFnZSA/IFwidGVsZXBob25lXCIgOiBudWxsfT5MYW5kbGluZTogPGEgaHJlZj0ndGVsOjE4MDAxMjM1NTU1Jz4xODAwIDEyMyA1NTU1PC9hPjwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImYxMiBtMFwiIGl0ZW1Qcm9wPXtpc0hvbWVQYWdlID8gXCJlbWFpbFwiIDogbnVsbH0+RW1haWw6IDxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cIm1haWx0bzpjdXN0b21lcmNhcmVAdHJhdmVsdHJpYW5nbGUuY29tXCI+Y3VzdG9tZXJjYXJlQHRyYXZlbHRyaWFuZ2xlLmNvbTwvYT5cbiAgICAgIDwvcD5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BZGRyZXNzVFQucHJvcFR5cGVzID0ge1xuICBpc0hvbWVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuQWRkcmVzc1RULmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNIb21lUGFnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NUVDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFkZHJlc3NUVCA9ICgpID0+IChcbiAgPHAgY2xhc3NOYW1lPSdmMTIgcGZjNCc+QWxsIHJpZ2h0cyByZXNlcnZlZCAmY29weTsgMjAyMDwvcD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NUVDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Gb290ZXJMaW5rcy5zY3NzJztcblxuXG5jb25zdCBGb290ZXJMaW5rcyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3JvdyByb3ctJz5cbiAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGFsaWduQ2VudGVyIGZsZXhXcmFwIGp1c3RpZnlDZW50ZXIgZm9vdGVyLWxpbmtzLW1lbnUnPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvYWJvdXR1c1wiPkFib3V0IFVzPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9jYXJlZXJcIj5XZSBBcmUgSGlyaW5nITwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvdGVhbVwiPlRlYW08L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL2Jsb2dcIj5CbG9nPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi90ZXN0aW1vbmlhbHNcIj5UZXN0aW1vbmlhbHM8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL3RuY1wiPlQmQzwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9XCIvcHJpdmFjeVwiPlByaXZhY3kgUG9saWN5PC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9jYW5jZWxsYXRpb25cIj5DYW5jZWxsYXRpb248L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPVwiL0ZBUXNcIj5GQVFzPC9hPjwvbGk+XG4gICAgICA8bGk+PGEgaHJlZj1cIi9jb250YWN0X3VzXCI+Q29udGFjdCBVczwvYT48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTGlua3M7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXItbGlua3MtbWVudVwiOiBcIl8xeGVnbFwiXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cbmltcG9ydCB7XG4gICAgRkJJY29uV2hpdGUsIEdvb2dsZUljb25XaGl0ZSwgSW5zdGFncmFtLCBUd2l0dGVyLCBQaW50ZXJlc3RJY29uXG4gIH0gZnJvbSAnaGVscGVycy9JY29uL0ljb24nO1xuXG5jb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IGdsYW1vcm91cy5kaXYoe1xuICAnJiAuZmFjZWJvb2tJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMTBweCcsXG4gICAgICBoZWlnaHQ6ICcxOXB4JyxcbiAgICB9LFxuICB9LFxuICAnJiAudHdpdHRlckljb24nOiB7XG4gICAgJyYgc3ZnJzoge1xuICAgICAgd2lkdGg6ICcxN3B4JyxcbiAgICAgIGhlaWdodDogJzE0cHgnLFxuICAgIH0sXG4gIH0sXG4gICcmIC5waW50cmVzdEljb24nOiB7XG4gICAgJyYgc3ZnJzoge1xuICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgIH0sXG4gIH0sXG4gICcmIC5nb29nbGVJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMjFweCcsXG4gICAgICBoZWlnaHQ6ICcxM3B4JyxcbiAgICB9LFxuICB9LFxuICAnJiAuaW5zdGFJY29uJzoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IENvbm5lY3RJY29ucyA9IGdsYW1vcm91cy5hKHtcbiAgbWluV2lkdGg6ICczMHB4JyxcbiAgbWF4V2lkdGg6ICczMHB4JyxcbiAgaGVpZ2h0OiAnMzBweCcsXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAnJjpsYXN0LWNoaWxkJzoge1xuICAgIG1hcmdpblJpZ2h0OiAnMCdcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvY2lhbExpbmtzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndmdWxsXCI+XG4gICAgICAgIDxTb2NpYWxJY29uc0NvbnRhaW5lciBjbGFzc05hbWU9XCJhdF9zb2NpYWxpY29ucyBmbGV4IGFsaWduQ2VudGVyIHdmdWxsIGp1c3RpZnlDZW50ZXJcIj5cbiAgICAgICAgICA8Q29ubmVjdEljb25zIGNsYXNzTmFtZT1cImZhY2Vib29rSWNvblwiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vdHJhdmVsdHJpYW5nbGVcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIiA+PEZCSWNvbldoaXRlIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJ0d2l0dGVySWNvblwiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3RyYXZlbHRyaWFuZ2xlXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+PFR3aXR0ZXIgLz5cbiAgICAgICAgICA8L0Nvbm5lY3RJY29ucz5cbiAgICAgICAgICA8Q29ubmVjdEljb25zIGNsYXNzTmFtZT1cInBpbnRyZXN0SWNvblwiIGhyZWY9XCJodHRwczovL3d3dy5waW50ZXJlc3QuY29tL3RyYXZlbHRyaWFuZ2xlL1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPjxQaW50ZXJlc3RJY29uIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJnb29nbGVJY29uXCIgaHJlZj1cImh0dHBzOi8vcGx1cy5nb29nbGUuY29tLyt0cmF2ZWx0cmlhbmdsZS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj48R29vZ2xlSWNvbldoaXRlIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgICAgPENvbm5lY3RJY29ucyBjbGFzc05hbWU9XCJpbnN0YUljb25cIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90cmF2ZWx0cmlhbmdsZS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj48SW5zdGFncmFtIC8+XG4gICAgICAgICAgPC9Db25uZWN0SWNvbnM+XG4gICAgICAgIDwvU29jaWFsSWNvbnNDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9