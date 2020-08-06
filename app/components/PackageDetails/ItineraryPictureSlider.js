import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import Img from 'components/Common/Img';
import ItineraryPopup from './ItineraryImagesPopup';

class ItineraryPictureSlider extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    openModal: false,
    closeModal: true
  };

  openImagesPopup = (e) => {
    e.stopPropagation();
    this.setState({ openModal: true, closeModal: false });
  };

  closePopup = () => {
    this.setState({ closeModal: true, openModal: false });
  };

  render () {
    const { pictures, heading } = this.props;
    return (
      <div>
        <ul className="list-style-no itinerary-images-container" onClick={(e) => this.openImagesPopup(e)}>
          {
            pictures.map((picture, i) => (
                <li >
                  <Img key={i} ikSrc={picture.picture_details.imagekit_url}
                       alt={picture.picture_details.caption} />
                </li>
              )
            )
          }
        </ul>
        <Modal
          trigger={null}
          fullView={true}
          isOpen={this.state.openModal}
          hasCustomClose={true}
          customCloseTrigger={this.state.closeModal}
          onRequestCloseCustom={this.closePopup}
        ><ItineraryPopup pictures={pictures} heading={heading}/>
        </Modal>
      </div>
    );
  }

}


ItineraryPictureSlider.propTypes = {
  pictures:PropTypes.array,
  heading:PropTypes.string
};


export default ItineraryPictureSlider;
