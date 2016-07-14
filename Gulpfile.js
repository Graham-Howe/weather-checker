var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  gulp.src(['./node_modules/jquery/dist/jquery.js', 
  		    './node_modules/leaflet/dist/leaflet.js', 
  		    './lib/js/init.js', 
  		    './lib/js/map.js', 
  		    './lib/js/getweather.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./lib/'))
});

gulp.task('default', ['scripts']);