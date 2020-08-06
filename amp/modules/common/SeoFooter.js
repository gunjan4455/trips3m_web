import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SeoFooter.scss';
import Action from 'amp/helpers/Action';

class SeoFooter extends Component {
  state = {
    selectedSeoFooterHeading: -1
  };

  render() {
    const { footerSections } = this.props;
    const { selectedSeoFooterHeading } = this.state;
    return (
      <div className="seo-footer-options">
        <div className='tabsHeadings pbc3'>
          <ul className='tabsHeadingsMain flex m0 p0'>
            {
              footerSections.map((footerSection, i) => (
                <li className={`alignCenter m0 ${i === selectedSeoFooterHeading ? 'selected-heading' : '' }`} key={footerSection.name}>
                  <Action events={{ tap: [`AMP.setState({
                  showIndex : ${i}, footerSection${i} : !footerSection${i}
                  })`]}}
                  >
                    {(props) => (
                  <button className="fw7 sfcw f14" {...props}>{footerSection.name}</button>)}
                  </Action>
                  </li>
              ))
            }
          </ul>
          {
            footerSections.map((footerSection, i) => (
              <div className='sbcw'
              data-amp-bind-class={`showIndex == ${i} ? 'sbcw selected-content': 'sbcw'`}>
                <div className='p15'
                     data-amp-bind-class={`footerSection${i} ? 'p15' : 'hide'`}>
                  {
                    footerSection.footer_links.map(footerLink => (
                      <Link className='block pfc3 mb8' key={footerLink.url} to={footerLink.url}>{footerLink.name}</Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

SeoFooter.propTypes = {
  footerSections: PropTypes.array.isRequired,
};

export default SeoFooter;
