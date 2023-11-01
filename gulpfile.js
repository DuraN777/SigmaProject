const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('scss', ()=> {
	return gulp
  .src('src/scss/styles.scss')
	.pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
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
	return gulp.src('src/images/*.{png,svg,jpg,jpeg}')
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
	gulp.watch('src/**/*.{png,svg,jpg,jpeg}', gulp.series('copy-assets'));
	gulp.watch('src/*.html').on('change', browserSync.reload);
	gulp.watch('src/**/*.{png,svg,jpg,jpeg}').on('change', browserSync.reload);
	gulp.watch('src/**/*.js').on('change', browserSync.reload);
});

//build project
gulp.task('project-build', gulp.series('copy-assets','scss', 'copy-js', 'copy-html'));

//to run watch task type: gulp
gulp.task('default', gulp.series('watch'));

// // Define a 'sass' task to compile your Sass files
// gulp.task('sass', function () {
//   return gulp.src('src/scss/**/*.scss') // Source directory of your Sass files
//     .pipe(sass()) // Compile Sass to CSS
//     .pipe(gulp.dest('dist/css')); // Destination directory for the compiled CSS
// });

// // Watch for changes in Sass files
// gulp.task('watch', function () {
//   gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
// });

// function serve() {
//   browserSync.init({
//     server: './dist', // Set the base directory to your build (dist) folder
//   });

//   // Watch for changes in these files and trigger a reload
//   gulp.watch('dist/*.html').on('change', browserSync.reload);
//   gulp.watch('dist/js/*.js').on('change', browserSync.reload);
//   gulp.watch('dist/css/*.css').on('change', browserSync.reload);
// }

// // Default task to run 'watch' when you run 'gulp' without specifying a task
// gulp.task('default', gulp.series('watch'));

// exports.serve = serve;
