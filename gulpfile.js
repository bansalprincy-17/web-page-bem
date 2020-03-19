var gulp = require('gulp');
var sass = require('gulp-sass');
var print = require('gulp-print').default;
//var karma = require('gulp-karma');
gulp.task('sass',  function () {
    return gulp.src(['src/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./src'))
        .pipe(print(function(x) { return x; } ));
});