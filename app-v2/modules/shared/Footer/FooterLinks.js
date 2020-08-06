import React from 'react';

import './FooterLinks.scss';


const FooterLinks = () => (
  <div className='row row-'>
    <ul className='flex alignCenter flexWrap justifyCenter footer-links-menu'>
      <li><a href="/aboutus">About Us</a></li>
      <li><a href="/career">We Are Hiring!</a></li>
      <li><a href="/team">Team</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/testimonials">Testimonials</a></li>
      <li><a href="/tnc">T&C</a></li>
      <li><a href="/FAQs">FAQs</a></li>
    </ul>
  </div>
);

export default FooterLinks; 
