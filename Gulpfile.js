var gulp = require('gulp')
var sass = require('gulp-sass')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename');


gulp.task('styles', function(){
    gulp
        .src('sass/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
})

gulp.task('assets', function () {
  gulp
    .src('assets/*/*')
    .pipe(gulp.dest('public/'))
  gulp
    .src('assets/*/*/*')
    .pipe(gulp.dest('public/'))
  gulp
    .src('assets/*/*/*/*')
    .pipe(gulp.dest('public/'))
  gulp
    .src('assets/*/*/*/*/*')
    .pipe(gulp.dest('public/'))
  gulp
    .src('assets/*/*/*/*/*/*')
    .pipe(gulp.dest('public/'))
  gulp
    .src('assets/*/*/*/*/*/*/*')
    .pipe(gulp.dest('public/'))
})

gulp.task('scripts', function () {
  browserify('./src/index.js')
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('apps.js'))
    .pipe(gulp.dest('public/js'))

})

gulp.task('default', ['styles', 'assets', 'scripts'])