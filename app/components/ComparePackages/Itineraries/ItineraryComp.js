import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';


const ItineraryComp = ({ itinerary }) => {
  if (itinerary.itinerary_present) {
    return (<div className='col-xs-6 p8'>
      <h6 className='f14 fw9 pfc3'>{itinerary.title}</h6>
      <ul className='list-style-no p0'>
        {
          itinerary.description
            .replace(/<\/?p>/g, '')
            .split(':::').map((item, i) => (
              /* eslint-disable react/no-array-index-key */
              <li key={i} className='relative pl24 pt8 f14'>
                <span className='bulletGray absolute l0' />
                <span dangerouslySetInnerHTML={{ __html: `${item}` }} />
              </li>
              /* eslint-enable */
          ))
        }
      </ul>
    </div>);
  }
  return <div className='col-xs-6 p8 borderRightB' />;
};

ItineraryComp.propTypes = {
  itinerary: PropTypes.object.isRequired
};

export default ItineraryComp;
