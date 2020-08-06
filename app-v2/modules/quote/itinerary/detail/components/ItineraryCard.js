import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Flights, CabIconFront, Hotel, Sightseeing } from 'helpers/Icon/Icon';
import { getShowMoreText, getHotelOrAirportDetails } from '../../helper';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import Modal from 'modules/shared/GenericModal';
import ShowMore from 'modules/shared/ShowMore';
import Swiper from 'components/Swiper/Swiper';
import HotelOrAirportDetails from 'modules/quote/shared/HotelOrAirportDetails';
import ItinerarySlider from './ItinerarySlider';

const icons = {
  cab: CabIconFront,
  flight: Flights,
  hotel: Hotel,
  attraction: Sightseeing
};

const GItiImgDiv = styled.div({
  height: '200px',
  '& img': {
    minHeight: '200px !important'
  }
});

class ItineraryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeModal: true
    };
  }

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  handlViewDetailClick = () => {
    const object = `Day<${this.props.day}>::Activity<${
      this.props.item.sectionType
      }>`;
    this.props.trackSegmentEvent(ORGANISM_CLICKED, 'View Details', object);
  };

  handlReadMoreClick = () => {
    const object = `Day<${this.props.day}>::Activity<${
      this.props.item.sectionType
      }>`;
    this.props.trackSegmentEvent(ORGANISM_CLICKED, 'Read More', object);
  };

  render() {
    const item = this.props.item;
    const Icon = icons[item.sectionType];
    const otherDetails = item.otherDetails;

    const imagesUrl = item.imagesUrl || (otherDetails && otherDetails.imagesUrl) || [];
    const images = item.sectionType === 'hotel'
      ? imagesUrl.map(imageUrl => ({ url: imageUrl.url }))
      : imagesUrl.map(imageUrl => ({ url: imageUrl }));

    return (
      <div className='relative pl24'>
        <span className='input-24 block absolute l0 t5'>
          <Icon />
        </span>
        <div className="pl15">
          <h4 className='f16 fw9 mb4'>{item.title}</h4>
          {item.eventTime ? (
            <p className='f12 pfc4 mb8 at_eventTime'>{item.eventTime}</p>
          ) : null}
          <div className='at_readMore' onClick={this.handlReadMoreClick}>
            <ShowMore
              {...getShowMoreText(item.description, 125)}
              showMoreText="Read More"
              showLessText="Read Less"
            />
          </div>
          <GItiImgDiv className='row row- relative mt15 mb8 overflowh'>
            {item.imagesUrl && item.imagesUrl.length ? (
              <Swiper
                slideClass='slide'
                spaceBetween={8}
                slidesPerView='auto'
                rebuildOnUpdate>
                {images.map((imageUrl, i) => (
                  <ItinerarySlider key={i} imgSrc={imageUrl.url} images={images} />
                ))}
              </Swiper>
            ) : null}
          </GItiImgDiv>
          {item.otherDetails ? (
            <Modal
              trigger={
                <span
                  className='block f14 sfc1 cursorP text-right at_viewDetail'
                  onClick={this.handlViewDetailClick}>
                  View Details
                </span>
              }
              fullView={true}
              customCloseTrigger={this.state.closeModal}
              hasCustomClose={true}>
              <HotelOrAirportDetails
                info={getHotelOrAirportDetails({
                  ...item.otherDetails,
                  images: images
                })}
                closeModal={this.closePopup}
              />
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ItineraryCard;

ItineraryCard.propTypes = {
  item: PropTypes.shape({
    sectionType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eventTime: PropTypes.string,
    imagesUrl: PropTypes.array
  }).isRequired,
  trackSegmentEvent: PropTypes.func,
  day: PropTypes.number.isRequired
};
ItineraryCard.defaultProps = {
  item: {},
  trackSegmentEvent: () => {
  }
};
