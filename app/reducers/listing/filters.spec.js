import filters, {
  setListingFiltersCategory, getListingFilterCategory, CATEGORY_FILTER_HONEYMOON,
  CATEGORY_FILTER_FRIENDS, CATEGORY_FILTER_FAMILY, setDefaultSelectedFilters, setInitialFilters, setDefaultFilters,
  resetDefaultFilters
} from './filters';
import {
  RESET_SELECTED_TO_DEFAULT_FILTERS, RESET_FILTERS, RESET_DEFAULT_FILTERS, SET_DEFAULT_SELECTED_FILTERS,
  SET_INITIAL_FILTERS, SET_LISTING_FILTERS_CATEGORY
} from '../../actionConstants';

describe('listing filters reducer', () => {

  it('checks if `RESET_FILTERS` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": true,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": true,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: RESET_FILTERS })).toEqual(expectedData);
  });

  it('checks if `RESET_SELECTED_TO_DEFAULT_FILTERS` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: RESET_SELECTED_TO_DEFAULT_FILTERS }))
      .toEqual(expectedData);
  });

  it('checks if `RESET_DEFAULT_FILTERS` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "3": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "3": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {},
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: RESET_DEFAULT_FILTERS })).toEqual(expectedData);
  });

  it('checks if `SET_DEFAULT_SELECTED_FILTERS` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "3": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {},
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    const serverResponse = {
      "key": "36",
      "value": {
        "1": false,
        "2": false,
        "3": false
      }
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        },
        "38": {
          "1": true,
          "3": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: SET_DEFAULT_SELECTED_FILTERS, data: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `SET_INITIAL_FILTERS` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": true,
          "2": true
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "2": false
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    const serverResponse = {
      "key": "36",
      "value": {
        "1": false,
        "2": false,
        "3": false
      }
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "2": false
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: SET_INITIAL_FILTERS, data: serverResponse }))
      .toEqual(expectedData);
  });

  it('checks if `SET_LISTING_FILTERS_CATEGORY` is working as expected', () => {
    const initialState = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    const serverResponse = {
      "1": false,
      "2": false,
      "3": false
    };

    const expectedData = {
      "data": {
        "36": {
          "title": "Categories",
          "paramsName": "category",
          "displayType": "Checkbox",
          "id": 36,
          "options": [
            {
              "id": 1,
              "title": "Honeymoon",
              "value": "honeymoon"
            },
            {
              "id": 2,
              "title": "Family",
              "value": "family"
            },
            {
              "id": 3,
              "title": "Friends / Group",
              "value": "friends"
            }
          ]
        },
        "37": {
          "title": "Type of Destination",
          "paramsName": "destination_type",
          "displayType": "Checkbox",
          "id": 37,
          "options": [
            {
              "id": 1,
              "title": "India",
              "value": "india"
            },
            {
              "id": 2,
              "title": "International",
              "value": "international"
            }
          ]
        },
        "38": {
          "title": "Duration(in Days)",
          "paramsName": "days[]",
          "displayType": "Checkbox",
          "id": 38,
          "options": [
            {
              "id": 1,
              "title": "1 to 3",
              "value": "1-3",
              "filterCountKey": "days_1___3"
            },
            {
              "id": 2,
              "title": "4 to 6",
              "value": "4-6",
              "filterCountKey": "days_4___6"
            },
            {
              "id": 3,
              "title": "7 to 9",
              "value": "7-9",
              "filterCountKey": "days_7___9"
            },
            {
              "id": 4,
              "title": "10 to 12",
              "value": "10-12",
              "filterCountKey": "days_10___12"
            },
            {
              "id": 5,
              "title": "13 or more",
              "value": ">13",
              "filterCountKey": "days_gtn13"
            }
          ]
        },
        "39": {
          "title": "Budget Per Person (in Rs.)",
          "paramsName": "price_ranges[]",
          "displayType": "Checkbox",
          "id": 39,
          "options": [
            {
              "id": 1,
              "title": "Less than 10,000",
              "value": "0-10_000",
              "filterCountKey": "price_ranges_0___10_000"
            },
            {
              "id": 2,
              "title": "10000 - 20000",
              "value": "10_000-20_000",
              "filterCountKey": "price_ranges_10_000___20_000"
            },
            {
              "id": 3,
              "title": "20,000 - 40,000",
              "value": "20_000-40_000",
              "filterCountKey": "price_ranges_20_000___40_000"
            },
            {
              "id": 4,
              "title": "40,000 - 60,000",
              "value": "40_000-60_000",
              "filterCountKey": "price_ranges_40_000___60_000"
            },
            {
              "id": 5,
              "title": "60,000 - 80,000",
              "value": "60_000-80_000",
              "filterCountKey": "price_ranges_60_000___80_000"
            },
            {
              "id": 6,
              "title": "Above 80,000",
              "value": "80_000-50_000_000",
              "filterCountKey": "price_ranges_80_000___50_000_000"
            }
          ]
        },
        "40": {
          "title": "Hotel Star Rating",
          "paramsName": "hotel_ratings[]",
          "displayType": "StarRatingCheckbox",
          "id": 40,
          "options": [
            {
              "id": 1,
              "title": "2 Star",
              "value": "2",
              "filterCountKey": "hotel_ratings_2"
            },
            {
              "id": 2,
              "title": "3 Star",
              "value": "3",
              "filterCountKey": "hotel_ratings_3"
            },
            {
              "id": 3,
              "title": "4 Star",
              "value": "4",
              "filterCountKey": "hotel_ratings_4"
            },
            {
              "id": 4,
              "title": "5 Star",
              "value": "5",
              "filterCountKey": "hotel_ratings_5"
            }
          ]
        },
        "41": {
          "title": "Inclusions",
          "paramsName": "inclusions[]",
          "displayType": "Checkbox",
          "id": 41,
          "options": [
            {
              "id": 1,
              "title": "Meals",
              "value": "Meals",
              "filterCountKey": "inclusions_Meals"
            },
            {
              "id": 2,
              "title": "Cab",
              "value": "Cab",
              "filterCountKey": "inclusions_Cab"
            },
            {
              "id": 3,
              "title": "Shared Coach",
              "value": "Shared Coach",
              "filterCountKey": "inclusions_Shared___Coach"
            }
          ]
        },
        "42": {
          "title": "Themes/Activities",
          "paramsName": "trip_types[]",
          "displayType": "Checkbox",
          "id": 42,
          "options": [
            {
              "id": 1,
              "title": "Adventure",
              "value": "Adventure",
              "filterCountKey": "trip_types_Adventure"
            },
            {
              "id": 2,
              "title": "Nature",
              "value": "Nature",
              "filterCountKey": "trip_types_Nature"
            },
            {
              "id": 3,
              "title": "Hill Station",
              "value": "Hill Station",
              "filterCountKey": "trip_types_Hill___Station"
            },
            {
              "id": 4,
              "title": "Religious",
              "value": "Religious",
              "filterCountKey": "trip_types_Religious"
            },
            {
              "id": 5,
              "title": "Water Activities",
              "value": "Water Activities",
              "filterCountKey": "trip_types_Water___Activities"
            }
          ]
        }
      },
      "selected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        }
      },
      "initialSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "defaultSelected": {
        "36": {
          "1": false,
          "2": false,
          "3": false
        },
        "37": {
          "1": true,
          "2": true
        }
      },
      "sortBy": {
        "paramsName": "sort_by",
        "options": {
          "recommended": "Recommended",
          "popularity": "Popularity",
          "price_l-h": "Price: Low to High",
          "price_h-l": "Price: High to Low",
          "duration_l-h": "Duration: Low to High",
          "duration_h-l": "Duration: High to Low"
        },
        "selected": "recommended"
      },
      "isVisible": false,
      "loaded": false,
      "shouldHideDestinationTypeFilters": false
    };
    expect(filters(initialState, { type: SET_LISTING_FILTERS_CATEGORY, categoryData: serverResponse }))
      .toEqual(expectedData);
  });

});

