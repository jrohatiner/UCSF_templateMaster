module.exports = function(grunt) {
	//Configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json') ,
		jshint: {
			options: {
				smarttabs: false,
				curly: true,
				immed: true,
				latedef: true,
				noarg: true,
				quotmark: 'single',
				undef: true,
				unused: true,
				strict: true,
				trailing: true,
				jquery: true,
				module: true,
				globals: {
					window: true,
					document: true,
					navigator: true
				}
			},
			all: ['src/**/*.js']
		},
		uglify: {
			options: {
				banner: '/*! skrollr-menu <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */\n'
			},

			all: {
				files: {
					'dist/skrollr.menu.min.js': 'src/skrollr.menu.js',
				}
			}
		},
	

  qunit: {
    all: ['HTML5/**/*.html']
  },

  concat: {
    options: {
      separator: ';',
    },
    dist: {
    src: ['src/imagesloaded.js', 'src/jquery-lazyloadanything.js', 'src/jquery.liquid-slider.js', 'src/main.js', 'src/print.js,'],
      dest: 'dist/built.js',
    },
  },
 
  
	watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

	//Dependencies.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-uncss');
	

	//Tasks.
	grunt.registerTask('test', ['jshint', 'qunit']);
	
	grunt.registerTask('default', ['jshint', 'uglify','concat', 'uncss', 'qunit']);
};