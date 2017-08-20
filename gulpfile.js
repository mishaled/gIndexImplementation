let gulp = require('gulp');
let ts = require('gulp-typescript');
let gmocha = require('gulp-mocha');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject("tsconfig.json");


gulp.task('default', () => {

});

gulp.task('typescript', () => {
    return gulp
        .src(['**/*.ts', '!node_modules/**/*.ts'])
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('test', ['typescript'], () => {
    return gulp
        .src(['**/*.spec.js', '!node_modules/**/*.js'], { read: true })
        .pipe(gmocha({ reporter: 'spec' }))
});

gulp.task('watch', ['test'], () => {
    return gulp
        .watch('**/*.ts', ['test'])
});