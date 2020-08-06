import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Testimonials from './Testimonials';
import PopularPackages from 'modules/packages/popular/index';
import Breadcrumb from 'modules/shared/Breadcrumb';
import LoadMorePackages from 'modules/shared/loadMorePackages';
import DestinationAndFilters from 'modules/testimonials/DestinationAndFilters';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  data: {
    totalRating: 5430,
    positiveRating: 5172,
    overall: {
      bad: 73,
      poor: 866,
      good: 809,
      veryGood: 2170,
      excellent: 2193,
    },
    destinationStatus: false,
    bannerImage: {
      title: 'Happy Travelers',
      src:
        'https://dailystormer.name/wp-content/uploads/2013/07/London-taxi.jpg',
    },
    testimonials: [
      {
        id: 544,
        title: 'Trip to Uttarakhand',
        destination: 'Uttarakhand',
        body: 'I went to Dubai with my family of 5 adult',
        rating: 4,
        lastUpdated: '2013-11-14T16:25:17+05:30',
        author: {
          authorName: 'Mitika25',
          authorPic: '',
          designation: 'Student',
          userLocation: 'Delhi',
        },
      },
    ],
    topTestimonials: [
      {
        id: 899,
        destination: 'Dubai',
        title: 'Awesome Desert Safari',
        rating: 4,
        body: 'I went to Dubai with my family of 5 adult',
        lastUpdated: '2014-03-13T00:00:00+05:30',
        author: {
          message: 'Sucess',
          authorName: 'Mr Muhamed Yazmir Azureen',
          authorPic: null,
          designation: null,
          userLocation: 'Bangalore',
        },
      },
    ],
    filters: {
      ratings: [
        { value: '1', checked: false },
        { value: '2', checked: false },
        { value: '3', checked: false },
        { value: '4', checked: false },
        { value: '5', checked: false },
      ],
      india: {
        popularDestination: ['Kerala'],
        allDestinations: ['Ahmedabad', 'Alleppey', 'Andaman', 'Vrindavan'],
      },
      international: {
        popularDestination: ['Bali'],
        allDestination: [
          'Africa',
          'Asia',
          'Australia',
          'Austria',
          'Bali',
          'Belgium',
        ],
      },
    },
    htmlTags: [
      {
        keyword: 'description',
        value:
          'TravelTriangle Reviews: Read 100% authentic & unbiased recent traveler reviews of 650+ agents',
      },
    ],
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Testimonials', url: '/testimonials' },
    ]
  },
  params: {},
  location: {
    hash: '',
    host: 'localhost:5000',
    hostname: 'localhost',
    href: 'http://localhost:5000/testimonials',
    origin: 'http://localhost:5000',
    pathname: '/testimonials',
    port: '5000',
    protocol: 'http:',
    query: {},
  },
  push: jest.fn,
  packages: [],
};

const shallowWrapperTestimonials = props => {
  return shallow(<Testimonials {...props} />);
};

describe('Testimonials module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render popular packages container when packages length is zero', () => {
    const PopularPackagesContainer = PopularPackages.container;
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(PopularPackagesContainer)).toHaveLength(0);
  });

  it('should render popular package container when packages length is not zero', () => {
    props.packages.push({ city: 'kerala' });
    const PopularPackagesContainer = PopularPackages.container;
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(PopularPackagesContainer)).toHaveLength(1);
  });

  it('should pass proper bredcrumb to Breadcumbs component for general', () => {
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(Breadcrumb).prop('breadcrumbs')).toEqual(props.data.breadcrumbs);
  });

  it('should pass proper bredcrumb to Breadcumbs component for particualr destination', () => {
    props.data.breadcrumbs.push(
      { name: 'India', url: '' },
      { name: 'kerala', url: '/testimonials/kerala' },
    );
    props.params.destination = 'kerala';

    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(Breadcrumb).prop('breadcrumbs')).toEqual(props.data.breadcrumbs);
  });

  it('should pass proper current page in loadMorePackages component when page is not in location', () => {
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(LoadMorePackages).prop('currentPage')).toBe(1);
  });

  it('should pass proper current page in loadMorePackages component when page in location', () => {
    props.location.query.page = 3;
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(LoadMorePackages).prop('currentPage')).toBe(3);
  });

  it('should pass proper destination details in destinationAndFilter component', () => {
    props.params.destination = '200/trip-to-bali';
    props.location.query.destination = 'bali';
    const wrapper = shallowWrapperTestimonials(props);
    expect(wrapper.find(DestinationAndFilters).prop('breadcrumbs')).toEqual(props.data.breadcrumbs);
  });
});
