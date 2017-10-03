var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var browserSync = require( 'browser-sync' ).create();

gulp.task( 'default', function() {
	console.log( 'Default task' );
});

// Grab all .scss files in input directory /app/scss
// Run sass on them
// put .css files in output directory /dist/css
gulp.task( 'sassify', function() {
	return gulp.src( 'app/scss/**/*.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'dist/css') )
		.pipe( browserSync.reload( { stream : true } ) );
});

gulp.task( 'jsify', function() {
	return gulp.src( 'app/js/**/*.js' )
		.pipe( gulp.dest( 'dist/js') )
		.pipe( browserSync.reload( { stream : true } ) );		
});

gulp.task( 'htmlify', function() {
	return gulp.src( 'app/**/*.html' )
		.pipe( gulp.dest( 'dist') )
		.pipe( browserSync.reload( { stream : true } ) );
});

gulp.task( 'build', [ 'sassify', 'jsify', 'htmlify' ] );

gulp.task( 'browserSync', function() {
	browserSync.init( {
		server : {
			baseDir : 'dist'
		}
	});
});

gulp.task( 'watch', [ 'browserSync', 'sassify', 'jsify', 'htmlify' ], function() {
	gulp.watch( 'app/scss/**/*.scss', [ 'sassify' ] );		
	gulp.watch( 'app/js/**/*.js', [ 'jsify' ] );	
	gulp.watch( 'app/**/*.html', [ 'htmlify' ] );	
});

