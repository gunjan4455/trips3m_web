import React from 'react';
import PropTypes from 'prop-types';
import { GLoaderContainerDiv, GLoaderCardSpan } from './../G';

export default class LoaderCard extends React.Component {
  static propTypes = {
    lineVisible: PropTypes.object,
    cardVisible: PropTypes.object,
  };
  static defaultProps = {
    lineVisible: {},
    cardVisible: {},
  };

  render() {
    const { cardVisible } = this.props;
    return (
      <GLoaderContainerDiv className="flex flexFull flexDColumn wfull">
        <div className="loaderLine mb5 mt0 sbc5" style={{ width: '60%' }} />
        <div className="loaderLine mb15 mt0 sbc5" style={{ width: '70%' }} />
        <div className="loaderMain radius2 flexFull">
          <div className="loaderMainCard flexFull">
            <GLoaderCardSpan className="wfull sbc5" />
            <div className="sbcw p15 pb24 wfull">
              <div className="loaderLineDark sbc5 mb15 sbc4" style={{ maxWidth: '80%' }} />
              <div className="loaderLineDark sbc5 mb8 sbc4" />
              <div className="loaderLineDark sbc5 sbc4" />
            </div>
          </div>
        </div>
      </GLoaderContainerDiv>
    );
  }
}
