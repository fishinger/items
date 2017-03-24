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
    gulp.src('public/assets/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 20 version'],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('../scss-maps/'))
        .pipe(gulp.dest('public/assets/css/'));
});

var pluginsJS = [
    'public/assets/js/jquery-1.9.1.min.js',
    'public/assets/js/angular.min.js',
    'public/assets/js/angular-locale_ru-ru.js',
    'public/assets/js/angular-ui-router.min.js',
    'public/assets/js/sanitize.js',
    'public/assets/js/lodash.min.js',
    'public/assets/js/angular-resource.min.js',
    'public/assets/js/angular-animate.min.js',
    'public/assets/js/angular-aria.min.js',
    'public/assets/js/angular-messages.min.js',
    'public/assets/js/angular-material.min.js',
    'public/assets/js/lightgallery/lightgallery.min.js',
    'public/assets/js/lightgallery/lg-thumbnail.min.js',
    'public/assets/js/lightgallery/lg-fullscreen.min.js'
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
    gulp.watch('public/assets/scss/**/*.scss', ['scss']);
});

gulp.task('default', ['watch']);