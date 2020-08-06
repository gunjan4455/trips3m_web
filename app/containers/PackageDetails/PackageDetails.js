import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import {
  isLoaded as isDetailsLoaded, isLoading as isDetailsLoading,
  loadingError as detailsLoadingError, resource as detailsResource,
  load as loadDetails,
  packageDetails,
  updatePrice, checkWeekendpackage,
  updateSelectedMonth, fetchInlineGateways, fetchpdpFooterLinks
} from 'reducers/packages/details';
import { getCookieFromServer } from 'helpers/FormDataFormatter';
import { getPackageData } from "../FormOneLead/action";
import { fetchPdpTestimonials } from 'modules/travelerReview/action';
import deals from 'modules/hotel/deals';
import { useQuery } from 'containers/Listing/parseFilters';

const PackageDetailsWrapper = Loadable({
  loader: () => import(/* webpackChunkName: 'package-detail' */ './PackageDetailsWrapper'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: ({
                  store: { dispatch },
                  match: { params },
                  location: { search }
                }) => {
        const query = useQuery(search);
        return new Promise((resolve) => {
          return dispatch(loadDetails(params.packageName, { params: query })).then((response) => {

            const destinations = response.data.seo_packages && response.data.seo_packages.destinations;
            if (destinations && destinations.length) {
              const params = {
                property_types: 'hotels',
                location: destinations[0].name.toLowerCase(),
                is_bookable_b2c: true
              };
              return dispatch(deals.defaultAction({ params }));
            }
            return Promise.resolve();
          }).then(response => {
            return resolve();
          }).catch(() => resolve());
        });
      }
    },
    { promise: () => import('./PackageDetailsWrapper') },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params },
                }) => {

        let id = useQuery(search).id;

        if (id) {
          id = parseInt(id);
        }

        const queryParams = {
          page: 1,
          per_page: 15,
          base_url: params.packageName
        };
        return dispatch(fetchPdpTestimonials({ id, queryParams }));

      }
    },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params },
                }) => {
        const query = useQuery(search);
        const id = query.id ? parseInt(query.id) : undefined;
        const queryParams = {
          base_url: params.packageName
        };
        return dispatch(fetchpdpFooterLinks(id, queryParams));
      }
    },
    {
      key: 'experimentId',
      promise: ({
                  helpers : { client }
                }) => {
        const cookie = client.req ? client.req.get('cookie') : '';
        const experimentId = getCookieFromServer('pr_tv', cookie);
        return Promise.resolve(experimentId);
      }
    }
  ],
  state => ({
    isLoaded: isDetailsLoaded(state),
    isLoading: isDetailsLoading(state),
    loadingError: detailsLoadingError(state),
    packageDetails: packageDetails(state),
    detailsResource: detailsResource(state),
    testimonials: _get(state, 'packages.details.data.data.testimonials', []),
    metaTags: state.packages.details.metaTags,
    isWeekendPackage: checkWeekendpackage(state),
    faqs: _get(state, 'packages.details.data.data.faqs', []),
    similarPackages: _get(state, 'packages.details.data.data.similar_packages', []),
    breadcrumbs: _get(state, 'packages.details.data.data.breadcrumbs', []),
    backUrl: _get(state, 'packages.details.data.data.back_url'),
    footerLinks: _get(state, 'hlp.footerLinks', [])
  }),
  {
    loadDetails,
    updatePrice,
    updateSelectedMonth,
    fetchInlineGateways,
    getPackageData
  }
)(PackageDetailsWrapper);
