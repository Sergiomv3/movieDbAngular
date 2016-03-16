module.exports = function(grunt) {
    // Configuramos grunt
    grunt.initConfig({
        less: {
            dev: {
                files: {
                    "styles/style.css": "less/style.less"
                }
            },
            production: {
            }
        },
        postcss: {
            options: {
                processors: [
                    //require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')() //({browsers: 'last 2 versions'}), // add vendor prefixes
                    //require('cssnano')() // minify the result
                ]
            },
            dev: {
                src: 'styles/*.css'
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: [
                    'vendor/*.js',
                    'scripts/**/*.js', // cualquier archivo js
                    'scripts/app.js'
                ],
                dest: 'dist/built.js',
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/built.min.js': ['dist/built.js']
                }
            }
        },
        watch: {
            options: {
                spawn: true
            },
            less: {
                files: ['less/*.less'],
                tasks: ['less:dev', 'postcss:dev']
            },
            js: {
                files: ['scripts/**/*.js', 'scripts/*.js'],
                tasks: ['concat']
            }
        }
    });
    // cargamos los módulos que necesitamos
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Definimos las tareas disponibles
    //grunt.registerTask('default', ['less', 'postcss', 'watch']); // tarea a ejecutar por defecto
    grunt.registerTask("default", ["less:dev", "postcss:dev", "concat:dist", "watch"]);
    //grunt.registerTask("lessc", ["less:dev", "postcss:dev"]);
    //grunt.registerTask("concatjs", ["concat:dist"]);
    //grunt.registerTask("prod", ["less:dev", "postcss:dev", "concat:dist", "uglify"]);
};