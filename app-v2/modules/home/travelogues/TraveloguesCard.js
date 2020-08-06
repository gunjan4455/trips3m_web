import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from 'modules/shared/RatingStar';
import Img from 'components/Common/Img';

import styles from './card.cm.scss';

const charLength = 70;

class TraveloguesCard extends React.Component {

  render() {
    const {
      heading, tags, description, travellerLocation, travellerName,
      daysAgo, destination, link, avatarPic, images, stars
    } = this.props;

    return (
    <a href={link} target="_blank" rel="noopener noreferrer" onClick={()=>this.props.trackSegmentEvent(heading)}
    >
      <div className="relative at_travelogues_card">
        <div className="relative">
          <div className={`radius6 overflowh relative ${styles.imgWrapper}`}>
            <Img ikSrc={images[0]} alt={heading} width={312} height={210} preventJerkOnLoad={false}
                 className="wfull hfull" ikTransform />
          </div>
          <div className="absolute b0 wfull p15">
            <h6 className="f16 fw9 sfcw m0 at_content_heading">{heading}</h6>
          </div>
        </div>
        <div className="at_travelogues_detail">
          <div className="pt15 pb15 sbcw radius4">
            <div className="flex spaceBetween">
              <div className="flex">
                <div className={`overflowh radius100 ${styles.avtar}`}>
                  <Img ikSrc={avatarPic} width={100} height={100} alt={travellerName} className="wfull"
                       preventJerkOnLoad={false} />
                </div>
                <div>
                  <p className="f14 pfc3 mb2">{travellerName}</p>
                  <p className="f10 pfc4">{travellerLocation}, {daysAgo}</p>
                </div>
              </div>
              <div className={`text-right ml8 ${styles.rightSection}`}>
                <RatingStar rating={stars} />
                {/*<p className="f10 pfc3 mt4">{destination}</p>*/}
              </div>
            </div>
            <p className="f14 pfc3 mt15">{description.length < charLength ? description: (`${description.slice(0,charLength)}...`)}</p>
          </div>
        </div>
      </div>
    </a>
    );
  }
}

TraveloguesCard.propTypes = {
  trackSegmentEvent: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  travellerLocation: PropTypes.string.isRequired,
  daysAgo: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  travellerName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  avatarPic: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  stars: PropTypes.number.isRequired,
  tripId: PropTypes.number.isRequired,
};

export default TraveloguesCard;
