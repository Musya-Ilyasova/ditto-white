import $ from "../config/plagins.js";
import gcmq from "gulp-group-css-media-queries";
import * as dartSass from 'sass';
import gulpSass from "gulp-sass";

const sassCompiler = gulpSass(dartSass);

export const styles = () => {
  return app.src("src/sass/*.scss")
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe($.autoprefixer({ grid: "autoplace" }))
    .pipe(gcmq())
    .pipe(
      $.csso({
        restructure: false,
        sourceMap: true,
        debug: true,
      })
    )
    .pipe($.rename({ extname: ".min.css" }))
    .pipe(app.dest("dist/css"))
    .pipe(app.reload({ stream: true }));
};

export const stylesBuild = () => {
  return app.src("src/sass/*.scss")
    .pipe(sassCompiler().on("error", sassCompiler.logError))
    .pipe($.autoprefixer({ grid: "autoplace" }))
    .pipe(gcmq())
    .pipe(
      $.csso({
        restructure: false,
        sourceMap: true,
        debug: true,
      })
    )
    .pipe($.rename({ extname: ".min.css" }))
    .pipe(app.dest("dist/css"))
    .pipe(app.reload({ stream: true }));
};
