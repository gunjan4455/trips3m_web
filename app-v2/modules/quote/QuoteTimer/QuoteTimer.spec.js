import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

import QuoteTimer from './QuoteTimer.js';

configure({ adapter: new Adapter()});

const  DEFAULT_PROPS={
	totalTimeInSeconds: 2*24*3600
};

const shallowWrapper = (props) => {
	return shallow(<QuoteTimer {...props} />);
}

describe('CountDownTimer component', ()=> {
	let props = {...DEFAULT_PROPS};

	beforeEach(()=> {
		props = {...DEFAULT_PROPS};
		jest.useFakeTimers();
	})

	afterEach(()=> {
		jest.clearAllTimers();
		jest.useRealTimers();	
	});


	it('should render correctly', ()=> {
		const wrapper = shallowWrapper(props);
		expect(wrapper).toMatchSnapshot();
	})

	it('should tick correctly', ()=> {
		const wrapper = shallowWrapper(props);
		jest.advanceTimersByTime(3000);
		expect(wrapper.state("totalTimeInSeconds")).toEqual(2*24*3600 - 3);
	});

	it('should finish correctly', ()=> {
		props = {
			totalTimeInSeconds: 5
		}
		const wrapper = shallowWrapper(props);
		jest.useFakeTimers();
		jest.runAllTimers();
		expect(wrapper.state("totalTimeInSeconds")).toEqual(0);
	}); 
});
