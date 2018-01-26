describe('Checkall', function() {
  beforeEach(function() {
    fixture.load('default.html');
  });

  describe('channing', function() {
    it ('is chainable', function() {
      // given
      var self = $('.checkall');

      // when
      var ref = self.checkall();

      // then
      expect(ref).toBe(self);
    });
  });
});
