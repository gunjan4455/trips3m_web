import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Swiper from 'components/Swiper/Swiper';
import { WeatherIcon } from 'helpers/Icon/Icon';

const WeatherContainer = styled.div({
  display: 'flex',
});

const GWeatherContainerInnerDiv = styled.div({
  border: '1px solid #ccc',
});

const Icon = styled.div({
  margin: '8px auto',
  width: '28px',
  height: '22px',
  display: 'block',
});

const Weather = ({ weatherInfo }) => {
  return (
    <div className="clearfix">
      {weatherInfo.title ? (
        <h4 className="text-capitalize f16 pfc1 fwb m0 mb15">
          {weatherInfo.title}
        </h4>
      ) : null}
      <WeatherContainer className="clearfix">
        <Swiper
          id="weatherSwiper"
          spaceBetween={15}
          slidesPerView="auto"
          ssrAnimation={{ width: 280, height: 186 }}
          rebuildOnUpdate
        >
          {weatherInfo.dates.map((item, i) => (
            <GWeatherContainerInnerDiv key={i} className="text-center p15">
              <p>{item.date}</p>
              <Icon className="relative">
                <WeatherIcon />
              </Icon>
              <p className="f16 fwb m0 pfc1 pb8">
                {item.fahrenheit} | {item.celsius}
              </p>
              <p className="m0 mb15 ellipsis-two">{item.heading}</p>
              <p className="m0 f12">{item.humidity}</p>
            </GWeatherContainerInnerDiv>
          ))}
        </Swiper>
      </WeatherContainer>
    </div>
  );
};

Weather.propTypes = {
  weatherInfo: PropTypes.object.isRequired
};

export default Weather;
