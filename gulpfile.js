//require gulp

var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sassimport = require("gulp-sass");
var watch = require('gulp-watch');
var babel = require('gulp-babel');

//locate paths

var paths = {
   jsSource: ['./app/**/*.js'],
   sassSource: ['./app/**/*.scss'],
};


//define bundle
gulp.task('scss', function() {
   gulp.src(paths.sassSource)
       .pipe(concat('bundle.css'))
       .pipe(sassimport())
       .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
   gulp.src(paths.jsSource)
      // .pipe(babel()) //Uncomment if using ES6
       .pipe(annotate())
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest('./dist'));
});

//make it watch for changes

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['scss']);
});

gulp.task('default', ['js', 'scss', 'watch'  ]); 
