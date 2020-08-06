/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import { Helmet } from 'react-helmet';
import syncRequest from 'sync-request';
import { getBundles } from 'react-loadable/webpack';
import moduleStats from '../../assets/build/react-loadable.json';
import Loadable from "react-loadable";
import { renderStaticOptimized } from 'glamor/server';

const fs = require('fs');

const generateInlineStyle = (assetPath, cssBundles) => {
  let cssFileContent = '';
  if (__PRODUCTION__) {
    cssBundles.forEach(({ file }) => {
      const res = fs.readFileSync(`${assetPath}/${file}`, 'utf8');
      cssFileContent = cssFileContent + res;
    },);
  } else {
    cssBundles.forEach(({ file }) => {
      let path = `${__webpack_public_path__}${file}`;
      const res = syncRequest('GET', path);
      cssFileContent = cssFileContent + res.getBody('utf8');
    });
  }
  return <style amp-custom="" dangerouslySetInnerHTML={{ __html: cssFileContent }} />
};

const Html = ({ component, assetPath, url, store }) => {
  const canonicalUrl = url.replace('/amp', '');
  let asyncModules = [];
  let content = '';
  if (component) {
    const { html } = renderStaticOptimized(
      () => ReactDOM.renderToStaticMarkup(
        <Loadable.Capture report={moduleName => {
          moduleName && asyncModules.push(moduleName)
        }}>
          {component}
        </Loadable.Capture>
      )
    );
    content = html;
  } else {
    content = '';
  }

  const head = Helmet.rewind();
  const asyncBundles = getBundles(moduleStats, asyncModules).reduce((acc, val) => {
    val && acc.push(val);
    return acc;
  }, []);
  const cssBundles = asyncBundles.filter(bundle => bundle.file.endsWith('.css'));
  return (
    <html amp="" lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}

       <style amp-boilerplate="" dangerouslySetInnerHTML={{ __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}}></style>
      <noscript>
        <style amp-boilerplate="" dangerouslySetInnerHTML={{ __html:`body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`}}></style></noscript>

      <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
      <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"
              data-syntax="xml"></script>
      <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"></script>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
      <script async custom-element="amp-social-share"
              src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
      <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
      <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
      {
        generateInlineStyle(assetPath, cssBundles)
      }
    </head>
    <body dangerouslySetInnerHTML={{ __html: content }}>
    </body>
    </html>
  );
};

Html.propTypes = {
  component: PropTypes.node.isRequired,
  assetPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired
};

export default Html;
