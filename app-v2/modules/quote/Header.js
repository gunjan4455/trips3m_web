import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Back2IconWhite } from 'helpers/Icon/Icon';
import { rtripPath, downloadQuoteUrl } from 'helpers/urlHelpers';
import Notification from 'modules/notifications';
import { getFullName } from 'helpers/utils';
import SocialShare from 'modules/quote/ctas/SocialShare';
import { formatURL } from 'utils/parsers';
import { trackSegment } from 'actions/segmentEvents';

class Header extends Component {
  static propTypes = {
    tripId: PropTypes.number.isRequired,
    trackSegment: PropTypes.func,
    currentQuoteId: PropTypes.number.isRequired,
    userDetails: PropTypes.object.isRequired
  };

  static defaultProps = {
    trackSegment: () => {}
  };

  trackSegmentEvent = (event, cta, object = '') => {
    this.props.trackSegment({
      event,
      section: 'Sticky Bar',
      object: object,
      cta
    });
  };

  render() {
    const { currentQuoteId, userDetails } = this.props;
    const NotificationContainer = Notification.container;
    const shareLink = formatURL({ path: downloadQuoteUrl(currentQuoteId) });

    return (
      <div className="pbc1 p8 flex">
        <a
          href={rtripPath(this.props.tripId)}
          className="mr8 input-24 p4 iblock"
        >
          <Back2IconWhite />
        </a>
        <p className="f16 flex alignCenter fw7 sfcw flexFull ellipsis">
          Quote Details
        </p>
        <SocialShare
          sharedBy={getFullName(userDetails.first_name, userDetails.last_name)}
          shareLink={shareLink} key="cta-social-share"
          trackSegment={this.trackSegmentEvent}
        />
        <NotificationContainer />
      </div>
    );
  }
}

export default Header;
