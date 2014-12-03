describe('#_inspect', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  context('when all of items is not checked', function() {
    it ('does not check all item', function() {
      // given
      var instance = new Checky('.painel');

      instance._create();

      spyOn(instance.all, 'prop');

      // when
      instance.items.first().trigger('click');

      // then
      expect(instance.all.prop).toHaveBeenCalledWith('checked', false);
    });
  });

  context('when all of items is checked', function() {
    it ('checks all item', function() {
      // given
      var instance = new Checky('.painel');

      instance._create();

      instance.items[0].checked = true;

      spyOn(instance.all, 'prop');

      // when
      instance.items.last().trigger('click');

      // then
      expect(instance.all.prop).toHaveBeenCalledWith('checked', true);
    });
  });
});
