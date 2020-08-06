import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Common/Img';

class TripAdvisorHotel extends React.Component {
  componentDidMount() {
    const jsElm = document.createElement('script');
    jsElm.type = 'application/javascript';
    jsElm.src = `https://www.tripadvisor.in/WidgetEmbed-socialButtonBubbles?color=green&size=rect&locationId=${this.props.trip_adviser_id}&display_version=2&uniq=${this.props.hotel_id}&lang=en_IN`;
    document.head.appendChild(jsElm);

    const jsElmR = document.createElement('script');
    jsElmR.type = 'application/javascript';
    jsElmR.src = `https://www.tripadvisor.com/WidgetEmbed-socialButtonReviews?locationId=${this.props.trip_adviser_id}&border=false&uniq=${this.props.hotel_id}r&lang=en_US&display_version=2`;
    document.head.appendChild(jsElmR);
  }

  render() {
    return (
      <div className="columns medium-12">
        <div id={`TA_socialButtonBubbles${this.props.hotel_id}`} className="TA_socialButtonCommon">
          <ul id={`FrCxeW1fkXc${this.props.hotel_id}`} className="TA_links V0e6TUi1on">
            <li id={`PUI4wc${this.props.hotel_id}`} className="jSzfW9f">
              <a target="_blank" rel="nofollow noopener noreferrer">
                <div className="f12 mb0">
                  <Img alt="Trip Advisor" src="https://www.tripadvisor.in/img/cdsi/img2/branding/socialWidget/20x28_green-21693-2.png" height={20}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id={`TA_socialButtonReviews${this.props.hotel_id}r`} className="TA_socialButtonCommon">
          <ul id={`ERYniZU6J${this.props.hotel_id}r`} className="TA_links 34mctSv">
            <li id={`NXD14V56CX${this.props.hotel_id}r`} className="kbMvz20Ku">
              <a target="_blank" rel="nofollow noopener noreferrer">
                <div className="f12 mb0">
                  <Img alt="Trip Advisor" src="https://www.tripadvisor.in/img/cdsi/img2/branding/socialWidget/20x28_green-21693-2.png" height={20}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

TripAdvisorHotel.propTypes = {
  hotel_id: PropTypes.string.isRequired,
  trip_adviser_id: PropTypes.number.isRequired
};

export default TripAdvisorHotel;
