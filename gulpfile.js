const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

gulp.task('scss', ()=> {
	return gulp
  .src('src/scss/styles.scss')
	.pipe(sass().on('error', sass.logError))
  .pipe(postcss([autoprefixer('last 2 versions')]))
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.stream());
});

// copy js files to dist
gulp.task('copy-js', ()=> {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js'));
});

// copy html files to dist
gulp.task('copy-html', ()=> {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-assets', ()=> {
	return gulp.src('src/images/*.{png,svg,jpg,jpeg,webp}')
		.pipe(gulp.dest('dist/images'));
});

// browser sync task
gulp.task('watch', ()=> {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
	gulp.watch('src/**/*.scss', gulp.series('scss'));
	gulp.watch('src/*.html', gulp.series('copy-html'));
	gulp.watch('src/**/*.js', gulp.series('copy-js'));
	gulp.watch('src/**/*.{png,svg,jpg,jpeg,webp}', gulp.series('copy-assets'));
	gulp.watch('src/*.html').on('change', browserSync.reload);
	gulp.watch('src/**/*.{png,svg,jpg,jpeg,webp}').on('change', browserSync.reload);
	gulp.watch('src/**/*.js').on('change', browserSync.reload);
});

//build project
gulp.task('project-build', gulp.series('copy-assets','scss', 'copy-js', 'copy-html'));

//to run watch task type: gulp
gulp.task('default', gulp.series('watch'));