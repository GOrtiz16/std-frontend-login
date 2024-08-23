const gulp = require('gulp');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');

// Tarea para concatenar y minificar archivos JavaScript
gulp.task('scripts', function() {
  return gulp.src('./dist/consolidated-position/*.js')
    .pipe(plumber())
    .pipe(concat('consolidated-position.js'))
    .pipe(gulp.dest('./dist/consolidated-position/'))
    .pipe(gulp.dest('./dist/consolidated-position/'))
    .pipe(gulp.dest('./dist/consolidated-position/browser'))
    .on('end', () => console.log('JavaScript files processed successfully.'));
});

// Tarea para copiar el archivo styles.css
gulp.task('styles', function() {
  return gulp.src('./dist/consolidated-position/styles.css')
    .pipe(plumber())
    .pipe(gulp.dest('./dist/consolidated-position/browser'))
    .on('end', () => console.log('CSS file copied successfully.'));
});

// Tarea por defecto para ejecutar ambas tareas
gulp.task('default', gulp.series('scripts', 'styles', function(done) {
  console.log('Gulp tasks completed successfully.');
  done();
}));
