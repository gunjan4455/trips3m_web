import React from 'react';
import PropTypes from 'prop-types';

import ShowMore from 'modules/shared/ShowMore';

export default class OtherOffers extends React.Component {

  static propTypes = {
    offers: PropTypes.array
  };

  static defaultProps = {
    offers: []
  };

  getShowMoreProps = (offer) => {
    return {
      wrapText: offer.tnc ? offer.tnc.substr(0, 82) : '',
      moreText: offer.tnc && offer.tnc.length > 82 ? offer.tnc.substr(82) : ''
    };
  };

  render() {
    return (
      <div>
        <h3 className="f14p fw9 pfc3 mb15">View Other Offers</h3>
        {
          this.props.offers.map((offer, index) =>
            <div className="otherOfferList radius2 p15 mb8" key={index}>
              <h4 className="f16p fw7 pfc3">{offer.heading}</h4>
              <div className="f12 pfc4 m0"><ShowMore {...this.getShowMoreProps(offer)} /></div>
            </div>)
        }
      </div>
    );
  }
}

