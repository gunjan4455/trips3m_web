import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link, Element, animateScroll as scroll} from 'react-scroll';
import Sticky from 'react-stickynode';

import Img from 'components/Common/Img';
import config from 'appConfig';

const TravelGuideContainer = styled.div({
  minHeight : '166px',
  '& .navigation-tile': {
    marginRight: '8px'
  },
  '& .sticky-inner-wrapper':{
    width: '100% !important',
    zIndex: '5',
    left: '0',
    background: '#fff'
  }
});

const NavigationLogoContainer = styled.div({
  height:'79px',
  width:'136px',
  display:'block'
});

const footerNavigation = {
  ['footerTravelogue'.toLowerCase()]: {
    'href': 'footerTravelogue',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/travel+stories+%402x.png`,
      'width': 79,
      'height': 136,
      'alt': 'Travel stories logo'
    },
    'title': 'Travel Stories'
  },
  ['footerAccommodation'.toLowerCase()]: {
    'href': 'footerAccommodation',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/accommodation.png`,
      'width': 79,
      'height': 136,
      'alt': 'Accommodation logo'
    },
    'title': 'Accommodation'
  },
  ['footerFood'.toLowerCase()]: {
    'href': 'footerFood',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/food.png`,
      'width': 79,
      'height': 136,
      'alt': 'Food logo'
    },
    'title': 'Food & Cuisine'
  },
  ['footerPlaces'.toLowerCase()]: {
    'href': 'footerPlaces',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/places+to+visit.png`,
      'width': 79,
      'height': 136,
      'alt': 'Places to visit logo'
    },
    'title': 'Places to Visit'
  },
  ['footerThingsToDO'.toLowerCase()]: {
    'href': 'footerThingsToDO',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/things+to+do.png`,
      'width': 79,
      'height': 136,
      'alt': 'Things to do logo'
    },
    'title': 'Things to Do'
  },
  ['footerEssentialInfo'.toLowerCase()]: {
    'href': 'footerEssentialInfo',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/essential+info.png`,
      'width': 79,
      'height': 136,
      'alt': 'Essential info logo'
    },
    'title': 'Essential Info'
  },
  ['footerProTips'.toLowerCase()]: {
    'href': 'footerProTips',
    'img': {
      'src': `${config.assets.images}/footer_cms_links/pro+tips.png`,
      'width': 79,
      'height': 136,
      'alt': 'Pro tips logo'
    },
    'title': 'Pro Tips'
  }
};

const FooterContentNavigation = ({navigationLinkItems, heading}) => {
  if (!(navigationLinkItems && navigationLinkItems.length)) {
    return null;
  }

  const onSetActive = (targetId) => {
    const activelink = document.querySelector('#'+targetId+'-triggerlink');
    if ( activelink && activelink.scrollIntoView) {
      activelink.scrollIntoView({inline:"center"});
    }

  };

  return (
    <TravelGuideContainer className="row pl15 pr0 mb8 pt15 sbcw">
      <h2 className="f16 pfc5 fw9 mb24 footer-navigation-header">{heading.replace('About ','')} Travel Guide by Category</h2>
      <Sticky top="#startListingDesc" bottomBoundary="#endListingDesc">
        <div className="footer-navigation-container swiper-full-width">
          <div className="flex">
            {
              navigationLinkItems.map((value) => {
                const footerNavigationElement = footerNavigation[value.toLowerCase()];

                if (!footerNavigationElement) {
                  return null;
                }

                return (
                  <div className="navigation-tile" key={footerNavigationElement.href}>
                    <Link activeClass="active"
                          id={footerNavigationElement.href+'-triggerlink'}
                          onSetActive={onSetActive}
                          to={footerNavigationElement.href} spy smooth isDynamic duration={500} offset={-50}>
                      <NavigationLogoContainer className="navigation-logo-container mb8">
                        <Img ikSrc={footerNavigationElement.img.src} height={79} width={136} alt={footerNavigationElement.img.alt} />
                      </NavigationLogoContainer>
                      <p className="pfc3 f14 fw9">{footerNavigationElement.title}</p>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </Sticky>
    </TravelGuideContainer>
  );
};

FooterContentNavigation.propTypes = {
  navigationLinkItems: PropTypes.array,
  heading: PropTypes.string
};

export default FooterContentNavigation;
