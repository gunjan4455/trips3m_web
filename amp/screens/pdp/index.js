import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import { loadDetails, fetchpdpFooterLinks  } from './action';
import { packageDetails, detailsResource } from './reducer';
import { fetchPdpTestimonials } from 'amp/modules/travelerReview/action';
import { useQuery } from 'amp/helpers/utils';

const PackageDetailsWrapper = Loadable({
  loader: () => import(/* webpackChunkName: 'amp-package-detail' */ './Pdp'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: ({
                  store: { dispatch, getState },
                  match: { params },
                  location: { search }
                }) => {
        const query = useQuery(search);
        return dispatch(loadDetails(params.packageName, { params: query }));
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params }
                }) => {
        const query = useQuery(search);
        const id = query.id ? parseInt(query.id) : undefined;
        const queryParams={
          base_url: params.packageName
        };
        return dispatch(fetchpdpFooterLinks( id, queryParams ));
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  location: { search },
                  match: { params }
                }) => {
        const query = useQuery(search);
        let id = query.id;

        if (id) {
          id = parseInt(id);
        }

        const queryParams = {
          page:1,
          per_page:15,
          base_url: params.packageName
        };
        return dispatch(fetchPdpTestimonials({ id, queryParams }));

      }
    },
  ],
  state => ({
    packageDetails: packageDetails(state),
    detailsResource: detailsResource(state),
    metaTags: state.packages.details.metaTags,
    faqs: _get(state, 'packages.details.data.data.faqs', []),
    similarPackages: _get(state, 'packages.details.data.data.similar_packages', []),
    breadcrumbs: _get(state, 'packages.details.data.data.breadcrumbs', []),
    backUrl: _get(state, 'packages.details.data.data.back_url'),
    footerLinks: _get(state, 'packages.details.footerLinks', []),
  }),
  {}
)(PackageDetailsWrapper);
