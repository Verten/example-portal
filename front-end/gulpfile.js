var gulp = require('gulp');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackCompiler = webpack(webpackConfig);
var Server = require('karma').Server;


gulp.task('default', function () {
  // place code for your default task here
});

gulp.task("build-js", function (callback) {
  webpackCompiler.run(function (err, stats) {
    if (err) {
      console.log("[webpack:build-js]: stats:" + stats + ", err:" + err);
    }

    callback();
  });
});

gulp.task('test:unit', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});