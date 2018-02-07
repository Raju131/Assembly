module.exports = function(grunt) {
    grunt.initConfig({
        conf: grunt.file.readJSON('conf/config.json'),
        flyway: {
            options:{
                driver : 'com.mysql.jdbc.Driver',
                user: 'whiteboxqa',
                password: 'Innovapath1*',
                schemas : 'test',
                baselineOnMigrate : "true"
            },
            dev: {
                options: {
                    url: '<%= conf.url.dev %>',
                    locations: 'filesystem:migrate/version_V1'
                },
                command: 'migrate'
            },
            qa: {
                options: {
                    url: '<%= conf.url.qa %>',
                    locations: 'filesystem:migrate/version_V1'
                },
                command: 'migrate'
            },
            stag: {
                options: {
                    url: '<%= conf.url.stag %>',
                    locations: 'filesystem:migrate/version_V1'
                },
                command: 'migrate'
            },
            echo: {
                options: {
                    url: '<%= conf.url.echo %>',
                    locations: 'filesystem:migrate/version_V1'
                },
                command: 'migrate'
            }
        }
    });
    grunt.loadNpmTasks('grunt-flyway');
    grunt.registerTask('dev', ['flyway:dev']);
};
