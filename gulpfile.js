'use strict';
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    merge = require('merge-stream'),
    minify = require('gulp-minify');

gulp.task('default', function() {

    // configure nodemon
    nodemon({
        script: './app.js',
        ext: 'js html scss ect',
        ignore: ['assets/public/*'],
        //watch: ['./views', './routes', './'],
        tasks: ['compile'],
        env: {
            'NODE_ENV': 'development'
        },

    });
});

gulp.task('compile', function() {
    //compiling own sass from views
    gulp
        .src(['./views/*.scss', './views/**/*.scss'])
        .pipe(sass())
        .pipe(concat('sass-style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets/public/'));

    //compiling own javascript from views
    gulp
        .src(['./views/*.js', './views/**/*.js'])
        .pipe(concat('main-script.js'))
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
        }))
        .pipe(gulp.dest('./assets/public/'));
});
