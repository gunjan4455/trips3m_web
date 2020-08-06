import React from 'react';

import Slider from 'modules/shared/Slider';
import BasicTrustCard from 'modules/shared/trustCards/BasicTrustCard';
import RichOrSocialTrustCard from 'modules/shared/trustCards/RichOrSocialTrustCard';
import TestimonialCard from 'modules/shared/trustCards/TestimonialCard';

import './trustCard.scss';
import Swiper from "../components/Swiper/Swiper";

const getComponentForCard = (card) => {
  switch (card.cardType){
    case 'basic': return BasicTrustCard;
    case 'rich' : return RichOrSocialTrustCard;
    case 'social' : return RichOrSocialTrustCard;
    default: return BasicTrustCard;
  }
};

export const renderCardsOrSlider = (cards) => {
  if(!(cards && cards.length)) {
    return null;
  }
  let Component;
  if(cards.length === 1){
    const singleCard = cards[0];
    Component = getComponentForCard(singleCard);
    return (
      <div className={singleCard.cardType === 'basic' ? 'm8' : 'mb8'}>
        <Component card={singleCard}/>
      </div>
    );
  }
  return (
    <div className={`trustCardContainer ${cards[0].cardType !== 'basic' ? 'sbcw mb8' : 'pl8 pr8 trustCard_basic'}`}>
      <Slider
        ssrAnimation={{ width: 270, height: 178 }}
        swiperProps={{
          pagination: cards[0].cardType === 'basic' ? {} : {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          spaceBetween: 8,
          rebuildOnUpdate: true,
          id: cards[0].cardType,
          isFullWidthSwiper: true
        }}
        type="bullets"

      >
        {cards.map((card) => {
          Component = getComponentForCard(card);
          return (<div className="wfull cardWrapper">
            <Component card={card} />
          </div>);
        })}
      </Slider>
    </div>);
};

const getCardsFromCardGroups = (item) => {
  const cardGroups = item.cardGroups;
  if(!(cardGroups && cardGroups.length)){
    return null;
  }
  let totalCards = [];
  cardGroups.forEach((cardObj) => {
    totalCards = [...totalCards, ...cardObj.cards];
  });
  return totalCards;
};

export const getAfterHotelCardsObj = (afterHotelCards) => {
  if(!(afterHotelCards && afterHotelCards.length)) {
    return {};
  }
  const afterHotelCardObj = {};
  afterHotelCards.forEach((hotelCardGroup) => {
    const cardArray = getCardsFromCardGroups(hotelCardGroup);
    const key = hotelCardGroup.position === 'after_hotel_card' ? hotelCardGroup.afterHotelCard : hotelCardGroup.position;
    if(cardArray){
      afterHotelCardObj[key] = cardArray;
    }
  });
  return afterHotelCardObj;
};

export const getComponentFromPosition = ( positionValue, cardArr ) => {
  if (!(positionValue && cardArr && cardArr.length)){
    return null;
  }
  const cardGroupItem = cardArr.filter((i) => i.position === positionValue);
  let cardPositionArray = [];
  cardGroupItem.forEach((item) => {
    cardPositionArray = [...cardPositionArray, ...getCardsFromCardGroups(item)];
  });
  return renderCardsOrSlider(cardPositionArray);
};

export const renderTestimonialCard = (testimonialCardObj, positionValue) => {
  if(!(testimonialCardObj && testimonialCardObj[positionValue])){
    return null;
  }
  return(
    <div className='m8'>
      <TestimonialCard testimonials={testimonialCardObj[positionValue]} id={`testimonial_${positionValue}`} />
    </div>
  );
};
