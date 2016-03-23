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
    build: {
      options: {
        serve: false,
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
  dock: {
    options: {
      docker: {socketPath: '/var/run/docker.sock'},
      images: {
        'tooangel': {
          dockerfile: './Dockerfile',
          options: {
            build: {}
          }
        }
      }
    }
  },
mdlint: ['*.md', '_posts/*.markdown']
});

grunt.loadNpmTasks('grunt-jekyll');
grunt.loadNpmTasks('grunt-htmllint');
grunt.loadNpmTasks('grunt-mdspell');
grunt.loadNpmTasks('grunt-mdlint');
grunt.loadNpmTasks('grunt-dock');

grunt.registerTask('default', ['mdlint', 'htmllint', 'mdspell', 'jekyll:build']);
}
