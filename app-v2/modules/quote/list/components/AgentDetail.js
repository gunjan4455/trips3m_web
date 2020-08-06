import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'modules/shared/Avatar';
import RatingStar from 'modules/shared/RatingStar';

const AgentDetail = ({
                       agent
                     }) => (<div className="flex alignCenter">
    <Avatar imagePath={agent.imageUrl} name={agent.name} />
    <div className="flexFull">
      <h6 className="pfc3 f14 fw9 mb5 at_agentName">{agent.name}</h6>
      <div className="mb5 flex alignCenter">
        {agent.star ?
          <div><RatingStar rating={agent.star} /></div> : null}
      </div>
      <p className="f14 m0">
          <span className="pfc3 at_tripCount">
            {`${agent.tripsSold} Trips`}
          </span>
        <span className="ml5 mr5">|</span>
        <span className="pfc3 at_ReviewsCount">
            {`${agent.reviewsCount} Reviews`}
          </span>
      </p>
    </div>
  </div>
);

AgentDetail.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    tripsSold: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    star: PropTypes.number,
    reviewsCount: PropTypes.number,
    reviewLink: PropTypes.string
  })
};

AgentDetail.defaultProps = {
  agent: {
    star: 0,
    reviewsCount: 0,
    reviewLink: ''
  },
};

export default AgentDetail;
