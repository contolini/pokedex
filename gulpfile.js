var path = require('path');
var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var es6ify = require('es6ify');
var brfs = require('brfs');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var del = require('del');
var isparta = require('isparta');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');


// TODO: Browserify doesn't play nice with ES6 :(
// https://github.com/substack/brfs/issues/39
gulp.task('scripts', ['babel'], function () {
  browserify({ debug: true })
    .add(es6ify.runtime)
    .transform(es6ify)
    .transform(brfs)
    .require(require.resolve('./lib/index.js'), { entry: true })
    .bundle()
    .pipe(fs.createWriteStream('./dist/browser.js'));
});

gulp.task('nsp', function (cb) {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('pre-test', function () {
  return gulp.src('lib/**/*.js')
    .pipe(istanbul({
      includeUntested: true,
      instrumenter: isparta.Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('babel', ['clean'], function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('prepublish', ['nsp', 'scripts']);
gulp.task('default', ['test']);
