define('collections', [
    'lodash'
], function(_) {
    var key, collections = {};

    _.each(arguments, function(value, key, list) {
        collections[list[key].prototype.name] = list[key];
    });

    return {
        get: function(name) {
            if(name in collections) {
                return collections[name];
            }
        }
    };
});
