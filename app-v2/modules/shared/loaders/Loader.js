import React from 'react';
import PropTypes from 'prop-types';

import { GLoaderContainerDiv, GLoaderBoxSpan, GLoaderLineDiv } from '../G';

export default class Loader extends React.Component {
  static propTypes = {
    lineVisible: PropTypes.object,
    cardVisible: PropTypes.object,
  };
  static defaultProps = {
    lineVisible: {},
    cardVisible: {},
  };

  render() {
    const { lineVisible, cardVisible } = this.props;
    return (
      <GLoaderContainerDiv className="flex flexFull flexDColumn wfull">
        <div className="loaderLine mb15 sbcw" style={lineVisible} />
        <div className="flexFull radius2 loaderMain">

          <div className="loaderMainCard p24 flexFull sbcw">
            <div className="loaderData flex">
              <GLoaderBoxSpan className="sbc5" />
              <GLoaderLineDiv className="flexFull flex ml8">
                <div className="loaderLineDark sbc5 mb8 sbc4" />
                <div className="loaderLineDark sbc5 sbc4" />
              </GLoaderLineDiv>
            </div>
            <div className="loaderLineDark sbc5 mt15 mb15" style={lineVisible} />
          </div>

          <div className="loaderMainCard p24 ml15 mr15 flexFull sbcw hiddenCard"
               style={cardVisible}>
            <div className="loaderData flex">
              <GLoaderBoxSpan className="sbc5" />
              <GLoaderLineDiv className="flexFull flex ml8">
                <div className="loaderLineDark sbc5 mb8 sbc4" />
                <div className="loaderLineDark sbc5 sbc4" />
              </GLoaderLineDiv>
            </div>
            <div className="loaderLineDark sbc5 mt15 mb15" style={lineVisible} />
          </div>

          <div className="loaderMainCard p24 flexFull sbcw hiddenCard" style={cardVisible}>
            <div className="loaderData flex">
              <GLoaderBoxSpan className="sbc5" />
              <GLoaderLineDiv className="flexFull flex ml8">
                <div className="loaderLineDark sbc5 mb8 sbc4" />
                <div className="loaderLineDark sbc5 sbc4" />
              </GLoaderLineDiv>
            </div>
            <div className="loaderLineDark sbc5 mt15 mb15" style={lineVisible} />
          </div>

        </div>
      </GLoaderContainerDiv>
    );
  }
}
