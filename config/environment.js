'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'tulsa-trail-map',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'mapbox-gl': {
      accessToken:
        'pk.eyJ1Ijoid21hdHRnYXJkbmVyIiwiYSI6ImNrdmJvZHlobmFwZHEycG1hMndtNHd0Y2MifQ.JWKGif2DQFgXI4EAvzEVTA',
      map: {
        style: 'mapbox://styles/mapbox/light-v10',
        zoom: 11.71,
        center: [-95.9688, 36.1314],
      },
      marker: {
        offset: [-1, -1],
      },
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
