var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    pump = require('pump');

gulp.task('scss', function () {
    gulp.src('_scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 20 version'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('../scss-maps/'))
        .pipe(gulp.dest('css/'));
});

var pluginsJS = [
    'assets/js/jquery-1.9.1.min.js',
    'assets/js/angular.min.js',
    'assets/js/angular-locale_ru-ru.js',
    'assets/js/angular-ui-router.min.js',
    'assets/js/sanitize.js',
    'assets/js/lodash.min.js',
    'assets/js/angular-resource.min.js',
    'assets/js/angular-animate.min.js',
    'assets/js/angular-aria.min.js',
    'assets/js/angular-messages.min.js',
    'assets/js/angular-material.min.js',
    'assets/js/lightgallery/lightgallery.min.js',
    'assets/js/lightgallery/lg-thumbnail.min.js',
    'assets/js/lightgallery/lg-fullscreen.min.js',
    'assets/js/youtube.js'
];

gulp.task('plugins', function () {
    // concat minify plugins JS
    gulp.src(pluginsJS)
        .pipe(concat('assets/_plugins-all.min.js')).on('error', sass.logError)
        .pipe(uglify())
        .pipe(gulp.dest(''));
});

gulp.task('all', ['scss', 'plugins', 'js.min']);

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);