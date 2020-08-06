import { asyncConnect } from "redux-connect";
import Loadable from "react-loadable";
import superagent from "superagent";
import _get from "lodash/get";

import { fetchDestinationByDuration } from 'modules/home/destinationByDuration/action';
import { isLoggedIn as isAuthenticated, user, shouldDisplayLatestTrip } from 'reducers/auth';
import { updateFields } from 'reducers/leadForm/common';
import { welcomeCarouselPackages } from "reducers/welcomeCarousel";

const HomeAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ "./HomeAsync"),
  loading :() => null
});

const asyncItems = [
  { promise: () => import("./HomeAsync") },
  {
    promise: ({ store: { dispatch } }) => dispatch(fetchDestinationByDuration({ queryParams: { trip_type: 'tour' } }))
  },
  {
    promise: ({ store: { dispatch, getState }, params }) => {
      return new Promise(resolve => {
        superagent.get("https://assets.traveltriangle.com/experiment/js/welcomeData.json").then(data => {
          const promises = [];
          promises.push(dispatch({ type: "carouselLoaded", data }));
          if (data.body.enabled) {
            const destination = Object.keys(data.body.destinations)[0];
            const packages = data.body.destinations[destination];
            promises.push(
              dispatch(
                welcomeCarouselPackages({
                  recently_viewed_packages: packages.join(",")
                })
              )
            );
          }
          return Promise.all(promises).then(() => {
            resolve();
          });
        });
      });
    }
  }
];

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  userDetails: user(state),
  shouldDisplayLatestTrip: shouldDisplayLatestTrip(state),
  showToasterMessage: state.slider.common.tripUpdatedInRedis,
  carouselData: _get(state, 'welcomeCarousel.carouselData', {}),
  carouselPackages: _get(state, 'welcomeCarousel.carouselPackages', {})
});

export default asyncConnect(asyncItems, mapStateToProps, dispatch => ({
  updateFields: params => dispatch(updateFields(params)),
  welcomeCarouselPackages: params => dispatch(welcomeCarouselPackages(params))
}))(HomeAsync);
