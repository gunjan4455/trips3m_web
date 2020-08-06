import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import { GOutgoingMsg } from '../G';
import { format } from 'helpers/DateTime';
import Avatar from 'modules/shared/Avatar';

const htmlToReactParser = new Parser();

const OutgoingMessage = ({
                           messageId,
                           messageContent,
                           userName,
                           userImg,
                           deliveryTime,
                           attachments
                         }) => (
  <GOutgoingMsg className="row row- user-agent-message-container mb15 flex">
    <Avatar imagePath={userImg} name={userName || ''} />
    <div className="user-message at_usermessage flexFull mr15">
      <p className="m0 f12 pfc3 text-preWrap">{htmlToReactParser.parse(messageContent)}</p>
      {
        attachments.map((attachment, index) => (
          <a href={attachment.file} download key={`attachment${messageId}${index}`}>
            {attachment.fileName}
          </a>
        ))
      }
      <p className="f10 m0 pfc4 pt8">{format(parseInt(deliveryTime, 10), 'DD MMM YYYY @ HH:mm a')}</p>
    </div>
  </GOutgoingMsg>
);

OutgoingMessage.propTypes = {
  messageId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  messageContent: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userImg: PropTypes.string,
  deliveryTime: PropTypes.number.isRequired,
  attachments: PropTypes.array
};

OutgoingMessage.defaultProps = {
  userImg: null,
  attachments: [],
};

export default OutgoingMessage;

