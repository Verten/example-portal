const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const conf = require('./build/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([conf.path.tasks('*.js')]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('webpack:prod'))); // 'other',
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:e2e', gulp.series('webpack:prod', 'browsersync:prod', 'karma:e2e', 'browsersync:stop'));
gulp.task('dev', gulp.series('webpack:dev', 'browsersync', 'lint:watch'));
gulp.task('default', gulp.series('clean', 'lint', 'build'));
