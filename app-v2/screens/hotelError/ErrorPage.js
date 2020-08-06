import React from 'react';

import HeaderCommon from 'modules/header/HeaderCommon';
import Loader from 'modules/shared/messageLoader';

const ErrorPage = () => (
  <div>
    <HeaderCommon />
    <Loader message='There was an error, redirecting to the Hotel page' />
  </div>
);

export default ErrorPage;
