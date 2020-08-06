import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const GSeoFooterDiv = styled.div({
  overflow: 'hidden',
  borderTop: '1px solid #3e3e3e',
  '& .tabsHeadings': {
    '& > div': {
      display:'none',
      '&.selected-content' : {
        display:'block'
      }
    },
    '& .tabsHeadingsMain': {
      overflowX: 'scroll',
      '& .selected-heading': {
        background: '#fff',
        borderColor: '#aaa',
        color: 'black',
        border: '0 none',
        backgroundColor: '#f1f1f1',
        '&::before, &::after': {
          backgroundColor: '#3e3e3e'
        },
        '&::before': {
          transform: 'rotate(-45deg)',
        },
        '&::after': {
          transform: 'rotate(-135deg)',
        },
      },
      '& li': {
        whiteSpace: 'pre',
        height: '48px',
        padding: '0 30px 0 10px',
        alignItems: 'center',
        display: 'flex',
        '&::before, &::after': {
          content: '\' \'',
          position: 'absolute',
          width: '1px',
          height: '6px',
          background: '#fff',
          top: '22px',
        },
        '&::before': {
          transform: 'rotate(45deg)',
          right: '10px',
        },
        '&::after': {
          transform: 'rotate(135deg)',
          right: '13px',
        },
      }
    }
  }
});

class SeoFooter extends Component {
  state = {
    selectedSeoFooterHeading: -1
  };

  footerSectionHeadingHandler = (i) => {
    const { selectedSeoFooterHeading } = this.state;
    if (selectedSeoFooterHeading === i ){
      return this.setState({ selectedSeoFooterHeading: -1 });
    }
    this.setState({selectedSeoFooterHeading: i});
  };

  render() {
    const { footerSections } = this.props;
    const { selectedSeoFooterHeading } = this.state;
    return (
      <GSeoFooterDiv>
        <div className='tabsHeadings pbc3'>
          <ul className='tabsHeadingsMain flex'>
            {
              footerSections.map((footerSection, i) => (
                <li
                  onClick={() => this.footerSectionHeadingHandler(i)}
                  className={`alignCenter relative fw7 sfcw m0 f14 ${i === selectedSeoFooterHeading ? 'selected-heading' : '' }`} key={footerSection.name}>{footerSection.name}</li>
              ))
            }
          </ul>
          {
            footerSections.map((footerSection, i) => (
              <div className={`sbcw ${i === selectedSeoFooterHeading ? 'selected-content' : ''}`}>
                <div className='p15'>
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
      </GSeoFooterDiv>
    );
  }
}


SeoFooter.propTypes = {
  footerSections: PropTypes.array.isRequired,
};

export default SeoFooter;
