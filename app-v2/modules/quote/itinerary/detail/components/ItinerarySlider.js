import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import FullWidthSlider from 'modules/shared/carousel/FullWidthSlider';
import Img from 'components/Common/Img';

const ItinerarySlider = ({ images, imgSrc }) => {

  const imagesUrl = images.map(i => i.url);
  return (
    <Modal
      trigger={
        <Img ikSrc={imgSrc} alt='activity' />
      }
      fullView={true}
      hasCustomClose={true}>
      <FullWidthSlider images={imagesUrl} />
    </Modal>
  );
};

ItinerarySlider.propTypes = {
  images: PropTypes.array.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default ItinerarySlider;
