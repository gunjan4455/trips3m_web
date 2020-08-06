import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import ThingsToDo from './ThingsToDo';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  thingsToDo: {
    destination_name: 'Karela',
    sub_heading: 'Your list of the best things to do, compiled on the basis of actual traveler experiences',
    view_all_url: '',
    activities: [
      {
        title: 'Lighthouse Beach in Kovalam',
        description: 'Lighthouse beach in Kerala is a beautiful sandy beach with a lighthouse. In a state that offers so much to travelers like dense forests, picturesque hill stations, lush green plantations, and serene backwaters, the hawa beach in Kovalam is a breath of fresh air.',
        image_url: 'https://www.hlimg.com/images/places2see/738X538/kerala-tours3.jpg',
        image_alt: 'https://www.hlimg.com/images/places2see/738X538/kerala-tours3.jpg',
        navigation_url: '',
        labels: ['Beaches', 'Nature'],
        url_spotlight: ''
      }]
  }
};

const shallowWrapperThingsToDo = (props) => {
  return shallow(<ThingsToDo {...props} />);
};

describe('ThingsToDo module', () => {
  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should render correctly', () => {
    const wrapper = shallowWrapperThingsToDo(props);
    expect(wrapper).toMatchSnapshot();
  });
});
