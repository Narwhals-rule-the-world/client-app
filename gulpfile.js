var gulp        = require('gulp'),
    tap         = require('gulp-tap'),
    fs          = require('fs'),
    browserify  = require('browserify'),
    buffer      = require('gulp-buffer'),
    gutil       = require('gulp-util'),
    uglify      = require('gulp-uglify'),
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
  gulp.watch(['./public/react/*.js'], ['react']); // place to watch for react changes
});

gulp.task('default', ['react']);
