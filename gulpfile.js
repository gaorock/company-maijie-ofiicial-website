const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
 

async function normal() {
  gulp.src('styles/style.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles'))  
}

async function mobile() {
  gulp.src('styles/style.m.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles'))  
}

exports.default = gulp.series(normal, mobile);