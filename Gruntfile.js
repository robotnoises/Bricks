var config = function (grunt) {
  
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Minify CSS
    //Ex: grunt cssmin
    
    cssmin: {

      // Target: production
      production: {
        src: 'src/compiled/bricks.css',
        dest: 'dist/bricks.min.css',
      }
    },
   
    sass: {
      
      // Target: distribution
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.scss'],
          dest: 'src/compiled',
          ext: '.css'
        }]
      }
    }
    
  });
  
  // Load tasks
 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  // Register custom tasks
  grunt.registerTask('build', ['sass:dist', 'cssmin:production']);
};

module.exports = config;
