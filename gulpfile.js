const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const parser = require('postcss-scss');
const postcssPresetEnv = require('postcss-preset-env');

function buildStyles() {
	return src('public/assets/scss/*.scss')
		.pipe(
			postcss(
				[
					postcssPresetEnv({
						autoprefixer: true,
						preserve: true,
						browsers: 'last 2 versions, > 1%, IE 10'
					})
				],
				{ parser }
			)
		)
		.pipe(
			sass({
				indentType: 'tab',
				indentWidth: 1
			})
		)
		.pipe(dest('public/assets/css'));
}

function watchTask() {
	watch(['public/assets/scss/*.scss'], buildStyles);
}

module.exports = {
	default: series(buildStyles, watchTask)
};
