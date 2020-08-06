import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'modules/shared/GenericModal';
import DateRangeWrapper from '../form/dateRange';
import { format } from 'helpers/DateTime';
import { CalendarIcon } from 'helpers/Icon/Icon';
import { makeCapitalizedSentence } from 'helpers/parsers';

import './CheckInCheckOut.scss';

const renderCheckInCheckOut = (label, date, showError, showErrorBorder, trackDateClicked) => {
  return <div>
    <p className="f14 fw7 mb8">{label}</p>
    <div className={`sbcw p8 relative alignCenter flex radius2 ${showErrorBorder && showError ? 'errorBorder' : 'border'}`}>
      <div className="icon-24">
        <CalendarIcon />
      </div>
      <span className="ml8" onClick={() => trackDateClicked(makeCapitalizedSentence(label, ' '))}>
        {date ? format(date, 'DD MMM YYYY') : 'Select Date'}
      </span>
    </div>
  </div>;
};

class CheckInCheckOut extends Component {

  state = { modal: false };

  closeModal = () => {
    this.setState({ modal: false });
  };

  componentDidUpdate(prevProps) {
    if (this.props.checkInCheckOut !== prevProps.checkInCheckOut && !this.state.modal) {
      this.setState({ modal: true });
    }
  }

  trackDateClicked = (cta) => {
    const details = {
      section: 'Traveler Preferences',
      cta,
      label: 'Date Clicked'
    };
    this.props.trackSegment(details);
  };

  render() {
    const { handleSubmit, data, showError, showErrorBorder } = this.props;

    return (
      <div className="flex">
        <div className="flexFull pr4">
          <Modal
            trigger={
              renderCheckInCheckOut('Check in', data.checkInDate, showError, showErrorBorder, this.trackDateClicked)
            }
            isOpen={this.state.modal}
            customCloseTrigger={!this.state.modal}
            fullView={true}
            hasCustomClose={true}
            onRequestCloseCustom={this.closeModal}
          >
            <div className="flex wfull hfull flexFull">
              <DateRangeWrapper
                data={{ ...data }}
                handleSubmit={handleSubmit}
                showStartPicker={true}
                closePopup={this.closeModal}
              />
            </div>
          </Modal>
        </div>
        <div className="flexFull ml4">
          <Modal
            trigger={
              renderCheckInCheckOut('Check out', data.checkOutDate, showError, showErrorBorder, this.trackDateClicked)
            }
            customCloseTrigger={!this.state.modal}
            fullView={true}
            hasCustomClose={true}
          >
            <div className="flex wfull hfull flexFull">
              <DateRangeWrapper
                data={{ ...data }}
                handleSubmit={handleSubmit}
                showStartPicker={!(data.checkInDate && data.checkOutDate)}
                closePopup={this.closeModal}
              />
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

CheckInCheckOut.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
  trackSegment: PropTypes.func,
  checkInCheckOut: PropTypes.bool,
  showError: PropTypes.bool,
  showErrorBorder: PropTypes.bool,
};

CheckInCheckOut.defaultProps = {
  showError: false,
  showErrorBorder: false,
  trackSegment: () => {}
};

export default CheckInCheckOut;

