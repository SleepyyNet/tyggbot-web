module.exports = function(grunt) {
    grunt.initConfig({
        run: {
            options: {
                cwd: 'static/'
            },
            your_target: {
                cmd: 'gulp',
                args: [
                    'build'
                ]
            }
        },
        wget: { /* clean up unused css-stuff. you need to replace your URLs here */
            '.tmp.index.html': 'http://forsen.pajlada.se/',
            '.tmp.commands.html': 'http://forsen.pajlada.se/commands',
            '.tmp.decks.html': 'http://forsen.pajlada.se/decks',
            '.tmp.points.html': 'http://forsen.pajlada.se/points',
            '.tmp.debug.html': 'http://forsen.pajlada.se/debug',
        },
        uncss: {
            dist: {
                files: {
                    'static/semantic/semantic.min.css': ['.tmp.index.html', '.tmp.commands.html', '.tmp.decks.html', '.tmp.points.html', '.tmp.debug.html']
                }
            }
        }
    })
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-wget');
    grunt.loadNpmTasks('grunt-run');

    /* TODO: First task should be to remove any .tmp.*.html files */

    grunt.registerTask('default', ['run', 'wget', 'uncss']);
}
