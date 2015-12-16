var gulp = require('gulp');

gulp.task('default', function() {
  
    var gulp = require('gulp');
var sprite = require('gulp-sprite-generator');
    
 
gulp.task('sprites', function() {
    var spriteOutput;
 
    spriteOutput = gulp.src("./src/css/*.css")
        .pipe(sprite({
            baseUrl:         "./src/image",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "/dist/image"
        });
 
    spriteOutput.css.pipe(gulp.dest("./dist/css"));
    spriteOutput.img.pipe(gulp.dest("./dist/image"));

});
    
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function () {
    return gulp.src('src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});