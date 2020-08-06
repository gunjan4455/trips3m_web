import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Pdm from './Pdm';

configure({ adapter: new Adapter() });

const DEFAULT_PROPS = {
  setMessage: jest.fn,
  pdmsData: {
    Itinerary: [
      {
        category: 'Itinerary',
        message_enum: 'PDM_CHANGE_ITINERARY_DAYS_ORDER',
        message_text: 'Hey! I want to change the order of itinerary days.',
        pdm_text: 'I want to change the order of itinerary days'
      },
      {
        category: 'Itinerary',
        message_enum: 'PDM_CHANGE_ITINERARY_CITIES',
        message_text: 'Hey! I want to change the cities in the itinerary.',
        pdm_text: 'I want to change the cities in the itinerary'
      },
      {
        category: 'Itinerary',
        message_enum: 'PDM_MODIFY_ITINERARY_PARTICULAR_DAY',
        message_text: 'Hey! I want modification in itinerary of a particular day.',
        pdm_text: 'I want modification in itinerary of a particular day'
      },
      {
        category: 'Itinerary',
        message_enum: 'PDM_MODIFY_ITINERARY_ATTRACTIONS_COVERED',
        message_text: 'Hey! I want modification in the attractions being covered.',
        pdm_text: 'I want modification in the attractions being covered'
      }
    ],
    Hotel: [
      {
        category: 'Hotel',
        message_enum: 'PDM_CHANGE_HOTEL_NEED_BETTER_BUDGET',
        message_text: 'Hey! I need hotel in a better budget.',
        pdm_text: 'Need hotel in a better budget'
      },
      {
        category: 'Hotel',
        message_enum: 'PDM_CHANGE_HOTEL_NEED_BETTER_REVIEWS',
        message_text: 'Hey! I need a hotel with better reviews.',
        pdm_text: 'Need a hotel with better reviews'
      },
      {
        category: 'Hotel',
        message_enum: 'PDM_CHANGE_HOTEL_NEED_HIGHER_ROOM_CATEGORY',
        message_text: 'Hey! I need a hotel with a higher room category.',
        pdm_text: 'Need a hotel with a higher room category'
      },
      {
        category: 'Hotel',
        message_enum: 'PDM_BETTER_ROOM_SAME_HOTEL',
        message_text: 'Hey! I need a better room in the same hotel.',
        pdm_text: 'Need a better room in the same hotel'
      },
      {
        category: 'Hotel',
        message_enum: 'PDM_CHANGE_HOTEL_NEAR_SIGHTSEEING_AREA',
        message_text: 'Hey! I need a hotel near the market/sightseeing areas.',
        pdm_text: 'Need a hotel near the market/sightseeing areas'
      }
    ],
    Inclusion: [
      {
        category: 'Inclusion',
        message_enum: 'PDM_ADD_INCLUSION_CONTACT_ME',
        message_text: 'Hey! I need to get a few inclusions added. Please contact me to discuss further.',
        pdm_text: 'Need to get an inclusion added'
      },
      {
        category: 'Inclusion',
        message_enum: 'PDM_REMOVE_INCLUSION_CONTACT_ME',
        message_text: 'Hey! I need to get a few inclusions removed. Please contact me to discuss further.',
        pdm_text: 'Need to get an inclusion removed'
      },
      {
        category: 'Inclusion',
        message_enum: 'PDM_MODIFY_INCLUSION_CONTACT_ME',
        message_text: 'Hey! I need modifications in a few inclusions. Please contact me to discuss further.',
        pdm_text: 'Need to modify an inclusion'
      }
    ]
  },
  selectedPdm: 'Inclusion'
};

const shallowWrappperPdm = (props) => {
  return shallow(<Pdm {...props} />);
};

describe('Pdm: Render Correctly ', () => {

  let props = { ...DEFAULT_PROPS };

  afterEach(() => {
    props = { ...DEFAULT_PROPS };
  });

  it('should match with the previous snapshot', () => {
    const wrapper = shallowWrappperPdm(props);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call setMessage on pdm click', () => {
    const wrapper = shallowWrappperPdm(props);

    const spy = jest.spyOn(wrapper.instance(), "onPdmSelection");
    wrapper.instance().forceUpdate();

    wrapper.find('Link.at_0').simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
