'use strict';
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    merge = require('merge-stream');

gulp.task('default', ['compile', 'nodemon']);

gulp.task('compile', function() {
    var scssStream = gulp.src(['./views/main.scss', './views/**/*.scss'])
        .pipe(sass())
        .pipe(concat('scss-files.scss'));
    /*
    var cssStream = gulp.src([...])
        .pipe(concat('css-files.css'))
    ;*/

    var mergedStream = merge(scssStream /*,cssStream*/ )
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./public'));

    return mergedStream;

});

gulp.task('nodemon', function() {
    nodemon({
        script: './app.js',
        ext: 'js html scss ect',
        watch: ['./views', './routes', './'],
        tasks: ['compile'],
        env: {
            'NODE_ENV': 'development'
        },

    });
});
