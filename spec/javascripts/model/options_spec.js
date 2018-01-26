describe('#options', function() {
  it ('has the right default values', function() {
    // given

    // when
    var opt = $.fn.checkall.defaults;

    // then
    expect(opt.all).toEqual('.checkall__all');
    expect(opt.item).toEqual('.checkall__item');
  });
});
