module.exports = {
  server: {
    host: 'localhost',
    port: 4000,
    public: {
      host: 'API_ENDPOINT'
    }
  },
  webpackHMR: {
    host: 'localhost',
    port: 4001
  },
  browsing: {
    host: 'API_ENDPOINT',
    port: '',
    key: '93f67dbdacf3906955b5c529bb692fb11ac13dc3015c87f25c22fae51a5d79290841127492e312f2',
    ttMobileKey: '8AfrSjCLYSQMLKZKsnq0ZjAf35eqvr+eCNlv/ySKhjk='
  },
  api: {
    host: 'API_ENDPOINT',
    port: '',
    key: '93f67dbdacf3906955b5c529bb692fb11ac13dc3015c87f25c22fae51a5d79290841127492e312f2',
    ttMobileKey: '8AfrSjCLYSQMLKZKsnq0ZjAf35eqvr+eCNlv/ySKhjk='
  },
  cms: {
    host: 'cms-qa1.ttdev.in',
    port: '',
    key: '93f67dbdacf3906955b5c529bb692fb11ac13dc3015c87f25c22fae51a5d79290841127492e312f2',
    ttMobileKey: '8AfrSjCLYSQMLKZKsnq0ZjAf35eqvr+eCNlv/ySKhjk='
  },
  googleMap:{
    key:'AIzaSyDQTcWSQydeBaYb2Sihh5jAixtVzvqew3E'
  },
  segment: {
    key: 'r5oufcpZfDGiFKVEksWKuJUR5Dy8IGD6'
  },
  apiEndpoints: {
    topNavigation: { url: '/browsing/v1/pages/listing_page/sections/top_navigation', host: 'BROWSING' },
    entryFeesTimingsTips: {
      url: '/browsing/v1/tour_guides/entry_fees_timings_tips/:destination',
      host: 'BROWSING'
    },
    experience: { url: '/browsing/v1/tour_guides/experience/:destination', host: 'BROWSING' },
    cityBlockTestimonials: { url: 'browsing/v1/testimonials/search', host: 'BROWSING' },
    pdpTestimonials: { url: '/browsing/v1/packages/:id/reviews', host: 'BROWSING' },
    fetchPlpFooterLinks: { url: '/browsing/v1/packages/plp_footer_links', host: 'BROWSING'},
    fetchFooterLink: {url: 'browsing/v1/packages/:id/pdp_footer_links', host: 'BROWSING'},
    essentialInfo: { url: 'browsing/v1/tour_guides/essential_info/:destination', host: 'BROWSING' },
    bestTimeToVisit: { url: 'browsing/v1/tour_guides/best_time_to_visit/:destination', host: 'BROWSING' },
    howToReach: { url: 'browsing/v1/tour_guides/how_to_reach/:destination', host: 'BROWSING' },
    faqs: { url: 'browsing/v1/faqs', host: 'BROWSING' },
    banner: { url: 'browsing/v1/tour_guides/banner/:destination', host: 'BROWSING' },
    mapInformation: { url: 'browsing/v1/tour_guides/meta_information/:destination', host: 'BROWSING' },
    placesToVisit: { url: 'browsing/v1/tour_guides/schemes_listing/:destination', host: 'BROWSING' },
    thingsToDo: { url: 'browsing/v1/tour_guides/schemes_listing/:destination', host: 'BROWSING' },
    cityBlockCommon: { url: 'browsing/v1/tour_guides/:destination', host: 'BROWSING' },
    destinationCanonicals: { url: '/browsing/v1/destinations/canonicals', host: 'BROWSING' },
    comparePackages: { url: '/browsing/v1/packages/compare', host: 'BROWSING' },
    listing: { url: '/browsing/v1/packages', host: 'BROWSING' },
    listingSeoFooter: { url: '/browsing/v1/packages/footer_sections', host: 'BROWSING' },
    destinationDetail: { url: '/browsing/v1/destinations', host: 'BROWSING' },
    blogs: { url: '/blog/api/v1_get_blogs.php', host: 'BROWSING' },
    destinationBlogs: { url: '/blog/api/v1_get_destination_blog.php', host: 'BROWSING' },
    destinationByDuration: { url: '/browsing/v1/get_filtered_destination_list', host: 'BROWSING' },
    destinationListing: { url: '/browsing/v1/destinations', host: 'BROWSING' },
    footerSection: { url: 'browsing/v1/footer_section', host: 'BROWSING' },
    packageDetails: { url: 'browsing/v1/packages', host: 'BROWSING' },
    inlineGateways: { url: '/browsing/v1/package_filters', host: 'BROWSING' },
    similarPackages: { url: 'browsing/v1/packages', host: 'BROWSING' },
    recentPackages: { url: 'browsing/v1/packages/recently_viewed', host: 'BROWSING' },
    requestCallBack: { url: 'browsing/v1/request_callback', host: 'BROWSING' },
    forgotPassword: { url: 'browsing/v1/users/password', host: 'API' },
    faq: { url: 'browsing/v1/faqs', host: 'BROWSING' },
    toLocation: { url: '/browsing/v1/searches/to_locations', host: 'BROWSING' },
    search: { url: '/browsing/v1/searches/search', host: 'BROWSING' },
    searchNavigationURL: { url: '/browsing/v1/searches/get_search_navigation', host: 'BROWSING' },
    universalSearchSuggest: { url: '/browsing/v1/searches/suggest', host: 'BROWSING' },
    auth: {
      signin: { url: 'browsing/v1/users/sign_in', host: 'API' },
      signUp: { url: 'browsing/v1/users', host: 'API' },
      signOut: { url: 'browsing/v1/users/sign_out', host: 'API' },
      userDetails: { url: 'browsing/v1/user/status', host: 'API' }
    },
    career: {
      details: { url: '/browsing/v1/careers', host: 'BROWSING' },
      apply: { url: '/browsing/v1/candidate_details', host: 'BROWSING' }
    },
    testimonials: { url: '/browsing/v1/testimonials', host: 'BROWSING' },
    breadCrumbs: { url: '/browsing/v1/breadcrumbs', host: 'BROWSING' },
    sendActivationMail: { url: '/bookings/v1/requested_trips/:id/send_activation_mail', host: 'API' },
    requestedTrip: {
      formOne: { url: '/browsing/v1/requested_trips/', host: 'BROWSING' },
      formTwo: { url: '/browsing/v1/requested_trips/', host: 'BROWSING' },
      customize: { url: '/browsing/v1/requested_trips/:id/customize', host: 'BROWSING' },
      saveInRedis: { url: '/browsing/v1/requested_trips/slider/', host: 'BROWSING' },
      createInRedis: { url: 'save_slider_redis_downtime/', host: 'BROWSING' },
      sliderQuestions: { url: 'browsing/v1/cards/slider_questions', host: 'BROWSING' },
      destinationSearchList: { url: '/browsing/v1/destination_search_list', host: 'BROWSING' },
      destinationFilteredList: { url: '/browsing/v1/destinations/autocomplete_suggestions', host: 'BROWSING' },
      flightDetails: { url: 'bookings/v1/requested_flights', host: 'API' },
      getFlightDetails: { url: 'bookings/v1/requested_trips/:id/requested_flights/', host: 'API' }
    },
    nuturePreferences: {
      preferenceNurture: { url: 'browsing/v1/historical_infos/quote_prices', host:  'BROWSING'},
      preferenceParams: { url: 'browsing/v1/requested_trips/t/:unique_key/:secret_key', host: 'BROWSING'},
      updateAlive: { url: 'browsing/v1/requested_trips/t/:unique_key/:secret_key/alive', host: 'BROWSING'}
    },
    animatedBanner: { url: '/browsing/v1/banners/search', host: 'BROWSING' },
    filterCounts: { url: '/browsing/v1/packages/filters_counts', host: 'BROWSING' },
    hlpCommon: { url: '/browsing/v1/property_types', host: 'CMS' },
    hotelSearch: { url: '/browsing/v1/hotels/inventory', host: 'CMS' },
    checkOut: { url: '/browsing/v1/checkout', host: 'CMS' },
    bookingDetails: { url: '/browsing/v1/orders/:id/details', host: 'CMS' },
    hotelDetail: { url: '/browsing/v1/property_type', host: 'CMS' },
    footerLinks: { url: '/browsing/v1/property_types/footer_links', host: 'CMS' },
    rbtParse: { url: '/browsing/v1/destinations/rbt_parse', host: 'BROWSING' },
    mkt: { url: '/browsing/v1/marketing_package_details', host: 'BROWSING' },
    pageLayout: { url: '/bookings/v1/layout/:pageName', host: 'API' },
    // <editor-fold desc="Page Url's">
    rtripPath: { url: '/requested_trips/:id', host: 'BROWSING' },
    quoteDetailPath: { url: '/requested_trips/:id/quotes/:quoteId', host: 'BROWSING' },
    compareQuotesPath: { url: '/requested_trips/:id/compare', host: 'BROWSING' },
    vouchersPath: { url: '/vouchers/index_voucher?quote_id=:quoteId', host: 'BROWSING' },
    editTravelInfoPath: { url: '/requested_trips/:id/edit', host: 'BROWSING' },
    itineraryPath: { url: '/requested_trips/:id/quotes/:quoteId/itinerary', host: 'BROWSING' },
    preferencesPageUrl: { url: '/requested_trips/:id/edit', host: 'BROWSING' },
    //</editor-fold>
    // <editor-fold desc="Preferences API's">
    preferenceOptions: { url: '/bookings/v1/requested_trips/:requestedTripId/edit', host: 'API' },
    updatePreferences: { url: '/bookings/v1/requested_trips/:requestedTripId', host: 'API' },
    updateContactInfo: {
      url: '/bookings/v1/requested_trips/:requestedTripId/update_user_details',
      host: 'API'
    },
    // </editor-fold>
    // <editor-fold desc="Trip API's">
    allTrips: { url: '/bookings/v1/requested_trips', host: 'API' },
    cancelBooking: { url: '/bookings/v1/requested_trips/:requestedTripId/cancel_request', host: 'API' },
    reactivateRequest: {
      url: '/bookings/v1/requested_trips/:requestedTripId/reactivate_request',
      host: 'API'
    },
    requestedTripConstants: { url: '/bookings/v1/requested_trip_constants', host: 'API' },
    // </editor-fold>
    // <editor-fold desc="Quote API's">
    tripQuotesPath: { url: '/bookings/v1/requested_trips/:id/quotes', host: 'API' },
    quoteConstants: { url: '/bookings/v1/quote_show_constants', host: 'API' },
    quoteComments: { url: 'bookings/v1/requested_trips/:id/quotes/comments', host: 'API' },
    bookNow: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/accept_quote',
      host: 'API'
    },
    rejectQuote: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/reject_quote',
      host: 'API'
    },
    reactivateQuote: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/reactivate_quote',
      host: 'API'
    },
    hotelStatusChange: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/update_hotel_status',
      host: 'API'
    },
    requestCallback: { url: 'bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/request_call_back', host: 'API' },
    preDefinedMessagePath: { url: 'bookings/v1/pre_defined_messages', host: 'API' },
    downloadQuote: { url: '/quotes/:quoteId/download_quote', host: 'API' },
    waitForInvoice: { url: 'demo4148783.mockable.io/wait_for_invoice', host: 'API' },
    channelKeys: { url: '/bookings/v1/users/:userId/pubnub_config?type=', host: 'API' },
    updateQuoteStats: {
      url: '/bookings/v1/requested_trips/:tripId/quotes/:quoteId/update_quote_stats',
      host: 'API'
    },
    requestMoreQuotes: { url: '/bookings/v1/requested_trips/:id/request_more_quotes', host: 'API' },
    //</editor-fold>
    // <editor-fold desc="Discount Engine API's">
    discountOffers: { url: '/offer/show', host: 'API' },
    applyDiscountOffer: { url: '/offer/apply', host: 'API' },
    removeDiscountOffer: { url: '/offer/remove', host: 'API' },
    updateDiscountOffer: { url: '/offer/update', host: 'API' },
    appliedOffer: { url: 'offer/get_offer', host: 'API' },
    // </editor-fold>
    // <editor-fold desc="Agent Chat 'API''s">
    chatKeys: { url: '/bookings/v1/users/:userId/pubnub_config?&type=chat', host: 'API' },
    commentsHistory: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/comments',
      host: 'API'
    },
    commentCreate: {
      url: '/bookings/v1/requested_trips/:requestedTripId/quotes/:quoteId/comments',
      host: 'API'
    },
    // </editor-fold>
    // <editor-fold desc="Notification API's">
    notifications: { url: '/bookings/v1/users/:userId/notifications', host: 'API' },
    notificationsRead: { url: '/bookings/v1/users/:userId/update_last_seen_notification', host: 'API' },
    notificationKeys: { url: '/bookings/v1/users/:userId/pubnub_config?type=notification', host: 'API' },
    // </editor-fold>
    // <editor-fold desc="Feedback form API's">
    postTripFeedback: { url: '/bookings/v1/requested_trips/:requestedTripId/trip_feedbacks', host: 'API' },
    postBookingFeedback: {
      url: '/bookings/v1/requested_trips/:requestedTripId/postbooking_trip_feedbacks',
      host: 'API'
    },
    securityToken: { url: '/bookings/v1/requested_trips/:requestedTripId/security_token', host: 'API' },
    // </editor-fold>
    // <editor-fold desc="External Login Auth URLs">
    googleAuth: { url: '/auth/google_oauth2', host: 'API' },
    facebookAuth: { url: '/auth/facebook', host: 'API' },
    postConversionUrl: {
      url: '/bookings/v1/requested_trips/:requestedTripId/invoices/:invoiceId/is_invoice_changes_requested',
      host: 'API'
    },
    invoiceStatusUrl: {
      url: '/bookings/v1/requested_trips/:requestedTripId/invoices/:invoiceId/accept_reject_invoice_changes',
      host: 'API'
    }
    // </editor-fold>
  },
  api_protocol: 'https',
  cms_protocol: 'https',
  browsing_protocol: 'https',
  assets: {
    images: 'https://img.traveltriangle.com',
    cdn: '',
    svgPrefix: 'icons-svg-',
    ampSvgPrefix: 'icons-amp-svg-',
    js: 'https://js.traveltriangle.com/stage',
    s3: 'https://tt-stage-docs.s3.amazonaws.com'
  },
  searchPageSize: 3,
  errorPage: '/page-not-found',
  useRtms: true,
  rtmsUrl: 'wss://rtms-qa1.ttdev.in/connect/',
  withCredentials: true
};
