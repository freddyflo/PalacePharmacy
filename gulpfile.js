var gulp = require('gulp');
var sass = require('gulp-sass'); /* required in the gulp task sass as well as the default*/
var autoprefixer = require('gulp-autoprefixer'); /* required in the gulp task sass */
var livereload = require('gulp-livereload'); /* required in all tasks*/
var scsslint = require('gulp-scss-lint'); /*required in the gulp task scss-lint as well as the default*/


// default gulp task with the watchers
gulp.task('default', ['sass', 'scss-lint'], function () {
  livereload.listen();/* reloads the page on calls for livereload()*/
  gulp.watch('./app/*.html', []); /*watch for HTML changes*/
  gulp.watch('./app/scss/**/*.scss', ['sass','scss-lint']); /*watch for SCSS changes, lint the files and compile them*/
});

//SASS compiler
gulp.task('sass', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass()) /*Run Sass on those files*/
    .pipe(autoprefixer({browsers: ['ie 7'], cascade: false}))
    .pipe(gulp.dest('./dist/css')) /*Write the resulting CSS in the output folder*/
    .pipe(livereload()); /*To reload the page*/
});


//SCSS linter
gulp.task('scss-lint', function () {
  return gulp.src( ['!./app/scss/vendor/*', '!./app/scss/base/_template-page.scss', './app/scss/**/*.scss']) /* runs the linter on all files except the vendor files and the page template*/
    .pipe(scsslint({ config: '.scss-lint.yml', })) /* source of the config files*/
    .pipe(livereload()); /*To reload the page*/
});
