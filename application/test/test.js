/*global require: true*/
"use strict";

// Configure RequireJS
require.config({
    baseUrl:'.',
    urlArgs: "v="+(new Date()).getTime(),
    shim: {
        'mocha': {
            'exports': 'mocha'
        },
        'expect': {
            exports: 'expect'
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
        }
    },
    paths: {
        mocha_yeti:     'lib/mocha-yeti-adaptor',
        specs:          'specs',
        mocha:          'lib/mocha',
        expect:         'lib/assertion/expect',
        jquery:         '../jam/jquery/jquery',
        underscore:     '../jam/lodash/lodash',
        backbone:       '../jam/backbone/backbone',
        transparency:   '../jam/transparency/lib/transparency',
        models:         '../models',
        collections:    '../collections',
        templates:      '../templates',
        views:          '../views',
        config:         'config'
    }
});

// Require libraries
require(['require',
         'expect',
         'mocha',
         'mocha_yeti'],
        function(require) {
            var self = this || window;
            var globals = ['jQuery*'];
            self.mocha.setup('bdd');
            // Require base tests before starting
            require(['specs'], function(){
                var runner = self.mocha
                        .globals(globals)
                        .run();
                self.BUNYIP.hookup(runner);
            });
        });
