module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 3030, // custom port
                    base: '.', // current directory for 'index.html' is root
                    keepalive: true, // keep the server alive indefinitely
                    }
                }
            }
		});
		grunt.loadNpmTasks('grunt-contrib-connect');
		grunt.registerTask('default');
    };