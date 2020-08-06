import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import QuoteList from './QuoteList';
import {
  quote1, quote2,
} from 'modules/quote/reducers/testData';

configure({ adapter: new Adapter() });

const shallowWrappperQcp = (props) => {
  return shallow(<QuoteList {...props} />);
};

const mockShowRoster = jest.fn();
const mockPushState = jest.fn();


const DEFAULT_PROPS = {
  params: {
    requestedTripId: '4876448'
  },
  location: {
    pathname: '/requested_trips/4876448/compare',
    search: '',
    hash: '',
    action: 'POP',
    key: null,
    query: {}
  },
  quotes: {
    quote1,
    quote2
  },
  pushState: mockPushState,
  showRoster: mockShowRoster,
  trackSegment: jest.fn
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

  it('should call compareQuotes function properly', () => {
    const wrapper = shallowWrappperQcp(props);
    wrapper.instance().compareQuotes();
    expect(mockPushState).toHaveBeenCalled();
  });

  it('should call handleChange function properly', () => {
    const e = {
      target: {
        checked: true
      }
    }
    const wrapper = shallowWrappperQcp(props);
    wrapper.instance().handleChange(e, '34555');
    expect(wrapper.state().quoteIds).toEqual(['34555']);
  });

  it('should call handleChange function properly and call roster message', () => {
    const e = {
      target: {
        checked: true
      }
    }
    const wrapper = shallowWrappperQcp(props);
    wrapper.instance().handleChange(e, '34555');
    wrapper.instance().handleChange(e, '34556');
    wrapper.instance().handleChange(e, '34557');
    expect(mockShowRoster).toHaveBeenCalled();
    expect(wrapper.state().quoteIds).toEqual(['34555', '34556']);
  });

  it('should call handleChange function properly and call roster message', () => {
    const eTrue = {
      target: {
        checked: true
      }
    }
    const eFalse = {
      target: {
        checked: false
      }
    }
    const wrapper = shallowWrappperQcp(props);
    wrapper.instance().handleChange(eTrue, '34555');
    wrapper.instance().handleChange(eTrue, '34556');
    wrapper.instance().handleChange(eFalse, '34556');
    expect(wrapper.state().quoteIds).toEqual(['34555']);
  });

  it('should call handlechange function', () => {
    const event = {
      preventDefault() {
      },
      target: { value: 'the-value' }
    };
    const wrapper = shallowWrappperQcp(props);
    const spy = jest.spyOn(wrapper.instance(), "handleChange");
    wrapper.find('.at_quoteSelect').at(0).simulate('click', event);
    expect(spy).toHaveBeenCalled();
  })


});
