import gulp from "gulp";
import tslint from "gulp-tslint";
import ts from "gulp-typescript";

gulp.task("ts", () => {
    return gulp.src('src/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('public/js/'));
});

gulp.task("tslint", () => {
    gulp.src("src/*.ts")
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('default', ['tslint']);
