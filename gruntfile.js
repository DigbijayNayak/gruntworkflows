const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: '\n\n//---------------------------------------------\n',
        banner: '\n\n//------------------------------------------------\n',
      },
      dist: {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js',
      },
      prod: {
        src: ['components/scripts/*.js'],
        dest: 'builds/production/js/script.js',
      },
    }, //concat

    sass: {
      dist: {
        options: {
          implementation: sass,
          style: 'expanded',
        },
        files: [
          {
            src: 'components/sass/style.scss',
            dest: 'builds/development/css/style.css',
          },
        ],
      },
    }, //sass
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['concat', 'sass']);
}; //wrapper function
