import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import styled from '@emotion/styled';

import NavLink from './NavLink';
import { capitalizeAndReplaceDash } from 'helpers/parsers';
import { setCookie } from 'helpers/FormDataFormatter';
import { setVisitedDestinationsCookie } from 'app/helpers/utils';

const Ul = styled.ul({
  padding: '0',
  margin: '0',
  display: 'flex',
  overflow: 'auto',
  '& li': {
    display: 'inline-block',
    '& a': {
      lineHeight: '1.29',
      fontSize: '14px',
      fontWeight: '700',
      color: '#3e3e3e',
      display: 'block',
      textAlign: 'center',
      padding: '16px',
      minWidth: '120px',
      position: 'relative',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      '& span.line': {
        position: 'absolute',
        bottom: '0',
        left: '0',
        display: 'block',
        width: '100%',
        height: '2px',
        background: 'transparent',
        content: '\' \'',
      }
    },
  },
  '& .navLinkSpan.active': {
    '& a': {
      color: '#009688',
      '& span.line': {
        background: '#009688',
      },
    },
  }
});

class CityBlockNav extends Component {
  componentDidMount() {
    setCookie('cb_dt', capitalizeAndReplaceDash(this.props.destination));
    setVisitedDestinationsCookie(capitalizeAndReplaceDash(this.props.destination));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.destination !== this.props.destination) {
      setCookie('cb_dt', capitalizeAndReplaceDash(this.props.destination));
      setVisitedDestinationsCookie(capitalizeAndReplaceDash(this.props.destination));
    }
  }

  render() {
    const { tabs } = this.props;
    return (
      <Sticky enabled={true} top={0} innerZ={4}>
        <div className="sbcw bb">
          <Ul>
            {
              tabs && tabs.length && tabs.map((tab, i) => (
                <li>
                  {tab.name === 'Gallery' ?
                    null :
                    <NavLink key={i} to={`${tab.url}`}>
                      <span>{tab.name}</span>
                    </NavLink>
                  }
                </li>
              ))
            }
          </Ul>
        </div>
      </Sticky>);
  }
}

CityBlockNav.propTypes = {
  destination: PropTypes.string,
  tabs: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

CityBlockNav.defaultProps = {
  destination: '',
};

export default CityBlockNav;
