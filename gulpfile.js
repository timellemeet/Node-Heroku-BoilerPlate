var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', ['compile', 'nodemon']);

gulp.task('compile', function() {});

gulp.task('nodemon', function() {
    nodemon({
        script: './app.js',
        ext: 'js html scss ect',
        watch: ['./views', './routes', './'],
        env: {
            'NODE_ENV': 'development'
        }
    })
});
