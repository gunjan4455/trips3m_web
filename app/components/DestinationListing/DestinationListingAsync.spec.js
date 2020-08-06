import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import DestinationListing from './DestinationListingAsync';

configure({ adapter: new Adapter() });

const createStubStore = () => ({
  getState: jest.fn(() => {})
});

const mockFilterSelected = jest.fn();

const DEFAULT_PROPS = {
  'location': {
    'pathname': '/Honeymoon-Places',
    'search': '',
    'hash': '',
    'action': 'POP',
    'key': 'wh0ncj',
    'query': {}
  },
  'params': {
    'splat': 'Honeymoon'
  },
  'route': {
    'path': '*-places',
    'chatBot': true,
    'pageType': 'category'
  },
  'router': {
    'location': {
      'pathname': '/Honeymoon-Places',
      'search': '',
      'hash': '',
      'action': 'POP',
      'key': 'wh0ncj',
      'query': {}
    },
    'params': {
      'splat': 'Honeymoon'
    },
    'routes': [
      {
        'path': '/',
        'indexRoute': {
          'chatBot': true
        },
        'childRoutes': [
          {
            'childRoutes': [
              {
                'path': 'users/sign_in',
                'chatBot': true,
                'type': 'login',
                'noChatBotPopup': true
              },
              {
                'path': 'users/sign_up',
                'chatBot': true,
                'type': 'signUp',
                'noChatBotPopup': true
              }
            ]
          },
          {
            'noChatBotPopup': true,
            'childRoutes': [
              {
                'path': '/requested_trips/:requestedTripId/quotes/:quoteid',
                'topBarOnly': true
              },
              {
                'path': '/requested_trips/:requestedTripId/quotes/:quoteid/itinerary',
                'topBarOnly': true
              }
            ]
          },
          {
            'path': '(:listingType-)tour-packages(/:destination)',
            'chatBot': true,
            'category': 'tour',
            'packageType': 'seo'
          },
          {
            'path': '(:listingType-)honeymoon-packages(/:destination)',
            'chatBot': true,
            'category': 'honeymoon',
            'packageType': 'seo'
          },
          {
            'path': '(:listingType-)family-packages(/:destination)',
            'chatBot': true,
            'category': 'family',
            'packageType': 'seo'
          },
          {
            'path': '(:listingType-)friends-packages(/:destination)',
            'chatBot': true,
            'category': 'friends',
            'packageType': 'seo'
          },
          {
            'path': 'seasonal-packages',
            'chatBot': true,
            'category': 'seasonal',
            'displayCategory': 'Seasonal',
            'packageType': 'seasonal'
          },
          {
            'path': 'places-near/:destination',
            'chatBot': true,
            'pageType': 'weekend'
          },
          {
            'path': 'packages/:packageName',
            'chatBot': true
          },
          {
            'path': 'requestcallback'
          },
          {
            'path': 'requested_trips/new',
            'chatBot': true,
            'noChatBotPopup': true
          },
          {
            'path': 'requested_trips/:tripId/customize_new'
          },
          {
            'path': 'travel-to/:destination',
            'chatBot': true
          },
          {
            'path': 'users/password/new',
            'noChatBotPopup': true
          },
          {
            'path': 'comparepackages',
            'chatBot': true
          },
          {
            'path': '/(:destination)-tourism',
            'chatBot': true,
            'indexRoute': {
              'tab': 'overview',
              'chatBot': true
            },
            'childRoutes': [
              {
                'path': 'places-to-visit',
                'indexRoute': {
                  'tab': 'places_to_visit'
                },
                'childRoutes': [
                  {
                    'path': '(:scheme)',
                    'chatBot': true,
                    'indexRoute': {
                      'tab': 'overview',
                      'schemeType': 'PlacesToSee',
                      'chatBot': true
                    },
                    'childRoutes': [
                      {
                        'path': 'timings',
                        'tab': 'timings',
                        'schemeType': 'PlacesToSee',
                        'chatBot': true
                      },
                      {
                        'path': 'tips',
                        'tab': 'tips',
                        'schemeType': 'PlacesToSee',
                        'chatBot': true
                      },
                      {
                        'path': 'entry-fees',
                        'tab': 'entry_fees',
                        'schemeType': 'PlacesToSee',
                        'chatBot': true
                      },
                      {
                        'path': 'how-to-reach',
                        'tab': 'how_to_reach',
                        'schemeType': 'PlacesToSee',
                        'chatBot': true
                      }
                    ]
                  }
                ]
              },
              {
                'path': 'things-to-do',
                'indexRoute': {
                  'tab': 'things_to_do'
                },
                'childRoutes': [
                  {
                    'path': '(:scheme)',
                    'indexRoute': {
                      'tab': 'overview',
                      'schemeType': 'ThingsToDo',
                      'chatBot': true
                    },
                    'childRoutes': [
                      {
                        'path': 'timings',
                        'tab': 'timings',
                        'schemeType': 'ThingsToDo',
                        'chatBot': true
                      },
                      {
                        'path': 'tips',
                        'tab': 'tips',
                        'schemeType': 'ThingsToDo',
                        'chatBot': true
                      },
                      {
                        'path': 'entry-fees',
                        'tab': 'entry_fees',
                        'schemeType': 'ThingsToDo',
                        'chatBot': true
                      },
                      {
                        'path': 'how-to-reach',
                        'tab': 'how_to_reach',
                        'schemeType': 'ThingsToDo',
                        'chatBot': true
                      }
                    ]
                  }
                ]
              },
              {
                'path': 'essential-info',
                'tab': 'essential_info',
                'chatBot': true
              },
              {
                'path': 'how-to-reach',
                'tab': 'how_to_reach',
                'chatBot': true
              },
              {
                'path': 'best-time-to-visit',
                'tab': 'best_time_to_visit',
                'chatBot': true
              },
              {
                'path': 'how-to-reach-from-(:from)',
                'tab': 'how_to_reach',
                'chatBot': true
              },
              {
                'path': 'experience/:category',
                'schemeType': 'ActivityType',
                'experience': true
              },
              {
                'path': '(:city)',
                'indexRoute': {
                  'tab': 'overview',
                  'chatBot': true
                },
                'childRoutes': [
                  {
                    'path': 'places-to-visit',
                    'indexRoute': {
                      'tab': 'places_to_visit'
                    },
                    'childRoutes': [
                      {
                        'path': '(:scheme)',
                        'indexRoute': {
                          'tab': 'overview',
                          'schemeType': 'PlacesToSee'
                        },
                        'childRoutes': [
                          {
                            'path': 'timings',
                            'tab': 'timings',
                            'schemeType': 'PlacesToSee'
                          },
                          {
                            'path': 'tips',
                            'tab': 'tips',
                            'schemeType': 'PlacesToSee'
                          },
                          {
                            'path': 'entry-fees',
                            'tab': 'entry_fees',
                            'schemeType': 'PlacesToSee'
                          },
                          {
                            'path': 'how-to-reach',
                            'tab': 'how_to_reach',
                            'schemeType': 'PlacesToSee'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'path': 'things-to-do',
                    'indexRoute': {
                      'tab': 'things_to_do'
                    },
                    'childRoutes': [
                      {
                        'path': '(:scheme)',
                        'indexRoute': {
                          'tab': 'overview',
                          'schemeType': 'ThingsToDo'
                        },
                        'childRoutes': [
                          {
                            'path': 'timings',
                            'tab': 'timings',
                            'schemeType': 'ThingsToDo'
                          },
                          {
                            'path': 'tips',
                            'tab': 'tips',
                            'schemeType': 'ThingsToDo'
                          },
                          {
                            'path': 'entry-fees',
                            'tab': 'entry_fees',
                            'schemeType': 'ThingsToDo'
                          },
                          {
                            'path': 'how-to-reach',
                            'tab': 'how_to_reach',
                            'schemeType': 'ThingsToDo'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    'path': 'essential-info',
                    'tab': 'essential_info',
                    'chatBot': true
                  },
                  {
                    'path': 'how-to-reach',
                    'tab': 'how_to_reach',
                    'chatBot': true
                  },
                  {
                    'path': 'best-time-to-visit',
                    'tab': 'best_time_to_visit',
                    'chatBot': true
                  },
                  {
                    'path': 'how-to-reach-from-(:from)',
                    'tab': 'how_to_reach',
                    'chatBot': true
                  },
                  {
                    'path': 'experience/:category',
                    'experience': true,
                    'schemeType': 'ActivityType',
                    'chatBot': true
                  }
                ]
              },
              {
                'from': '*',
                'to': '/(:destination)-tourism',
                'chatBot': true,
                'path': '*'
              }
            ]
          },
          {
            'path': '/aboutus'
          },
          {
            'path': '/team'
          },
          {
            'path': '/tnc'
          },
          {
            'path': '/privacy'
          },
          {
            'path': '/cancellation'
          },
          {
            'path': 'contact_us'
          },
          {
            'path': '*-places',
            'chatBot': true,
            'pageType': 'category'
          },
          {
            'path': '*-Places',
            'chatBot': true,
            'pageType': 'category'
          },
          {
            'path': 'search_results'
          },
          {
            'path': 'hotel/:hotelName',
            'chatBot': true
          },
          {
            'path': '(:filterType-)guest-houses/:destination(/near-:landmark)',
            'hotelType': 'guest-houses',
            'chatBot': true
          },
          {
            'path': '(:filterType-)hotels/:destination(/near-:landmark)',
            'hotelType': 'hotels',
            'chatBot': true
          },
          {
            'path': '(:filterType-)resorts/:destination(/near-:landmark)',
            'hotelType': 'resorts',
            'chatBot': true
          },
          {
            'path': '(:filterType-)apartments/:destination(/near-:landmark)',
            'hotelType': 'apartments',
            'chatBot': true
          },
          {
            'path': '(:filterType-)hostels/:destination(/near-:landmark)',
            'hotelType': 'hostels',
            'chatBot': true
          },
          {
            'path': '(:filterType-)villas/:destination(/near-:landmark)',
            'hotelType': 'villas',
            'chatBot': true
          },
          {
            'path': '(:filterType-)hotels-and-resorts/:destination(/near-:landmark)',
            'hotelType': 'hotels-and-resorts',
            'chatBot': true
          },
          {
            'path': '(:filterType-)home-stays/:destination(/near-:landmark)',
            'hotelType': 'home-stays',
            'chatBot': true
          },
          {
            'path': '(:filterType-)cottages/:destination(/near-:landmark)',
            'hotelType': 'cottages',
            'chatBot': true
          },
          {
            'path': 'wvchatbot',
            'noChatBotPopup': true
          },
          {
            'path': '/page-not-found'
          },
          {
            'childRoutes': [
              {
                'from': '*',
                'to': '/page-not-found',
                'path': '*'
              }
            ]
          }
        ]
      },
      {
        'path': '*-places',
        'chatBot': true,
        'pageType': 'category'
      }
    ]
  },
  'routeParams': {
    'splat': 'Honeymoon'
  },
  'routes': [
    {
      'path': '/',
      'indexRoute': {
        'chatBot': true
      },
      'childRoutes': [
        {
          'childRoutes': [
            {
              'path': 'users/sign_in',
              'chatBot': true,
              'type': 'login',
              'noChatBotPopup': true
            },
            {
              'path': 'users/sign_up',
              'chatBot': true,
              'type': 'signUp',
              'noChatBotPopup': true
            }
          ]
        },
        {
          'noChatBotPopup': true,
          'childRoutes': [
            {
              'path': '/requested_trips/:requestedTripId/quotes/:quoteid',
              'topBarOnly': true
            },
            {
              'path': '/requested_trips/:requestedTripId/quotes/:quoteid/itinerary',
              'topBarOnly': true
            }
          ]
        },
        {
          'path': '(:listingType-)tour-packages(/:destination)',
          'chatBot': true,
          'category': 'tour',
          'packageType': 'seo'
        },
        {
          'path': '(:listingType-)honeymoon-packages(/:destination)',
          'chatBot': true,
          'category': 'honeymoon',
          'packageType': 'seo'
        },
        {
          'path': '(:listingType-)family-packages(/:destination)',
          'chatBot': true,
          'category': 'family',
          'packageType': 'seo'
        },
        {
          'path': '(:listingType-)friends-packages(/:destination)',
          'chatBot': true,
          'category': 'friends',
          'packageType': 'seo'
        },
        {
          'path': 'seasonal-packages',
          'chatBot': true,
          'category': 'seasonal',
          'displayCategory': 'Seasonal',
          'packageType': 'seasonal'
        },
        {
          'path': 'places-near/:destination',
          'chatBot': true,
          'pageType': 'weekend'
        },
        {
          'path': 'packages/:packageName',
          'chatBot': true
        },
        {
          'path': 'requestcallback'
        },
        {
          'path': 'requested_trips/new',
          'chatBot': true,
          'noChatBotPopup': true
        },
        {
          'path': 'requested_trips/:tripId/customize_new'
        },
        {
          'path': 'travel-to/:destination',
          'chatBot': true
        },
        {
          'path': 'users/password/new',
          'noChatBotPopup': true
        },
        {
          'path': 'comparepackages',
          'chatBot': true
        },
        {
          'path': '/(:destination)-tourism',
          'chatBot': true,
          'indexRoute': {
            'tab': 'overview',
            'chatBot': true
          },
          'childRoutes': [
            {
              'path': 'places-to-visit',
              'indexRoute': {
                'tab': 'places_to_visit'
              },
              'childRoutes': [
                {
                  'path': '(:scheme)',
                  'chatBot': true,
                  'indexRoute': {
                    'tab': 'overview',
                    'schemeType': 'PlacesToSee',
                    'chatBot': true
                  },
                  'childRoutes': [
                    {
                      'path': 'timings',
                      'tab': 'timings',
                      'schemeType': 'PlacesToSee',
                      'chatBot': true
                    },
                    {
                      'path': 'tips',
                      'tab': 'tips',
                      'schemeType': 'PlacesToSee',
                      'chatBot': true
                    },
                    {
                      'path': 'entry-fees',
                      'tab': 'entry_fees',
                      'schemeType': 'PlacesToSee',
                      'chatBot': true
                    },
                    {
                      'path': 'how-to-reach',
                      'tab': 'how_to_reach',
                      'schemeType': 'PlacesToSee',
                      'chatBot': true
                    }
                  ]
                }
              ]
            },
            {
              'path': 'things-to-do',
              'indexRoute': {
                'tab': 'things_to_do'
              },
              'childRoutes': [
                {
                  'path': '(:scheme)',
                  'indexRoute': {
                    'tab': 'overview',
                    'schemeType': 'ThingsToDo',
                    'chatBot': true
                  },
                  'childRoutes': [
                    {
                      'path': 'timings',
                      'tab': 'timings',
                      'schemeType': 'ThingsToDo',
                      'chatBot': true
                    },
                    {
                      'path': 'tips',
                      'tab': 'tips',
                      'schemeType': 'ThingsToDo',
                      'chatBot': true
                    },
                    {
                      'path': 'entry-fees',
                      'tab': 'entry_fees',
                      'schemeType': 'ThingsToDo',
                      'chatBot': true
                    },
                    {
                      'path': 'how-to-reach',
                      'tab': 'how_to_reach',
                      'schemeType': 'ThingsToDo',
                      'chatBot': true
                    }
                  ]
                }
              ]
            },
            {
              'path': 'essential-info',
              'tab': 'essential_info',
              'chatBot': true
            },
            {
              'path': 'how-to-reach',
              'tab': 'how_to_reach',
              'chatBot': true
            },
            {
              'path': 'best-time-to-visit',
              'tab': 'best_time_to_visit',
              'chatBot': true
            },
            {
              'path': 'how-to-reach-from-(:from)',
              'tab': 'how_to_reach',
              'chatBot': true
            },
            {
              'path': 'experience/:category',
              'schemeType': 'ActivityType',
              'experience': true
            },
            {
              'path': '(:city)',
              'indexRoute': {
                'tab': 'overview',
                'chatBot': true
              },
              'childRoutes': [
                {
                  'path': 'places-to-visit',
                  'indexRoute': {
                    'tab': 'places_to_visit'
                  },
                  'childRoutes': [
                    {
                      'path': '(:scheme)',
                      'indexRoute': {
                        'tab': 'overview',
                        'schemeType': 'PlacesToSee'
                      },
                      'childRoutes': [
                        {
                          'path': 'timings',
                          'tab': 'timings',
                          'schemeType': 'PlacesToSee'
                        },
                        {
                          'path': 'tips',
                          'tab': 'tips',
                          'schemeType': 'PlacesToSee'
                        },
                        {
                          'path': 'entry-fees',
                          'tab': 'entry_fees',
                          'schemeType': 'PlacesToSee'
                        },
                        {
                          'path': 'how-to-reach',
                          'tab': 'how_to_reach',
                          'schemeType': 'PlacesToSee'
                        }
                      ]
                    }
                  ]
                },
                {
                  'path': 'things-to-do',
                  'indexRoute': {
                    'tab': 'things_to_do'
                  },
                  'childRoutes': [
                    {
                      'path': '(:scheme)',
                      'indexRoute': {
                        'tab': 'overview',
                        'schemeType': 'ThingsToDo'
                      },
                      'childRoutes': [
                        {
                          'path': 'timings',
                          'tab': 'timings',
                          'schemeType': 'ThingsToDo'
                        },
                        {
                          'path': 'tips',
                          'tab': 'tips',
                          'schemeType': 'ThingsToDo'
                        },
                        {
                          'path': 'entry-fees',
                          'tab': 'entry_fees',
                          'schemeType': 'ThingsToDo'
                        },
                        {
                          'path': 'how-to-reach',
                          'tab': 'how_to_reach',
                          'schemeType': 'ThingsToDo'
                        }
                      ]
                    }
                  ]
                },
                {
                  'path': 'essential-info',
                  'tab': 'essential_info',
                  'chatBot': true
                },
                {
                  'path': 'how-to-reach',
                  'tab': 'how_to_reach',
                  'chatBot': true
                },
                {
                  'path': 'best-time-to-visit',
                  'tab': 'best_time_to_visit',
                  'chatBot': true
                },
                {
                  'path': 'how-to-reach-from-(:from)',
                  'tab': 'how_to_reach',
                  'chatBot': true
                },
                {
                  'path': 'experience/:category',
                  'experience': true,
                  'schemeType': 'ActivityType',
                  'chatBot': true
                }
              ]
            },
            {
              'from': '*',
              'to': '/(:destination)-tourism',
              'chatBot': true,
              'path': '*'
            }
          ]
        },
        {
          'path': '/aboutus'
        },
        {
          'path': '/team'
        },
        {
          'path': '/tnc'
        },
        {
          'path': '/privacy'
        },
        {
          'path': '/cancellation'
        },
        {
          'path': 'contact_us'
        },
        {
          'path': '*-places',
          'chatBot': true,
          'pageType': 'category'
        },
        {
          'path': '*-Places',
          'chatBot': true,
          'pageType': 'category'
        },
        {
          'path': 'search_results'
        },
        {
          'path': 'hotel/:hotelName',
          'chatBot': true
        },
        {
          'path': '(:filterType-)guest-houses/:destination(/near-:landmark)',
          'hotelType': 'guest-houses',
          'chatBot': true
        },
        {
          'path': '(:filterType-)hotels/:destination(/near-:landmark)',
          'hotelType': 'hotels',
          'chatBot': true
        },
        {
          'path': '(:filterType-)resorts/:destination(/near-:landmark)',
          'hotelType': 'resorts',
          'chatBot': true
        },
        {
          'path': '(:filterType-)apartments/:destination(/near-:landmark)',
          'hotelType': 'apartments',
          'chatBot': true
        },
        {
          'path': '(:filterType-)hostels/:destination(/near-:landmark)',
          'hotelType': 'hostels',
          'chatBot': true
        },
        {
          'path': '(:filterType-)villas/:destination(/near-:landmark)',
          'hotelType': 'villas',
          'chatBot': true
        },
        {
          'path': '(:filterType-)hotels-and-resorts/:destination(/near-:landmark)',
          'hotelType': 'hotels-and-resorts',
          'chatBot': true
        },
        {
          'path': '(:filterType-)home-stays/:destination(/near-:landmark)',
          'hotelType': 'home-stays',
          'chatBot': true
        },
        {
          'path': '(:filterType-)cottages/:destination(/near-:landmark)',
          'hotelType': 'cottages',
          'chatBot': true
        },
        {
          'path': 'wvchatbot',
          'noChatBotPopup': true
        },
        {
          'path': '/page-not-found'
        },
        {
          'childRoutes': [
            {
              'from': '*',
              'to': '/page-not-found',
              'path': '*'
            }
          ]
        }
      ]
    },
    {
      'path': '*-places',
      'chatBot': true,
      'pageType': 'category'
    }
  ],
  'children': null,
  'destinationList': [
    {
      'id': 56,
      'bestTimeToVisit': [
        '10',
        '3'
      ],
      'name': 'Kerala',
      'budget': '7,000',
      'maxDays': 8,
      'minDays': 5,
      'activityLabels': [
        {
          'id': 7015,
          'name': 'Temple'
        },
        {
          'id': 6990,
          'name': 'Resort'
        },
        {
          'id': 6965,
          'name': 'Houseboat'
        }
      ],
      'imagePath': 'https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg?tr=,w-630',
      'imagekitUrl': 'https://img.traveltriangle.com/stage/attachments/destinations/56/original/kerala.jpg',
      'flightsIncluded': false,
      'numberOfTravelers': 23669,
      'numberOfPackages': 49
    }
  ],
  'filters': {
    '36': {
      'title': 'Destination Type',
      'paramsName': 'destination_type',
      'displayType': 'Checkbox',
      'id': 36,
      'options': [
        {
          'id': 1,
          'title': 'Indian',
          'value': 'domestic'
        },
        {
          'id': 2,
          'title': 'International',
          'value': 'international'
        }
      ]
    },
    '37': {
      'title': 'Activities',
      'paramsName': 'activity',
      'displayType': 'Checkbox',
      'id': 37,
      'options': [
        {
          'id': 1,
          'title': 'Nature',
          'value': '11'
        },
        {
          'id': 2,
          'title': 'Beach',
          'value': '4'
        },
        {
          'id': 3,
          'title': 'Water Activities',
          'value': '16'
        },
        {
          'id': 4,
          'title': 'City Tours',
          'value': '1'
        },
        {
          'id': 5,
          'title': 'Self Drive',
          'value': '14'
        }
      ]
    },
    '38': {
      'title': 'Budget in Rs',
      'paramsName': 'price_ranges',
      'displayType': 'Checkbox',
      'id': 38,
      'options': [
        {
          'id': 1,
          'title': 'Less than 10,000',
          'value': '0-10000'
        },
        {
          'id': 2,
          'title': '10,000-20,000',
          'value': '10000-20000'
        },
        {
          'id': 3,
          'title': '20,000-40,000',
          'value': '20000-40000'
        },
        {
          'id': 4,
          'title': '40,000-60,000',
          'value': '40000-60000'
        },
        {
          'id': 5,
          'title': '60,000-80,000',
          'value': '60000-80000'
        },
        {
          'id': 6,
          'title': 'Above 80,000',
          'value': '80000-200000'
        }
      ]
    },
    '39': {
      'title': 'Duration (in Days)',
      'paramsName': 'days',
      'displayType': 'Checkbox',
      'id': 39,
      'options': [
        {
          'id': 1,
          'title': '1 to 3',
          'value': '1-3'
        },
        {
          'id': 2,
          'title': '4 to 6',
          'value': '4-6'
        },
        {
          'id': 3,
          'title': '7 to 9',
          'value': '7-9'
        },
        {
          'id': 4,
          'title': '10 to 12',
          'value': '10-12'
        },
        {
          'id': 5,
          'title': '13 or more',
          'value': '13-20'
        }
      ]
    },
    '40': {
      'title': 'Month of Travel',
      'paramsName': 'months',
      'displayType': 'Checkbox',
      'id': 40,
      'options': [
        {
          'id': 1,
          'title': 'Jan-Mar',
          'value': '1-3'
        },
        {
          'id': 2,
          'title': 'Apr-Jun',
          'value': '4-6'
        },
        {
          'id': 3,
          'title': 'Jul-Sep',
          'value': '7-9'
        },
        {
          'id': 4,
          'title': 'Oct-Dec',
          'value': '10-12'
        }
      ]
    }
  },
  'selectedFilters': {
    '36': {
      '1': true,
      '2': true
    }
  },
  'sortBy': {
    'paramsName': 'sort_by',
    'options': {
      'relevence_asc': 'Popularity',
      'price_asc': 'Price: Low to High',
      'price_desc': 'Price: High to Low'
    },
    'selected': 'relevence_asc'
  },
  'destinationsToDisplay': 10,
  'selectedItem': 'honeymoon',
  'selectionList': {
    'tripTypes': {
      'all': {
        'name': 'All',
        'url': '/All-Places'
      },
      'romantic': {
        'name': 'Romantic',
        'url': '/Romantic-Places'
      },
      'honeymoon': {
        'name': 'Honeymoon',
        'url': '/Honeymoon-Places'
      },
      'adventure': {
        'name': 'Adventure',
        'url': '/Adventure-Places'
      },
      'family': {
        'name': 'Family',
        'url': '/Family-Places'
      },
      'nature': {
        'name': 'Nature',
        'url': '/Nature-Places'
      },
      'wildlife': {
        'name': 'Wildlife',
        'url': '/Wildlife-Places'
      },
      'friends': {
        'name': 'Friends / Group',
        'url': '/Friends-Places'
      },
      'waterActivities': {
        'name': 'Water Activities',
        'url': '/Water%20Activities-Places'
      }
    },
    'weekends': {
      'Agra': {
        'name': 'From Agra',
        'url': '/places-near/Agra'
      },
      'Chandigarh': {
        'name': 'From Chandigarh',
        'url': '/places-near/Chandigarh'
      },
      'Jammu': {
        'name': 'From Jammu',
        'url': '/places-near/Jammu'
      },
      'Delhi': {
        'name': 'From Delhi',
        'url': '/places-near/Delhi'
      },
      'Jaipur': {
        'name': 'From Jaipur',
        'url': '/places-near/Jaipur'
      },
      'Dehradun': {
        'name': 'From Dehradun',
        'url': '/places-near/Dehradun'
      },
      'Mysore': {
        'name': 'From Mysore',
        'url': '/places-near/Mysore'
      },
      'Mumbai': {
        'name': 'From Mumbai',
        'url': '/places-near/Mumbai'
      },
      'Pune': {
        'name': 'From Pune',
        'url': '/places-near/Pune'
      },
      'Bangalore': {
        'name': 'From Bangalore',
        'url': '/places-near/Bangalore'
      },
      'Tirupati': {
        'name': 'From Tirupati',
        'url': '/places-near/Tirupati'
      },
      'Mangalore': {
        'name': 'From Mangalore',
        'url': '/places-near/Mangalore'
      },
      'Chennai': {
        'name': 'From Chennai',
        'url': '/places-near/Chennai'
      },
      'Kolkata': {
        'name': 'From Kolkata',
        'url': '/places-near/Kolkata'
      },
      'Ahmedabad': {
        'name': 'From Ahmedabad',
        'url': '/places-near/Ahmedabad'
      },
      'Baroda': {
        'name': 'From Baroda',
        'url': '/places-near/Baroda'
      },
      'Bhopal': {
        'name': 'From Bhopal',
        'url': '/places-near/Bhopal'
      },
      'Indore': {
        'name': 'From Indore',
        'url': '/places-near/Indore'
      },
      'Lucknow': {
        'name': 'From Lucknow',
        'url': '/places-near/Lucknow'
      },
      'Nagpur': {
        'name': 'From Nagpur',
        'url': '/places-near/Nagpur'
      }
    }
  },
  'category': 'Honeymoon',
  'weekendDestination': '',
  'count': 132,
  'weekendFromDestination': 'Delhi',
  'isBadWeekendFilter': true,
  'htmlTags': [],
  listOpened: jest.fn(),
  updateSelectedItem: jest.fn(),
  fetchDestinationList: jest.fn(),
  loadMoreDestinations: jest.fn(),
  trackLeadFunnelClick: jest.fn(),
  trackCategoryClick: jest.fn(),
  selectedFilterCount: jest.fn(),
  loadMorePackages: jest.fn(),
  trackWeekendClicked: jest.fn(),
  filterSelected: mockFilterSelected,
  setDefaultSelectedFilters: jest.fn(),
  resetDefaultFilters: jest.fn()
};

const createDestinationListingShallowWrapper = (props) =>
  shallow(<DestinationListing {...props} store={createStubStore()}/>, { disableLifecycleMethods: true });

describe('DestinationListing test suit', () => {

  let props = {...DEFAULT_PROPS};

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default title tag with value Travel Triangle', () => {
    props.pageType = '';
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(wrapper.find('title').text()).toEqual('Travel Triangle');
  });

  it('should render title tag with value from api', () => {
    const destinationProps = { ...props, htmlTags: [
      {
        'id': 4939,
        'keyword': 'Title',
        'value': 'Best 131 Wildlife Places in & outside India | wildlife in India - Travel Triangle'
      }
    ] };
    props.pageType = '';
    props = destinationProps;
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(wrapper.find('title').text()).toEqual('Best 131 Wildlife Places in & outside India | wildlife in India - Travel Triangle');
  });

  it('should render description tag with value from api', () => {
    props.pageType = '';
    const destinationProps = { ...props, htmlTags: [
      {
        'id': 4939,
        'keyword': 'Title',
        'value': 'Best 131 Wildlife Places in & outside India | wildlife in India - Travel Triangle'
      },
      {
        'id': 4942,
        'keyword': 'Description',
        'value': 'Best honeymoon places within & outside India. Select yours from best honeymoon destinations as per your duration, things to do & budget for a remarkable holiday.'
      }
    ] };
    props = destinationProps;
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(wrapper.find('meta[name="Description"]').props().content).toEqual('Best honeymoon places within & outside India. Select yours from best honeymoon destinations as per your duration, things to do & budget for a remarkable holiday.');
  });

});

describe('checks if parseRouteParams works as expected', () => {
  let props = {...DEFAULT_PROPS};

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('sets destination type filters to india and international', () => {
    expect(mockFilterSelected).toHaveBeenCalledWith(36, { 1: true, 2: true });
  });

  it('sets destination type filters to international if query param is_international is true', () => {
    props.location = {...props.location,
      query: {
        ...props.location.query,
        is_international: 'true'
      }
    };
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(mockFilterSelected).toHaveBeenCalledWith(36, { 2: true });
  });

  it('sets destination type filters to india if query param is_international is false', () => {
    props.location = {...props.location,
      query: {
        ...props.location.query,
        is_international: 'false'
      }
    };
    const wrapper = createDestinationListingShallowWrapper(props);
    expect(mockFilterSelected).toHaveBeenCalledWith(36, { 1: true });
  });

});


