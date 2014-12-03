describe('#bindAll', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('binds change on all item', function() {
    // given
    var instance = new Checky('.painel');

    spyOn(instance.all, 'on');

    // when
    instance._bindAll();

    // then
    expect(instance.all.on).toHaveBeenCalledWith('change', jasmine.any(Function));
  });

  context('when all is unchecked', function() {
    it ('changes the checked property to true', function() {
      // given
      var instance = new Checky('.painel');

      instance._create();

      spyOn(instance.items, 'prop');

      // when
      instance.all.trigger('click');

      // then
      expect(instance.items.prop).toHaveBeenCalledWith('checked', true);
    });
  });

  context('when all is checked', function() {
    it ('changes the checked property to false', function() {
      // given
      var instance = new Checky('.painel');

      instance._create();

      instance.all.prop('checked', true);

      spyOn(instance.items, 'prop');

      // when
      instance.all.trigger('click');

      // then
      expect(instance.items.prop).toHaveBeenCalledWith('checked', false);
    });
  });
});
