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
                files:[{
                    src: 'src/js/perfmatters.js',        //regular file
                    dest: 'dist/js/perfmatters.min.js'    //minimized files
                },
                {
                    src: 'views/src/js/main.js',        //regular file
                    dest: 'views/dist/js/main.min.js'    //minimized files
                }]
            }
        },
        imagemin: {
            files:  {                                                                   // Dictionary of files
                'dist/img/2048-min.jpg': 'src/img/2048.jpg',                                // 'destination': 'source'
                'dist/img/mobile-min.jpg': 'src/img/mobile.jpg',
                'dist/img/profilepic-min.jpg': 'src/img/profilepic.jpg',
                'dist/img/webperf-min.jpg': 'src/img/webperf.jpg',
                'views/dist/images/pizza-min.png': 'views/src/images/pizza.png',
                'views/dist/images/pizzeria-min.jpg': 'views/src/images/pizzeria.jpg',
                'views/dist/images/pizzeria-small-min.jpg': 'views/src/images/pizzeria-small.jpg'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'views/src/css/',               // location of files
                    src: ['*.css', '!*.min.css'],   // type of files
                    dest: 'views/dist/css/',              // destintaion of files
                    ext: '.min.css'                 // file extension used
                },
                {
                    expand: true,
                    cwd: 'src/css/',               // location of files
                    src: ['*.css', '!*.min.css'],   // type of files
                    dest: 'dist/css/',              // destintaion of files
                    ext: '.min.css'                 // file extension used
                }]
            }
        }

    });// initConfig

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat','uglify','imagemin','cssmin']);

};