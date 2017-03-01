module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: { // I did not use this plugin
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/global.js'  // This specific file
                ],
                dest: 'js/build/production.js', // destination of file with combined js files
            }
        },
        uglify: {
            build: {
                src: 'views/src/js/main.js',        //regular file
                dest: 'views/dist/js/main.min.js'    //minimized files
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'views/src/images/',           // location of images
                    src: ['**/*.{png,jpg,gif}'],    // types of images
                    dest: 'views/dist/images/'     // destination of optimized image
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css/',               // location of files
                    src: ['*.css', '!*.min.css'],   // type of files
                    dest: 'dist/css/',              // destintaion of files
                    ext: '.min.css'                 // file extension used
                }]
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','imagemin']);

};