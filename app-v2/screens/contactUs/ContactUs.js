import React from 'react';
import { Helmet } from 'react-helmet';

import HeaderCommon from 'modules/header/HeaderCommon';
import { default as HeaderTitle } from 'modules/header/HeaderTitle';
import Footer from 'modules/shared/Footer';
import BannerTrialist from 'modules/shared/trialist/BannerTrialist';
import SeeMapPopUp from 'modules/mapInformation/SeeMapPopUp/SeeMapPopUp';
import { CallUs, Envelope, VactionIcon } from 'helpers/Icon/Icon';
import config from 'appConfig';
import styles from './contactUs.cm.scss';

const coordinates = {
  lat: 28.4900142,
  long: 77.0747222
};


const bannerUrl = `${config.assets.images}/public-product/Trialist/AboutUs/AboutUs_Cover.jpg`;

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="canonical" href="https://traveltriangle.com/contact_us" />
      </Helmet>
      <HeaderCommon />
      <HeaderTitle title={'Contact Us'} />
      <div className="clearfix mb8">
        <BannerTrialist bannerPath={bannerUrl} bannerAlt="career banner" />
      </div>
      <div className="container">
        <div className="clearfix p24">
          <h1 className="f24 fw9 mb24 pb8">Get in Touch</h1>
          <p className="f14p">
            Founded in 2011, TravelTriangle is India’s leading online travel
            marketplace bringing both the traveler and expert Travel-Agents
            on a common platform.
          </p>
        </div>

        <div className="clearfix p24">
          <div className="flex">
            <div className="icon-18">
              <CallUs />
            </div>
            <div className="flexFull ml5">
              <h3 className="f16p fw9 mb4">Tollfree Number</h3>
              <p className="f14p mb4">1800 123 5555</p>
              <p className="f12 pfc4">
                Available Monday to Saturday 10 AM - 7 PM
              </p>
            </div>
          </div>
        </div>

        <div className="clearfix p24">
          <div className="flex">
            <div className="icon-18">
              <Envelope />
            </div>
            <div className="flexFull ml5">
              <h3 className="f16p fw9 mb4">Customer Email ID</h3>
              <p className="f16">customercare@traveltriangle.com</p>
            </div>
          </div>
        </div>

        <div className="clearfix p24">
          <div className="flex">
            <div className="icon-18">
              <VactionIcon />
            </div>
            <div className="flexFull ml5">
              <h3 className="f16p fw9 mb4">Corporate Office</h3>
              <p className="f14p">
                Holiday Triangle Travel Private Limited <br />
                Plot No -29 , 3rd & 4th Floor Dynamic House, Maruti
                Industrial Complex Sector 18, <br />
                Gurugram - 122015, Haryana
              </p>
            </div>
          </div>
        </div>
        <div className={`flex mb24 ${styles.mapContainer}`}>
          <SeeMapPopUp coordinates={coordinates} zoomRatio={17} />
        </div>
      </div>
      <div className="row row- p0">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
