Package.describe({
  name: 'lkleuver:meteor-react-jsxrender-wrapper',
  version: '0.1.0',
  summary: 'A wrapper for elie.rotenberg react-jsxrender.',
  git: 'https://github.com/lkleuver/meteor-react-jsxrender-wraper.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('react-jsxrender', 'client');
  api.use('react@0.1.13');
  api.export('JSXRender', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lkleuver:meteor-react-jsxrender-wrapper');
  api.addFiles('meteor-react-jsxrender-wrapper-tests.js');
});