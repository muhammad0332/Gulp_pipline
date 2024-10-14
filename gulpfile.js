import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import * as dartSass from 'sass'; 

const sass = gulpSass(dartSass);

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dict/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});

export default gulp.series(compileSass, watch);