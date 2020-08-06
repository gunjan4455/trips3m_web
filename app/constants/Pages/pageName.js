/* eslint quote-props: ["error", "always"] */
/* eslint-env es6 */

const PAGE_TYPE_AND_PATTERN = {
  'Weekend Campaign Page': /(mktc)/,
  'Marketing Page': /(mkt)/,
  'Login Page': /(users\/sign_in)/,
  'Signup Page': /(users\/sign_up)/,
  'F1 Page': /(requested_trips\/new)/,
  'Category Page': /(\w+-Places)/,
  'Testimonial Page': /(testimonials)/,
  'City Block Page': /(\/\w+-tourism)/,
  'Weekend Page': /(places-near)/,
  'Destination Page': /(travel-to)/,
  'Traveler Dashboard': /\/travellers\/dashboard(\?|\/|\/\?|$)/,
  'Package Detail Page': /^\/packages\/\w+/,
  'Package List Page': /^.+-packages/,
  'Terms and Condition': /\/tnc/,
  'Privacy': /\/privacy/,
  'Cancellation': /\/cancellation/,
  'Contact Us Page': /\/contact_us/,
  'About Us Page': /aboutus/,
  'Team': /\/team/,
  'Career Page': /\/career/,
  'NURTURING LANDING PAGE': /\/requested_trips\/.+\/nurture\/.+/,
  'Post Trip NPS': /\/requested_trips\/\d+[-a-zA-Z0-9_]*\/trip_feedbacks\/new/,
  'Post Booking NPS': /\/requested_trips\/\d+[-a-zA-Z0-9_]*\/postbooking_trip_feedbacks\/new/,
  'Agent Profile Page': /\/agents\/\d+[-a-zA-Z0-9_]*(\?|\/|\/\?|$)/,
  'Quote Detail Page': /\/requested_trips\/\d+[-a-zA-Z0-9_]*\/quotes\/\d+(\?|\/|\/\?|$)/,
  'F2 Page': /\/requested_trips\/\d+[-a-zA-Z0-9_]*\/customize_new/,
  'Quote Compare Page': /\/requested_trips\/\d+[-a-zA-Z0-9_]*\/compare(\?|\/|\/\?|$)/,
  'Request Landing Page': /\/requested_trips\/\d+[-a-zA-Z0-9_]*(\?|\/|\/\?|$)/,
  'Hotel Listing Page': /(hotels|resorts|apartments|guest-houses|hostels|villas|home-stays|hotels-and-resorts|cottages)/,
  'HDP/ Select Room': /(\/select-room)/,
  'HDP/ Review Booking': /(\/review-booking)/,
  'HDP/ Guest Details': /(\/guest-details)/,
  'Hotel Detail Page': /(\/hotel\/)/,
  'HDP/Booking Confirmation Page': /(\/payments)/,
  'WV ChatBot': /wvchatbot/,
  'Home Page': /\/|(home)/,
  'Request CallBack': /(requestcallback)/,
  'Compare Packages Page': /comparepackages/
};

const BROWSING_PAGES = ['Login Page', 'Signup Page', 'F1 Page', 'Category Page', 'Testimonial Page', 'City Block Page',
  'Weekend Page', 'Destination Page', 'Package Detail Page', 'Package List Page', 'Terms and Condition', 'Privacy',
  'Cancellation', 'Contact Us Page', 'About Us Page', 'Team', 'Career Page', 'Agent Profile Page', 'F2 Page',
  'Hotel List Page', 'Hotel Detail Page', 'Home Page', 'Request CallBack', 'Compare Packages Page', 'WV ChatBot'];

export {
  PAGE_TYPE_AND_PATTERN,
  BROWSING_PAGES
};
