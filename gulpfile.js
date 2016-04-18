var gulp        = require('gulp'),
    server      = require('gulp-webserver'),
    tap         = require('gulp-tap'),
    fs          = require('fs'),
    browserify  = require('browserify'),
    buffer      = require('gulp-buffer'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
    gls         = require('gulp-live-server'),
    less        = require('gulp-less');

// Transpile LESS to CSS
gulp.task('less', function() {
  return gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});

// Watch for changes = first variable and run defined tasks = second variable
gulp.task('watch', function() {
  gulp.watch(['./src/public/less/**/*.less'], ['less']);
});
