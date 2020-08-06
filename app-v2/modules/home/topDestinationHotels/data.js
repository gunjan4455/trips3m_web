import config from 'appConfig';

const hotelCards = [
  {
    img: `${config.assets.images}/public-product/hotelhooks/Andaman.jpg`,
    discount: '40% ',
    destination: 'Andaman',
    subHeading: '20 top-selling hotels',
    price: '₹ 2,000',
    url: '/hotels/andaman',
  },
  {
    img: `${config.assets.images}/public-product/hotelhooks/Kerala.jpg`,
    discount: '30% ',
    destination: 'Kerala',
    subHeading: '18 top-selling hotels',
    price: '₹ 1,800',
    url: '/hotels/kerala',
  },
  {
    img: `${config.assets.images}/public-product/hotelhooks/Himachal.jpg`,
    discount: '35% ',
    destination: 'Himachal',
    subHeading: '19 top-selling hotels',
    price: '₹ 1,000',
    url: '/hotels/himachal',
  },
  {
    img: `${config.assets.images}/public-product/hotelhooks/Kashmir.jpg`,
    discount: '40% ',
    destination: 'Kashmir',
    subHeading: '20 top-selling hotels',
    price: '₹ 1,400',
    url: '/hotels/kashmir',
  }
/*  {
    img: `${config.assets.images}/public-product/hotelhooks/Goa.JPG`,
    discount: '50% ',
    destination: 'Goa',
    subHeading: '8 top-selling hotels',
    price: '₹ 6,000',
    url: '/hotels/goa',
  },*/
];

export default hotelCards;
