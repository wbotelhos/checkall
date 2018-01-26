describe('#_create', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('calls the right binds', function() {
    // given
    var instance = new Checkall('.checkall');

    spyOn(instance, '_bindAll');
    spyOn(instance, '_bindItems');
    spyOn(instance, '_inspect');

    // when
    instance._create();

    // then
    expect(instance._bindAll).toHaveBeenCalled();
    expect(instance._bindItems).toHaveBeenCalled();
    expect(instance._inspect).toHaveBeenCalled();
  });
});
