import React from 'react';
import PropTypes from 'prop-types';
import { Parser } from 'html-to-react';

import RatingStar from 'modules/shared/RatingStar';
import Modal from 'modules/shared/GenericModal';
import ShowMore from 'modules/shared/ShowMore';
import HotelOrAirportDetails from '../../shared/HotelOrAirportDetails';
import ImageSlider from './ImageSlider';
import Img from 'components/Common/Img';

import styles from './hotelCardDetails.cm.scss';

const htmlToReactParser = new Parser();

class HotelCardDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closeModal: true
    };
  }

  breakDescription = (description) => {
    return {
      wrapText: htmlToReactParser.parse(description.substring(0, 200)),
      moreText: htmlToReactParser.parse(description.substring(200, description.length))
    };
  };

  closePopup = () => {
    this.setState({ closeModal: true });
  };

  renderHotelData() {
    const {
      name,
      rating,
      roomType
    } = this.props.hotelDetail;

    return (<div className="flexFull pl15">
      <h4>{name}</h4>
      <RatingStar rating={rating} />
      {
        roomType
          ? <p>{`Room Type: ${roomType}`}</p>
          : null
      }
    </div>);
  }

  renderHotelImage(frontImage) {
    return (<div className={styles.hotelLogo}>
      <Img className="wfull absolute-center"
           ikSrc={frontImage}
           alt="hotel"
      />
    </div>);
  }

  render() {
    const {
      hotelId,
      hotelImages,
      comments
    } = this.props.hotelDetail;
    const frontImage = hotelImages.length && hotelImages[0].url || '';
    const hotelDetail = {
      ...this.props.hotelDetail,
      images: this.props.hotelDetail.hotelImages
    };

    return (
      <div>
        <div className="flex sbcw pb15">
          <div className="flexFull">
            <Modal
              trigger={this.renderHotelImage(frontImage)}
              fullView={true}
              hasCustomClose={true}
            >
              <ImageSlider images={hotelDetail.images} />
            </Modal>
          </div>

          <div className="flexFull">
            <Modal
              trigger={this.renderHotelData()}
              fullView={true}
              customCloseTrigger={this.state.closeModal}
              hasCustomClose={true}
            >
              <HotelOrAirportDetails info={hotelDetail} closeModal={this.closePopup} />
            </Modal>
          </div>
        </div>
        {
          comments
            ? <ShowMore {...this.breakDescription(comments)} />
            : null
        }
      </div>
    );
  }
}

HotelCardDetails.propTypes = {
  hotelDetail: PropTypes.shape({
    hotelId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    roomType: PropTypes.string,
    comments: PropTypes.string,
    hotelImages: PropTypes.array
  }).isRequired,
  trackSegment: PropTypes.func
};

HotelCardDetails.defaultProps = {
  trackSegment: () => {
  }
};

export default HotelCardDetails;
