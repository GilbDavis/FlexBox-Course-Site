const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

function css() {
  return gulp.src('scss/app.scss')
    .pipe(autoPrefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(gulp.dest('css'));
}

function watchFiles() {
  gulp.watch('scss/*.scss', css);
  gulp.watch('index.html');
}

//Registrar funciones como tarea
gulp.task('css', css);
gulp.task('watch', watchFiles);