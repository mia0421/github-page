var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    notify     = require('gulp-notify'),
    browserify = require('browserify'),
    connect    = require('gulp-connect'),
    minifyCss  = require('gulp-minify-css'),
    plumber    = require('gulp-plumber'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    buffer     = require('gulp-buffer'),
    sass = require('gulp-ruby-sass'),
    del = require('del');

var path = {
      Js        : ['src/*.js','app.js'],
      Css       : ['scss/*.+(scss|css)'],
      library   : ['librart/**/*.js'],
      Html      : ['index.html'],
      Watch     : ['build/app.min.js','build/main.min.css','index.html'],
      DEST_BUILD: 'build'
};

/*建立網站*/
gulp.task('startServer',function(){
    connect.server({
        port:6952,
        livereload:true
    });
});

gulp.task('closeServer',function(){
    connect.serverClose();
});

gulp.task('librartTool',function(){
     gulp.src(path.library)
        .pipe(concat('librar.min.js'))
        .pipe(gulp.dest(path.DEST_BUILD))
        .pipe(notify({
            message:'librart 完成'
        }));
})

gulp.task('srcTool',function () {
    browserify('app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('app.min.js'))
        .pipe(buffer())
        .pipe(plumber())
        .pipe(gulp.dest(path.DEST_BUILD))
        .pipe(notify({
            message:'js 完成'
        }));
});

gulp.task('cssTool',function() {
        sass('scss', { 
            sourcemap: true,
            compass: true,
            require: ['susy']
        })
        .pipe(sourcemaps.write())
        .pipe(plumber())
        .pipe(concat('main.min.css'))
        //.pipe(minifyCss())
        .pipe(gulp.dest(path.DEST_BUILD))
        .pipe(notify({
            message:'css 完成'
        }));
});

gulp.task('clean', function(cb) {
    del([
        'package.json',
        'app.js',
        'main.js',
        'librart',
        'src',
        'scss',
        '.sass-cache'
    ], cb);
});

gulp.task('watch',function(){

    gulp.watch(path.Js,['srcTool']);
    gulp.watch(path.Css,['cssTool']);
    gulp.watch(path.Watch, function(event){
        gulp.src(event.path)
            .pipe(plumber())
            .pipe(connect.reload())
    });
})

gulp.task('dev',['startServer','librartTool','srcTool','cssTool','watch']);

gulp.task('master',['librartTool','srcTool','cssTool','clean']);


