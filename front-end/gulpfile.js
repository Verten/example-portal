const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('other', 'webpack:dist')));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:e2e', gulp.series('webpack:dev','browsersync','karma:e2e'));
gulp.task('dev', gulp.series('webpack:dev','browsersync'));
gulp.task('default', gulp.series('clean', 'build'));
