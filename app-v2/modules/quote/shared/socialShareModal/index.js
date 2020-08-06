import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { WhatsAppIcon, GmailIcon } from 'helpers/Icon/Icon';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';

const GIconSpan = styled.span({
  width: '24px',
  height: '24px',
  left: '12px',
});

const GLinkDiv = styled.div({
  '& a': {
    border: '1px solid #d4d4d4',
  }
});

export default class SocialShareModal extends Component {
  static propTypes = {
    sharedBy: PropTypes.string,
    shareLink: PropTypes.string,
    trackSegment: PropTypes.func
  };

  static defaultProps = {
    trackSegment: () => {}
  };

  render() {
    return (
      <div className="sbcw">
        <ModalHeaderCustom heading='Share with' />
        <div className="p24">
          <div className="mb15">
            <a href={`whatsapp://send?text=${this.props.shareLink}`}
               data-action="share/whatsapp/share"
               className="block input-with-icon-box flex alignCenter justifyCenter text-center sbc3 sfcw radius2 f14p">
              <GIconSpan className="absolute-center-v"><WhatsAppIcon /></GIconSpan>
              Whatsapp
            </a>
          </div>
          <GLinkDiv>
            <a
              href={`mailto:?subject=${this.props.sharedBy} shared a quote with you on the behalf of Travel Triangle&amp;body=${this.props.shareLink}`}
              className="block input-with-icon-box flex alignCenter justifyCenter text-center pfc2 radius2 f14p">
              <GIconSpan className="absolute-center-v"><GmailIcon /></GIconSpan>
              Gmail
            </a>
          </GLinkDiv>
        </div>
      </div>
    );
  }
}

