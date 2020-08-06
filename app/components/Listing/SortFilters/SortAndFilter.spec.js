import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

import SortAndFilter from './SortAndFilter';

configure({ adapter: new Adapter() });

const mockFilterSelected = jest.fn();

const DEFAULT_PROPS = {
  filters: {
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
  resetFilters: () => {},
  sortBy: {
    "paramsName": "sort_by",
    "options": {
      "popularity": "Popularity",
      "price_l-h": "Price: Low to High",
      "price_h-l": "Price: High to Low",
      "duration_l-h": "Duration: Low to High",
      "duration_h-l": "Duration: High to Low"
    },
    "selected": "popularity"
  },
  location: {
    search: "?days[]=1-3&sort_by=popularity&page_number=1&destination_type=all",
    query: {},
    pathname: "/budget-tour-packages"
  },
  toggleFilterView: () => {},
  filtersApplied: () => {},
  sortBySelected: () => {},
  selectedFilterCount: () => {},
  filterCategory: ["category"],
  filterSelected: mockFilterSelected
};

let props = DEFAULT_PROPS;

describe('SortAndFilter Component', () => {

  let wrapper;
  const createShallowSortAndFilter = (props) => {
    wrapper = shallow(<SortAndFilter {...props} />);
  };

  afterEach(() => {
    props = {...DEFAULT_PROPS};
  });

  it('should render correctly', () => {
    createShallowSortAndFilter(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls filterSelected method when filterCategory is present', () => {
    props.location.search = "?category=family";
    createShallowSortAndFilter(props);
    expect(mockFilterSelected).toHaveBeenCalledWith('36', { "2": false });
  });

  it('calls filterSelected method when filterCategory is not present', () => {
    props.filterCategory = [];
    props.location.search = "?category=family&days[]=1-3&sort_by=popularity&page_number=1&destination_type=all";
    createShallowSortAndFilter(props);
    expect(mockFilterSelected).toHaveBeenCalledWith('36', { 2: true });
  });

});
