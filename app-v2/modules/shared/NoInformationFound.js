import React from 'react';
import { PropTypes } from 'prop-types';

import { BusIllus } from 'helpers/Icon/Icon';

import { GBusIconDiv, GErrorBodyDiv } from './G';

export default class NoInformationFound extends React.Component {
  static propTypes = {
    noInfoHeading: PropTypes.string,
  };
  static defaultProps = {
    noInfoHeading: 'We couldn\'t find the information',
  };

  render() {
    const { noInfoHeading } = this.props;
    return (
      <div className="flex flexDColumn flexFull">
        <h6 className="f16 m0 fw7 mb15">{noInfoHeading}</h6>
        <GErrorBodyDiv className="clearfix radius2 sbcw flexFull flexDColumn p48">
          <GBusIconDiv className="relative mb8">
            <BusIllus />
          </GBusIconDiv>
          <div className="fw4 text-center wfull pfc3 m0">
            <span className="pfc1 f24 mb4 block">Uh ho!</span>
            <span className="f16 block">We couldn't find the information</span>
          </div>
        </GErrorBodyDiv>
      </div>
    );
  }
}
