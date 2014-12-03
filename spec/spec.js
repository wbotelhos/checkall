describe('Checky', function() {
  beforeEach(function() {
    Helper.html('<div id="checky">
  <input type="checkybox" class="checky-all">
  <input type="checkybox" class="checky">
  <input type="checkybox" class="checky">
</div>');
  });

  afterEach(function() {
    Helper.clear();
  });

  describe('options', function() {
    it ('has the right value options', function() {
      // given
      var self = $.fn.checky;

      // when
      var opt = self.defaults;

      // then
      expect(opt.foo).toBeTruthy();
    });
  });

  describe('channing', function() {
    it ('is chainable', function() {
      // given
      var self = $('#checky');

      // when
      var ref = self.checky();

      // then
      expect(ref).toBe(self);
    });
  });
});
