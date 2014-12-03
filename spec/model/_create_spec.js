describe('#_create', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('calls the right binds', function() {
    // given
    var instance = new Checky('.painel');

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
