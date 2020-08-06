import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import AgentCard from './AgentCard';

configure({ adapter: new Adapter() });
let component;

const agentCardData = {
  tripId: 3918699,
  quoteId: 7124216,
  agent: {
    id: 1699179,
    name: 'Unique Trip Maker ',
    imageUrl: 'https://res.cloudinary.com/dma3zc8eo/image/fetch/f_auto,q_auto:eco,w_300/https://dknfdeb8v69ms.cloudfront.net/attachments/tr_a_profiles/3048/original/logo.png',
    star: 4,
    tripsSold: 298,
    reviewsCount: 97,
    reviewLink: 'http://bookings-qa1.ttdev.in/agents/313639393137392d556e69-Unique-Trip-Maker',
    email: 'info@uniquetripmaker.com',
    phoneNumber: '8860670640'
  },
  userDetails: {
    id: '112233'
  },
  destination: "Goa",
  priceInformation: {
    price: 7499,
    priceInRupee: 7499,
    currency: 'Rupee',
    perPerson: 'per person'
  },
  downloadUrl: 'https://bookings-qa1.ttdev.in/quotes/7124217/download_quote.pdf',
  discountInformation: {
    discount: 0,
    discountableTypeId: null,
    discountableType: null
  }
};

const createAgentCardComponent = () => {
  return (<AgentCard {...agentCardData} />);
};

describe('Agent Card: Render Correctly ', () => {

  beforeAll(() => {
    const AgentCardComponent = createAgentCardComponent();
    component = shallow(AgentCardComponent);
  });

  it('should match with the previous snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
