module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      less: {
        files: ['public/css/**/*.less'],
        tasks: ['less']
      },
      js: {
        files: ['public/js/prototype/**/*.js'],
        tasks: ['concat']
      }
    },

    less: {
      development: {
        files: {
          "public/css/styles.css": "public/css/**/*.less"
        }
      }
    },

    concat: {
      options: {
        separator: '\n\n// --------- Next import... ---------\n\n',
      },
      dist: {
        src: ['public/js/prototype/**/*.js'],
        dest: 'public/js/scripts.js'
      },
      dependencies: {
        src: ['public/dependencies/angular/angular.js',
          'public/dependencies/angular-ui-router/release/angular-ui-router.js',
          'public/dependencies/jquery/dist/jquery.js',
          'public/dependencies/materialize/dist/js/materialize.js'
        ],
        dest: 'public/js/dependencies.js'
      }
    },

    clean: ['public/js/scripts.js', 'public/css/styles.css'],

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('go', ['clean', 'less', 'concat', 'connect', 'watch']);
};