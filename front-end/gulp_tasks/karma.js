/**
 * Created by ebinhon on 2/7/2017.
 */
process.env.NODE_ENV = 'test';

const path = require('path');
const gulp = require('gulp');
const nightwatch = require('gulp-nightwatch');
const karma = require('karma');

gulp.task('karma:single-run', karmaSingleRun);

gulp.task('karma:e2e', function () {
  return gulp.src('test/e2e/specs/**/*.spec.js')
    .pipe(nightwatch({
      configFile: 'build/nightwatch.config.js',
      cliArgs: ['--env chrome']
    }));
});

function karmaFinishHandler(done) {
  return failCount => {
    done(failCount ? new Error(`Failed ${failCount} tests.`) : null);
  };
}

function karmaSingleRun(done) {
  const configFile = path.join(process.cwd(), 'conf', 'karma.conf.js');
  const karmaServer = new karma.Server({ configFile }, karmaFinishHandler(done));
  karmaServer.start();
}
