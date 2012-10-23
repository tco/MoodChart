define(['backbone'], function(Backbone) {
    "use strict";

    // User model
    // -----------

    var User = Backbone.Model.extend({
        name: 'User',

        initialize: function(data, options) {
        }

    });

    return User;

});
