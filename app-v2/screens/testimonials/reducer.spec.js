import reducer, { parseFilters, testimonialsFilter } from './reducer';
import { TESTIMONIALS_LOAD, TESTIMONIALS_LOAD_SUCCESS, TESTIMONIALS_LOAD_FAILURE } from './action';

const serverResponse = {
  data: {
    total_rating: 5430,
    positive_rating: 5172,
    overall: {
      bad: 73,
      poor: 866,
      good: 809,
      very_good: 2170,
      excellent: 2193,
    },
    destination_status: false,
    banner_image: {
      title: 'Happy Travelers',
      src: 'https://dailystormer.name/wp-content/uploads/2013/07/London-taxi.jpg',
    },
    testimonials: [
      {
        id: 544,
        title: 'Trip to Uttarakhand',
        destination: 'Uttarakhand',
        body: "I went to Dubai with my family of 5 adult",
        rating: 4,
        last_updated: '2013-11-14T16:25:17+05:30',
        author: {
          author_name: 'Mitika25',
          author_pic: '',
          designation: 'Student',
          user_location: 'Delhi',
        },
      },
    ],
    top_testimonials: [
      {
        id: 899,
        destination: 'Dubai',
        title: 'Awesome Desert Safari',
        rating: 4,
        body: "I went to Dubai with my family of 5 adult",
        last_updated: '2014-03-13T00:00:00+05:30',
        author: {
          message: 'Sucess',
          author_name: 'Mr Muhamed Yazmir Azureen',
          author_pic: null,
          designation: null,
          user_location: 'Bangalore',
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
        popular_destination: ['Kerala'],
        all_destinations: ['Ahmedabad', 'Alleppey', 'Andaman', 'Vrindavan'],
      },
      international: {
        popular_destination: ['Bali'],
        all_destination: [
          'Africa',
          'Asia',
          'Australia',
          'Austria',
          'Bali',
          'Belgium',
        ],
      },
    },
    html_tags: [
      {
        keyword: 'description',
        value: 'TravelTriangle Reviews: Read 100% authentic & unbiased recent traveler reviews of 650+ agents',
      },
    ],
  },
};

describe('Testimonials reducer', () => {
  const initialState = {
    loaded: false,
    loading: false,
    data: {}
  };

  it('should it initializes with default state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should `TESTIMONIALS_LOAD` is working as expected', () => {
    const expectedData = {
      loaded: false,
      loading: true,
      data: {}
    };
    expect(reducer(initialState, { type: TESTIMONIALS_LOAD })).toEqual(expectedData);
  });

  it('should `TESTIMONIALS_SUCCESS` is working as expected', () => {

    const expectedData = {
      loaded: true,
      loading: false,
      data: serverResponse.data
    };
  const d = reducer(initialState, { type: TESTIMONIALS_LOAD_SUCCESS, result: serverResponse });
  // initialState.data.a = "rating";
    expect(d).toEqual(expectedData);
  });

  it('should `TESTIMONIALS_LOAD_FAILURE` is working as expected', () => {
    const expectedData = {
      loaded: false,
      loading: false,
      data: {}
    };
    expect(reducer(initialState, { type: TESTIMONIALS_LOAD_FAILURE })).toEqual(expectedData);
  });


  it('should it call parseFilters', () => {
    const query = { 'ratings[]': ['5', '4'] };
    const filterOptions = ['ratings[]'];
    const expectedResponse = {
      ratings: ['5', '4']
    };
    expect(parseFilters(query, filterOptions)).toEqual(expectedResponse);
  });

  it('should it call testimonialsFilter', () => {
    const query = { 'ratings[]': '5' };
    const arrayFormat = 'query';
    const expectedResponse = { 'filters': { 'ratings': ['5'] } };
    expect(testimonialsFilter(query, arrayFormat)).toEqual(expectedResponse);
  });

});
