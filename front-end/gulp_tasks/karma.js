/**
 * Created by ebinhon on 2/7/2017.
 */
process.env.NODE_ENV = 'test';

const path = require('path');
const gulp = require('gulp');
const karma = require('karma');

gulp.task('test:unit', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('karma:single-run', karmaSingleRun);

function karmaFinishHandler(done) {
  return failCount => {
    done(failCount ? new Error(`Failed ${failCount} tests.`) : null);
  };
}

function karmaSingleRun(done) {
  const configFile = path.join(process.cwd(), 'conf', 'karma.conf.js');
  const karmaServer = new karma.Server({configFile}, karmaFinishHandler(done));
  karmaServer.start();
}