describe('setListingFiltersCategory method', () => {

  it('sets all category filters to false if categoryType is blank', () => {
    const categoryType = '';
    const expectedResult = {
      "categoryData": {"1": false, "2": false, "3": false},
      "type": "listing/filters/SET_LISTING_FILTERS_CATEGORY"
    };
    expect(setListingFiltersCategory(categoryType)).toEqual(expectedResult);
  });

  it('sets honeymoon category filter to true if categoryType is honeymoon', () => {
    const categoryType = 'honeymoon';
    const expectedResult = {
      "categoryData": {"1": true, "2": false, "3": false},
      "type": "listing/filters/SET_LISTING_FILTERS_CATEGORY"
    };
    expect(setListingFiltersCategory(categoryType)).toEqual(expectedResult);
  });

  it('sets family category filter to true if categoryType is family', () => {
    const categoryType = 'family';
    const expectedResult = {
      "categoryData": {"1": false, "2": true, "3": false},
      "type": "listing/filters/SET_LISTING_FILTERS_CATEGORY"
    };
    expect(setListingFiltersCategory(categoryType)).toEqual(expectedResult);
  });

  it('sets friends category filter to true if categoryType is friends', () => {
    const categoryType = 'friends';
    const expectedResult = {
      "categoryData": {"1": false, "2": false, "3": true},
      "type": "listing/filters/SET_LISTING_FILTERS_CATEGORY"
    };
    expect(setListingFiltersCategory(categoryType)).toEqual(expectedResult);
  });

});

