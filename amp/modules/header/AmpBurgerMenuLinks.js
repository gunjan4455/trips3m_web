import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from 'amp/helpers/Action';

const AmpBurgerMenuLinks = class BurgerMenuLinks extends Component {

  state = {
    showIndex: 7,
    showLoadMore: true
  };

  renderSubEntities = (item, index) => (
    <li>
      <meta itemProp="name" content={item.title} />
      <a className={`pl0 pt0 pb0 hauto-i mt15 mb15 ${index > this.state.showIndex ? 'hide' : ''}`}
         itemProp="url"
         content={item.url}
         href={item.url}>
        {item.title}</a>
    </li>
  );

  render() {
    const { entity, title } = this.props;
    const iconClass = title.toLowerCase().split(' ').join('_');
    const uniqueId = entity.title.replace(/\s/g, '');
    return (
      <Action events={{ tap: [`AMP.setState({showHeading${uniqueId} : !showHeading${uniqueId}})`] }}>
        {(props) => (
          <li className="sidenav-amp" {...props} role="button" tabIndex="0">
            <p className="sidebar-list">
              <a href={entity.url}>{title}
                <span className={`sidenav-icons ${iconClass}`} />
              </a>
              <span className="arrowDown" />
            </p>
            <div>
              {
                title.toLowerCase() !== 'hotels' &&
                title.toLowerCase() !== 'destination guide' &&
                title.toLowerCase() !== 'holiday themes' ?
                  <span className="click-overrider">
                <meta itemProp="name" content={entity.title} />
                <a itemProp="url" content={entity.url} href={entity.url} />
              </span> :
                  null
              }
              {
                entity.subentities.filter(entity => entity.subentities.length).map((location, index) => (
                  <ul className="hide" id={`${uniqueId}${index}`} data-amp-bind-class={`showHeading${uniqueId} ? 'list-side-menu m0 sbc5 listLink list-reset subMenu': 'hide'`}>
                    <li>
                      <p className='pl0 pl15 fw9 flex spaceBetween alignCenter pr0 hauto-i'>
                        {location.title}
                        {
                          entity.title.toLowerCase() !== 'hotels' && location.url ?
                            <a className="sfc1 fw7 view-all  height link" href={location.url}>View All</a>
                            :
                            null
                        }
                      </p>
                    </li>
                    {
                      location.subentities.slice(0, 7).map((item, index) => (
                          <li>
                            <meta itemProp="name" content={item.title} />
                            <a className={`pl0 pt0 pb0 hauto-i mt15 mb15 ${index > this.state.showIndex ? 'hide' : ''}`}
                               itemProp="url"
                               content={item.url}
                               href={item.url}>
                              {item.title}</a>
                          </li>
                        )
                      )
                    }
                    {
                      location.subentities.length > 7 &&
                      location.subentities.slice(7, location.subentities.length).map((item, index) => (
                          <li data-amp-bind-class={`showLink${uniqueId} ? '' : 'hide'`} className="hide"
                              id={`${uniqueId}${index}`}>
                            <meta itemProp="name" content={item.title} />
                            <a
                              className="pl0 pt0 pb0 hauto-i mt15 mb15"
                              itemProp="url"
                              content={item.url}
                              href={item.url}>
                              {item.title}</a>
                          </li>
                        )
                      )
                    }
                    {
                      location.subentities.length > 8 ?
                        <li className=""
                            key={uniqueId}
                            data-amp-bind-class={`showLink${uniqueId} ? "hide" : ""`}>
                          <Action events={{ tap: [`AMP.setState({showLink${uniqueId} : true})`] }}>
                            {(props) => (
                              <button {...props}>
                                <div className="load-more f14 link"
                                     id={`button${uniqueId}`}>
                                  Load More
                                </div>
                              </button>)}
                          </Action>
                        </li> : null
                    }
                  </ul>
                ))
              }
            </div>
          </li>
        )}
      </Action>

    );
  }
};

AmpBurgerMenuLinks.propTypes = {
  entity: PropTypes.object,
  items: PropTypes.object,
  title: PropTypes.string
};

export default AmpBurgerMenuLinks;
