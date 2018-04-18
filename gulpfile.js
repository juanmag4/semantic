var gulp = require('gulp');

gulp.task('default', function() {
  console.log("HOLA");
});

gulp.task('html', function() {
  gulp.src('./*.html').pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('images/src/**/*', ['image']);
    gulp.watch('./*.html', ['html']);
});

// var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);
// watcher.on('change', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });