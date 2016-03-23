module.exports = function(grunt) {

grunt.initConfig({
  jekyll: {
    serve: {
      options: {
        serve: true,
        drafts: true,
        future: true
      }
    },
  },
htmllint: {
    html: {
	  options: {
	    force: false,
	    htmllintrc: true,
		plugins: ['htmllint-spellcheck'],
	  },
	  src: [
        '*.html'
      ]
    }
  },
  mdspell: {
    options: {
    },
    your_target: {
      files: {
      src: ['*.md', '_posts/*']
    },
    },
  },
});

grunt.loadNpmTasks('grunt-jekyll');
grunt.loadNpmTasks('grunt-htmllint');
grunt.loadNpmTasks('grunt-mdspell');

grunt.registerTask('default', ['htmllint', 'mdspell']);
}
