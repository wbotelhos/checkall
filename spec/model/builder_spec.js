describe('#builder', function() {
  beforeEach(function() {
    this.el = Helper.create();
  });

  afterEach(function() {
    Helper.clear();
  });

  it ('is chainable', function() {
    // when
    var ref = this.el.checky();

    // then
    expect(ref[0]).toBe(this.el.data('checky').element);
  });

  it ('interacts on selection', function() {
    // given
    spyOn(this.el, 'each');

    // when
    this.el.checky();

    // then
    expect(this.el.each).toHaveBeenCalled();
  });

  context('when instance already exists', function() {
    beforeEach(function() {
      this.old = this.el.checky();
    });

    it ('does not instantiate again', function() {
      // given
      var instance = this.old.data('checky');

      // when
      this.el.checky();

      // then
      expect(this.el.data('checky')).toBe(instance);
    });
  });

  context('when instance does not exists', function() {
    it ('calls :_create', function() {
      // given
      spyOn(Checky.prototype, '_create');

      // when
      this.el.checky('method');

      // then
      expect(Checky.prototype._create).toHaveBeenCalled();
    });

    it ('defines a new instance', function() {
      // given

      // when
      this.el.checky();

      // then
      expect(this.el.data('checky')).toEqual(jasmine.any(Checky));
    });
  });

  context('when options is a method name', function() {
    Checky.prototype.method = function(a, b) {};

    context('and it exists', function() {
      it ('is called with given args', function() {
        // given
        this.el.checky();

        spyOn(Checky.prototype, 'method');

        // when
        this.el.checky('method', 'a', 'b');

        // then
        expect(Checky.prototype.method).toHaveBeenCalledWith('a', 'b');
      });

      it ('is called with instance as context', function() {
        // given
        this.el.checky({ keep: 'this' });

        var instance = this.el.data('checky');

        spyOn(Checky.prototype.method, 'apply');

        // when
        var chain = this.el.checky('method', 'a', 'b');

        // then
        expect(Checky.prototype.method.apply).toHaveBeenCalledWith(instance, ['a', 'b']);
      });
    });
  });

  context('when options is passed', function() {
    var options = 'missing';

    context('but is not a method name', function() {
      it ('logs the error', function() {
        // given
        this.el.checky();

        spyOn($, 'error');

        // when
        this.el.checky(options);

        // then
        expect($.error).toHaveBeenCalledWith('Method ' + options + ' does not exist!');
      });
    });
  });
});
