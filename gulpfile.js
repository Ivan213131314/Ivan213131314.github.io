var gulp=require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const minify = require('gulp-minify');


gulp.task('default', function () {
    gulp.src('css/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));

    gulp.src('js/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
});