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
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'));
});

gulp.task('test', ['typescript'], () => {
    return gulp
        .src(['**/*.js', '!node_modules/**/*.js'])
        .pipe(gmocha({ reporter: 'nyan' }))
});

gulp.task('watch', ['test'], () => {
    return gulp
        .watch('**/*.ts', ['test'])
});