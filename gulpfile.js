'use strict';
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    merge = require('merge-stream');

gulp.task('default', function() {

    // configure nodemon
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

gulp.task('compile', function() {
    //compiling own sass
    gulp
        .src(['./views/*.scss', './views/**/*.scss'])
        .pipe(sass())
        .pipe(concat('sass-style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets/public/'));
});
