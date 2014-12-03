describe('#options', function() {
  beforeEach(function() {
    this.el = Helper.create('#el');
  });

  it ('has the right default values', function() {
    // given

    // when
    var opt = $.fn.checky.defaults;

    // then
    expect(opt.all).toEqual('.checky-all');
    expect(opt.item).toEqual('.checky');
  });
});
