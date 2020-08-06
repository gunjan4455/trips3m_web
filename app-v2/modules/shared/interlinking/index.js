import React from 'react';
import PropTypes from 'prop-types';
import _chunk from'lodash/chunk';

const RenderLinks = ({ url, name }) => {
  return (<a href = {url} className = 'nowrap pl15 pr15 pt8 pb8 sbc5 pfc3 f14 radius2 iblock  mr8'>
    <span className = 'iblock pt4 pb4'>{name}</span>
  </a>);
};

const generateFooterLinks = (footerLinkArr) => {
  
  return (
    <div className= 'flex mb8'>
      {
        footerLinkArr.map((footerLink) => {
          if(footerLink.hasOwnProperty('name')) {
            return ( <RenderLinks url = {footerLink.url} name = {footerLink.name} />
            );
          }
          else {
            return (Object.values(footerLink).map((footer) => {
              return (<RenderLinks url = {footer.link} name = {footer.name} />); 
            }));
          }
        })
      }
    </div>
  );};

const generateFooterLinkSection = (footerLinkSection) => {
  const footerLinks = footerLinkSection.footerLinks ? footerLinkSection.footerLinks : footerLinkSection.footer_links;
  const groupedArr = _chunk(footerLinks, 5);
  return(
    footerLinks && footerLinks.length ?
     <div className='p15 sbcw mb8'>
       <h3 className='f16 fw9 pfc3 mb15'>{footerLinkSection.name}</h3>
         <div className = 'overflowXscroll swiper-full-width'>
         {
           groupedArr.length ?
              groupedArr.map((footerLinkArr) => generateFooterLinks(footerLinkArr))
              : null
         }
         </div>
     </div>
     :
     null
  );
};


const InterLinking = ({ footerLinks }) => (
  <div>
    {
      footerLinks.map((footerLinkSection) => generateFooterLinkSection(footerLinkSection))
    }
  </div>
);

InterLinking.propTypes = {
  footerLinks: PropTypes.array.isRequired,
};

RenderLinks.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default InterLinking;
