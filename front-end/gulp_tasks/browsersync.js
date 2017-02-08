const gulp = require('gulp');
const browserSync = require('browser-sync');
const spa = require('browser-sync-spa');

const browserSyncConf = require('../build/browsersync.conf');
const browserSyncProdConf = require('../build/browsersync-prod.conf');

browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);
gulp.task('browsersync:prod', browserSyncProd);

function browserSyncServe(done) {
  browserSync.init(browserSyncConf());
  done();
}

function browserSyncProd(done) {
  browserSync.init(browserSyncProdConf());
  done();
}