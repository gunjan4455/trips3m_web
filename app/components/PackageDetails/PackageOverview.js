/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BlueDownArrow
} from 'helpers/Icon/Icon';

import './PackageOverview.scss';

const PackageOverview = ({ overview }) => (
  <div className="row row- pl8 pr8">
    <div className="container p15 sbcw about-destination">
      <h2 className="text-center pb5 heading-h2">Honeymoon In Kerala</h2>
      <div className="about-destination-p f14p text-center pt8 pb15">
        {overview}
      </div>
      <div className="about-destination-p f14p text-center pt8 pb15 expand--content">
        <p>
          The best time to visit Kerala for a fun-filled vacation is considered to be during the months of October and March. During winters, weather in Kerala is pleasant enough to make travelers feel comfortable. The temperature, during these months, ranges from 24-degrees Centigrade to 30-degrees Centigrade. Monsoon is also preferred by those availing Kerala houseboat packages, since the backwaters are fuller, and the surroundings seem greener.<br />
          <br />
          The off season in Kerala, primarily summers, serves as a peak time to visit Kerala for its hill stations. Moreover, this season offers the cheapest tour packages of Kerala to holiday-makers.<br />
          The hill stations in Kerala remain cooler than other popular places in South, thus making them an year-round holiday destinations. Some of the most popular hill stations in Kerala here are:<br />
          <br />
          <b>Munnar:</b> Munnar is a part of the travel itinerary of all Kerala tour packages, due to the tea gardens and colonial heritage. It is also a popular weekend destination in Kerala for travelers from Bangalore, Hyderabad & Chennai.
          <br /><br />
          <b>Wayanad:</b> Those looking for adventure, make sure that Wayanad is a part of their trip to Kerala for camping and trekking expeditions.
          <br /><br />
          <b>Thekkady:</b> Thekkady is a part of most of the Kerala trip itineraries. It offers the chance to spot rare wildlife.
          <br /><br />
          <b>Ponmudi:</b> Ideal for those looking for offbeat packages to Kerala, Ponmudi has year-round rivulets and waterfalls.
          <br /><br />
          <b>Idukki:</b> Part of extended Kerala packages, Idukki is famed for wildlife sanctuaries, spice plantations, elephant rides and the mountain treks.
        </p>
      </div>
      <div className="row row-">
        <a className="read-more fright text-right f12 inline-block" >Read More <BlueDownArrow className="ml4 expand-arrow" /></a>
      </div>
    </div>
  </div>
);

PackageOverview.propTypes = {
  overview: PropTypes.string.isRequired
};

export default PackageOverview;
