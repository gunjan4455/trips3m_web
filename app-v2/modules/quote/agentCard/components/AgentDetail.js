import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'modules/shared/Avatar';
import RatingStar from 'modules/shared/RatingStar';
import AgentOnlineIndicator from 'modules/shared/agentProfile/AgentOnlineIndicator';

const AgentDetail = ({
                       agent, userDetails
                     }) => (<div className="flex alignCenter">
    <Avatar imagePath={agent.imageUrl} name={agent.name} />
    <div className="flexFull">
      <a className="pfc3" href={agent.reviewLink} rel="noopener noreferrer">
        <h6 className="f14 fw9 mb5">{agent.name}</h6>
      </a>
      <div className="mb5 flex alignCenter">
        <AgentOnlineIndicator
          showPresenceMessage={true}
          userId={agent.id}
          userDetails={userDetails}
        />
        {agent.star ?
          <div className="ml8"><RatingStar rating={agent.star} /></div> : null}
      </div>
      <p className="f14 m0">
        <a className="pfc3 at_tripCount" href={agent.reviewLink}>
          {`${agent.tripsSold} Trips`}
        </a>
        <span className="ml5 mr5 pfc4">|</span>
        <a className="pfc3 at_ReviewsCount" href={agent.reviewLink}>
          {`${agent.reviewsCount} Reviews`}
        </a>
      </p>
    </div>
  </div>
);

AgentDetail.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tripsSold: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    star: PropTypes.number,
    reviewsCount: PropTypes.number,
    reviewLink: PropTypes.string
  }),
  userDetails: PropTypes.object.isRequired,
};

AgentDetail.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  },
};

export default AgentDetail;
