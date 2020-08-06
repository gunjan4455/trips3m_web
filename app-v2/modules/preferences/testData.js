export const preferences = {
  id: 4982978,
  tripDays: 7,
  toLoc: 'Singapore',
  firstDestinationName: 'Singapore',
  startDate: '2019-08-19',
  quotesCount: 3,
  bookingStatusLabel: 'Active',
  exclusivePreferencesValues: {
    cabs: 'Included',
    flights: 'Excluded',
    hotels: '3 Star'
  },
  budget: '33500..33500',
  fromLoc: 'Chennai',
  info: '',
  adult: 4,
  status: 'Active',
  child: 0,
  tripStage: 3,
  currency: 'Rupee',
  phoneNo: '+919498297800',
  opDetails: {
    id: 2266874,
    name: 'Rohini Lama',
    phoneNo: null,
    email: 'UserEmail_2266874@gmail.com',
    image: '/pics/original/missing.png',
    initials: 'R'
  },
  travelerDetails: {
    id: 1451193,
    name: '',
    phoneNo: null,
    email: 'UserEmail_1451193@gmail.com',
    image: '/pics/original/missing.png',
    initials: 'U',
    tripForRedirection: 4982978
  },
  destinationsList: [
    {
      destinationType: 'International',
      id: 60,
      name: 'Singapore'
    }
  ],
  nights: 6,
  alternatePhoneNo: {
    isd: '',
    phoneNo: ''
  },
  alternateEmail: 'UserEmail_1451193@gmail.com',
  primaryPhoneNo: {
    isd: '+91',
    phoneNo: '9498297800'
  },
  tripEmail: 'UserEmail_1451193@gmail.com',
  'isPast?': false,
  quoteIds: [
    8951054,
    8948605,
    8922343
  ],
  tripFeedback: {},
  dneState: 'Enabled',
  noQuotesMsg: null,
  preferencesData: {
    hotelBudgets: {
      '2Star': [
        {
          minPrice: 31000,
          maxPrice: 35000
        },
        {
          minPrice: 35000,
          maxPrice: 38000
        },
        {
          minPrice: 38000,
          maxPrice: 42000
        }
      ],
      '3Star': [
        {
          minPrice: 41000,
          maxPrice: 43000
        },
        {
          minPrice: 43000,
          maxPrice: 46000
        },
        {
          minPrice: 46000,
          maxPrice: 49000
        }
      ],
      '4Star': [
        {
          minPrice: 49000,
          maxPrice: 55000
        },
        {
          minPrice: 55000,
          maxPrice: 63000
        },
        {
          minPrice: 63000,
          maxPrice: 70000
        }
      ],
      '5Star': [
        {
          minPrice: 70000,
          maxPrice: 91000
        },
        {
          minPrice: 91000,
          maxPrice: 110000
        },
        {
          minPrice: 110000,
          maxPrice: 120000
        }
      ]
    },
    flightBudget: {
      flightPrice: 20500
    },
    customizations: [
      {
        id: 7,
        qtype: 'traveler_age',
        sequence: 1,
        destinationId: null,
        isGeneric: true,
        title: 'Age of Children',
        description: 'Please let us know age of children',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 29,
            name: '0-2 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 30,
            name: '2-5 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 31,
            name: '5-12 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          }
        ]
      },
      {
        id: 43,
        qtype: 'cities',
        sequence: 1,
        destinationId: 56,
        isGeneric: true,
        title: 'I will book',
        description: '',
        visibleToAgent: false,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 202,
            name: 'in next 2-3 days',
            description: 'in next 2-3 days',
            url: '',
            misc: ''
          },
          {
            id: 203,
            name: 'in this week',
            description: 'in this week',
            url: '',
            misc: ''
          },
          {
            id: 204,
            name: 'in this month',
            description: 'in this month',
            url: '',
            misc: ''
          },
          {
            id: 205,
            name: 'later sometime',
            description: 'later sometime',
            url: '',
            misc: ''
          },
          {
            id: 256,
            name: 'just checking price',
            description: 'checking package & price',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 22,
        qtype: 'boolean_headings',
        sequence: 2,
        destinationId: null,
        isGeneric: true,
        title: 'Hotel Accommodation?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 95,
            name: 'Yes',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 96,
            name: 'No',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 2,
        qtype: 'hotels',
        sequence: 3,
        destinationId: null,
        isGeneric: true,
        title: 'Hotel category',
        description: 'Hotel category you would like to stay in',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'desktop',
        options: [
          {
            id: 6,
            name: '5 Star',
            description: 'The five-star hotels is the quintessential luxury hotel, offering thrills above and beyond the actual needs of the travel. They have restaurants and night spots that are world class, with food and entertainment that draw non-guests to sample it too.\r\nFive-star hotels also tend to have opulent and expensive decorations; fancy gyms, swimming pools and spas.',
            url: '',
            misc: ''
          },
          {
            id: 7,
            name: '4 Star',
            description: 'The four-star hotel is a good business hotel. Everything works smoothly, there\'s Internet in every room, a well-equipped business center.',
            url: '',
            misc: ''
          },
          {
            id: 8,
            name: '3 Star',
            description: 'Three-star hotels are good but with no frills. Your room will have an attached bathroom and there\'s probably a restaurant downstairs and 24-hour reception service.',
            url: '',
            misc: ''
          },
          {
            id: 32,
            name: '2 Star',
            description: 'Basic accommodation.',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 23,
        qtype: 'boolean_headings',
        sequence: 4,
        destinationId: null,
        isGeneric: true,
        title: 'Transport from home city?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 97,
            name: 'Yes',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 98,
            name: 'No',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 24,
        qtype: 'boolean_headings',
        sequence: 6,
        destinationId: null,
        isGeneric: true,
        title: 'Cab for local sightseeing?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 99,
            name: 'Yes',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 100,
            name: 'No',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 3,
        qtype: 'cabs',
        sequence: 7,
        destinationId: null,
        isGeneric: true,
        title: 'Cab services',
        description: 'Cabs are used for airport transfers to hotels and sightseeing.',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 10,
            name: 'AC Type',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 11,
            name: 'Size and Luxury',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 12,
            name: 'Driver speaks',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 89,
            name: 'Vehicle Type',
            description: '',
            url: '',
            misc: 'drop_down'
          }
        ]
      },
      {
        id: 71,
        qtype: 'cities',
        sequence: 7,
        destinationId: 60,
        isGeneric: false,
        title: 'Places to Visit',
        description: 'Would you like to include other experiences along with Singapore',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'none',
        options: [
          {
            id: 295,
            name: 'Singapore',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 296,
            name: 'Malaysia',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 297,
            name: 'Bali',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 298,
            name: 'Singapore Cruise',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 29,
        qtype: 'attractions',
        sequence: 11,
        destinationId: 60,
        isGeneric: false,
        title: 'Local Experiences',
        description: 'Additional local experiences that you may want to have',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'none',
        options: [
          {
            id: 113,
            name: 'Batam – Indonesia ',
            description: 'Several pubs, night clubs and bars keep Betam nightlife rocking and lively. Visiting community includes travellers and local expat who come to take pleasure in live music, KTV and waterfront city areas. ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/batam_indonesia.jpg',
            misc: ''
          },
          {
            id: 145,
            name: 'Singapore Cruise (Singapore - Panang)',
            description: 'Singapore sightseeing is incomplete without cruising fascinating destinations. The journey on a cruise takes you through a world where there is a marvellous blend of sun, culture, sea and golden beaches. ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/RCI_LG_Singapore-Large.jpg',
            misc: ''
          },
          {
            id: 146,
            name: 'Night Safari ',
            description: `'Stroll through the world's first night safari and meet with some amazing wonderments that you have never expected. Watch over 1000 animals in their natural habitat or marvel at exotic vegetation spread across 40 hectare park. '`,
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/small-lioness-IMG_5901.JPG',
            misc: ''
          }
        ]
      },
      {
        id: 169,
        qtype: 'other',
        sequence: 27,
        destinationId: null,
        isGeneric: true,
        title: 'Type of tour you want?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 504,
            name: 'Honeymoon',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 505,
            name: 'Family',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 506,
            name: 'Adventure',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 507,
            name: 'Offbeat',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 508,
            name: 'Wildlife',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 552,
            name: 'Religious',
            description: '',
            url: '',
            misc: 'user_input'
          }
        ]
      }
    ],
    childCustomizations: [
      {
        id: 7,
        sequence: 1,
        qtype: 'traveler_age',
        destinationId: null,
        isGeneric: true,
        title: 'Age of Children',
        description: 'Please let us know age of children',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 29,
            name: '0-2 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 30,
            name: '2-5 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 31,
            name: '5-12 yrs',
            description: '',
            url: '',
            misc: 'drop_down'
          }
        ]
      }
    ],
    hotelCategoryCustomizations: [
      {
        id: 2,
        sequence: 3,
        qtype: 'hotels',
        destinationId: null,
        isGeneric: true,
        title: 'Hotel category',
        description: 'Hotel category you would like to stay in',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'desktop',
        options: [
          {
            id: 6,
            name: '5 Star',
            description: 'The five-star hotels is the quintessential luxury hotel, offering thrills above and beyond the actual needs of the travel. They have restaurants and night spots that are world class, with food and entertainment that draw non-guests to sample it too.\r\nFive-star hotels also tend to have opulent and expensive decorations; fancy gyms, swimming pools and spas.',
            url: '',
            misc: ''
          },
          {
            id: 7,
            name: '4 Star',
            description: 'The four-star hotel is a good business hotel. Everything works smoothly, there\'s Internet in every room, a well-equipped business center.',
            url: '',
            misc: ''
          },
          {
            id: 8,
            name: '3 Star',
            description: 'Three-star hotels are good but with no frills. Your room will have an attached bathroom and there\'s probably a restaurant downstairs and 24-hour reception service.',
            url: '',
            misc: ''
          },
          {
            id: 32,
            name: '2 Star',
            description: 'Basic accommodation.',
            url: '',
            misc: ''
          }
        ]
      }
    ],
    multiValueCustomizations: [
      {
        id: 71,
        sequence: 7,
        qtype: 'cities',
        destinationId: 60,
        isGeneric: false,
        title: 'Places to Visit',
        description: 'Would you like to include other experiences along with Singapore',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'none',
        options: [
          {
            id: 295,
            name: 'Singapore',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 296,
            name: 'Malaysia',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 297,
            name: 'Bali',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 298,
            name: 'Singapore Cruise',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 29,
        sequence: 11,
        qtype: 'attractions',
        destinationId: 60,
        isGeneric: false,
        title: 'Local Experiences',
        description: 'Additional local experiences that you may want to have',
        visibleToAgent: true,
        valueType: 'multi_value',
        required: 'none',
        options: [
          {
            id: 113,
            name: 'Batam – Indonesia ',
            description: 'Several pubs, night clubs and bars keep Betam nightlife rocking and lively. Visiting community includes travellers and local expat who come to take pleasure in live music, KTV and waterfront city areas. ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/batam_indonesia.jpg',
            misc: ''
          },
          {
            id: 145,
            name: 'Singapore Cruise (Singapore - Panang)',
            description: 'Singapore sightseeing is incomplete without cruising fascinating destinations. The journey on a cruise takes you through a world where there is a marvellous blend of sun, culture, sea and golden beaches. ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/RCI_LG_Singapore-Large.jpg',
            misc: ''
          },
          {
            id: 146,
            name: 'Night Safari ',
            description: 'Stroll through the world s first night safari and meet with some amazing wonderments that you have never expected . Watch over 1000 animals in their natural habitat or marvel at exotic vegetation spread across 40 hectare park. ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/small-lioness-IMG_5901.JPG',
            misc:
              ''
          }
        ]
      }
    ],
    singleValueCustomizations: [
      {
        id: 43,
        sequence: 1,
        qtype: 'cities',
        destinationId: 56,
        isGeneric: true,
        title: 'I will book',
        description: '',
        visibleToAgent: false,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 202,
            name: 'in next 2-3 days',
            description: 'in next 2-3 days',
            url: '',
            misc: ''
          },
          {
            id: 203,
            name: 'in this week',
            description: 'in this week',
            url: '',
            misc: ''
          },
          {
            id: 204,
            name: 'in this month',
            description: 'in this month',
            url: '',
            misc: ''
          },
          {
            id: 205,
            name: 'later sometime',
            description: 'later sometime',
            url: '',
            misc: ''
          },
          {
            id: 256,
            name: 'just checking price',
            description: 'checking package & price',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 24,
        sequence: 6,
        qtype: 'boolean_headings',
        destinationId: null,
        isGeneric: true,
        title: 'Cab for local sightseeing?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 99,
            name: 'Yes',
            description: '',
            url: '',
            misc: ''
          },
          {
            id: 100,
            name: 'No',
            description: '',
            url: '',
            misc: ''
          }
        ]
      },
      {
        id: 3,
        sequence: 7,
        qtype: 'cabs',
        destinationId: null,
        isGeneric: true,
        title: 'Cab services',
        description: 'Cabs are used for airport transfers to hotels and sightseeing.',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 10,
            name: 'AC Type',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 11,
            name: 'Size and Luxury',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 12,
            name: 'Driver speaks',
            description: '',
            url: '',
            misc: 'drop_down'
          },
          {
            id: 89,
            name: 'Vehicle Type',
            description: '',
            url: '',
            misc: 'drop_down'
          }
        ]
      },
      {
        id: 169,
        sequence: 27,
        qtype: 'other',
        destinationId: null,
        isGeneric: true,
        title: 'Type of tour you want?',
        description: '',
        visibleToAgent: true,
        valueType: 'single_value',
        required: 'none',
        options: [
          {
            id: 504,
            name: 'Honeymoon',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 505,
            name: 'Family',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 506,
            name: 'Adventure',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 507,
            name: 'Offbeat',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 508,
            name: 'Wildlife',
            description: '',
            url: '',
            misc: 'user_input'
          },
          {
            id: 552,
            name: 'Religious',
            description: '',
            url: '',
            misc: 'user_input'
          }
        ]
      }
    ],
    eligibleAnswers:
      [
        {
          id: 26062526,
          userInput: null,
          optionId: 95
        },
        {
          id: 26062527,
          userInput: null,
          optionId: 98
        },
        {
          id: 26062528,
          userInput: null,
          optionId: 8
        },
        {
          id: 26062529,
          userInput: null,
          optionId: 204
        },
        {
          id: 26062530,
          userInput: null,
          optionId: 99
        }
      ]
  }
};
