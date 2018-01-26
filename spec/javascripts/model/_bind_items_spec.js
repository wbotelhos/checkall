describe('#bindItems', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('binds change on items with inspection o selecteds as callback', function() {
    // given
    var instance = new Checkall('.checkall');

    spyOn(instance.items, 'on');
    spyOn(instance._inspect, 'bind').and.returnValue('_inspect');

    // when
    instance._bindItems();

    // then
    expect(instance.items.on).toHaveBeenCalledWith('change', '_inspect');
  });
});
