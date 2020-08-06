import filter from './filter';
import {
  DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS,
  DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS,
  DEST_LISTING_RESET_DEFAULT_FILTERS,
  RESET_FILTERS,
  DEST_LISTING_SET_INITIAL_FILTERS
} from '../../actionConstants';

describe('destination listing reducer', () => {
  const initialState = {
    data: {
      36: {
        title: 'Destination Type',
        paramsName: 'destination_type',
        displayType: 'Checkbox',
        id: 36,
        options: [
          {
            id: 1,
            title: 'Indian',
            value: 'domestic',
          },
          {
            id: 2,
            title: 'International',
            value: 'international',
          },
        ]
      },
      37: {
        title: 'Activities',
        paramsName: 'activity',
        displayType: 'Checkbox',
        id: 37,
        options: [
          {
            id: 1,
            title: 'Nature',
            value: '11',
          },
          {
            id: 2,
            title: 'Beach',
            value: '4',
          },
          {
            id: 3,
            title: 'Water Activities',
            value: '16',
          },
          {
            id: 4,
            title: 'City Tours',
            value: '1',
          },
          {
            id: 5,
            title: 'Self Drive',
            value: '14',
          },
        ]
      },
      38: {
        title: 'Budget in Rs',
        paramsName: 'price_ranges',
        displayType: 'Checkbox',
        id: 38,
        options: [
          {
            id: 1,
            title: 'Less than 10,000',
            value: '0-10000',
          },
          {
            id: 2,
            title: '10,000-20,000',
            value: '10000-20000',
          },
          {
            id: 3,
            title: '20,000-40,000',
            value: '20000-40000',
          },
          {
            id: 4,
            title: '40,000-60,000',
            value: '40000-60000',
          },
          {
            id: 5,
            title: '60,000-80,000',
            value: '60000-80000',
          },
          {
            id: 6,
            title: 'Above 80,000',
            value: '80000-200000',
          },
        ]
      },
      39: {
        title: 'Duration (in Days)',
        paramsName: 'days',
        displayType: 'Checkbox',
        id: 39,
        options: [
          {
            id: 1,
            title: '1 to 3',
            value: '1-3',
          },
          {
            id: 2,
            title: '4 to 6',
            value: '4-6',
          },
          {
            id: 3,
            title: '7 to 9',
            value: '7-9',
          },
          {
            id: 4,
            title: '10 to 12',
            value: '10-12',
          },
          {
            id: 5,
            title: '13 or more',
            value: '13-20',
          },
        ]
      },
      40: {
        title: 'Month of Travel',
        paramsName: 'months',
        displayType: 'Checkbox',
        id: 40,
        options: [
          {
            id: 1,
            title: 'Jan-Mar',
            value: '1-3',
          },
          {
            id: 2,
            title: 'Apr-Jun',
            value: '4-6',
          },
          {
            id: 3,
            title: 'Jul-Sep',
            value: '7-9',
          },
          {
            id: 4,
            title: 'Oct-Dec',
            value: '10-12',
          },
        ]
      },
    }, // filters data
    // selected filters
    selected: {
      36: {
        1: true,
        2: true
      },
    },
    initialSelected: {
      36: {
        1: true,
        2: true
      },
    },
    defaultSelected: {
      36: {
        1: true,
        2: true
      }
    },
    // sort by options
    sortBy: {
      paramsName: 'sort_by',
      options: {
        relevence_asc: 'Popularity',
        price_asc: 'Price: Low to High',
        price_desc: 'Price: High to Low',
      },
      selected: 'relevence_asc'
    },
    isVisible: false, // whether filters view is visible or not
    loaded: false // whether filters data are loaded or not(so we dont dire an api call again)
  };

  it('initializes with default state', () => {
    expect(filter(initialState, {})).toEqual(initialState);
  });

  it('checks if `DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS` is working as expected', () => {
    const initialState = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '38': {
          '2': true,
          '3': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };

    const expectedData = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };
    expect(filter(initialState, { type: DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS }))
      .toEqual(expectedData);
  });

  it('checks if `DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS` is working as expected', () => {
    const initialState = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };
    const serverResponse = {
      key: '38',
      value: {
        1: true
      }
    };

    const expectedData = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
        '36': {'1': true, '2': true},
        '38': {'1': true}
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
      'isVisible': false,
      'loaded': false
    };
    expect(filter(initialState, { type: DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS, data: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `DEST_LISTING_RESET_DEFAULT_FILTERS` is working as expected', () => {
    const initialState = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };

    const expectedData = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {},
      'sortBy': {
        'paramsName': 'sort_by',
        'options': {
          'relevence_asc': 'Popularity',
          'price_asc': 'Price: Low to High',
          'price_desc': 'Price: High to Low'
        },
        'selected': 'relevence_asc'
      },
      'isVisible': false,
      'loaded': false
    };
    expect(filter(initialState, { type: DEST_LISTING_RESET_DEFAULT_FILTERS })).toEqual(expectedData);
  });

  it('checks if `RESET_FILTERS` is working as expected', () => {
    const initialState = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
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
      'isVisible': true,
      'loaded': false
    };

    const expectedData = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
        '36': {
          '1': true,
          '2': true
        },
        '37': {
          '4': true
        },
        '38': {
          '1': true
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
      'isVisible': true,
      'loaded': false
    };
    expect(filter(initialState, { type: RESET_FILTERS })).toEqual(expectedData);
  });

  it('checks if `DEST_LISTING_SET_INITIAL_FILTERS` is working as expected', () => {
    const initialState = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };
    const serverResponse = {
      'key': '36',
      'value': {
        '1': true,
        '2': true
      }
    };

    const expectedData = {
      'data': {
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
      'selected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'initialSelected': {
        '36': {
          '1': true,
          '2': true
        }
      },
      'defaultSelected': {
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
      'isVisible': false,
      'loaded': false
    };
    expect(filter(initialState, { type: DEST_LISTING_SET_INITIAL_FILTERS, data: serverResponse }))
      .toEqual(expectedData);
  });

});
