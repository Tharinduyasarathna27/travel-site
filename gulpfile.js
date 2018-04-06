var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autpfrefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function(){
    console.log("gulf default task.");
});

gulp.task('html', function(){
    console.log("Html gulf task.");
});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([ cssimport,cssvars ,nested, autpfrefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

    watch('./app/index.html', function(){
        gulp.start('html');
    });
    
        watch('./app/assets/styles/**/*.css', function(){
            gulp.start('styles');
        });

});