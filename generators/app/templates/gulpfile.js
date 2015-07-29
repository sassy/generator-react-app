var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var babelify = require('babelify');

gulp.task('build', function() {
  var b = browserify({
    entries: ['./src/main.js'],
    transform: [babelify],
    debug: true
  });
  return b.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./bundle'))
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
      server : {
          baseDir : './'
      }
  });
  gulp.watch(['./src/*.jsx', './src/*.js'], ['build']);
  gulp.watch('./app.js', ['reload']);
});

gulp.task('default', ['serve']);
