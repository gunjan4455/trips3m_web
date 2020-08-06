/* eslint-disable */
import React from 'react';

import { AmpApp, AmpPdp } from '../amp/screens';

const routes = [
  {
    path: '/',
    component: AmpApp,
    default: true,
    routes: [
      {
        path: '/pdp',
        component: AmpPdp,
        exact: true
      },
      {
        path: '/packages/:packageName/amp',
        component: AmpPdp,
        exact: true
      },
    ]
  }
];


export default routes;
