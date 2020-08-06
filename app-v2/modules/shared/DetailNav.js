import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';

const GUl = styled.div({
  'overflowX': 'scroll',
  boxShadow: '0px 3px 6px #ccc',
  '& ul li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0',
      },
      '&:hover': {
        backgroundColor: '#efefef',
        color: '#009688',
        '&:after': {
          backgroundColor: '#009688',
        }
      },
      '&.active': {
        backgroundColor: '#efefef',
        color: '#009688',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});

const DetailNav = ({ options, trackSegment }) => {
  function handleNavClick(navSection) {
    trackSegment({
      event: ORGANISM_CLICKED,
      section: 'Horizontal Carousel Bar',
      object: navSection,
      cta: navSection
    });
  }

  const onSetActive = (targetId) => {
    const activelink = document.querySelector('#' + targetId + '-triggerlink');
    if (activelink && activelink.scrollIntoView) {
      activelink.scrollIntoView({ inline: "center" });
    }
  };

  return (<GUl className="flex spaceBetween sbcw">
    <div className="row noBeforeAfter flexFull flex alignCenter">
      <div className="col-xs-12 pr8">
        <ul className="flex alignCenter m0 p0">
          {
            options.map((newLi, index) =>
              <li key={index}>
                <Link activeClass="active" className="relative f14 fw7 pfc3 block p24 pt15 pb15"
                      onClick={() => handleNavClick(newLi.title)} to={newLi.section_name}
                      id={newLi.section_name + '-triggerlink'}
                      onSetActive={onSetActive}
                      spy smooth isDynamic duration={500} offset={-60}>
                  {newLi.title}
                </Link>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  </GUl>);
};

DetailNav.propTypes = {
  options: PropTypes.array.isRequired,
  trackSegment: PropTypes.func
};

DetailNav.defaultProps = {
  trackSegment: () => {}
};

export default DetailNav;
