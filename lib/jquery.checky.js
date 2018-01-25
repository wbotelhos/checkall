/*!
 * jQuery Checky - A Checkbox Checker
 *
 * The MIT License
 *
 * author:  Washington Botelho
 * github:  wbotelhos/checkall
 * version: 0.1.0
 *
 */

function Checky(element, options) {
  'use strict';

  this.element = element;
  this.self    = $(element);
  this.opt     = $.extend(true, {}, $.fn.checky.defaults, options);

  this.items   = this.self.find(this.opt.item);
  this.total   = this.items.length;
  this.all     = this.self.find(this.opt.all);
}

Checky.prototype._bindAll = function() {
  'use strict';

  var that = this;

  that.all.on('change', function() {
    that.items.prop('checked', this.checked);
  });
};

Checky.prototype._bindItems = function() {
  'use strict';

  this.items.on('change', this._inspect.bind(this));
};

Checky.prototype._create = function() {
  'use strict';

  this._bindAll();
  this._bindItems();
  this._inspect();
};

Checky.prototype._inspect = function() {
  'use strict';

  var checked = this.items.filter(':checked');

  this.all.prop('checked', checked.length === this.total);
};

(function($) {
  'use strict';

  $.fn.checky = function(options) {
    var
      args   = Array.prototype.slice.call(arguments, 1),
      method = Checky.prototype[options];

    return this.each(function() {
      var
        self     = $(this),
        instance = self.data('checky');

      if (!instance) {
        instance = new Checky(this, options);

        instance._create();

        self.data('checky', instance);
      }

      if (method) {
        method.apply(instance, args);
      } else if (options && typeof options !== 'object') {
        $.error('Method ' + options + ' does not exist!');
      }
    });
  };

  $.fn.checky.defaults = {
    all  : '.checky-all',
    item : '.checky'
  };
})(jQuery);
