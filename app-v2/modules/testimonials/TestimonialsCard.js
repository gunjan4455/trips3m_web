import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AgentRating from 'modules/shared/agentProfile/AgentRating';
import ShowMore from 'modules/shared/ShowMore';
import { parseDestinationId } from '../../screens/testimonials/reducer';

const parseString = (content) => {
  const start = 195;

  if (content.length <= start) {
    return {
      aboutLess: content.substring(0, start),
      aboutMore: ''
    };
  }
  return {
    aboutLess: content.substring(0, start),
    aboutMore: content.substring(start)
  };
};

const TestimonialsCard = ({ testimonialBody, title, rating, id, destination, params, location }) => {
  return (
    <div>
      {
        params.destination ?
          <div>
            <div className="mb4 flex flexCenterItems">
              <h6 className="fw7 pfc1 f16 m0 mr8 _title">{title}</h6>
              <AgentRating agentRating={rating} />
            </div>
            <ShowMore
              wrapText={parseString(testimonialBody).aboutLess}
              moreText={parseString(testimonialBody).aboutMore}
              showMoreText="Read More"
              showLessText="Read Less"
              appendText={'...'}
            />
          </div> :
          <div>
            <div className="mb4 flex flexCenterItems">
              <Link className='pfc3' to={`/testimonials/${id}-${title}-reviews?destination=${destination}`}>
                <h6 className="fw7 pfc1 f16 m0 mr8 mb8 _title iblock">{title}</h6>
              </Link>

              <AgentRating agentRating={rating} />
            </div>
            <ShowMore
              wrapText={parseString(testimonialBody).aboutLess}
              moreText={parseString(testimonialBody).aboutMore}
              showMoreText="Read More"
              showLessText="Read Less"
              appendText={'...'}
            />
          </div>
      }
    </div>
  );
};

TestimonialsCard.propTypes = {
  testimonialBody: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  destination: PropTypes.string,
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default TestimonialsCard;
