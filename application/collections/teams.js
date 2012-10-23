define(['jquery','backbone', 'models/team', 'config'], function($, Backbone, Team, config) {
    "use strict";

    // Teams Collection
    // ---------------

    var Teams = Backbone.Collection.extend({
        name: 'Teams',
        // Reference to this collection's model.
        model: Team,
        url: config.HOST + "/rest/teams",

        initialize: function(models, options) {

        }
    });

    return Teams;

});
