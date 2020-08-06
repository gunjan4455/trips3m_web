import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';

import './Swiper.scss';

export default class Swiper extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['dots', '']),
    ssrAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    children: PropTypes.array,
    isSmallSwiper: PropTypes.bool,
    isFullWidthSwiper: PropTypes.bool,
    loadOnDocumentReady: PropTypes.bool
  };

  static defaultProps = {
    type: '',
    ssrAnimation: {},
    children: [],
    isSmallSwiper: false,
    isFullWidthSwiper: false,
    loadOnDocumentReady: false
  };

  state = {};

  renderServer = ({ width, height }) => {
    return (
      <ul style={{ overflowX: 'scroll', width: width, display: 'inline-flex' }}>
        {
          this.props.children.map((c, i) => {
            const __html = ReactDOM.renderToStaticMarkup(c)
              .replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px"`);

            return (
              <li className={this.props.children.length > 1 ? 'swiperCustomWidth' :'swiperSingleChild'}  key={i}>
                <div
                  className={'lazyloading'}
                  style={{
                    height: `${height}px`,
                    width: '100%',
                  }}
                  dangerouslySetInnerHTML={{ __html: __html }}
                />
              </li>
            );
          })
        }
      </ul>
    );
  };

  renderEmptyClient = ({ width, height }) => {
    return (
      <div style={{ width: width, height: height, overflow: 'hidden' }}>
        {this.props.children.map((child, i) => {
          return (
            <span key={i}
              className={this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild'}>
                  {child}
                </span>
          );
        })}
      </div>
    );
  };

  componentDidMount() {
    const swiperAsync = () =>
      import(/* webpackChunkName: 'swiper' */ 'react-id-swiper')
        .then(s => this.setState({ ReactIdSwiper: s.default }));

    // if (this.props.loadOnDocumentReady) {
    document.readyState === 'complete' ? swiperAsync() : window.addEventListener('load', swiperAsync);
    // } else {
    //   window.addEventListener('load', swiperAsync);
    // }
  }

  render() {
    const { ReactIdSwiper } = this.state;
    const { isSmallSwiper, isFullWidthSwiper, ssrAnimation, type } = this.props;

    if (__SERVER__) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      let swiperProps = { ...this.props };
      if (type === 'dots') {
        swiperProps = { ...swiperProps, pagination: {
          el: '.swiper-pagination',
          clickable: true
        }};
      }

      return (
        <div>
          <ReactIdSwiper {...swiperProps}>
            {this.props.children.map((child, i) => {
              return <span key={i} className={(this.props.children.length > 1 &&
                !isSmallSwiper && !isFullWidthSwiper) ?
                'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ?
                  'smallSwiperContainer block' : isFullWidthSwiper ?
                    'wfull' : 'swiperSingleChild wfull block'}>{child}</span>;
            })}
          </ReactIdSwiper>
          { type === 'dots' ? <div className="swiper-pagination" /> : null }
        </div>
      );
    }
  }
}
