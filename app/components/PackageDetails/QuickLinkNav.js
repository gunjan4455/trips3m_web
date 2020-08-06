import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';

import FormOneCTA from 'components/Form/FormLead/FormOneCTA';

const GUl = styled.ul({
  '& li': {
    listStyle: 'none',
    '& a': {
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#3e3e3e',
      },
      '&:after': {
        height: '2px',
        width: '100%',
        content: '\' \'',
        position: 'absolute',
        bottom: '0',
        left: '0',
      },
      '&.active': {
        backgroundColor: '#efefef',
        color: '#3e3e3e',
        '&:after': {
          backgroundColor: '#009688'
        }
      }
    }
  }
});


class QuickLinkNav extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    ScrollLink: PropTypes.func,
    dealsInfo: PropTypes.object,
    trackSegment: PropTypes.func.isRequired
  };

  static defaultProps = {
    options: [],
    ScrollLink: () => {},
    dealsInfo: {}
  };

  render() {
    const { options, dealsInfo, trackSegment } = this.props;
    const Link = this.props.ScrollLink;

    const onSetActive = (targetId) => {
      const activelink = document.querySelector('#'+targetId+'-triggerlink');
      if ( activelink && activelink.scrollIntoView) {
        activelink.scrollIntoView({inline:"center"});
      }
    };

    return (
      <div className="quicklinksContainer flex spaceBetween sbcw overflowXscroll">
        <div className="noBeforeAfter flex alignCenter">
          <GUl className="flex flexFull alignCenter m0 p0">
            {options && options.map((option, i) =>
              <li key={i}>
                <Link activeClass="active" className="relative f14 fw7 pfc3 p15 block"
                      id={option.section_name+'-triggerlink'}
                      onSetActive={onSetActive}
                      to={option.section_name} spy smooth isDynamic duration={500} offset={-60}>
                  {option.title}
                </Link>
              </li>
            )}
          </GUl>
          {options && options.length && dealsInfo.overview.toLowerCase() !== 'deals' ?
            <div className="pr15 ml15">
              <FormOneCTA clickHandler={trackSegment}>
                <div className="relative f14 fw9 btn-pri-large pl15 pr15 ripple pt8 pb8 nowrap">Get Quotes</div>
              </FormOneCTA>
            </div>
            : null
          }
        </div>
      </div>
    );
  }
}

export default QuickLinkNav;
