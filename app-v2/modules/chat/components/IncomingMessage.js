import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import Avatar from 'modules/shared/Avatar';
import { format } from 'helpers/DateTime';
import { GIncomingMsg, GChatTextP } from '../G';

const htmlToReactParser = new Parser();

const IncomingMessage = ({
                           messageId, messageContent, userName, userImg, deliveryTime, attachments
                         }) => (
  <GIncomingMsg className="row row- user-agent-message-container mb15 flex">
    <Avatar imagePath={userImg} name={userName || ''} />
    <div className='agent-message flexFull mr15'>
      <GChatTextP className="m0 f12 pfc3">{htmlToReactParser.parse(messageContent)}</GChatTextP>
      {
        attachments.map((attachment, index) => (
          <a href={attachment.file} download key={`attachment${messageId}${index}`}>
            {attachment.fileName}
          </a>
        ))
      }
      <p className="m0 pfc4 f10 pt8">{format(parseInt(deliveryTime, 10), 'DD MMM YYYY @ HH:mm a')}</p>
    </div>
  </GIncomingMsg>
);

IncomingMessage.propTypes = {
  messageId: PropTypes.number.isRequired,
  messageContent: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userImg: PropTypes.string,
  deliveryTime: PropTypes.number.isRequired,
  attachments: PropTypes.array
};

IncomingMessage.defaultProps = {
  userImg: null,
  attachments: [],
};

export default IncomingMessage;

