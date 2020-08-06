import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import CompareQuotes from './CompareQuotes';
import { quote1, quote2 } from 'modules/quote/reducers/testData';

configure({ adapter: new Adapter() });

const shallowWrappperQcp = (props) => {
  return shallow(<CompareQuotes {...props} />);
};

const DEFAULT_PROPS = {
  params: {
    requestedTripId: '4876448'
  },
  quotes: {
    7124216: quote1,
    7124252: quote2
  },

  quoteIds: ['7124216', '7124252']

};

describe('QCp page', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperQcp(props);
    expect(wrapper).toMatchSnapshot();
  });

});
