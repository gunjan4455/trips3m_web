import React from 'react';
import { asyncConnect } from 'redux-connect';
import _get from 'lodash/get';
import Loadable from 'react-loadable';
import { replaceReducer } from '../../../server/store';
import { load } from 'reducers/formOneLead';

const Nlp = Loadable({
  loader: () => import(/* webpackChunkName: 'nurturing-landing-page' */ './Nlp'),
  loading: () => null,
  render(loaded, props) {
    replaceReducer(loaded.nlpReducers);
    return (
      <loaded.default {...props} />
    );
  }
});

export default asyncConnect(
  [
    {
      promise: ({ store: { dispatch }, match: { params: { uniqueKey, secretKey } }}) => {
        return import('./Nlp')
          .then((loaded) => {
            replaceReducer(loaded.nlpReducers);
            const { getPreferenceParams, getTripDays, getPreferencesData, getMaxRatingOfHotelAttributes } = loaded;
            return dispatch(getPreferenceParams(uniqueKey, secretKey))
              .then((res) => {
                const data = res.data;
                const hotelAnswerAtributes = _get(data, 'rtrip_params.hotel_category_answers_attributes', []);
                const params = {
                  destination_id: data.mapped_to_loc_id,
                  max_hotel_rating: getMaxRatingOfHotelAttributes(hotelAnswerAtributes),
                  days: getTripDays(+data.rtrip_params.trip_days, data.mapped_to_type),
                  travel_month: data.start_date_month,
                  from_loc_id: data.mapped_from_loc_id,
                  adults: data.adults
                };
                return dispatch(getPreferencesData(params));
              });
          });
      }
    }
  ],state => ({
    preference: state.nlp.preference,
    rtripData: state.nlp.rtripData
  }),
  (dispatch) => ({
    savePreferences: (params) => dispatch(load(params)),
  })
)(Nlp);


