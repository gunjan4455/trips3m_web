import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { goBack, push as pushState } from 'react-router-redux';

import { getFunnelUuid } from '../../reducers/formOneLead';
import { isLoaded as isRequestLoaded, load as requestLoad, reset as requestReset,
  localExpCustomization, budgetCustomization, loadCustomizations, customizationToken,
  getFormTwoRedisKey, updateFields } from '../../reducers/formTwoLead';

const FormTwoLeadAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'form-two-lead' */ './FormTwoLeadAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./FormTwoLeadAsync') }
  ],
  state => ({
    isRequestLoaded: isRequestLoaded(state),
    budgetCustomization: budgetCustomization(state),
    localExpCustomization: localExpCustomization(state),
    allowCustomizationToken: customizationToken(state),
    getFunnelUuid: getFunnelUuid(state),
    getFormTwoRedisKey: getFormTwoRedisKey(state)
  }),
  { requestLoad, requestReset, pushState, loadCustomizations, goBack,
    updateFields })(FormTwoLeadAsync);
