// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(grunt) {
    var genanimate;
    genanimate = require('genanimate');
    return grunt.registerTask('genanimate', 'genanimate task', function() {
      var conf, done;
      conf = this;
      done = conf.async();
      return genanimate.genanimate(this.options(), done);
    });
  };

}).call(this);
