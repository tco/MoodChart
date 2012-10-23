define('collections', [
    'underscore',
    'collections/members',
    'collections/teams'
], function(_) {
    var key, collections = {};

    _.each(arguments, function(value, key, list) {
        if(key === 0) return;
        collections[list[key].prototype.name] = value;
    });

    return {
        get: function(name) {
            if(name in collections) {
                return collections[name];
            }
            return undefined;
        }
    };
});
