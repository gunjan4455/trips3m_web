import React from 'react';
import styled from '@emotion/styled';

import {
  IllusAgent,
  IllusMoneySafe,
  IllusSupport,
  IllusDestinations,
  IllusTraveler,
  IllusQualityCheck
} from 'helpers/Icon/Icon';

const TTExpertiesSection = styled.div({
});

const TTExpertiesIcon = styled.div({
  height: '56px',
  width: '72px',
  position: 'relative',
  margin: '0 auto 15px',
  '& svg': {
    position: 'absolute',
    maxHeight: '100%',
  }
});

const TTExperties = () => (
  <div className="at_ttexperties row m0">
    <div className="col-xs-12 p8 pt15 pb15 sbcw mb8">
      <p className="pfc1 text-center f16 fw9 mb15">Fastest Growing Holiday Marketplace</p>
      <TTExpertiesSection className="col-sm-12 pt8 pb8">
        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter"><IllusAgent /></TTExpertiesIcon>
          <p className="f12 fw4 m0">650+</p>
          <p className="f12 fw4 m0">Verified Agents</p>
        </div>

        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter">
            <IllusTraveler />
          </TTExpertiesIcon>
          <p className="f12 fw4 m0">22 Lac+</p>
          <p className="f12 fw4 m0">Happy Travellers</p>
        </div>

        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter"><IllusDestinations /></TTExpertiesIcon>
          <p className="f12 fw4 m0">65+</p>
          <p className="f12 fw4 m0">Destinations</p>
        </div>
      </TTExpertiesSection>
    </div>
    <div className="col-xs-12 p8 pt15 pb15 sbcw">
      <p className="pfc1 text-center f16 fw9 mb15">Easy, Secure & Reliable</p>
      <TTExpertiesSection className="col-sm-12 pt8 pb8">
        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter"><IllusMoneySafe /></TTExpertiesIcon>
          <p className="f12 fw4 m0">Traveltriangle</p>
          <p className="f12 fw4 m0">Verified</p>
        </div>

        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter"><IllusQualityCheck /></TTExpertiesIcon>
          <p className="f12 fw4 m0">Stringent</p>
          <p className="f12 fw4 m0">Quality Control</p>
        </div>

        <div className="col-xs-4 text-center pl2 pr2">
          <TTExpertiesIcon className="flex alignCenter justifyCenter"><IllusSupport /></TTExpertiesIcon>
          <p className="f12 fw4 m0">24/7</p>
          <p className="f12 fw4 m0">Support</p>
        </div>
      </TTExpertiesSection>
    </div>
  </div>
);

export default TTExperties;
