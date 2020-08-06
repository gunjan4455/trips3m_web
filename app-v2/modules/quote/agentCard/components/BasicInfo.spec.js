import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import BasicInfo from './BasicInfo';

configure({ adapter: new Adapter() });
let component;

const quoteInfoData = {
  tripId: 3918699,
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
  },
  trackSegment: jest.fn,
  tripStatus: 'cancelled'
};

const createBasicInfoComponent = () => {
  return (<BasicInfo {...quoteInfoData} />);
};

describe('Quote Basic info: Render Correctly ', () => {

  beforeAll(() => {
    const BasicInfoComponent = createBasicInfoComponent();
    component = shallow(BasicInfoComponent);
  });

  it('should match with the previous snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
