import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { goBack } from 'react-router-redux';

import { loadDetails, removePackage as removePackageAction,
  removeFromComparingPackages as removeFromComparingPackagesAction,
  removeCompareData as removeCompareDataAction } from '../../actions/comparePackages';
import { submittedForCompare as submittedForCompareAction } from '../../actions/listing';
import { useQuery } from 'containers/Listing/parseFilters';

const ComparePackagesMainAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'compare-packages' */ './ComparePackagesMainAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./ComparePackagesMainAsync') },
    {
      promise: ({ location: { search }, store: { dispatch } }) => dispatch(loadDetails(useQuery(search).ids))
    }
  ],
  state => ({
    details: state.comparePackages.details,
    comparedPackagesIndex: state.comparePackages.comparedPackagesIndex
  }),
  dispatch => ({
    removePackage(pkg, pkgIndex) {
      dispatch(removePackageAction(pkg, pkgIndex));
      dispatch(removeFromComparingPackagesAction(pkg));
    },
    closeAndRemoveCompareData() {
      dispatch(removeCompareDataAction());
      dispatch(goBack());
    },
    removeCompareData() { dispatch(removeCompareDataAction()); },
    submittedForCompare(value) { dispatch(submittedForCompareAction(value)); }
  }))(ComparePackagesMainAsync);
