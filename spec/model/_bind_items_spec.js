describe('#bindItems', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('binds change on items with inspection o selecteds as callback', function() {
    // given
    var instance = new Checky('.painel');

    spyOn(instance.items, 'on');
    spyOn(instance._inspect, 'bind').and.returnValue('_inspect');

    // when
    instance._bindItems();

    // then
    expect(instance.items.on).toHaveBeenCalledWith('change', '_inspect');
  });
});
