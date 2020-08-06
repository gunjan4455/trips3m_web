import React from 'react';
import PropTypes from 'prop-types';
import FooterLinks from 'components/Footer/FooterLinks';
import AddressTT from 'components/Footer/AddressTT';
import CopyRight from 'components/Footer/CopyRight';
import SocialLinks from 'components/Footer/SocialLinks';

import { LoveIcon } from 'helpers/Icon/Icon';

import styled from '@emotion/styled';

const LoveIconCon = styled.span({
  width: '20px',
  height: '20px',
  margin: '0 8px',
  display: 'inline-block',
});

const MadeWith = styled.div({
  height: '20px',
  lineHeight: '20px',
  fontSize: '12px',
  textAlign: 'center',
  color: '#ffffff',
  '& > p': {
    height: '20px',
    lineHeight: '20px',
    verticalAlign: 'top',
  }
});

const Footer = ({ isHomePage }) => (
  <div className='at_footer row row- pbc3 p8'>
    <div className='pt0 pb0'>
      <FooterLinks />
    </div>
    <div className='pt8 mb24'>
      <AddressTT isHomePage={isHomePage} />
    </div>
    <div className="mb24">
      <SocialLinks />
    </div>

    <div className="flex spaceBetween alignCenter">
      <MadeWith className="flex alignCenter flexFull">
        <p className="m0 f12 iblock at_madelove">Made with</p>
        <LoveIconCon className="relative"><LoveIcon /></LoveIconCon>
        <p className="m0 f12 iblock">in India</p>
      </MadeWith>
      <div className="flexFull text-right"><CopyRight /></div>
    </div>
  </div>
);

Footer.propTypes = {
  isHomePage: PropTypes.bool
};

Footer.defaultProps = {
  isHomePage: false
};

export default Footer;
