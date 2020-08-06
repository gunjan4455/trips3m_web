import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { GTRendingImgDiv } from './G';
import Img from 'components/Common/Img';

export default class TrendingCard extends Component {
  static propTypes = {
    imagekitUrl: PropTypes.string,
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    searchPrice:  PropTypes.string.isRequired,
    numberOfTraveller: PropTypes.number.isRequired,
    numberOfAgents: PropTypes.number.isRequired,
    isSlider: PropTypes.bool
  };

  static defaultProps = {
    isSlider: false,
    href: ''
  };

  render() {
    const { isSlider, imagekitUrl } = this.props;
    return (
      <div>
        <Link to={this.props.href}>
          <GTRendingImgDiv className="overflowh pbc4">
          <Img src={this.props.imgPath} ikSrc={imagekitUrl} alt={this.props.title} />
        </GTRendingImgDiv>
          <div className={isSlider ? 'pt15 sbcw flex spaceBetween' : 'p15 sbcw flex spaceBetween'}>
          <div className="flexFull mr8">
            <p className="fwb m0 mb4">{this.props.title}</p>
            <p className="pfc4 m0 f12">{this.props.numberOfTraveller}+ Travelers served by {this.props.numberOfAgents}+ experts</p>
          </div>
          <div>
            <p className="f12 pfc4 m0">Starting from:</p>
            <p className="f18 m0 sfc3 fwb">₹{this.props.searchPrice}/-</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}
