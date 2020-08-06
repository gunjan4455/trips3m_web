import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { asyncConnect } from 'redux-connect';
import { Redirect, Route } from 'react-router';
import { matchRoutes } from 'react-router-config';

import Layout from 'amp/screens/layout';
import { handleRequestTopNavigationItems } from 'amp/modules/header/action';

class App extends Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired
  };

  render() {
    const { location: { pathname }, route} = this.props;
    const branch = matchRoutes(route.routes, pathname);

    const renderRoute = () => {
      if (branch.length) {
        const { route: { component: Component, ...rest }, match } = branch[0];
        return (
          <Route
            {...rest}
            render={matchProps => {
              return(
                <Component route={rest} {...matchProps} />
              );
            }}
          />
        );
      }
      return (<Redirect to='/page-not-found' />);
    };

    return (
      <div>
        {/*amp segment key */}
        <amp-analytics type="segment">
          <script type="application/json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "vars": {
                "writeKey": "fMKHKLb4oOnqLwhqZIvQ285qzlbsTv7k",
                "name": "Package Detail Page"
              }
            })
          }}>
          </script>
        </amp-analytics>
        <amp-analytics type="gtag" id="analytics1" data-credentials="include">
          <script type="application/json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "vars": {
                "gtag_id": "UA-15374527-4",
                "config": {
                  "UA-15374527-4": { "groups": "default" }
                },
                "triggers": { "trackPageview": { "on": "visible", "request": "pageview" } },
                "anonymizeIP": "true",
                "linkers": { "enabled": true }
              }
            })
          }}></script>
        </amp-analytics>
        <Layout {...this.props}>
          { renderRoute() }
        </Layout>
      </div>
    );
  }
}

export default asyncConnect
(
  [
    {
      promise: props => {
        const state = props.store.getState();
        if (!state.topNavigation.ui.loaded && !state.topNavigation.ui.loading) {
          return props.store.dispatch(handleRequestTopNavigationItems());
        }
        return Promise.resolve();
      }
    }
  ],
  state => ({}),
  {
    handleRequestTopNavigationItems
  }
)(App);

