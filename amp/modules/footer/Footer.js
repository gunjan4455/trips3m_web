import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ampFooter pb64">
        <div className="footerLinks">
          <ul className="flex alignCenter flexWrap justifyCenter footerLinkList list-reset">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">We Are Hiring!</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">T&C</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Cancellation</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>

          </ul>
        </div>
        <div className="pt8 mb24 location">
          <div className="sfcw center">
            <p className="fw9 f14 m0 mb15 sfc6 text-uppercase ">Corporate Office</p>
            <p className="f12 m0">Holiday Triangle Travel Private Limited</p>
            <p className="f12 m0">Plot No - 29 , 3rd &amp; 4th Floor, </p>
            <p className="f12 m0">Dynamic House, Maruti Industrial Complex,</p>
            <p className="f12 m0">Sector 18 , Gurugram - 122015, Haryana</p>
            <p className="f12 m0">Landline: <a href="tel:18001235555">1800 123 5555</a></p>
          </div>
        </div>
        <div className="mb24">
          <div className="wfull">
            <ul className="footerSocialIcons list-reset flex p0">
              <li>

                <a href="" />
              </li>
              <li>

                <a href="" />
              </li>
              <li>

                <a href="" />
              </li>
              <li>

                <a href="" />
              </li>
              <li>

                <a href="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex spaceBetween alignCenter">
          <div className="flex alignCenter flexFull sfcw">
            <p className="m0 f12 iblock at_madelove">Made with</p>
            <span className="heart"/>
            <p className="m0 f12 iblock">in India</p>
          </div>
          <div className="flexFull">
            <p className="f12 pfc4 right-align">All rights reserved © 2020</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
