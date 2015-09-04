module.exports = function(grunt) {

	grunt.initConfig({

		postcss: {

			options: {
				processors: [
					require('lost')(),
					// require('postcss-colorblind')(),
					require('postcss-pxtorem')({
						prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing']
					}),
					require('postcss-style-guide')({
						name: 'Auto Style Guide',
						theme: '1column'
					})
				]
			},
			dist: {
				src: 'src/style.css',
				dest: 'dest/style.css'
			}

		},

		rtlcss: {
			'default':{
				dest   : 'dest/style-rtl.css',
				src    : 'dest/style.css'
			}
		}
 
	});

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-rtlcss');

};