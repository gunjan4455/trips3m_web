import React from 'react';
import PropTypes from 'prop-types';

import { ContactIcon } from 'helpers/Icon/Icon';

import { GPreferenceDiv } from './G';
import Modal from 'modules/shared/GenericModal';
import ContactDetailsEditForm from '../edit/ContactDetails';
import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import EditPreferencesPopup from '../components/EditPreferencesPopup';
import { rescue } from 'helpers/utils';

class ContactDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      closeModal: false
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.updated && nextProps.updated) {
      this.closeModal();
    }
    return true;
  }

  updateContactInfo = (values) => {
    const params = {
      isd_code: values.isdCode,
      requested_trip: {
        email: values.email,
        phone_no: values.phoneNo
      }
    };
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Contact details', '', 'Confirm');
    this.props.handleSubmit(this.props.currentTripId, params);
  };

  trackSegmentEvent = (event, section, object, cta) => {
    rescue(() => {
      this.props.trackSegment(event, section, object, cta);
    });
  };

  handleClick = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Edit preferences window', 'contact', 'edit');
    this.setState({ closeModal: false });
  };

  afterModalClose = () => {
    this.trackSegmentEvent(ORGANISM_CLICKED, 'Contact details', '', 'Cancel');
  };

  closeModal = () => {
    this.setState({ closeModal: true });
  };

  render() {
    const { preferences, isConvertedTrip, isCancelledTrip, opDetails } = this.props;

    return (
      <div className='sbcw p15 pb0 at_contactDetails'>
        <div className='flex alignCenter spaceBetween mb15'>
          <h6 className='flex alignCenter f16 fw9 m0 flexFull'>
            <span className='block input-24 mr8'><ContactIcon /></span>
            <span className="sfc6 at_headingContectDetail">Contact Details</span>
          </h6>
          {!isConvertedTrip || isCancelledTrip ? <Modal
              trigger={<span className='sfc1 f14 fw7 at_edit1'
                             onClick={() => this.handleClick()}>Edit</span>}
              fullView={true}
              hasCustomClose={true}
              customCloseTrigger={this.state.closeModal}
              onRequestCloseCustom={this.afterModalClose}
            >
              <ContactDetailsEditForm initialValues={preferences}
                                      onSubmit={this.updateContactInfo} />
            </Modal> :
            <Modal trigger={<span className='sfc1 f14 fw7 at_edit1'>Edit</span>}>
              <EditPreferencesPopup opDetails={opDetails} closeModal={this.closeModal} />
            </Modal>}
        </div>
        <div className='flex flexWrap'>
          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Email ID</p>
            <p className='at_email'>{preferences.email}</p>
          </GPreferenceDiv>
          <GPreferenceDiv className='flexFull mb15 break-word'>
            <p>Phone Number</p>
            <p className='at_phone'>{preferences.phoneNo ? `${preferences.isdCode}${preferences.phoneNo}` : '-'}</p>
          </GPreferenceDiv>
        </div>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  currentTripId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  preferences: PropTypes.object,
  opDetails: PropTypes.object,
  isConvertedTrip: PropTypes.bool,
  isCancelledTrip: PropTypes.bool,
  updated: PropTypes.bool,
  errors: PropTypes.array,
  handleSubmit: PropTypes.func,
  trackSegment: PropTypes.func
};

ContactDetails.defaultProps = {
  trackSegment: () => {
  }
};

export default ContactDetails;
