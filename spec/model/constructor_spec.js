describe('#contructor', function() {
  'use strict';

  beforeEach(function() {
    this.el = Helper.create('painel');
  });

  afterEach(function() {
    Helper.clear('.checky');
  });

  it ('saves the raw element', function() {
    // when
    var instance = new Checky('.painel');

    // then
    expect(instance.element).toEqual('.painel');
  });

  it ('saves the element as jquery object', function() {
    // when
    var instance = new Checky('.painel');

    // then
    expect(instance.self.toString()).toEqual($('.painel').toString());
  });

  context('defaults', function() {
    beforeEach(function() {
      $.fn.checky.defaults.deep = { inner: 'inner' };
      $.fn.checky.defaults.keep = 'keep';
      $.fn.checky.defaults.key  = 'key';
    });

    afterEach(function() {
      delete $.fn.checky.defaults.deep;
      delete $.fn.checky.defaults.keep;
      delete $.fn.checky.defaults.key;
    });

    it ('merges the options in all levels', function() {
      // given
      var
        element = this.el[0],
        options = { key: 'value', deep: { inner: 'override' } };

      // when
      var instance = new Checky(element, options);

      // then
      expect(instance.opt.keep).toEqual('keep');
      expect(instance.opt.deep.inner).toEqual('override');
      expect(instance.opt.key).toEqual('value');
    });
  });

  it ('saves the right quantity of items', function() {
    // when
    var instance = new Checky('.painel');

    // then
    expect(instance.items.length).toEqual(2);
  });

  it ('saves the right items', function() {
    // when
    var instance = new Checky('.painel');

    // then
    var items = instance.items;

    expect(items[0].name).toEqual('checkbox-1');
    expect(items[1].name).toEqual('checkbox-2');
  });

  it ('saves the check all item', function() {
    // when
    var instance = new Checky('.painel');

    // then
    expect(instance.all[0].name).toEqual('checkbox-all');
  });
});
