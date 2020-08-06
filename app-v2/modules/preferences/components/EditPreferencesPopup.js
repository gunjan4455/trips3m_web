import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPreferencesPopup extends Component {
  render() {
    const { opDetails, closeModal } = this.props;
    const editPreferenceMsg = 'To edit your preferences, kindly connect with your trip guide';

    return (
      <div className='pt24 pb24 pl15 pr15'>
        <div className='at_msg'>
          {opDetails.phoneNo
            ? `${editPreferenceMsg}- ${opDetails.name} (${opDetails.phoneNo})`
            : opDetails.name ? `${editPreferenceMsg}- ${opDetails.name}` : editPreferenceMsg}
        </div>
        {opDetails.phoneNo ? <div className='text-right'>
          <button onClick={closeModal} className='mr24 fw7'>Cancel</button>
          <a href={`tel:${opDetails.phoneNo}`} className='fw7'>Call</a>
        </div> : null}
      </div>
    );
  }
}

EditPreferencesPopup.propTypes = {
  opDetails: PropTypes.object,
  closeModal: PropTypes.func,
};

export default EditPreferencesPopup;
