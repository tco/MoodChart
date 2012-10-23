module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        lint: {
            all: [
                'grunt.js',
                'application/**/*.js'
            ]
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                es5: true
            },
            globals: {
                define: true,
                describe: true,
                it: true,
                expect: true,
                beforeEach: true,
                afterEach: true,
                setImmediate: true
            }
        },
        watch: {
            files: '<config:lint.all>',
            tasks: 'lint test'
        },
        /*recess: {
            release: {
                src: ['vision/less/main.less'],
                dest: '../release/css/main.css',
                options: {
                    compile: true,
                    compress: true
                }
            }
        },*/
        requirejs: {
            test: {
                almond: true,
                replaceRequireScript: [{
                    files: ['test-build/test.html'],
                    module: 'tests'
                }],
                modules: [{name: 'tests'}],
                dir: 'test-build',
                appDir: 'tests',
                baseUrl: './',
                shim: {
                    'mocha': {
                        'exports': 'mocha'
                    },
                    'expect': {
                        exports: 'expect'
                    },
                    'keymaster': {
                        exports: 'key'
                    },
                    'mocha_yeti': {
                        exports: 'BUNYIP'
                    },
                    'backbone': {
                        //These script dependencies should be loaded before loading
                        //backbone.js
                        deps: ['underscore', 'jquery'],
                        //Once loaded, use the global 'Backbone' as the
                        //module value.
                        exports: 'Backbone'
                    },
                    'collections': {
                        deps: ['models']
                    },
                    'views': {
                        deps: ['transparency', 'collections']
                    },
                    'features': {
                        deps: ['transparency', 'collections']
                    }
                },
                paths: {
                    mocha_yeti:     'lib/mocha-yeti-adaptor',
                    mocha:          'lib/mocha',
                    expect:         'lib/assertion/expect',
                    specs:          'specs',
                    jquery:         '../application/jam/jquery/jquery',
                    underscore:     '../application/jam/underscore/underscore',
                    backbone:       '../application/jam/backbone/backbone',
                    transparency:   '../application/jam/transparency/lib/transparency',
                    keymaster:      '../appllication/jam/keymaster/keymaster',
                    models:         '../application/models',
                    collections:    '../application/collections',
                    templates:      '../application/templates',
                    views:          '../application/views',
                    tools:          '../tools',
                    config:         'config'
                },
                pragmas: {
                    doExclude: true
                },
                skipModuleInsertion: false,
                optimizeAllPluginResources: true,
                findNestedDependencies: true
            },
            release: {
                almond: true,
                replaceRequireScript: [{
                    files: ['release/index.html'],
                    module: 'main'
                }],
                modules: [{name: 'application'}],
                dir: 'release',
                appDir: 'application',
                baseUrl: './',
                paths: {
                    jquery:         'jam/jquery/jquery',
                    underscore:     'jam/underscore/underscore',
                    backbone:       'jam/backbone/backbone',
                    transparency:   'jam/transparency/lib/transparency',
                    keymaster:      'jam/keymaster/keymaster',
                    less:           'jam/less/lib/index',
                    models:         'models',
                    collections:    'collections',
                    templates:      'templates',
                    views:          'views',
                    features:       'features',
                    tools:          'tools',
                    config:         'config'
                },
                pragmas: {
                    doExclude: true
                },
                skipModuleInsertion: false,
                optimizeAllPluginResources: true,
                findNestedDependencies: true
            }
        },
        clean: {
            folder: "test-build"
        },
        bunyip: {
            phantom: {
                waitBrowsersFor: 3000,
                args: [
                    '-f',
                    'test-build/test.html',
                    'local',
                    '-l',
                    '"phantomjs"'
                ],
                timeout: 30000
            },
            all: {
                waitBrowsersFor: 6000,
                args: [
                    '-f',
                    'test-build/test.html',
                    'local',
                    '-l',
                    '"firefox|chrome|safari|phantomjs"'
                ],
                timeout: 30000
            }
        },
        mocha: {
            index: ['test-build/test.html']
        }
    });

    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-bunyip');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('testbuild', 'clean requirejs:test');
    grunt.registerTask('test', 'testbuild mocha');
    grunt.registerTask('bunyiptest', 'testbuild bunyip:phantom clean');

    grunt.registerTask('release', 'requirejs:release recess:release regen');

    grunt.registerTask('default', 'lint bunyiptest release');

};
