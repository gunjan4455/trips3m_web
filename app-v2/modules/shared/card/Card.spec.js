import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Card from './Card';

configure({ adapter: new Adapter() });

const props = {
  item: {
    id: 99,
    title: 'Lighthouse Beach In Kovalam',
    address: '<p><span style=\font-family: Arial; font-size: 13px; white-space: pre-wrap;\>Department of Tourism, Government of Kerala, Park View, Thiruvananthapuram, Kerala, India - 695 033</span></p>',
    description: '<p><strong> Lighthouse beach in Kerala</strong> is a beautiful sandy beach with a lighthouse. In a state that offers so much to travelers like dense forests, picturesque hill stations, lush green plantations, and <a href=\/kerala-tourism/kumarakom/places-to-visit/kumarkom-backwaters\>serene backwaters</a>, the <strong>hawa beach in Kovalam</strong> is a breath of fresh air. Tourists and locals alike flock to the <strong>lighthouse beach koval...</strong></p>',
    labels: [
      'Adventure',
      'Honeymoon',
      'Ideal for friends',
      'Ideal for families',
      'Nature',
      'Beach'
    ],
    imageUrl: 'https://img.traveltriangle.com/attachments/pictures/873914/original/Lighthouse_Beach_thumb.jpg',
    imagekitUrl: 'https://img.traveltriangle.com/attachments/pictures/873914/original/Lighthouse_Beach_thumb.jpg',
    imageAlt: 'The incredible lighthouse beach in Kovalam',
    urlSpotlight: 'https://traveltriangle.com/kerala-tourism/kovalam/places-to-visit/lighthouse-beach'
  }
};

const wrapper = shallow(<Card {...props} />);

describe('Card component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});