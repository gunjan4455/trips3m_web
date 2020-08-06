import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { DownArrow } from 'helpers/Icon/Icon';
import PropTypes from 'prop-types';
import * as Icons from 'helpers/Icon/Icon';

import menu from './menu';

const GHotelLinksDiv = styled.div({
  '&:last-child': {
    marginBottom: '0 !important',
  },
  '& .hotellinksMenu': {
    display: 'none',
  },
  '& label': {
    padding: '10px 16px 10px 60px',
    height: '40px',
    margin: '0',
    display: 'block',
  },
  '& .hotellinksMenu:checked + label .arrowButton': {
    transform: 'rotate(180deg)'
  },
  '& .hotellinksMenu + label + .menulinksData': {
    height: '0',
    display: 'block',
    overflow: 'hidden',
  },
  '& .hotellinksMenu:checked + label + .menulinksData': {
    height: 'auto',
    padding: '0 15px 0 60px',
  },
  '& .hotellinksMenu:checked +label .arrowIconContainer': {
    transform: 'rotate(180deg)'
  },
  ' .click-overrider': {
    position: 'absolute',
    left: '0',
    top: '0',
    bottom: '0',
    right: '52px',
    zIndex: '1',
  }
});

const GHotelIcon = styled.div({
  height: '36px',
  minWidth: '40px',
  maxWidth: '40px',
  '& svg': {
    maxWidth: '20px',
    maxHeight: '20px',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
    position: 'absolute'
  }
});

const GHotelDownIcon = styled.div({
  height: '30px',
  minWidth: '30px',
  maxWidth: '30px',
  '& svg': {
    width: '10px',
    height: '6px',
  }
});

const GLinkP = styled.p({
  fontSize: '14px',
  lineHeight: '14px',
});


const SidenavLinks = class SidenavLinks extends Component {

  state = {
    showIndex: 7,
    showLoadMore: true
  };

  updateIndex = (updatedIndex, e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      showIndex: updatedIndex,
      showLoadMore: !this.state.showLoadMore
    });
  };

  render() {
    const { entity, title } = this.props;

    const IconComponent = menu[entity.title] && Icons[menu[entity.title].icon] ?
      Icons[menu[entity.title].icon] : Icons.DefaultIcon;

    return (
      <div>
        <GHotelLinksDiv>
          <input type="checkbox" id={entity.title} className="hotellinksMenu" />
          <label htmlFor={entity.title} className="wfull relative flex alignCenter spaceBetween">
            <GHotelIcon className="absolute t3 l15"><IconComponent /></GHotelIcon>
            <GLinkP className="flexFull">{title}</GLinkP>
            <GHotelDownIcon className='arrowIconContainer flex alignCenter justifyCenter'><DownArrow /></GHotelDownIcon>
            {
              title.toLowerCase() !== 'hotels' &&
              title.toLowerCase() !== 'destination guide' &&
              title.toLowerCase() !== 'holiday themes' ?
                <span className="click-overrider">
               <meta itemProp="name" content={entity.title} />
              <Link itemProp="url" content={entity.url} to={entity.url} />
            </span> :
                null
            }
          </label>
          <div className="menulinksData sbc5 pl15 pr15 ">
            {
              entity.subentities.filter(entity => entity.subentities.length).map(location => (
                <ul className="mt15">
                  <li>
                    <p className='pl0  fw9 flex spaceBetween pr0 pb8 hauto-i pt8'>
                      {location.title}
                      {
                        entity.title.toLowerCase() !== 'hotels' && location.url ?
                          <Link className="sfc1 fw7 view-all" to={location.url}>View All</Link>
                        :
                        null
                      }
                    </p>
                  </li>
                  {
                    location.subentities.map((item, index) => (
                        <li>
                          <meta itemProp="name" content={item.title} />
                          <Link className={`pl0 pt0 pb0 hauto-i mt15 mb15 ${index > this.state.showIndex ? 'hide' : ''}`}
                                itemProp="url"
                                content={item.url}
                                to={item.url}>
                            {item.title}</Link>
                        </li>
                      )
                    )}
                  {
                    location.subentities.length > 8 ?
                      <li> <span
                        className={`sfc1 pl0 pt0 pb0 hauto-i  mb15 iblock ${this.state.showLoadMore ? '' : 'hide'}`}
                        onClick={(e) =>
                          this.updateIndex(location.subentities.length, e)}>
                      Load More
                    </span></li> : null
                  }
                </ul>
              ))
            }
          </div>
        </GHotelLinksDiv>
      </div>
    );
  }
};

SidenavLinks.propTypes = {
  entity: PropTypes.object,
  items: PropTypes.object,
  title: PropTypes.string
};

export default SidenavLinks;
