const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const cssnano = require("gulp-cssnano");
const del = require("del");
const inlinesource = require("gulp-inline-source");

gulp.task("styleAppCritcss", () => {
  return gulp
    .src("src/App.critcss.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(gulp.dest("./public/assets/styles/"));
});

gulp.task("styleApp", () => {
  return gulp
    .src("src/App.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest("./src/assets/gulpCss/grpCssMedia/"));
});

gulp.task("inlinesource", function() {
  return gulp
    .src("gulpHtml/index.html")
    .pipe(inlinesource())
    .pipe(gulp.dest("./gulpHtml/productionHtml/"));
});

gulp.task("clean", () => {
  return del(["public/assets/styles/App.critcss.css"]);
});

gulp.task(
  "default",
  gulp.series(["clean", "styleAppCritcss", "styleApp", "inlinesource"])
);
