describe('#builder', function() {
  beforeEach(function() {
    fixture.load('default.html');

    this.el = $('.checkall');
  });

  it ('is chainable', function() {
    // when
    var ref = this.el.checkall();

    // then
    expect(ref[0]).toBe(this.el.data('checkall').self[0]);
  });

  it ('interacts on selection', function() {
    // given
    spyOn(this.el, 'each');

    // when
    this.el.checkall();

    // then
    expect(this.el.each).toHaveBeenCalled();
  });

  context('when instance already exists', function() {
    beforeEach(function() {
      this.old = this.el.checkall();
    });

    it ('does not instantiate again', function() {
      // given
      var instance = this.old.data('checkall');

      // when
      this.el.checkall();

      // then
      expect(this.el.data('checkall')).toBe(instance);
    });
  });

  context('when instance does not exists', function() {
    it ('calls :_create', function() {
      // given
      spyOn(Checkall.prototype, '_create');

      // when
      this.el.checkall('method');

      // then
      expect(Checkall.prototype._create).toHaveBeenCalled();
    });

    it ('defines a new instance', function() {
      // given

      // when
      this.el.checkall();

      // then
      expect(this.el.data('checkall')).toEqual(jasmine.any(Checkall));
    });
  });

  context('when options is a method name', function() {
    Checkall.prototype.method = function(a, b) {};

    context('and it exists', function() {
      it ('is called with given args', function() {
        // given
        this.el.checkall();

        spyOn(Checkall.prototype, 'method');

        // when
        this.el.checkall('method', 'a', 'b');

        // then
        expect(Checkall.prototype.method).toHaveBeenCalledWith('a', 'b');
      });

      it ('is called with instance as context', function() {
        // given
        this.el.checkall({ keep: 'this' });

        var instance = this.el.data('checkall');

        spyOn(Checkall.prototype.method, 'apply');

        // when
        var chain = this.el.checkall('method', 'a', 'b');

        // then
        expect(Checkall.prototype.method.apply).toHaveBeenCalledWith(instance, ['a', 'b']);
      });
    });
  });

  context('when options is passed', function() {
    var options = 'missing';

    context('but is not a method name', function() {
      it ('logs the error', function() {
        // given
        this.el.checkall();

        spyOn($, 'error');

        // when
        this.el.checkall(options);

        // then
        expect($.error).toHaveBeenCalledWith('Method "' + options + '" not found.');
      });
    });
  });
});
