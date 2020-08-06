import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';

import './Swiper.scss';

export default class Swiper extends Component {
  static propTypes = {
    ssrAnimation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    children: PropTypes.array,
    isSmallSwiper: PropTypes.bool,
    isFullWidthSwiper: PropTypes.bool,
    loadOnDocumentReady: PropTypes.bool,
    rebuildOnUpdate: PropTypes.bool,
    showLoader: PropTypes.bool,
    overflow: PropTypes.string
  };
  static defaultProps = {
    ssrAnimation: {},
    children: [],
    isSmallSwiper: false,
    isFullWidthSwiper: false,
    loadOnDocumentReady: false,
    showLoader: false,
    overflow: 'hidden'
  };
  state = {};

  componentDidMount() {
    const swiperAsync = () =>
      import(/* webpackChunkName: 'swiper' */ "react-id-swiper")
        .then(s => this.setState({ ReactIdSwiper: s.default }));

    // if (this.props.loadOnDocumentReady) {
    document.readyState === "complete" ? swiperAsync() : window.addEventListener("load", swiperAsync);
    // } else {
    //   window.addEventListener('load', swiperAsync);
    // }
  }

  renderServer = ({ width, height }) => {
    const { overflow } = this.props;
    const styles = { overflowX: 'scroll', width: width, display: 'inline-flex' };

    return (
      <ul style={styles}>
        {
          this.props.children.map((c, i) => {
            const __html = ReactDOM.renderToStaticMarkup(c)
              .replace(/<img([\w\W]+?)\/>/g, `<div style="width:${width}px; height: ${height}px" />`);

            return (
              <li className={this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild'} key={i}>
                <div
                  className={'lazyloading'}
                  style={{
                    height: `${height}px`,
                    width: '100%',
                    position: 'relative'
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
        {
          this.props.children.map((c, i) => (
            <span
              key={i}
              className={this.props.children.length > 1 ? 'swiperCustomWidth' : 'swiperSingleChild'}
              style={{
                height: `${height}px`,
                width: '100%',
              }}
            />
          ))
        }
      </div>
    );
  };

  render() {
    const { ReactIdSwiper } = this.state;
    const { isSmallSwiper, isFullWidthSwiper, ssrAnimation, showLoader } = this.props;

    if (__SERVER__) {
      return this.renderServer(ssrAnimation);
    }

    if (!ReactIdSwiper) {
      return this.renderEmptyClient(ssrAnimation);
    } else {
      return (
        <ReactIdSwiper {...this.props}>
          {
            this.props.children.map((c, i) => {
              return <span key={i} className={(this.props.children.length > 1 &&
                !isSmallSwiper && !isFullWidthSwiper) ?
                'swiperCustomWidth block' : isSmallSwiper && !isFullWidthSwiper ?
                  'smallSwiperContainer block' : isFullWidthSwiper ?
                    'wfull' : 'swiperSingleChild wfull block'}>
                {c}
                {showLoader ? <div className="swiper-lazy-preloader" /> : null}
              </span>;
            })
          }
        </ReactIdSwiper>
      );
    }
  }
}
