define('views', [
    'underscore'
], function(_) {

    var key, views = {};
    _.each(arguments, function(value, key, list) {
        views[list[key].prototype.name] = list[key];
    });

    return {
        init: function() {
            var key, view, args = [];

            _.each(arguments, function(value, key, list) {
                args.push(list[key]);
            });

            view = args.shift();

            function F(args) {
                return views[view].apply(this, args);
            }

            F.prototype = views[view].prototype;

            return new F(args);
        },
        get: function(name) {
            if(!!views[name]) {
                return views[name];
            }
            return undefined;
        }
    };
});
