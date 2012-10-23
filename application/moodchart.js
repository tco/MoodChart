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
            deps: ['lodash', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
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
    'lodash',
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
