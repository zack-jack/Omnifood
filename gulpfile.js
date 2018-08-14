var gulp = require("gulp");
var browserSync = require("browser-sync").create();

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
  gulp.watch("*.html", ["bs-reload"]);
});
