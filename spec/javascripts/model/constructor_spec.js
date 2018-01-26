describe('#contructor', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('default.html');
  });

  it ('saves the element as jquery object', function() {
    // when
    var instance = new Checkall('.checkall');

    // then
    expect(instance.self.toString()).toEqual($('.checkall').toString());
  });

  context('defaults', function() {
    beforeEach(function() {
      $.fn.checkall.defaults.deep = { inner: 'inner' };
      $.fn.checkall.defaults.keep = 'keep';
      $.fn.checkall.defaults.key  = 'key';
    });

    afterEach(function() {
      delete $.fn.checkall.defaults.deep;
      delete $.fn.checkall.defaults.keep;
      delete $.fn.checkall.defaults.key;
    });

    it ('merges the options in all levels', function() {
      // given
      var options = { key: 'value', deep: { inner: 'override' } };

      // when
      var instance = new Checkall($('.checkall'), options);

      // then
      expect(instance.opt.keep).toEqual('keep');
      expect(instance.opt.deep.inner).toEqual('override');
      expect(instance.opt.key).toEqual('value');
    });
  });

  it ('saves the right quantity of items', function() {
    // when
    var instance = new Checkall('.checkall');

    // then
    expect(instance.items.length).toEqual(2);
  });

  it ('saves the right items', function() {
    // when
    var instance = new Checkall('.checkall');

    // then
    var items = instance.items;

    expect(items[0].name).toEqual('item-1');
    expect(items[1].name).toEqual('item-2');
  });

  it ('saves the check all item', function() {
    // when
    var instance = new Checkall('.checkall');

    // then
    expect(instance.all[0].name).toEqual('item-all');
  });
});
