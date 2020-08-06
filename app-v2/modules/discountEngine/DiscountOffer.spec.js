import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import DiscountOffer from './DiscountOffer';

configure({ adapter: new Adapter() });
let component;

const discountInfoData = {
  tripId: '3918699',
  offers: [
    {
      couponId: 393,
      type: 'Coupon',
      code: '1BB2D9D87',
      heading: 'TEST_NE_Jan_1000_Referral',
      desc: 'Rs. 1000 Off ',
      tnc: '- A flat discount value of Rs. 1000 will be applied to the quotes.\r\n- The discounts will be applicable only after Trip is converted.\r\n- If the Trip is cancelled after booking, discount value will be reverted.',
      offerVal: 1000,
      couponType: 'Normal',
      endDate: '2019-07-21',
      discountType: 1,
      discountCurrency: 'Rupee'
    },
    {
      couponId: 395,
      type: 'Coupon',
      code: '1BB2D9D86',
      heading: 'TEST2_NE_Jan_1000_Referral',
      desc: 'Rs. 1000 Off ',
      tnc: '- A flat discount value of Rs. 1000 will be applied to the quotes.\r\n- The discounts will be applicable only after Trip is converted.\r\n- If the Trip is cancelled after booking, discount value will be reverted.',
      offerVal: 1000,
      couponType: 'Normal',
      endDate: '2019-07-21',
      discountType: 1,
      discountCurrency: 'Rupee'
    },
    {
      couponId: 394,
      type: 'Coupon',
      code: '1BB2D9D88',
      heading: 'TEST1_NE_Jan_1000_Referral',
      desc: 'Rs. 1000 Off ',
      tnc: '- A flat discount value of Rs. 1000 will be applied to the quotes.\r\n- The discounts will be applicable only after Trip is converted.\r\n- If the Trip is cancelled after booking, discount value will be reverted.',
      offerVal: 1000,
      couponType: 'View Only',
      endDate: '2019-07-21',
      discountType: 2,
      discountCurrency: 'Rupee'
    }
  ],
  appliedOffer: {},
  params: {
    quoteid: "7124217",
    requestedTripId: "3918699"
  },
  discountInformation: {
    discount: 0,
    discountableTypeId: null,
    discountableType: null
  },
  applyDiscountCoupon: jest.fn,
  removeDiscountCoupon: jest.fn,
  updateDiscountCoupon: jest.fn,
  updateFormField: jest.fn,
  clearFormSubmitError: jest.fn,
};

const createDiscountOfferComponent = () => {
  return (<DiscountOffer {...discountInfoData} />);
};

describe('Discount Engine: Render Correctly ', () => {

  beforeAll(() => {
    const DiscountOfferComponent = createDiscountOfferComponent();
    component = shallow(DiscountOfferComponent);
  });

  // it('should have correct error message', () => {
  //   const { mountedComponent } = component;
  //   console.log('mountedComponent......', JSON.stringify(mountedComponent));
  //   mountedComponent.find('.at_discountOfferFormSubmit').simulate('click');
  //   expect(mountedComponent.find('.input-error-text').text().trim().toLowerCase()).toEqual('Please select atleast 1 coupon');
  // });
  // it('should show offers list on get offer click', () => {
  //   component.find('Get Offers').simulate('click');
  //   expect(component.find('Current Discounts & Offers').toBeTruthy());
  // });

  it('should match with the previous snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
