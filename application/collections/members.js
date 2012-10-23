define(['backbone', 'models/person', 'config'], function(Backbone, Person, config) {
    "use strict";

    // Members Collection
    // ---------------

    var Members = Backbone.Collection.extend({
        name: 'Members',
        // Reference to this collection's model.
        model: Person,
        url: config.HOST + "/rest/team/id/member",

        initialize: function(models, options) {
            if(options.id) {
                this.url = this.url.replace('id', options.id);
            }
        }
    });

    return Members;
});
