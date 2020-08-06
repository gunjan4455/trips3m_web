import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';
import { Element, scrollSpy , animateScroll as scroll} from 'react-scroll';

import ShowMore from '../Generic/ShowMore';
import './AboutListingDestination.scss';
import FooterContentNavigation from "components/Listing/FooterContentNavigation";

const parser = new Parser();

const renderFooterAboveText = (footerSection, isRatingSchemaEnabled) => {
  const footerAboveText = footerSection.footer_above_text
    .replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
      return `<img class="lzy_img" ${content}>`;
    })
    .split('&lt;readmore&gt;');

  return (
    <ShowMore
      wrapText={parser.parse(footerAboveText[0])}
      moreText={parser.parse(footerAboveText[1])}
      isRatingSchemaEnabled={isRatingSchemaEnabled}
    />
  );
};

const renderHeaderBelowText = (footerSection, isRatingSchemaEnabled) => {
  const headerBelowText = footerSection.header_below_text
    .replace(/&lt;img(.*?)&gt;/gm, (m, content) => {
      return `<img class="lzy_img" ${content}>`;
    })
    .split('&lt;readmore&gt;');
  return (
    <ShowMore
      wrapText={parser.parse(headerBelowText[0])}
      moreText={parser.parse(headerBelowText[1])}
      isRatingSchemaEnabled={isRatingSchemaEnabled}
    />
  );
};


class FooterCms extends Component {

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  componentDidMount() {
    this.scrollToPackagesELement = document.querySelector('.scroll-to-packages-container');
    this.footerGuideElement = document.querySelector('#startListingDesc');
    this.chatTriggerButton = document.querySelector('.fixed-menu-container.radius100');
    const packagesHeadingElem = document.querySelector('.sbcw.p15.pt0.pb8');
    const scrollToPosition = packagesHeadingElem ? packagesHeadingElem.offsetTop - 50 : 480;

    if (this.scrollToPackagesELement) {
      this.scrollToPackagesELement.addEventListener('click', () => {
        scroll.scrollTo(scrollToPosition);
      });
    }
    window.addEventListener('scroll', this.handleScroll);

    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lzy_img");
          imgObserver.unobserve(lazyImage);
        }
      });
    });

    const arr = document.querySelectorAll('img.lzy_img');
    arr.forEach((v) => {
      imageObserver.observe(v);
    });

  }

  isScrollToPackagesSticky = () => (window.pageYOffset >= this.footerGuideElement.offsetTop)
    && window.pageYOffset < (this.scrollToPackagesELement.parentNode.offsetTop - window.innerHeight);

  handleScroll = () => {
    if (this.scrollToPackagesELement && this.footerGuideElement) {
      if (this.isScrollToPackagesSticky()) {
        this.scrollToPackagesELement.classList.add('make-sticky');
        if (this.chatTriggerButton) {
          this.chatTriggerButton.style.bottom = "78px";
        }
      }else {
        if (this.scrollToPackagesELement.classList.contains('make-sticky')) {
          this.scrollToPackagesELement.classList.remove('make-sticky');
        }
        if (this.chatTriggerButton) {
          this.chatTriggerButton.removeAttribute("style");
        }
      }
    }
  };



  render() {
    const { footerSection, isRatingSchemaEnabled} = this.props;
    const { footer_above_text } = footerSection;
    const navigationLinkItems = [];

    if (!footer_above_text) {
      return null;
    }

    const sanitizedFooterAboveText = footer_above_text
      .replace(
        /(&lt;|<)img(.*?)(&gt;|>)/gm,
        (m, left, content) => {
          return `<img class="lzy_img" ${content}>`;
        }
      );

    sanitizedFooterAboveText.replace(/<section.*id="(\w+)".*>/mg, (match, p1) => {
      navigationLinkItems.push(p1);
      return match;
    });

    if (navigationLinkItems.length <= 0) { // image tag not found
      return (<div>{ renderFooterAboveText(footerSection, isRatingSchemaEnabled) }</div>);
    }

    return (
      <div className="sbc5 row pt8">
        <div className="container">
          <div id="startListingDesc" />
          <FooterContentNavigation navigationLinkItems={navigationLinkItems} heading={footerSection.heading}/>
          <div className="guide-footer row sbc5">
            { parser.parse(sanitizedFooterAboveText.replace('&lt;readmore&gt;', '')) }
          </div>
        <div id="endListingDesc" />
        </div>
      </div>
    );
  }
}

const AboutListingDestination = ({ footerSection, isRatingSchemaEnabled }) => {
  return (
    <div className="row row-">
      <div className="container p15 sbcw about-destination">
        <p className="text-center pb5 heading-h2 fw7">{footerSection.heading}</p>
        <div className="read-more-box dynamicTextInherit" >
          { renderHeaderBelowText(footerSection, isRatingSchemaEnabled) }
          <div className="mb15"> </div>
          <FooterCms footerSection={footerSection} isRatingSchemaEnabled={isRatingSchemaEnabled} />
        </div>
      </div>
      <div className="sbcw p8">
        <div className="scroll-to-packages-container">
        <div className="scroll-to-packages-link-mobile">Go to Packages</div>
        </div>
      </div>
    </div>
  );
};

AboutListingDestination.propTypes = {
  footerSection: PropTypes.object.isRequired,
  isRatingSchemaEnabled: PropTypes.bool
};

FooterCms.propTypes = {
  footerSection: PropTypes.object.isRequired,
  isRatingSchemaEnabled: false
};

export default AboutListingDestination;
