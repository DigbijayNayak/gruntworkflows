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

    wiredep: {
      task: {
        src: 'builds/development/**/*.html',
      },
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 4000,
          base: 'builds/development/',
          livereload: true,
        },
      },
    },

    watch: {
      options: {
        spawn: false,
        livereload: true,
      },
      scripts: {
        files: [
          'builds/development/**/*.html',
          'components/scripts/**/*.js',
          'components/sass/**/*.scss',
        ],
        tasks: ['concat', 'sass'],
      },
    },
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', [
    'wiredep',
    'concat',
    'sass',
    'connect',
    'watch',
  ]);
}; //wrapper function
