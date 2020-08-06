import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from './Layout';

import * as preferenceReducers from 'modules/preferences/reducer/index';
export { preferenceReducers };

export default class PreferencesAsync extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
}

PreferencesAsync.propTypes = {};
