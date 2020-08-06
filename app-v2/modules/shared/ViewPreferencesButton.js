import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ORGANISM_CLICKED } from 'actions/segmentEvents';
import { preferencesPageUrl } from 'helpers/urlHelpers';
import { isTripConverted, rescue } from 'helpers/utils';

class ViewPreferencesButton extends Component {

  static propTypes = {
    currentTripId: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    tripStatus: PropTypes.string,
    trackSegment: PropTypes.func
  };

  handleClick = () => {
    rescue(() => {
      this.props.trackSegment({
        event: ORGANISM_CLICKED,
        section: 'Trips dropdown section',
        object: '',
        cta: 'Edit preferences'
      });
    });
  };

  render() {
    const editPreferenceUrl = preferencesPageUrl(this.props.currentTripId);
    const isConvertedTrip = isTripConverted(this.props.tripStatus);

    return (
      <div>
        <Link onClick={this.handleClick} className='iblock wfull pt8 pb8 sbc1 sfcw text-center fw7'
              to={editPreferenceUrl}>
          <span className='pt3 pb3 iblock at_editPreferences'>{isConvertedTrip ? 'View Preferences' : 'Edit Preferences'}</span>
        </Link>
      </div>
    );
  }
}

export default ViewPreferencesButton;
