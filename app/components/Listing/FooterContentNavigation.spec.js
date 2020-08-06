import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure} from 'enzyme';

import FooterContentNavigation from './FooterContentNavigation';

configure({ adapter: new Adapter() });

describe('Footer Content Navigation Component', () => {

  it('should displays banner heading from props', () => {
    const props = {
      navigationLinkItems: ["footerTravelogue","footerAccomodation","footerFood","footerPlaces","footerThingsToDO","footerEssentialInfo","footerProTips"],
      heading: 'About Bali',
    };

    const wrapper = shallow(<FooterContentNavigation {...props} />);
    expect(wrapper.find('h2').text()).toEqual('Bali Travel Guide by Category');
  });

  it('should have 7 menu items', () => {
    const props = {
      navigationLinkItems: ["footerTravelogue","footerAccommodation","footerFood","footerPlaces","footerThingsToDO","footerEssentialInfo","footerProTips"],
      heading: 'Bali',
    };

    const wrapper = shallow(<FooterContentNavigation {...props} />);
    expect(wrapper.find('.navigation-tile')).toHaveLength(7);
  });

  it('should be not render and return null', () => {
    const wrapper = shallow(<FooterContentNavigation />);
    expect(wrapper.children().length).toEqual(0);
  });

});
