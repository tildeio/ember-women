import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Clean output directory
// =============================================================================
gulp.task('clean', cb => del(
  ['.tmp', '_dist/*', '_dist', '!dist/.git'], {
    dot: true
  })
);

// Compile and automatically prefix stylesheets
// =============================================================================
gulp.task('styles', () => {

  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 35',
    'chrome >= 40',
    'safari >= 7',
    'opera >= 23',
    'ios >= 8',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'source/scss/**/*.scss',
    'source/css/**/*.css'
  ])
  .pipe($.newer('.tmp/styles'))
  .pipe($.sourcemaps.init())
  .pipe($.sass({
    precision: 10
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
  .pipe(gulp.dest('.tmp/styles'))
  .pipe($.size({title: 'styles'}))
  .pipe($.sourcemaps.write('./'))
  .pipe(gulp.dest('source/css'));
});


// Standard dev task.. Watch files for changes & reload
// =============================================================================
gulp.task('watch', ['clean', 'styles'], cb => {
  gulp.watch(['source/scss/**/*.{scss,css}'], ['styles', reload]);
});

// Preview production ready files locally
// =============================================================================
gulp.task('preview-prod', cb => {
  browserSync({
    notify: false,
    open: false,
    server: 'tmp',
    port: '4000'
  });
});
