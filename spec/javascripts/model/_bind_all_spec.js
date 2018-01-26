describe('#bindAll', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('binds change on all item', function() {
    // given
    var instance = new Checkall('.checkall');

    spyOn(instance.all, 'on');

    // when
    instance._bindAll();

    // then
    expect(instance.all.on).toHaveBeenCalledWith('change', jasmine.any(Function));
  });

  context('when all is unchecked', function() {
    it ('changes the checked property to true', function() {
      // given
      var instance = new Checkall('.checkall');

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
      var instance = new Checkall('.checkall');

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
