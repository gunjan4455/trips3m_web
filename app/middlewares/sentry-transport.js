import { sentryKey } from 'appConfig';
const Transport = require('winston-transport');

let Sentry;
const SSRPrefix = 'SSR Error:';
if (sentryKey) {
  Sentry = require('@sentry/node');
  Sentry.init({ dsn: sentryKey });
}

class SentryTransport extends Transport {
  constructor (opts) {
    super(opts);
  }

  log (logLevel, message) {
    if (logLevel === 'error') {
      if (Sentry) {
        const sentryError = new Error(message);
        sentryError.name = SSRPrefix;
        Sentry.captureException(sentryError);
      }
    }
  }

  logException ({message, stack}) {
    if (Sentry) {
      const sentryError = new Error(`${SSRPrefix} ${message}`);
      sentryError.name = SSRPrefix;
      sentryError.stack = stack;
      Sentry.captureException(sentryError);
    }
  }
}

export default SentryTransport;
