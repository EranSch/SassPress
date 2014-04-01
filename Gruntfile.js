module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      themePath: grunt.option('theme') || 
        grunt.fail.fatal( 'You must include a theme path! [grunt --theme=/path/to/style.css]' )
    },

    sass: {
      dist: {
        files: {
          '<%= meta.themePath %>style.css': '<%= meta.themePath %>style.scss'
        }
      }
    },

    autoprefixer: {
      single_file: {
        src: '<%= meta.themePath %>style.css'
      }
    },

    watch: {
      scripts: {
        files: ['<%= meta.themePath %>style.scss'],
        tasks: ['sasspress']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('sasspress', ['sass', 'autoprefixer']);

};

