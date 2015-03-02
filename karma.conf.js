'use strict';

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',

    frameworks: ['jasmine', 'commonjs'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/jquery/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js',
      'bower_components/uri.js/src/URI.js',
      'bower_components/momentjs/moment.js',
      'bower_components/sprintf/src/sprintf.js',
      'src/**/*.js', // get the tests in the module
      '.tmp/web/scripts/app.js',
      '.tmp/web/scripts/angular-li-customer.js'
    ],

    proxies: {
      '/dummy/': 'http://localhost:9615/',
      '/image-id/': 'http://localhost:9615/',
      '/attachment/': 'http://localhost:9615/',
      '/html/apps/lia/mobile/styles/skins/base/': 'http://localhost:9615/'
    },

    // list of files to exclude
    exclude: [
    ],

    preprocessors: {
      'src/**/!(app|module|*.demo|*.spec|*.mock|polyfill).js': 'coverage'
    },

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress'
    // CLI --reporters progress
    reporters: ['junit', 'progress', 'coverage', 'threshold'],

    junitReporter: {
      outputFile: 'test-reports/junit.xml',
      suite: 'angular-li-community'
    },

    thresholdReporter: {
      statements: 85,
      branches: 70,
      functions: 85,
      lines: 85
    },

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // web server port
    // CLI --port 9876
    port: 9875,

    // enable / disable colors in the output (reporters and logs)
    // CLI --colors --no-colors
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // CLI --log-level debug
    logLevel: config.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    // CLI --browsers Chrome,Firefox,Safari
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 20000,

    // Auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: true,

    // report which specs are slower than 500ms
    // CLI --report-slower-than 500
    reportSlowerThan: 500,

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-junit-reporter',
      'karma-threshold-reporter',
      'karma-commonjs',
      'karma-chrome-launcher',
      'karma-spec-reporter',
      'karma-story-reporter',
      'karma-growl-reporter'
    ]
  });
};
