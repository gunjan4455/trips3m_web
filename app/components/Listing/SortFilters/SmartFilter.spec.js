import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import SmartFilter from './SmartFilter';

configure({ adapter: new Adapter() });

const filterCheckMock = jest.fn();

const DEFAULT_PROPS = {
  "selectedFields": {},
  "filterCounts": {
    "price_ranges_10_000___20_000": 157,
    "trip_types_Hill___Station": 187,
    "inclusions_Shared___Coach": 97,
    "city_25207": 0,
    "city_25176": 0,
    "price_ranges_60_000___80_000": 0,
    "inclusions_Cab": 91,
    "inclusions_Disneyland": 0,
    "city_26182": 10,
    "inclusions_Meals": 294,
    "days_7___9": 57,
    "trip_types_Adventure": 206,
    "days_1___3": 35,
    "price_ranges_80_000___50_000_000": 1,
    "trip_types_Religious": 5,
    "city_26429": 1,
    "city_26826": 4,
    "trip_types_Nature": 280,
    "city_26355": 6,
    "city_25862": 1,
    "trip_types_Water___Activities": 77,
    "city_26193": 67,
    "city_72977": 1,
    "days_10___12": 0,
    "city_26318": 4,
    "city_26319": 2,
    "city_71320": 1,
    "city_26320": 238,
    "city_27215": 10,
    "hotel_ratings_2": 0,
    "city_26369": 145,
    "city_26567": 2,
    "hotel_ratings_3": 159,
    "city_25191": 73,
    "price_ranges_20_000___40_000": 80,
    "city_26560": 62,
    "price_ranges_0___10_000": 49,
    "inclusions_Flights": 0,
    "inclusions_Visa": 0,
    "hotel_ratings_4": 82,
    "city_26646": 0,
    "hotel_ratings_5": 67,
    "city_27218": 6,
    "city_26407": 156,
    "days_gtn13": 0,
    "city_25686": 2,
    "city_26137": 85,
    "price_ranges_40_000___60_000": 7,
    "days_4___6": 202,
    "total_entries": 294,
    "Visa": 115,
    "Disneyland": 116,
    "Flights": 117
  },
  "options": [
    {
      "id": 25176,
      "name": "Chalakudy",
      "value": "Chalakudy",
      "title": "Chalakudy"
    },
    {
      "id": 25191,
      "name": "Kochi",
      "value": "Kochi",
      "title": "Kochi"
    },
    {
      "id": 25207,
      "name": "Vaikom",
      "value": "Vaikom",
      "title": "Vaikom"
    },
    {
      "id": 25686,
      "name": "Kodaikanal",
      "value": "Kodaikanal",
      "title": "Kodaikanal"
    },
    {
      "id": 25862,
      "name": "Madurai",
      "value": "Madurai",
      "title": "Madurai"
    },
    {
      "id": 26137,
      "name": "Kovalam",
      "value": "Kovalam",
      "title": "Kovalam"
    },
    {
      "id": 26182,
      "name": "Kanyakumari",
      "value": "Kanyakumari",
      "title": "Kanyakumari"
    },
    {
      "id": 26193,
      "name": "Kumarakom",
      "value": "Kumarakom",
      "title": "Kumarakom"
    },
    {
      "id": 26318,
      "name": "Trivandrum",
      "value": "Trivandrum",
      "title": "Trivandrum"
    },
    {
      "id": 26319,
      "name": "Ooty",
      "value": "Ooty",
      "title": "Ooty"
    },
    {
      "id": 26320,
      "name": "Munnar",
      "value": "Munnar",
      "title": "Munnar"
    },
    {
      "id": 26355,
      "name": "Wayanad",
      "value": "Wayanad",
      "title": "Wayanad"
    },
    {
      "id": 26369,
      "name": "Thekkady",
      "value": "Thekkady",
      "title": "Thekkady"
    },
    {
      "id": 26407,
      "name": "Alleppey",
      "value": "Alleppey",
      "title": "Alleppey"
    },
    {
      "id": 26429,
      "name": "Coorg",
      "value": "Coorg",
      "title": "Coorg"
    },
    {
      "id": 26560,
      "name": "Cochin",
      "value": "Cochin",
      "title": "Cochin"
    },
    {
      "id": 26567,
      "name": "Cherai",
      "value": "Cherai",
      "title": "Cherai"
    },
    {
      "id": 26646,
      "name": "Kabini",
      "value": "Kabini",
      "title": "Kabini"
    },
    {
      "id": 26826,
      "name": "Guruvayur",
      "value": "Guruvayur",
      "title": "Guruvayur"
    },
    {
      "id": 27215,
      "name": "Athirapally",
      "value": "Athirapally",
      "title": "Athirapally"
    },
    {
      "id": 27218,
      "name": "Thanneermukkom",
      "value": "Thanneermukkom",
      "title": "Thanneermukkom"
    },
    {
      "id": 71320,
      "name": "Athirappilly",
      "value": "Athirappilly",
      "title": "Athirappilly"
    },
    {
      "id": 72977,
      "name": "Rameshwaram",
      "value": "Rameshwaram",
      "title": "Rameshwaram"
    }
  ],
  "paramsName": "cities[]",
  "displayType": "Checkbox",
  "id": "cities",
  "title": "Cities",
  onFilterCheckHandler: filterCheckMock,
  filterSelected: () => {}
};

const shallowWrapperSmartFilter = (props) => {
  return shallow(<SmartFilter {...props} />);
};

describe('SmartFilter module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperSmartFilter(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onFilterCheck on filter selection', () => {
    const wrapper = shallowWrapperSmartFilter(props);
    wrapper.instance().handleOnChange(71320);
    expect(props.onFilterCheckHandler).toHaveBeenCalled();
  });

});
