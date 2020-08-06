import React from 'react';
import PropTypes from 'prop-types';

import AgentChatButton from './AgentChatButton';
import { DefaultIcon } from 'helpers/Icon/Icon';

const QuoteCardHeader = ({ heading, chatButtonName, handleChatClick, icon }) => (
  <div className="pfc3 f14 pt15 pl15 pb15 pr15 flex alignCenter at_cardHeader">
    <span className="input-24 mr8 at_cardIcon">{icon}</span>
    <h3 className="flexFull f16a fw9 at_cardHeading">{heading}</h3>
    <AgentChatButton name={chatButtonName} handleChatClick={handleChatClick} />
  </div>
);

QuoteCardHeader.propTypes = {
  heading: PropTypes.string,
  chatButtonName: PropTypes.string,
  category: PropTypes.string,
  icon: PropTypes.node,
  handleChatClick: PropTypes.func
};

QuoteCardHeader.defaultProps = {
  heading: '',
  chatButtonName: '',
  category: '',
  icon: <DefaultIcon />,
  handleChatClick: () => {
  }
};

export default QuoteCardHeader;
