import React, { Component } from 'react';
import styled from '@emotion/styled';

import {
    FBIconWhite, GoogleIconWhite, Instagram, Twitter, PinterestIcon
  } from 'helpers/Icon/Icon';

const SocialIconsContainer = styled.div({
  '& .facebookIcon': {
    '& svg': {
      width: '10px',
      height: '19px',
    },
  },
  '& .twitterIcon': {
    '& svg': {
      width: '17px',
      height: '14px',
    },
  },
  '& .pintrestIcon': {
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
  '& .googleIcon': {
    '& svg': {
      width: '21px',
      height: '13px',
    },
  },
  '& .instaIcon': {
    '& svg': {
      width: '20px',
      height: '20px',
    },
  },
});

const ConnectIcons = styled.a({
  minWidth: '30px',
  maxWidth: '30px',
  height: '30px',
  display: 'inline-block',
  marginRight: '10px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:last-child': {
    marginRight: '0'
  }
});

export default class SocialLinks extends Component {
  render() {
    return (
      <div className="wfull">
        <SocialIconsContainer className="at_socialicons flex alignCenter wfull justifyCenter">
          <ConnectIcons className="facebookIcon" href="https://www.facebook.com/traveltriangle"
            target="_blank" rel="nofollow" ><FBIconWhite />
          </ConnectIcons>
          <ConnectIcons className="twitterIcon" href="https://twitter.com/traveltriangle"
            target="_blank" rel="nofollow"><Twitter />
          </ConnectIcons>
          <ConnectIcons className="pintrestIcon" href="https://www.pinterest.com/traveltriangle/"
            target="_blank" rel="nofollow"><PinterestIcon />
          </ConnectIcons>
          <ConnectIcons className="googleIcon" href="https://plus.google.com/+traveltriangle/"
            target="_blank" rel="nofollow"><GoogleIconWhite />
          </ConnectIcons>
          <ConnectIcons className="instaIcon" href="https://www.instagram.com/traveltriangle/"
            target="_blank" rel="nofollow"><Instagram />
          </ConnectIcons>
        </SocialIconsContainer>
      </div>
    );
  }
}
