var gulp = require('gulp');
var postcss = require('gulp-postcss');

var lost = require('lost');
var colorblind = require('postcss-colorblind');
var pxtorem = require('postcss-pxtorem');
var styleGuide = require('postcss-style-guide');

var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');

var fs = require("fs");


gulp.task('css', function () {
	var processors = [
		lost,
		// colorblind({method: 'deuteranomaly'}),
		// colorblind({method: 'protanopia'}),
		pxtorem({
			prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing']
		}),
		styleGuide({
			name: 'Auto Style Guide',
			theme: '1column'
		})
	];
	return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});

gulp.task('rtl', function () {
	return gulp.src('./dest/style.css')
		.pipe(rtlcss())
		.pipe(rename({ suffix: '-rtl' }))
		.pipe(gulp.dest('./dest'));
});