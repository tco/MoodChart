define(['collections'], function(collections) {
    describe('Teams', function() {
        describe('initialize', function() {
            it('should initialize', function() {
                var team = new collections.get('Teams');
                expect(team).to.be.ok();
            });
        });
    });

    describe('Members', function() {
        describe('initialize', function() {
            it('should initialize', function() {
                var members = new collections.get('Members');
                expect(members).to.be.ok();
            });
        });
    });
});
