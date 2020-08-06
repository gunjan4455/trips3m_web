import React from 'react';
import PropTypes from 'prop-types';

const ItineraryPictureSlider = ({ pictures, heading, id, ket }) => (
    <ul className="list-style-no itinerary-images-container">
      {
        pictures.map((picture, i) => (
          <li key={i}>
            <amp-img
              src={picture.picture_details.imagekit_url}
              alt={picture.picture_details.caption}
              layout="responsive"
              width="140px"
              height="100px"
              data-amp-bind-class={`itinerary_${id}_${ket} ? 'itinerary_${id}_${ket} amp_itenary_image' : 'amp_itenary_image'`}
              class="amp_itenary_image">
            </amp-img>
          </li>
        ))
      }
    </ul>
);

ItineraryPictureSlider.propTypes = {
  pictures: PropTypes.array,
  heading: PropTypes.string,
  id: PropTypes.number,
  ket: PropTypes.number
};


export default ItineraryPictureSlider;
