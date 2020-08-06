import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import config from 'appConfig';

import worker from './apiWorker';
import WebWorker from 'helpers/webWorker';
import BudgetBanner from 'modules/nlp/BudgetBanner';
import NurturingOption from 'modules/nlp/NurturingOption';
import { ThumbsUp, ThumbsDown } from 'helpers/Icon/Icon';
import { replaceUniqueAndSecretKeys } from 'helpers/urlHelpers';
import { EVENT_TYPES } from 'constants/nlp';
import { getPreferencesData, getPreferenceParams } from 'screens/nlp/action';
import { getTripDays } from 'screens/nlp/reducer';
import { getMaxRatingOfHotelAttributes } from 'helpers/nlp';
import * as nlpReducers from 'screens/nlp/reducerIndex';
import { rescue } from 'helpers/utils';
import { trackSegment } from 'actions/segmentEvents';
import { ORGANISM_VIEWED } from 'actions/segmentEvents';

export { getPreferencesData, getPreferenceParams, getTripDays, getMaxRatingOfHotelAttributes };
export { nlpReducers };

const NurturingOptionData = [
  {
    title: `I’m <span className="pfc5">okay</span> with this budget`,
    text: 'Continue with the current plan',
    subText: 'View Packages based on your preferences',
    Icon: ThumbsUp,
    redirection: true
  },
  {
    title: `I’m <span className="pfc5">not okay</span> with this budget`,
    text: 'Edit Preferences',
    subText: 'to match your budget',
    Icon: ThumbsDown
  }
];

class NurturingLandingPage extends PureComponent {

  state = { disabled: false };

  componentDidMount() {
    const { match: { params: { uniqueKey, secretKey } }} = this.props;
    this.worker = new WebWorker(worker);
    this.worker.onerror = (e) => {
      this.worker.postMessage({ type: 'CLEAR ALIVE STATUS' });
      this.worker.terminate();
    };
    const url = replaceUniqueAndSecretKeys(config.apiEndpoints.nuturePreferences.updateAlive.url,
      uniqueKey, secretKey);
    this.worker.postMessage({
      type: EVENT_TYPES.UPDATE_ALIVE,
      url: `${config.api_protocol}//${config.browsing.external.host}/${url}`,
      apiKey: config.api.key
    });
    this.trackSegmentEvent({
      event: ORGANISM_VIEWED
    });
  }

  savePreferencesAndRedirect = (rtripParams) => {
    if(this.state.disabled) {
      return true;
    }
    const { rtripData, savePreferences } = this.props;
    const data = {
      isSubmit: true,
      redis_key: rtripData.uniq_key,
      requested_trip: rtripParams ? rtripParams : rtripData.rtrip_params,
      secret_key: rtripData.secret_key,
      nurtured: true
    };
    this.setState({ disabled: true });
    return savePreferences(data)
      .then((res) => {
        this.worker.postMessage({ type: EVENT_TYPES.CLEAR_ALIVE });
        this.worker.terminate();
        console.log('redirectUrl:: ', res.data.redirect_url);
        window.location.href = res.data.redirect_url;
      })
      .catch(() => {
        this.worker.postMessage({ type: EVENT_TYPES.CLEAR_ALIVE });
        this.worker.terminate();
      });
  };

  trackSegmentEvent = (data = {}) => {
    rescue(() => {
      trackSegment({
        event: data.event,
        section: data.section || '',
        object: data.object,
        cta: data.cta
      });
    });
  };

  componentWillUnmount() {
    this.worker.postMessage({ type: EVENT_TYPES.CLEAR_ALIVE });
    this.worker.terminate();
  }

  render() {
    const { preference } = this.props;
    return (
      <div>
        <BudgetBanner
          destination={preference.destinationName}
          priceMax={preference.priceMax}
          priceMin={preference.priceMin}
          savePreferencesAndRedirect={this.savePreferencesAndRedirect}
          adult={preference.adult}
          child={preference.child}
        />
        {NurturingOptionData.map((item, index) =>
          <NurturingOption
            {...item}
            hideBottomBorder={index === NurturingOptionData.length - 1}
            savePreferencesAndRedirect={this.savePreferencesAndRedirect}
            trackSegmentEvent={this.trackSegmentEvent}
            disabled={this.state.disabled}
            key={index}
            preference={preference}
          />)
        }
      </div>
    );
  }
}

NurturingLandingPage.propTypes = {
  preference: PropTypes.object.isRequired,
  rtripData: PropTypes.object.isRequired,
  savePreferences: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default NurturingLandingPage;
