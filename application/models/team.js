define(['backbone', 'config'], function(Backbone, config) {
    "use strict";

    // Team model
    // -----------

    var Team = Backbone.Model.extend({
        name: 'Team',

        initialize: function(data, options) {
        }

    });

    return Team;

});
