'use strict';

module.exports = function(config) {
  var baseConfig = require('./karma.conf.js');
  baseConfig(config);
  config.singleRun = false;
  config.files.push('test/config.js');
};
