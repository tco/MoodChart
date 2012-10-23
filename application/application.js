require.config({
    baseUrl: './',
    paths: {
        models:         'models',
        collections:    'collections',
        views:          'views'
    },
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore.string': {
            deps: ['underscore']
        },
        'highcharts': {
            deps: ['jquery'],
            exports: 'Highcharts'
        },
        'collections': {
            deps: ['models']
        },
        'views': {
            deps: ['transparency', 'collections']
        }
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'transparency',
    'highcharts',
    'less',
    'models',
    'collections',
    'views',
    'config'
], function(
    $,
    _,
    Backbone,
    transparency,
    highcharts,
    less,
    models,
    collections,
    views,
    config) {

    $.noConflict();
    _.noConflict();
    Backbone.noConflict();
    transparency.register($);
    //Backbone.history.start();
});
