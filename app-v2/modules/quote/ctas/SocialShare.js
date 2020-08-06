import React from 'react';
import PropTypes from 'prop-types';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { ShareWhite } from "helpers/Icon/Icon";
import Modal from 'modules/shared/GenericModal';
import SocialShareModal from 'modules/quote/shared/socialShareModal';

const SocialShare = ({ trackSegment, sharedBy, shareLink }) => {

  return (<span className="mr15">
    <Modal
      trigger={<span className="input-24 iblock" onClick={() => trackSegment(ORGANISM_CLICKED, 'Share')}> <ShareWhite /></span> }
      fullView={true}
      hasCustomClose={true}
    >
      <SocialShareModal sharedBy={sharedBy} shareLink={shareLink} />
    </Modal>
  </span>);
};

SocialShare.propTypes = {
  sharedBy: PropTypes.string.isRequired,
  shareLink: PropTypes.string.isRequired,
  trackSegment: PropTypes.func,
};

SocialShare.defaultProps = {
  trackSegment: () => {
  },
};

export default SocialShare;
