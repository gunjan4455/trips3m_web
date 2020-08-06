import React from 'react';
import './AnimatedBanner.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  NotificationBell,
  CloseWhite
} from 'helpers/Icon/Icon';

import {
  isLoaded,
  loadContent,
  isContent,
  content,
} from 'reducers/animatedBanner';


@connect(
  state => ({
    isLoaded: isLoaded(state),
    isContent: isContent(state),
    content: content(state)
  }),
  {
    loadContent
  }
)

class AnimatedBanner extends React.Component {
  static propTypes = {
    isContent: PropTypes.bool.isRequired,
    loadContent: PropTypes.func.isRequired,
    content: PropTypes.object
  };
  static defaultProps = {
    content: {},
    loadContent: () => {},
    isContent: false
  };
  constructor() {
    super();
    this.state = {
      isBannerContent: false,
      bannerShow: false,
      show: true,
      firstScroll: true
    };
    this.closeBanner = this.closeBanner.bind(this);
    this.setScroll = this.setScroll.bind(this);
    this.isComponentRendered = this.isComponentRendered.bind(this);
  }
  componentDidMount() {
    let pagePath = '';
    if (typeof window !== 'undefined') {
      pagePath = window.location.pathname;
    }
    this.props.loadContent({
      path: pagePath
    });
  }
  clearScrollEvent(){
    if(typeof window !== "undefined"){
      window.removeEventListener('scroll', this.setScroll);
    }
  }
  componentWillUnmount() {
    this.clearScrollEvent();
  }
  setScroll() {
    if (this.state.show) {
      if (this.state.firstScroll) {
        document.getElementById('animated-banner-u').style.top = 0;
        this.setState({
          firstScroll: false
        });
      }
      let bannerShow = false;
      const winHeight = window.innerHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight,
                      html.clientHeight, html.scrollHeight, html.offsetHeight);
      const value = window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
      const max = docHeight - winHeight;
      const percent = (value / max) * 100;
      if (percent >= 10) {
        bannerShow = true;
      } else {
        bannerShow = false;
      }
      if (this.state.bannerShow !== bannerShow) {
        this.setState({
          bannerShow
        });
      }
    }
  }
  isComponentRendered() {
    window.addEventListener('scroll', this.setScroll);
  }
  closeBanner(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      bannerShow: false,
      show: false
    });
  }
  render() {
    if (!this.props.isContent) {
      this.clearScrollEvent();
      return <div />;
    }
    this.isComponentRendered();
    const data = this.props.content;
    return (
      <div id="animated-banner-u" style={{ top: '-100px' }} className={(this.state.bannerShow) ? 'clearfix fixed wfull t0 pbc1 animated-sticky-footer showFooter' : 'clearfix fixed wfull t0 pbc1 animated-sticky-footer'}>
        <a href={data.redirect_url} className='col-xs-12 p0 block'>
          <div className='absolute-center-v l5'><span className='icon-span'><NotificationBell /></span></div>
          <div className='bann-content-div col-xs-11 sfcw f14'>
            <p className='m0'>Hey there!</p>
            <p className='m0 fw9'>{data.text}</p>
          </div>
          <div className='col-xs-1 p0 text-right'><button className='close-icon iblock' onClick={this.closeBanner}><CloseWhite /></button></div>
        </a>
      </div>
    );
  }
}

export default AnimatedBanner;
