/**
 * Created by ebinhon on 2/15/2017.
 */
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const conf = require('../build/gulp.conf');

gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
    //.pipe(eslint.failAfterError());
})

gulp.task('lint:watch',() => {
  gulp.watch('src/**/*.js', gulp.series('lint'));
})

