"use strict";

var autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");
var del = require("del");
var gulp = require("gulp");
var runSequence = require("run-sequence");
var uglify = require("gulp-uglify");
var browserSync = require("browser-sync").create();

// Sets browser supoprt
const AUTOPREFIXER_BROWSERS = [
  "ie >= 10",
  "ie_mob >= 10",
  "ff >= 30",
  "chrome >= 34",
  "safari >= 7",
  "opera >= 23",
  "ios >= 7",
  "android >= 4.4",
  "bb >= 10"
];

// Gulp task to serve the dev server and autorefresh browser
gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("bs-reload", function() {
  browserSync.reload();
});

gulp.task("default", ["serve"], function() {
  gulp.watch("src/css/*.css", function(file) {
    if (file.type === "changed") {
      browserSync.reload(file.path);
    }
  });
  gulp.watch("vendors/css/*.css", function(file) {
    if (file.type === "changed") {
      browserSync.reload(file.path);
    }
  });
  gulp.watch("src/scripts/*.css", function(file) {
    if (file.type === "changed") {
      browserSync.reload(file.path);
    }
  });
  gulp.watch("vendors/scripts/*.css", function(file) {
    if (file.type === "changed") {
      browserSync.reload(file.path);
    }
  });

  gulp.watch("*.html", ["bs-reload"]);
});

// Gulp task to minify CSS files
gulp.task("styles", function() {
  return (
    // styles
    gulp
      .src("./src/css/styles.css")
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest("./dist/css")),
    // media queries
    gulp
      .src("./src/css/media-queries.css")
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest("./dist/css"))
  );
});

// Gulp task to minify JavaScript files
gulp.task("scripts", function() {
  return (
    // scripts
    gulp
      .src("./src/scripts/*.js")
      // Minify the file
      .pipe(uglify())
      // Output
      .pipe(gulp.dest("./dist/js"))
  );
});

// Clean output directory
gulp.task("clean", () => del(["dist"]));

// Gulp task to minify all files
gulp.task("default", ["clean"], function() {
  runSequence("styles", "scripts");
});
