import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import PackageIncExc from './PackageIncExc';

configure({ adapter: new Adapter() });

const props = {
  'inclusions': [{ 'key': 'hotel', 'available': true, 'text': 'Upto 3 Stars' }, {
    'key': 'flights',
    'available': false,
    'text': 'Flights'
  }, { 'key': 'meals', 'available': true, 'text': 'Meals' }, {
    'key': 'sightseeing',
    'available': true,
    'text': 'Sightseeing'
  }, { 'key': 'transfer', 'available': true, 'text': 'Airport Transfer' }, {
    'key': 'entrytickets',
    'available': true,
    'text': 'Entry Tickets'
  }, { 'key': 'visa', 'available': true, 'text': 'Visa' }],
  'id': 'card_334',
  'hotelInfo': [5, 49000, 53900],
  'noScroll': false
};

const wrapper = shallow(<PackageIncExc {...props} />);

describe('PackageIncExc test suit', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});


