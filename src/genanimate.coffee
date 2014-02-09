module.exports = (grunt) ->
  genanimate = require('genanimate')
  grunt.registerTask 'genanimate', 'genanimate task', ->
    conf = @
    done = conf.async()
    genanimate.genanimate @options, done