describe('getListingFilterCategory method', () => {

  describe('returns category filter object based on selected categories', () => {

    it('returns category filter object when both parameters are empty', () => {
      const categoryType = '';
      const categoryFilter = [];
      const expectedResult = {
        [CATEGORY_FILTER_HONEYMOON]: false,
        [CATEGORY_FILTER_FAMILY]: false,
        [CATEGORY_FILTER_FRIENDS]: false
      };
      expect(getListingFilterCategory(categoryType, categoryFilter)).toEqual(expectedResult);
    });

    it('returns category filter object when both parameters are there', () => {
      const categoryType1 = 'tour';
      const categoryFilter1 = ['honeymoon', 'family'];
      const expectedResult1 = {
        [CATEGORY_FILTER_HONEYMOON]: true,
        [CATEGORY_FILTER_FAMILY]: true,
        [CATEGORY_FILTER_FRIENDS]: false
      };
      expect(getListingFilterCategory(categoryType1, categoryFilter1)).toEqual(expectedResult1);
    });

    it('returns category filter object when one of the parameters is there', () => {
      const categoryType2 = 'family';
      const categoryFilter2 = [];
      const expectedResult2 = {
        [CATEGORY_FILTER_HONEYMOON]: false,
        [CATEGORY_FILTER_FAMILY]: true,
        [CATEGORY_FILTER_FRIENDS]: false
      };
      expect(getListingFilterCategory(categoryType2, categoryFilter2)).toEqual(expectedResult2);
    });

  });

});

describe('setDefaultSelectedFilters method', () => {
  describe('sets selected filters to default filters', () => {

    it('sets default category filters for listing page', () => {
      const filterId='36', type='family', filterValue=['family'];
      const expectedResult = {
        "data": {
          "key": "36",
          "value": {[CATEGORY_FILTER_HONEYMOON]: false, [CATEGORY_FILTER_FAMILY]: true, [CATEGORY_FILTER_FRIENDS]: false}
        },
        "type": "listing/filters/SET_DEFAULT_SELECTED_FILTERS"
      };
      expect(setDefaultSelectedFilters(type, filterId, filterValue)).toEqual(expectedResult);
    });

    it('sets default destination filters for listing page', () => {
      const filterId='37', type='india';
      const expectedResult = {
        "data": {
          "key": "37",
          "value": {1: true, 2: false}
        },
        "type": "listing/filters/SET_DEFAULT_SELECTED_FILTERS"
      };
      expect(setDefaultSelectedFilters(type, filterId)).toEqual(expectedResult);
    });

    it('sets filters for category page', () => {
      const filterId='38', type='', filterValue={3: true}, isCategoryPage=true;
      const expectedResult = {
        "data": {
          "key": "38",
          "value": {3: true}
        },
        "type": "destListing/filters/DEST_LISTING_SET_DEFAULT_SELECTED_FILTERS"
      };
      expect(setDefaultSelectedFilters(type, filterId, filterValue, isCategoryPage)).toEqual(expectedResult);
    });

  });
});

describe('setInitialFilters method', () => {
  describe('sets initial filters', () => {

    it('sets initial category filters for listing page', () => {
      const filterId='36', type='family', filterValue=['family'];
      const expectedResult = {
        "data": {
          "key": "36",
          "value": {[CATEGORY_FILTER_HONEYMOON]: false, [CATEGORY_FILTER_FAMILY]: true, [CATEGORY_FILTER_FRIENDS]: false}
        },
        "type": "listing/filters/SET_INITIAL_FILTERS"
      };
      expect(setInitialFilters(type, filterId, filterValue)).toEqual(expectedResult);
    });

    it('sets initial destination filters for listing page', () => {
      const filterId='37', type='india';
      const expectedResult = {
        "data": {
          "key": "37",
          "value": {1: true, 2: false}
        },
        "type": "listing/filters/SET_INITIAL_FILTERS"
      };
      expect(setInitialFilters(type, filterId)).toEqual(expectedResult);
    });

  });
});

describe('setDefaultFilters method', () => {

  it('sets selected filters to default filters for listing page', () => {
    const isCategoryPage = false;
    const expectedResult = {
      "type": "listing/filters/RESET_SELECTED_TO_DEFAULT_FILTERS"
    };
    expect(setDefaultFilters(isCategoryPage)).toEqual(expectedResult);
  });

  it('sets selected filters to default filters for category page', () => {
    const isCategoryPage = true;
    const expectedResult = {
      "type": "destListing/filters/DEST_LISTING_RESET_SELECTED_TO_DEFAULT_FILTERS"
    };
    expect(setDefaultFilters(isCategoryPage)).toEqual(expectedResult);
  });

});

describe('resetDefaultFilters method', () => {

  it('resets default filters for listing page', () => {
    const isCategoryPage = false;
    const expectedResult = {
      "type": "listing/filters/RESET_DEFAULT_FILTERS"
    };
    expect(resetDefaultFilters(isCategoryPage)).toEqual(expectedResult);
  });

  it('resets default filters for category page', () => {
    const isCategoryPage = true;
    const expectedResult = {
      "type": "destListing/filters/DEST_LISTING_RESET_DEFAULT_FILTERS"
    };
    expect(resetDefaultFilters(isCategoryPage)).toEqual(expectedResult);
  });
  
});

