import React from 'react';
import styled from '@emotion/styled';

import Img from 'components/Common/Img';
import config from 'appConfig';

const InvestorsDataImg = styled.div({
  width: '75px',
  height: '75px',
  marginBottom: '15px',
  overflow: 'hidden',
  borderRadius: '50%',
  '& img': {
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '100%',
  },
});

const InvestorLogo = styled.div({
  maxHeight: '87px',
  position: 'relative',
  '& img': {
    maxWidth: '200px',
    maxHeight: '100%',
  },
});

const InvestorLogoWrap = styled.div(({ width, height }) => {
  return  {
    width: `${width}px`,
    height: `${height}px`,
    display: 'block',
    overflow: 'hidden',
    position: 'relative',
  };
});

const Investors = () => (
  <div className="container-fluid">
    <h3 className="f24 fw9 mb15 at_investors">Our Investors</h3>
    <div className="container-fluid">
      <div className="row mb24 bb">
        <div className="col-xs-12 mb24">
          <InvestorLogo>
            <InvestorLogoWrap width="200" height="37">
              <Img
                width={200} height={37}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Fundamentum_Logo.jpg`}
                alt="investor-logo"
              />
            </InvestorLogoWrap>
          </InvestorLogo>
        </div>
        <div className="clearfix">
          <div className="col-xs-6 mb24 at_investor1">
            <InvestorsDataImg>
              <Img
                width={75} height={75}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/NandanNilekani.png`}
                alt="investor-data"
              />
            </InvestorsDataImg>
            <p className="f14 fw9 mb4">Nandan Nilekani</p>
            <p className="f12 pfc4 m0">Co-Founder and Chairman</p>
          </div>
          <div className="col-xs-6 mb24 at_investor2">
            <InvestorsDataImg>
              <Img
                width={75} height={75}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/SanjeevAggarwal.png`}
                alt="investor-data"
              />
            </InvestorsDataImg>
            <p className="f14 fw9 mb4">Sanjeev Aggarwal</p>
            <p className="f12 pfc4 m0">Co-Founder</p>
          </div>
        </div>
        <div className="clearfix">
          <div className="col-xs-6 mb24 at_investor3">
            <InvestorsDataImg>
              <Img
                width={75} height={75}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Ashish_Investor_Fundamentum.jpg`}
                alt="investor-data"
              />
            </InvestorsDataImg>
            <p className="f14 fw9 mb4">Ashish Kumar</p>
            <p className="f12 pfc4 m0">Partner</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row mb24 bb">
        <div className="col-xs-12 mb24">
          <InvestorLogo>
            <InvestorLogoWrap width="200" height="39">
              <Img
                width={200} height={39}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/SaifPartners_Logo.png`}
                alt="Saif Partners"
              />
            </InvestorLogoWrap>
          </InvestorLogo>
        </div>
        <div className="col-xs-6 mb24 at_investor4">
          <InvestorsDataImg>
            <Img
              width={75} height={75}
              ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Mayank+K_SaifPartners.jpg`}
              alt="investor-img"
            />
          </InvestorsDataImg>
          <p className="f14 fw9 mb4">Mayank Khanduja</p>
          <p className="f12 pfc4 m0">Principal</p>
        </div>
        <div className="col-xs-6 mb24 at_investor5">
          <InvestorsDataImg>
            <Img
              width={75} height={75}
              ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Deepak+G_SaifPartners.jpg`}
              alt="investor-data"
            />
          </InvestorsDataImg>
          <p className="f14 fw9 mb4">Deepak Gaur</p>
          <p className="f12 pfc4 m0">Managing Director</p>
        </div>
      </div>
    </div>

    <div className="container-fluid">
      <div className="row mb24 bb">
        <div className="col-xs-12 mb24">
          <InvestorLogo>
            <InvestorLogoWrap width="188" height="33">
              <Img
                width={188} height={33}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Bessemer_Venture_Partners_logo.png`}
                alt="Bessemer Venture Partners"
              />
            </InvestorLogoWrap>
          </InvestorLogo>
        </div>
        <div className="col-xs-6 mb24 at_investor6">
          <InvestorsDataImg>
            <Img
              width={75} height={75}
              ikSrc={`${config.assets.images}/public-product/Trialist/Investors/Vishal+Gupta_Bessemer.jpg`}
              alt="investor-data"
            />
          </InvestorsDataImg>
          <p className="f14 fw9 mb4">Vishal Gupta</p>
          <p className="f12 pfc4 m0">Managing Director</p>
        </div>
        <div className="col-xs-6 mb24 at_investor7">
          <InvestorsDataImg>
            <Img
              width={75} height={75}
              ikSrc={`${config.assets.images}/public-product/Trialist/Investors/anant-vidur-puri.jpg`}
              alt="investor-data"
            />
          </InvestorsDataImg>
          <p className="f14 fw9 mb4">Anant Vidur Puri</p>
          <p className="f12 pfc4 m0">Partner</p>
        </div>
      </div>
    </div>


    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 mb24">
          <InvestorLogo>
            <InvestorLogoWrap width="70" height="54">
              <Img
                width={70} height={54}
                ikSrc={`${config.assets.images}/public-product/Trialist/Investors/RB.png`}
                alt="investor-logo"
              />
            </InvestorLogoWrap>
          </InvestorLogo>
        </div>
        <div className="col-xs-6 mb24 at_investor8">
          <InvestorsDataImg>
            <Img
              width={75} height={75}
              ikSrc={`${config.assets.images}/public-product/Trialist/Investors/HarshBothra.jpg`}
              alt="investor-logo"
            />
          </InvestorsDataImg>
          <p className="f14 fw9 mb4">Harsh Bothra</p>
          <p className="f12 pfc4 m0">Principal</p>
        </div>
      </div>
    </div>
  </div>
);

export default Investors;
