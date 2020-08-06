import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PackageCardExperiment from './PackageCardExperiment';
import FormOneCTA from 'components/Form/FormLead/FormOneCTA';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  "card": {
    "id": "334",
    "name": "Luxurious Dubai Tour Package With Atlantis",
    "days": 6,
    "nights": 5,
    "promo_tag": 0,
    "p2l": 0,
    "mvp_tags": [],
    "image_url": "https://img.traveltriangle.com/stage//attachments/pictures/841473/original/aerial_view_of_Dubai-1.jpg",
    "imagekit_url": "https://img.traveltriangle.com/stage/attachments/pictures/841473/original/aerial_view_of_Dubai-1.jpg",
    "mini_desc": "Per Person on twin sharing",
    "price_total": 50600,
    "currency": "Rupee",
    "discounted_price": 46000,
    "discount_percentage": 9.09091,
    "tnc": "Exact prices may vary based on availability.",
    "cities": ["Dubai", "Dubai", "Dubai", "Dubai", "Dubai", "Dubai"],
    "share_url": "https://browsing-qa1.ttdev.in/packages/5nights-6days-dubai-palm-atlantis-tour?id=334",
    "set_url": "5nights-6days-dubai-palm-atlantis-tour",
    "inclusions": [{ "key": "hotel", "available": true, "text": "Upto 3 Stars" }, {
      "key": "flights",
      "available": false,
      "text": "Flights"
    }, { "key": "meals", "available": true, "text": "Meals" }, {
      "key": "sightseeing",
      "available": true,
      "text": "Sightseeing"
    }, { "key": "transfer", "available": true, "text": "Airport Transfer" }, {
      "key": "entrytickets",
      "available": true,
      "text": "Entry Tickets"
    }, { "key": "visa", "available": true, "text": "Visa" }],
    "trip_types": [{ "id": 1, "name": "Romantic" }, { "id": 4, "name": "Family" }, {
      "id": 2,
      "name": "Adventure"
    }, { "id": 13, "name": "Cruises" }],
    "destinations": [{ "id": 151, "name": "Dubai" }],
    "labels": ["Stay at Atlantis", "Cruises", "Burj Khalifa", "Adventure", "Desert Safari", "Sightseeing", "Nightlife", "Budget"],
    "family_packages": { "334": [3, 46000, 50600], "335": [4, 47000, 51700], "336": [5, 49000, 53900] },
    "city_list_with_days": { "Dubai": 6 },
    "overview": "Time to take that much-needed break with this customizable 5 night 6 days Dubai package and jaunt away on the most memorable journey of your life. Get pampered with this mind-blowing exclusive Dubai itinerary for 6 days where you shall embark on a guided tour of Dubai and get a chance to cruise lavishly through the Dubai Creek. Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Explore the sights and sounds of Dubai with our customizable itinerary for 6 days."
  },
  "comparingPackages": [],
  "index": 2,
  "isMultiDestination": false,
  "multiDestinationTexts": [],
  "formToLocation": null,
  setActiveHotels: jest.fn,
};

const shallowPackageCardExperiment = (props) => {
  return shallow(<PackageCardExperiment {...props} />);
};

describe('PackageCardExperiment test suit', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowPackageCardExperiment(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should perform search from the homepage given if the searched package has hasPackage true', () => {
    const wrapper = shallowPackageCardExperiment(props);
    const wrapperInstance = wrapper.instance();
    wrapperInstance.sensorVisibility = false;
    wrapperInstance.handleChange = jest.fn();
    wrapper.find({id: 'input_334_334'}).simulate('change')
    expect(wrapperInstance.handleChange).toHaveBeenCalledTimes(1);
  });

  it('sould render formonecta when isPackageRevamp is undefined', () => {
    const wrapper = shallowPackageCardExperiment(props);
    expect(wrapper.find(FormOneCTA)).toHaveLength(1);
  });

  it('sould not render formonecta when isPackageRevamp is true', () => {
    props.isPackageRevamp = true;
    const wrapper = shallowPackageCardExperiment(props);
    expect(wrapper.find(FormOneCTA)).toHaveLength(0);
  });
  it('should not render more-than-three-stars class', () => {
    const wrapper = shallowPackageCardExperiment(props);
    expect(wrapper.find('.more-than-three-stars')).toHaveLength(1);
  });

  it('should render more-than-three-stars class', () => {
    props.card.family_packages["330"]= [3, 46000, 50600];
    const wrapper = shallowPackageCardExperiment(props);
    expect(wrapper.find('.more-than-three-stars')).toHaveLength(1);
  });

});
