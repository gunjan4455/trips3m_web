import React from 'react';
import PropTypes from 'prop-types';

const AddressTT = ({ isHomePage }) => {
  return (
    <div className='row row- sfcw text-center' itemProp={isHomePage ? "address" : null} itemScope={isHomePage ? "itemscope" : null}  itemType={isHomePage ? "https://schema.org/PostalAddress" : null}>
      <p className='fw9 f14 m0 mb15 sfc6 text-uppercase '>Corporate Office</p>
      <p className='f12 m0' itemProp={ isHomePage ? "name" : null}>Holiday Triangle Travel Private Limited</p>
      <p className='f12 m0' itemProp={isHomePage ? "streetAddress" : null}>Plot No - 29 , 3rd & 4th Floor, </p>
      <p className='f12 m0' itemProp={isHomePage ? "addressLocality" : null}>Dynamic House, Maruti Industrial Complex,</p>
      <p className='f12 m0' itemProp={isHomePage ? "AddressRegion" : null}>Sector 18 , Gurugram - <span itemProp="postalCode">122015 </span>, Haryana</p>
      <p className='f12 m0' itemProp={isHomePage ? "telephone" : null}>Landline: <a href='tel:18001235555'>1800 123 5555</a></p>
      <p className="f12 m0" itemProp={isHomePage ? "email" : null}>Email: <a rel="nofollow" href="mailto:customercare@traveltriangle.com">customercare@traveltriangle.com</a>
      </p>


    </div>
  );
};

AddressTT.propTypes = {
  isHomePage: PropTypes.bool
};

AddressTT.defaultProps = {
  isHomePage: false
};

export default AddressTT;
