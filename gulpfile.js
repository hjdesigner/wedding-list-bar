var gulp					=	require('gulp'),
		autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
		sass          = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/sass/stylus.+(scss|sass)')
      .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: 'compressed'
      }).on('error',sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 2 versions', 'ie 9', 'Firefox ESR'],
			  cascade: false
			 }))
      .pipe(sourcemaps.write(''))            
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});
