const path = require('path');
const fs = require('fs');

const appPaths = {
  root: path.resolve(__dirname, '../'),
  app: path.resolve(__dirname, '../app'),
  actionConstants: path.resolve(__dirname, '../app/actionConstants'),
  assets: path.resolve(__dirname, '../assets/build/'),
  theme: path.resolve(__dirname, '../app/theme'),
  containers: path.resolve(__dirname, '../app/containers'),
  components: path.resolve(__dirname, '../app/components'),
  reducers: path.resolve(__dirname, '../app/reducers'),
  actions: path.resolve(__dirname, '../app/actions'),
  helpers: path.resolve(__dirname, '../app/helpers'),
  utils: path.resolve(__dirname, '../app/utils'),
  constants: path.resolve(__dirname, '../app/constants'),
  appConfig: path.resolve(__dirname, '../config'),
  appV2: path.resolve(__dirname, '../app-v2'),
  screens: path.resolve(__dirname, '../app-v2/screens'),
  modules: path.resolve(__dirname, '../app-v2/modules'),
  server: path.resolve(__dirname, '../server'),
  amp: path.resolve(__dirname, '../amp')
};

let sentryRelease = '';
if (process.env.SENTRY_SOURCE_MAPS) {
  sentryRelease = fs.readFileSync(path.resolve(__dirname, '../REVISION'), 'utf8');
}
const commonConfig = (env = {}, args = {}) => ({
  context: appPaths.root
});

module.exports = {
  appPaths,
  commonConfig,
  sentryRelease
};
