import React from 'react';
import PropTypes from 'prop-types';

import { isTripConverted, rescue } from 'helpers/utils';
import { TRIP_STATUS } from 'constants/tripStatus';
import {
  getRequestPreferences, getContactPreferences, getTripPrefInitialFormData
} from './helpers';
import Header from './components/Header';
import Request from './view/Request';
import TripPreferences from './view/TripPreferences';
import ContactDetails from './view/ContactDetails';
import { trackSegment } from 'actions/segmentEvents';

class Preferences extends React.Component {

  static propTypes = {
    currentTripId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    updated: PropTypes.bool,
    errors: PropTypes.array,
    preferences: PropTypes.object,
    trackSegmentEvent: PropTypes.func,
    updatePreferences: PropTypes.func,
    goBack: PropTypes.func.isRequired,
  };

  static defaultProps = {
    preferences: {},
    trackSegmentEvent: () => {},
  };

  constructor(props) {
    super(props);
  }

  tracksegmentEvent = (event, section, object, cta) => {
    rescue(() => {
      trackSegment({
        event: event,
        object: object || '',
        section: section || '',
        cta: cta || ''
      });
    });
  };

  render() {
    const { preferences, currentTripId, updated, errors, updatePreferences, goBack } = this.props;
    const requestPreferences = getRequestPreferences(preferences);
    const tripPrefInitialFormData = getTripPrefInitialFormData(preferences);
    const contactPreferences = getContactPreferences(preferences);
    const isConvertedTrip = isTripConverted(preferences.status);
    const isCancelledTrip = preferences.status.toLowerCase() === TRIP_STATUS.CANCELLED;

    return (
      <div>
        <Header currentTripId={currentTripId} goBack={goBack} />
        <div className='mb8'><Request preferences={requestPreferences}
                                      handleSubmit={updatePreferences}
                                      isConvertedTrip={isConvertedTrip}
                                      isCancelledTrip={isCancelledTrip}
                                      trackSegment={this.tracksegmentEvent}
                                      opDetails={preferences.opDetails}
                                      currentTripId={currentTripId}
                                      updated={updated}
                                      errors={errors} /></div>
        <div className='mb8'><TripPreferences preferences={preferences}
                                              initialFormData={tripPrefInitialFormData}
                                              isConvertedTrip={isConvertedTrip}
                                              trackSegment={this.tracksegmentEvent}
                                              isCancelledTrip={isCancelledTrip}
                                              handleSubmit={updatePreferences}
                                              currentTripId={currentTripId}
                                              updated={updated}
                                              errors={errors} /></div>
        <div className='mb8'><ContactDetails preferences={contactPreferences}
                                             isCancelledTrip={isCancelledTrip}
                                             handleSubmit={updatePreferences}
                                             isConvertedTrip={isConvertedTrip}
                                             trackSegment={this.tracksegmentEvent}
                                             opDetails={preferences.opDetails}
                                             currentTripId={currentTripId}
                                             updated={updated}
                                             errors={errors} /></div>
      </div>
    );
  }
}

export default Preferences;
