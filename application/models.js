define('models', [
    'underscore',
    'models/person',
    'models/team'
], function(_) {
    var key, models = {};

    _.each(arguments, function(value, key, list) {
        if(key === 0) return;
        models[list[key].prototype.name] = value;
    });

    return {
        get: function(name) {
            if(name in models) {
                return models[name];
            }
            return undefined;
        }
    };

});
