import React from 'react';
import Loadable from 'react-loadable';

const Layout = Loadable({
  loader: () => import(/* webpackChunkName: 'amp-layout' */ './AmpLayout'),
  loading: () => null
});

export default Layout;
