import {
  getTripPreferences,
  getOtherPreferencesOptions,
  getContactPreferences,
  getRequestPreferences,
  getCabRequiredPreference,
  getCabQuestionsPreference,
  getTripPrefInitialFormData,
  getEligibleAnswersObj,
  getDriverLanguage,
  isHotelRequired,
  getSelectedHotelIds,
  getFlightAnswerAttr
} from './helpers';
import { preferences } from './testData';

describe('helpers function', () => {

  it('should getTripPreferences function return proper value', () => {
    const expected_data = [
      {
        label: 'Hotel',
        value: '3 Star'
      },
      {
        label: 'Flight',
        value: 'Excluded'
      },
      {
        label: 'Budget Per Person',
        value: '33500..33500'
      },
      {
        label: 'Cabs',
        value: 'Included'
      },
      {
        label: 'I will book',
        value: 'in this month'
      },
      {
        label: 'Places to Visit',
        value: '-'
      },
      {
        label: 'Local Experiences',
        value: '-'
      },
      {
        label: 'Type of tour you want?',
        value: '-'
      },
      {
        label: 'Additional Preferences',
        value: '-'
      }
    ];

    expect(getTripPreferences(preferences)).toEqual(expected_data);

  });

  it('should getOtherPreferencesOptions function return proper value', () => {

    const expected_data = [
      {
        description: '',
        destinationId: 56,
        id: 43,
        isGeneric: true,
        options: [
          {
            description: 'in next 2-3 days',
            id: 202,
            misc: '',
            name: 'in next 2-3 days',
            url: ''
          },
          {
            description: 'in this week',
            id: 203,
            misc: '',
            name: 'in this week',
            url: ''
          },
          {
            description: 'in this month',
            id: 204,
            misc: '',
            name: 'in this month',
            url: ''
          },
          {
            description: 'later sometime',
            id: 205,
            misc: '',
            name: 'later sometime',
            url: ''
          },
          {
            description: 'checking package & price',
            id: 256,
            misc: '',
            name: 'just checking price',
            url: ''
          }
        ],
        qtype: 'cities',
        required: 'none',
        sequence: 1,
        title: 'I will book',
        valueType: 'single_value',
        visibleToAgent: false
      },
      {
        description: 'Would you like to include other experiences along with Singapore',
        destinationId: 60,
        id: 71,
        isGeneric: false,
        options: [
          {
            description: '',
            id: 295,
            misc: '',
            name: 'Singapore',
            url: ''
          },
          {
            description: '',
            id: 296,
            misc: '',
            name: 'Malaysia',
            url: ''
          },
          {
            description: '',
            id: 297,
            misc: '',
            name: 'Bali',
            url: ''
          },
          {
            description: '',
            id: 298,
            misc: '',
            name: 'Singapore Cruise',
            url: ''
          }
        ],
        qtype: 'cities',
        required: 'none',
        sequence: 7,
        title: 'Places to Visit',
        valueType: 'multi_value',
        visibleToAgent: true
      },
      {
        description: 'Additional local experiences that you may want to have',
        destinationId: 60,
        id: 29,
        isGeneric: false,
        options: [
          {
            description: 'Several pubs, night clubs and bars keep Betam nightlife rocking and lively. Visiting community includes travellers and local expat who come to take pleasure in live music, KTV and waterfront city areas. ',
            id: 113,
            misc: '',
            name: 'Batam – Indonesia ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/batam_indonesia.jpg'
          },
          {
            description: 'Singapore sightseeing is incomplete without cruising fascinating destinations. The journey on a cruise takes you through a world where there is a marvellous blend of sun, culture, sea and golden beaches. ',
            id: 145,
            misc: '',
            name: 'Singapore Cruise (Singapore - Panang)',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/RCI_LG_Singapore-Large.jpg'
          },
          {
            description: '\'Stroll through the world\'s first night safari and meet with some amazing wonderments that you have never expected. Watch over 1000 animals in their natural habitat or marvel at exotic vegetation spread across 40 hectare park. \'',
            id: 146,
            misc: '',
            name: 'Night Safari ',
            url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/small-lioness-IMG_5901.JPG'
          }
        ],
        qtype: 'attractions',
        required: 'none',
        sequence: 11,
        title: 'Local Experiences',
        valueType: 'multi_value',
        visibleToAgent: true
      },
      {
        description: '',
        destinationId: null,
        id: 169,
        isGeneric: true,
        options: [
          {
            description: '',
            id: 504,
            misc: 'user_input',
            name: 'Honeymoon',
            url: ''
          },
          {
            description: '',
            id: 505,
            misc: 'user_input',
            name: 'Family',
            url: ''
          },
          {
            description: '',
            id: 506,
            misc: 'user_input',
            name: 'Adventure',
            url: ''
          },
          {
            description: '',
            id: 507,
            misc: 'user_input',
            name: 'Offbeat',
            url: ''
          },
          {
            description: '',
            id: 508,
            misc: 'user_input',
            name: 'Wildlife',
            url: ''
          },
          {
            description: '',
            id: 552,
            misc: 'user_input',
            name: 'Religious',
            url: ''
          }
        ],
        qtype: 'other',
        required: 'none',
        sequence: 27,
        title: 'Type of tour you want?',
        valueType: 'single_value',
        visibleToAgent: true
      }
    ];
    expect(getOtherPreferencesOptions(preferences)).toEqual(expected_data);
  });

  it('should getContactPreferences function return proper value', () => {
    const expected = {
      email: 'UserEmail_1451193@gmail.com',
      isdCode: '+91',
      phoneNo: '9498297800'
    };
    expect(getContactPreferences(preferences)).toEqual(expected);
  });

  it('should getRequestPreferences function return proper value', () => {
    const expected_data = {
      adults: 4,
      children: 0,
      days: 7,
      departureCity: 'Chennai',
      departureDate: '2019-08-19',
      destination: 'Singapore',
      nights: 6,
      tripDays: 7,
      tripStage: 3
    };

    expect(getRequestPreferences(preferences)).toEqual(expected_data);
  });

  it('should getCabRequiredPreference function return proper value', () => {
    const expected_data = {
      description: '',
      destinationId: null,
      id: 24,
      isGeneric: true,
      options: [
        {
          description: '',
          id: 99,
          misc: '',
          name: 'Yes',
          url: ''
        },
        {
          description: '',
          id: 100,
          misc: '',
          name: 'No',
          url: ''
        }
      ],
      qtype: 'boolean_headings',
      required: 'none',
      sequence: 6,
      title: 'Cab for local sightseeing?',
      valueType: 'single_value',
      visibleToAgent: true
    };

    expect(getCabRequiredPreference(preferences.preferencesData.customizations)).toEqual(expected_data);
  });

  it('should getCabQuestionsPreference function return proper value', () => {
    const expected_data = {
      description: 'Cabs are used for airport transfers to hotels and sightseeing.',
      destinationId: null,
      id: 3,
      isGeneric: true,
      options: [
        {
          description: '',
          id: 10,
          misc: 'drop_down',
          name: 'AC Type',
          url: ''
        },
        {
          description: '',
          id: 11,
          misc: 'drop_down',
          name: 'Size and Luxury',
          url: ''
        },
        {
          description: '',
          id: 12,
          misc: 'drop_down',
          name: 'Driver speaks',
          url: ''
        },
        {
          description: '',
          id: 89,
          misc: 'drop_down',
          name: 'Vehicle Type',
          url: ''
        }
      ],
      qtype: 'cabs',
      required: 'none',
      sequence: 7,
      title: 'Cab services',
      valueType: 'single_value',
      visibleToAgent: true
    };

    expect(getCabQuestionsPreference(preferences.preferencesData.customizations)).toEqual(expected_data);
  });

  it('should getEligibleAnswersObj function return proper value', () => {
    const expected_data = {
      '8': 26062528,
      '95': 26062526,
      '98': 26062527,
      '99': 26062530,
      '204': 26062529
    };
    expect(getEligibleAnswersObj(preferences.preferencesData.eligibleAnswers)).toEqual(expected_data);
  });

  it('should isHotelRequired function return proper value', () => {
    expect(isHotelRequired(
      preferences.preferencesData.customizations,
      getEligibleAnswersObj(preferences.preferencesData.eligibleAnswers)
    )).toEqual(true);
  });

  it('should getSelectedHotelIds function return proper value', () => {
    const expected_data = {
      '6': false,
      '7': false,
      '8': true,
      '32': false
    };
    expect(getSelectedHotelIds(preferences.preferencesData.customizations, preferences.preferencesData.eligibleAnswers))
      .toEqual(expected_data);
  });

  it('should getFlightAnswerAttr function return proper value', () => {
    const expected_data = {
      customizationId: 23,
      id: 26062527,
      optionId: '98'
    };
    expect(getFlightAnswerAttr(preferences.preferencesData.customizations, preferences.preferencesData.eligibleAnswers))
      .toEqual(expected_data);
  });

  it('should getTripPrefInitialFormData function return proper value', () => {
    const expected_data = {
      budget: '33500..33500',
      driverSpeaks: undefined,
      flightAnswerAttributes: {
        customizationId: 23,
        id: 26062527,
        optionId: '98'
      },
      hotelCategories: {
        '6': false,
        '7': false,
        '8': true,
        '32': false,
        '96': false
      },
      info: '',
      multiValueOptions: {
        '29': {
          optionId: {
            '113': undefined,
            '145': undefined,
            '146': undefined
          }
        },
        '71': {
          optionId: {
            '295': undefined,
            '296': undefined,
            '297': undefined,
            '298': undefined
          }
        }
      },
      otherPreferences: [
        {
          description: '',
          destinationId: 56,
          id: 43,
          isGeneric: true,
          options: [
            {
              description: 'in next 2-3 days',
              id: 202,
              misc: '',
              name: 'in next 2-3 days',
              url: ''
            },
            {
              description: 'in this week',
              id: 203,
              misc: '',
              name: 'in this week',
              url: ''
            },
            {
              description: 'in this month',
              id: 204,
              misc: '',
              name: 'in this month',
              url: ''
            },
            {
              description: 'later sometime',
              id: 205,
              misc: '',
              name: 'later sometime',
              url: ''
            },
            {
              description: 'checking package & price',
              id: 256,
              misc: '',
              name: 'just checking price',
              url: ''
            }
          ],
          qtype: 'cities',
          required: 'none',
          sequence: 1,
          title: 'I will book',
          valueType: 'single_value',
          visibleToAgent: false
        },
        {
          description: 'Would you like to include other experiences along with Singapore',
          destinationId: 60,
          id: 71,
          isGeneric: false,
          options: [
            {
              description: '',
              id: 295,
              misc: '',
              name: 'Singapore',
              url: ''
            },
            {
              description: '',
              id: 296,
              misc: '',
              name: 'Malaysia',
              url: ''
            },
            {
              description: '',
              id: 297,
              misc: '',
              name: 'Bali',
              url: ''
            },
            {
              description: '',
              id: 298,
              misc: '',
              name: 'Singapore Cruise',
              url: ''
            }
          ],
          qtype: 'cities',
          required: 'none',
          sequence: 7,
          title: 'Places to Visit',
          valueType: 'multi_value',
          visibleToAgent: true
        },
        {
          description: 'Additional local experiences that you may want to have',
          destinationId: 60,
          id: 29,
          isGeneric: false,
          options: [
            {
              description: 'Several pubs, night clubs and bars keep Betam nightlife rocking and lively. Visiting community includes travellers and local expat who come to take pleasure in live music, KTV and waterfront city areas. ',
              id: 113,
              misc: '',
              name: 'Batam – Indonesia ',
              url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/batam_indonesia.jpg'
            },
            {
              description: 'Singapore sightseeing is incomplete without cruising fascinating destinations. The journey on a cruise takes you through a world where there is a marvellous blend of sun, culture, sea and golden beaches. ',
              id: 145,
              misc: '',
              name: 'Singapore Cruise (Singapore - Panang)',
              url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/RCI_LG_Singapore-Large.jpg'
            },
            {
              description: '\'Stroll through the world\'s first night safari and meet with some amazing wonderments that you have never expected. Watch over 1000 animals in their natural habitat or marvel at exotic vegetation spread across 40 hectare park. \'',
              id: 146,
              misc: '',
              name: 'Night Safari ',
              url: 'http://traveltriangle-documents.s3.amazonaws.com/picfiles/images/cities/Singapore/small-lioness-IMG_5901.JPG'
            }
          ],
          qtype: 'attractions',
          required: 'none',
          sequence: 11,
          title: 'Local Experiences',
          valueType: 'multi_value',
          visibleToAgent: true
        },
        {
          description: '',
          destinationId: null,
          id: 169,
          isGeneric: true,
          options: [
            {
              description: '',
              id: 504,
              misc: 'user_input',
              name: 'Honeymoon',
              url: ''
            },
            {
              description: '',
              id: 505,
              misc: 'user_input',
              name: 'Family',
              url: ''
            },
            {
              description: '',
              id: 506,
              misc: 'user_input',
              name: 'Adventure',
              url: ''
            },
            {
              description: '',
              id: 507,
              misc: 'user_input',
              name: 'Offbeat',
              url: ''
            },
            {
              description: '',
              id: 508,
              misc: 'user_input',
              name: 'Wildlife',
              url: ''
            },
            {
              description: '',
              id: 552,
              misc: 'user_input',
              name: 'Religious',
              url: ''
            }
          ],
          qtype: 'other',
          required: 'none',
          sequence: 27,
          title: 'Type of tour you want?',
          valueType: 'single_value',
          visibleToAgent: true
        }
      ],
      singleValueOptions: {
        '3': {
          optionId: ''
        },
        '24': {
          optionId: '99'
        },
        '43': {
          optionId: '204'
        },
        '169': {
          optionId: ''
        }
      }
    };
    expect(getTripPrefInitialFormData(preferences)).toEqual(expected_data);
  });

  it('should getDriverLanguage function return proper value', () => {
    const single = {
      '24': { optionId: '99' },
      '43': { optionId: '204' },
      '169': { optionId: '' },
    };
    expect(getDriverLanguage(preferences.preferencesData.customizations, single, preferences.preferencesData.eligibleAnswers, getEligibleAnswersObj(preferences.preferencesData.eligibleAnswers))).toEqual(undefined);
  });

});