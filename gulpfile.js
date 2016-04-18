var gulp        = require('gulp'),
<<<<<<< HEAD
    server      = require('gulp-webserver'),
=======
>>>>>>> react
    tap         = require('gulp-tap'),
    fs          = require('fs'),
    browserify  = require('browserify'),
    buffer      = require('gulp-buffer'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
<<<<<<< HEAD
    gls         = require('gulp-live-server'),
    less        = require('gulp-less'),
    path        = require('path');

// Transpile LESS to CSS
gulp.task('less', function() {
  return gulp.src('./public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css'));
});

// Watch for changes = first variable and run defined tasks = second variable
gulp.task('watch', function() {
  gulp.watch(['./public/less/**/*.less'], ['less']);
});
=======
    concat      = require('gulp-concat');

gulp.task('react', function(){
  return gulp.src('./public/jsx/*.js') // place to read react files from
    .pipe(tap(function(file) {
      file.contents = browserify(file.path).transform('babelify', {presets: ['es2015', 'react']}).bundle()
    }))
    .pipe(buffer())
    .pipe(concat('./production-app.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./public/js')); // place to send uglified regular js files
});

gulp.task('watch', function() {
  gulp.watch(['./public/jsx/*.js'], ['react']); // place to watch for react changes
});

gulp.task('default', ['react']);
>>>>>>> react
