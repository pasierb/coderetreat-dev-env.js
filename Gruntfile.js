/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({
        app: {
            src: 'lib',
            test: 'spec'
        },
        jasmine: {
            pivotal: {
                src: '<%= app.src %>/*.js',
                options: {
                    specs: '<%= app.test %>/*Spec.js',
                    helpers: '<%= app.test %>/*Helper.js',
                    keepRunner: true
                }
            }
        },
        jshint: {
            options: {
                browser: true,
                globals: {}
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['<%= app.src %>/*.js']
            },
            spec: {
                src: ['<%= app.test %>/*.js']
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '.templates',
                    src: ['**'],
                    filter: 'isFile'
                }]
            }
        },
        clean: {
            main: ['index.html', '<%= app.src %>/*.js', '<%= app.test %>/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 9001
                }
            }
        },
        open: {
            dev: {
                path: 'http://127.0.0.1:9001/',
            }
        },
        watch: {
            options: {
                livereload: true
            },
            lib_test: {
                files: ['index.html', '<%= app.src %>/*.js', '<%= app.test %>/*.js'],
                tasks: ['jshint', 'jasmine']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('reset', ['clean', 'copy']);
    grunt.registerTask('server', ['connect', 'open', 'watch']);
    grunt.registerTask('default', ['jshint', 'jasmine']);
};
