import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Common/Img';

const ItineraryPopup = ({ pictures, heading }) => {
  return (
        <div>
          <p className="f16 text-left fw4 pl48 pt8 pb15 pr15 absolute t3">{heading}</p>
          <ul className="list-style-no itinerary-images-container" onClick={(e) => this.openImagesPopup(e)}>
            {
              pictures.map((picture, i) => (
                  <li >
                    <Img key={i} src={picture.picture_details.picture} ikSrc={picture.picture_details.imagekit_url}
                         alt={picture.picture_details.caption} />
                  </li>
                )
              )
            }
          </ul>
        </div>
  );
};

ItineraryPopup.propTypes = {
  pictures:PropTypes.array.isRequired,
  heading:PropTypes.string
};

export default ItineraryPopup;
